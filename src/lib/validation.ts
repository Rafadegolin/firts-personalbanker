// lib/validation.ts
import { z } from "zod";
import { contact } from "@/content/contact";

export const ContactSchema = z.object({
  name: z.string().trim().min(2, "Nome muito curto"),
  revenue: z.enum(contact.revenueRanges, "Selecione o faturamento anual"),
  service: z.enum(contact.needs, "Selecione a sua necessidade"),
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
