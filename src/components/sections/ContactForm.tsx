"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ArrowRight, Check, ChevronDown, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { validateContactForm } from "@/lib/validation";
import {
  checkRateLimit,
  sanitizeInput,
  setCSRFToken,
  validateCSRFToken,
  validateHoneypot,
} from "@/lib/security";
import { cn } from "@/lib/utils";

const EMPTY = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};
type FormState = typeof EMPTY;

const MESSAGE_MAX = 1000;

const fieldClass =
  "peer block w-full rounded-none border-0 border-b border-input bg-transparent px-0 pt-6 pb-2.5 text-base text-foreground outline-none transition-colors duration-300 placeholder:text-transparent focus:border-gold";
const floatingLabelClass =
  "pointer-events-none absolute top-6 left-0 text-[0.95rem] text-muted-foreground transition-all duration-300 ease-luxe peer-focus:top-0 peer-focus:text-[0.62rem] peer-focus:font-semibold peer-focus:tracking-[0.24em] peer-focus:text-gold peer-focus:uppercase peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[0.62rem] peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:tracking-[0.24em] peer-[:not(:placeholder-shown)]:uppercase";

export function ContactForm({ interests }: { interests: readonly string[] }) {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [honeypot, setHoneypot] = useState("");
  const [csrfToken, setCsrfToken] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setCsrfToken(setCSRFToken());
  }, []);

  const update =
    (field: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) =>
      setForm((prev) => ({ ...prev, [field]: sanitizeInput(e.target.value) }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!checkRateLimit("contact_form")) {
      toast.error("Muitas tentativas", {
        description: "Aguarde um minuto antes de enviar outra mensagem.",
      });
      return;
    }

    if (!validateHoneypot(honeypot)) return;

    if (!validateCSRFToken(csrfToken)) {
      toast.error("Erro de segurança", {
        description: "Token de segurança inválido. Recarregue a página.",
      });
      return;
    }

    const validation = validateContactForm({ ...form, honeypot, csrfToken });
    if (!validation.success) {
      toast.error("Dados inválidos", {
        description:
          validation.errors?.[0]?.message ||
          "Por favor, verifique os campos preenchidos.",
      });
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          csrfToken,
          honeypot,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent.substring(0, 200),
          ipHash: await clientHash(),
        }),
      });

      if (!response.ok) {
        const { error } = await response
          .json()
          .catch(() => ({ error: "Erro ao encaminhar" }));
        throw new Error(error);
      }

      setSubmitted(true);
      setForm(EMPTY);
      setHoneypot("");
      setCsrfToken(setCSRFToken());
      toast.success("Mensagem enviada", {
        description: "Retornaremos em breve para agendar a sua conversa.",
      });
    } catch (err) {
      console.error("Erro no envio:", err);
      toast.error("Erro no envio", {
        description: "Não foi possível enviar sua mensagem. Tente novamente.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div role="status" className="flex flex-col items-center py-14 text-center">
        <span className="grid size-16 place-items-center rounded-full border border-gold text-gold">
          <Check className="size-6" strokeWidth={1.5} />
        </span>
        <h4 className="mt-8 font-serif text-3xl">Mensagem enviada.</h4>
        <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">
          Obrigado pelo interesse. Retornaremos em breve para agendar a sua
          conversa.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-10"
          onClick={() => setSubmitted(false)}
        >
          Enviar nova mensagem
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-8">
      <div className="grid gap-8 md:grid-cols-2">
        <FloatingField id="name" label="Nome completo" required>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder=" "
            required
            value={form.name}
            onChange={update("name")}
            className={fieldClass}
          />
        </FloatingField>
        <FloatingField id="email" label="E-mail" required>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder=" "
            required
            value={form.email}
            onChange={update("email")}
            className={fieldClass}
          />
        </FloatingField>
        <FloatingField id="phone" label="Telefone / WhatsApp" required>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder=" "
            required
            value={form.phone}
            onChange={update("phone")}
            className={fieldClass}
          />
        </FloatingField>
        <FloatingField id="company" label="Empresa">
          <input
            id="company"
            type="text"
            autoComplete="organization"
            placeholder=" "
            value={form.company}
            onChange={update("company")}
            className={fieldClass}
          />
        </FloatingField>
      </div>

      <div className="relative">
        <label
          htmlFor="service"
          className="absolute top-0 left-0 text-[0.62rem] font-semibold tracking-[0.24em] text-gold uppercase"
        >
          Assunto de interesse
        </label>
        <select
          id="service"
          value={form.service}
          onChange={update("service")}
          className={cn(fieldClass, "cursor-pointer appearance-none pr-8")}
        >
          <option value="">Selecione um assunto</option>
          {interests.map((interest) => (
            <option key={interest} value={interest}>
              {interest}
            </option>
          ))}
        </select>
        <ChevronDown
          aria-hidden
          className="pointer-events-none absolute right-0 bottom-3 size-4 text-muted-foreground"
        />
      </div>

      <FloatingField id="message" label="Mensagem" required>
        <textarea
          id="message"
          rows={4}
          placeholder=" "
          required
          maxLength={MESSAGE_MAX}
          value={form.message}
          onChange={update("message")}
          className={cn(fieldClass, "min-h-32 resize-y")}
        />
        <span
          aria-hidden
          className="absolute right-0 -bottom-6 text-[0.65rem] text-muted-foreground tabular-nums"
        >
          {form.message.length}/{MESSAGE_MAX}
        </span>
      </FloatingField>

      {/* Honeypot: invisível para pessoas e leitores de tela */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>
      <input type="hidden" name="csrfToken" value={csrfToken} />

      <div className="flex flex-col gap-6 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex max-w-xs items-start gap-2.5 text-xs leading-relaxed text-muted-foreground">
          <Lock aria-hidden className="mt-0.5 size-3.5 shrink-0 text-gold" />
          <span>
            Ao enviar, você concorda com a nossa{" "}
            <a
              href="/politica-de-privacidade"
              className="text-foreground underline decoration-gold underline-offset-4 hover:text-gold"
            >
              Política de Privacidade
            </a>
            .
          </span>
        </p>
        <Button
          type="submit"
          variant="gold"
          size="lg"
          disabled={submitting}
          className="w-full sm:w-auto"
        >
          {submitting ? (
            <>
              <span
                aria-hidden
                className="size-4 animate-spin rounded-full border-2 border-navy-950/30 border-t-navy-950"
              />
              Enviando…
            </>
          ) : (
            <>
              Enviar mensagem
              <ArrowRight />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

function FloatingField({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      {children}
      <label htmlFor={id} className={floatingLabelClass}>
        {label}
        {required && (
          <span aria-hidden className="text-gold">
            {" "}
            *
          </span>
        )}
      </label>
    </div>
  );
}

async function clientHash(): Promise<string> {
  const data = `${navigator.userAgent}${screen.width}${screen.height}${new Date().getTimezoneOffset()}`;
  const hash = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(data)
  );
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
    .substring(0, 16);
}
