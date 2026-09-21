"use client";

import { useState } from "react";
import { toast } from "sonner";
import { ArrowUpRight, Check, ChevronDown, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/config/site";
import { validateContactForm } from "@/lib/validation";
import { cn } from "@/lib/utils";

const EMPTY = {
  name: "",
  revenue: "",
  service: "",
};
type FormState = typeof EMPTY;

const fieldClass =
  "peer block w-full rounded-none border-0 border-b border-input bg-transparent px-0 pt-6 pb-2.5 text-base text-foreground outline-none transition-colors duration-300 placeholder:text-transparent focus:border-gold";
const floatingLabelClass =
  "pointer-events-none absolute top-6 left-0 text-[0.95rem] text-muted-foreground transition-all duration-300 ease-luxe peer-focus:top-0 peer-focus:text-[0.62rem] peer-focus:font-semibold peer-focus:tracking-[0.24em] peer-focus:text-gold peer-focus:uppercase peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[0.62rem] peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:tracking-[0.24em] peer-[:not(:placeholder-shown)]:uppercase";

export function ContactForm({
  greeting,
  needs,
  revenueRanges,
}: {
  greeting: string;
  needs: readonly string[];
  revenueRanges: readonly string[];
}) {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);

  const update =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  // Síncrono de propósito: o window.open precisa acontecer dentro do clique,
  // senão o navegador trata como pop-up e bloqueia.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { data, errors } = validateContactForm(form);
    if (!data) {
      toast.error("Dados inválidos", {
        description:
          errors?.[0]?.message || "Por favor, verifique os campos preenchidos.",
      });
      return;
    }

    const message = [
      greeting,
      "",
      `*Nome:* ${data.name}`,
      `*Faturamento anual:* ${data.revenue}`,
      `*Necessidade:* ${data.service}`,
    ].join("\n");

    const url = whatsappLink(message);
    window.open(url, "_blank", "noopener,noreferrer");
    setWhatsappUrl(url);
  };

  if (whatsappUrl) {
    return (
      <div role="status" className="flex flex-col items-center py-14 text-center">
        <span className="grid size-16 place-items-center rounded-full border border-gold text-gold">
          <Check className="size-6" strokeWidth={1.5} />
        </span>
        <h4 className="mt-8 font-serif text-3xl">Tudo pronto.</h4>
        <p className="mt-4 max-w-sm text-balance leading-relaxed text-muted-foreground">
          Abrimos o WhatsApp com a sua mensagem. É só tocar em enviar.
        </p>
        <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <Button asChild variant="gold">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Abrir o WhatsApp
              <ArrowUpRight />
            </a>
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => setWhatsappUrl(null)}
          >
            Editar dados
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-8">
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

      <div className="grid gap-8 md:grid-cols-2">
        <SelectField
          id="revenue"
          label="Faturamento anual"
          placeholder="Selecione uma faixa"
          options={revenueRanges}
          value={form.revenue}
          onChange={update("revenue")}
        />
        <SelectField
          id="service"
          label="Necessidade"
          placeholder="Selecione uma opção"
          options={needs}
          value={form.service}
          onChange={update("service")}
        />
      </div>

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
          className="w-full sm:w-auto"
        >
          Enviar pelo WhatsApp
          <ArrowUpRight />
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

function SelectField({
  id,
  label,
  placeholder,
  options,
  value,
  onChange,
}: {
  id: string;
  label: string;
  placeholder: string;
  options: readonly string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="absolute top-0 left-0 text-[0.62rem] font-semibold tracking-[0.24em] text-gold uppercase"
      >
        {label}
        <span aria-hidden> *</span>
      </label>
      <select
        id={id}
        required
        value={value}
        onChange={onChange}
        className={cn(fieldClass, "cursor-pointer appearance-none pr-8")}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-3 size-4 text-muted-foreground"
      />
    </div>
  );
}
