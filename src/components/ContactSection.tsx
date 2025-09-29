// src/components/ContactSection.tsx
"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Shield,
  CheckCircle,
} from "lucide-react";
import { validateContactForm } from "@/lib/validation";
import {
  sanitizeInput,
  checkRateLimit,
  setCSRFToken,
  validateCSRFToken,
  validateHoneypot,
} from "@/lib/security";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [csrfToken, setCSRFTokenState] = useState<string>("");
  const [honeypot, setHoneypot] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    const token = setCSRFToken();
    setCSRFTokenState(token);
  }, []);

  const handleInputChange = (field: string, value: string) => {
    const sanitizedValue = sanitizeInput(value);
    setFormData((prev) => ({ ...prev, [field]: sanitizedValue }));
  };

  const generateClientHash = async (): Promise<string> => {
    const data = `${navigator.userAgent}${screen.width}${
      screen.height
    }${new Date().getTimezoneOffset()}`;
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(data);
    const hashBuffer = await crypto.subtle.digest("SHA-256", dataBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("")
      .substring(0, 16);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!checkRateLimit("contact_form")) {
      toast.error("Muitas tentativas", {
        description: "Aguarde um minuto antes de enviar outra mensagem.",
      });
      return;
    }

    if (!validateHoneypot(honeypot)) {
      console.warn("Bot detected via honeypot field");
      return;
    }

    if (!validateCSRFToken(csrfToken)) {
      toast.error("Erro de segurança", {
        description: "Token de segurança inválido. Recarregue a página.",
      });
      return;
    }

    const validationResult = validateContactForm({
      ...formData,
      honeypot,
      csrfToken,
    });
    if (!validationResult.success) {
      const firstError = validationResult.errors?.[0];
      toast.error("Dados inválidos", {
        description:
          firstError?.message || "Por favor, verifique os campos preenchidos.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        ...formData,
        csrfToken,
        timestamp: new Date().toISOString(),
        source: "first-landing-page",
        userAgent: navigator.userAgent.substring(0, 200),
        ipHash: await generateClientHash(),
        honeypot,
      };

      // 🔒 Envia para a rota server-side; ela repassa ao N8N
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const { error } = await response
          .json()
          .catch(() => ({ error: "Erro ao encaminhar" }));
        throw new Error(error);
      }

      setIsSubmitted(true);
      toast.success("Mensagem enviada com sucesso!", {
        description: "Entraremos em contato em até 24 horas.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
      setHoneypot("");

      const newToken = setCSRFToken();
      setCSRFTokenState(newToken);
    } catch (err) {
      console.error("Erro no envio:", err);
      toast.error("Erro no envio", {
        description: "Ocorreu um erro ao enviar sua mensagem. Tente novamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      description: "+55 (11) 99999-9999",
      action: "tel:+5511999999999",
    },
    {
      icon: Mail,
      title: "Email",
      description: "contato@first.com.br",
      action: "mailto:contato@first.com.br",
    },
    {
      icon: MapPin,
      title: "Endereço",
      description: "Mogi Guaçu, SP - Brasil",
      action: "",
    },
    {
      icon: Clock,
      title: "Horário",
      description: "Seg-Sex: 8h às 18h",
      action: "",
    },
  ];

  return (
    <section id="contato" className="py-20 bg-bg-section-3">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 text-sm font-medium"
          >
            Entre em Contato
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Fale com seu <span className="text-primary">Personal Banker</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para transformar as finanças da sua empresa? Entre em contato
            conosco
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8 animate-fade-in">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border border-border/50 hover:border-primary/30"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h3>
                        {info.action ? (
                          <a
                            href={info.action}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.description}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">
                            {info.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">
                  Segurança Garantida
                </h3>
                <p className="text-sm text-muted-foreground">
                  Seus dados estão protegidos com criptografia de ponta e
                  política rigorosa de privacidade.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 animate-slide-in-right">
            <Card className="shadow-2xl border border-border/50">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-foreground">
                  Solicitar Consultoria Gratuita
                </CardTitle>
                <p className="text-muted-foreground">
                  Preencha o formulário e nossa equipe entrará em contato em até
                  24 horas
                </p>
              </CardHeader>

              <CardContent className="p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Mensagem Enviada!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Obrigado pelo seu interesse. Nossa equipe entrará em
                      contato em breve.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      Enviar Nova Mensagem
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="name"
                          className="text-foreground font-medium"
                        >
                          Nome Completo *
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          className="border-border focus:border-primary"
                          placeholder="Seu nome completo"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-foreground font-medium"
                        >
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          className="border-border focus:border-primary"
                          placeholder="seu@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="phone"
                          className="text-foreground font-medium"
                        >
                          Telefone *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          className="border-border focus:border-primary"
                          placeholder="(11) 99999-9999"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="company"
                          className="text-foreground font-medium"
                        >
                          Empresa
                        </Label>
                        <Input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) =>
                            handleInputChange("company", e.target.value)
                          }
                          className="border-border focus:border-primary"
                          placeholder="Nome da sua empresa"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="service"
                        className="text-foreground font-medium"
                      >
                        Tipo de Serviço
                      </Label>
                      <Input
                        id="service"
                        type="text"
                        value={formData.service}
                        onChange={(e) =>
                          handleInputChange("service", e.target.value)
                        }
                        className="border-border focus:border-primary"
                        placeholder="Ex: Soluções em Crédito, Assessoria em Investimentos..."
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-foreground font-medium"
                      >
                        Mensagem *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        className="border-border focus:border-primary min-h-[120px]"
                        placeholder="Conte-nos sobre suas necessidades financeiras..."
                        required
                        maxLength={1000}
                      />
                    </div>

                    {/* Honeypot */}
                    <div
                      style={{
                        position: "absolute",
                        left: "-9999px",
                        top: "-9999px",
                      }}
                    >
                      <Label htmlFor="website">Website (leave empty):</Label>
                      <Input
                        id="website"
                        type="text"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    <input type="hidden" name="csrfToken" value={csrfToken} />

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          Enviar Mensagem
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>

                    <div className="text-center text-sm text-muted-foreground">
                      Ao enviar este formulário, você concorda com nossa{" "}
                      <a
                        href="/politica-de-privacidade"
                        className="text-primary hover:underline"
                      >
                        Política de Privacidade
                      </a>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
