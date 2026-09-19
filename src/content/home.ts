import { site } from "@/config/site";

export const hero = {
  eyebrow: `${site.descriptor} · ${site.regions}`,
  // Opção 2 do briefing (hero)
  headline:
    "Seu projeto merece mais do que as portas que o mercado brasileiro convencional costuma abrir.",
  headlineEmphasis:
    "Merece as melhores oportunidades — onde quer que elas estejam.",
  // Opção A do briefing (slogan)
  subheadline: site.slogan,
  secondaryCta: { label: "Conhecer as soluções", href: "/#solucoes" },
  portrait: {
    src: "/Foto1.jpg",
    alt: "Emerson Gonzaga, fundador da EG Capital Hub",
  },
};

export const numbers = [
  { value: 20, prefix: "", suffix: "+", label: "Anos de experiência em bancos" },
  { text: "R$ 1 bi+", label: "Em volume intermediado" },
  { value: 250, prefix: "", suffix: "+", label: "Empresas atendidas" },
  { text: "BR · PT", label: "Atuação Brasil e Portugal" },
] as const;

// Opção 1 do briefing (posicionamento)
export const manifesto = {
  eyebrow: "Posicionamento",
  lead: "Enquanto o mercado convencional limita,",
  emphasis: "nós conectamos.",
  body: "Empresas que precisam de capital, investidores que buscam oportunidades e um mundo de possibilidades no meio.",
  closing: "Essa é a ponte que construímos todos os dias.",
};

// Frase de impacto do briefing (chamada final)
export const finalCta = {
  lead: "Toda grande transformação começa com uma decisão corajosa.",
  emphasis: "A sua pode começar com uma conversa.",
};
