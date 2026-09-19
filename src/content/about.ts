import { site } from "@/config/site";

export const about = {
  eyebrow: "Sobre",
  title: "Duas décadas de mercado,",
  titleEmphasis: "um único compromisso: o seu interesse.",
  bio: [
    `Com mais de 20 anos de experiência no mercado financeiro, a ${site.name} é liderada por ${site.founder.name}, profissional com sólida formação acadêmica — MBAs em Gestão Empresarial (FGV), Finanças e Banking (UNIP) e Agronegócios (USP/ESALQ) — e Especialista em Investimentos (${site.founder.certifications}).`,
    `Na ${site.name}, valorizamos a individualidade de cada cliente e buscamos construir um relacionamento de confiança e transparência. Queremos entender suas necessidades específicas e oferecer estratégias personalizadas que atendam aos seus objetivos financeiros.`,
  ],
  differential: {
    title: "O diferencial",
    text: "Atuamos como um elo junto aos bancos e fundos, oferecendo um hub de parceiros estratégicos e soluções sob medida. Cada cliente recebe atenção exclusiva e estratégias customizadas: é como ter um profissional bancário dentro da sua empresa ou cuidando dos seus investimentos particulares. Isso proporciona redução de custos com juros, taxas e tarifas, melhor estruturação das operações de crédito para eficiência do fluxo de caixa e assessoria em investimentos sem viés dos bancos, para obter o melhor desempenho de acordo com o seu perfil.",
  },
  credentials: [
    { title: "20+ anos", text: "Experiência em bancos internacionais" },
    {
      title: "Certificações ANBIMA",
      text: `${site.founder.certifications} — Especialista em Investimentos`,
    },
    { title: "Formação", text: site.founder.education },
    { title: "Hub de parceiros", text: "Rede estratégica de bancos, fundos e assets" },
  ],
  quote:
    "Nossa missão é proporcionar soluções bancárias customizadas e de alta qualidade, atuando como um advisor pessoal para tomadas de crédito e investimentos, sempre em busca das melhores soluções financeiras para nossos clientes.",
  portrait: {
    src: "/Foto3.jpg",
    alt: `${site.founder.name} sentado em poltrona clássica, em retrato de estúdio`,
  },
};
