// lib/validation.ts
import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string().min(2, "Nome muito curto"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(8, "Telefone inválido"),
  company: z.string().max(120).optional().or(z.literal("")),
  service: z.string().max(120).optional().or(z.literal("")),
  message: z
    .string()
    .min(10, "Mensagem muito curta")
    .max(1000, "Máximo 1000 caracteres"),
  honeypot: z.string().max(0).optional().or(z.literal("")),
  csrfToken: z.string().min(16, "Token ausente"),
});

export type ContactFormData = z.infer<typeof ContactSchema>;

export function validateContactForm(data: unknown) {
  const parsed = ContactSchema.safeParse(data);
  if (parsed.success) return { success: true, data: parsed.data };
  return {
    success: false,
    errors: parsed.error.issues.map((i) => ({
      path: i.path.join("."),
      message: i.message,
    })),
  };
}
