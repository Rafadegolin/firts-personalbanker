// Fonte única dos dados da marca, contato e informações legais.
// Componentes, metadados e páginas jurídicas leem daqui.

const phone = "5519997618780";

export const site = {
  name: "EG Capital Hub",
  descriptor: "Hub Especializado",
  regions: "Brasil · Portugal",
  slogan:
    "Conectando empresas e investidores às melhores oportunidades nacionais e internacionais.",
  url: "https://egcapitalhub.com.br",

  founder: {
    name: "Emerson Gonzaga",
    role: "Fundador",
    // Hífen inquebrável (U+2011) para "C‑PRO" não quebrar entre linhas
    certifications: "C‑PRO R e C‑PRO I ANBIMA",
    education: "MBAs FGV · UNIP · USP/ESALQ",
  },

  contact: {
    phoneDisplay: "+55 (19) 99761-8780",
    phoneHref: `tel:+${phone}`,
    whatsappHref: `https://wa.me/${phone}?text=${encodeURIComponent(
      "Olá! Gostaria de agendar uma conversa com a EG Capital Hub."
    )}`,
    email: "emerson.gonzaga@egcapitalhub.com.br",
    city: "Mogi Guaçu, SP",
    country: "Brasil",
    hours: "Segunda a sexta, das 9h às 17h",
  },

  social: {
    linkedin: "https://www.linkedin.com/in/emersonluizgonzaga1983/",
    // TODO(dono): o perfil ainda carrega o nome antigo; atualizar após renomear.
    instagram: "https://www.instagram.com/emerson.gonzaga.first/",
  },

  legal: {
    // TODO(dono/jurídico): confirmar razão social vinculada ao CNPJ.
    name: "EG Capital Hub",
    cnpj: "59.715.892/0001-50",
    updatedAt: "19 de setembro de 2026",
    version: "2.0",
  },

  // Identifica a origem dos leads no fluxo do n8n.
  leadSource: "egcapitalhub-site",
} as const;

export const nav = [
  { label: "Sobre", href: "/#sobre" },
  { label: "Mentoria", href: "/#mentoria" },
  { label: "Soluções", href: "/#solucoes" },
  { label: "Internacional", href: "/#internacional" },
  { label: "Depoimentos", href: "/#depoimentos" },
  { label: "Contato", href: "/#contato" },
] as const;

export const primaryCta = {
  label: "Agendar uma conversa",
  href: "/#contato",
} as const;
