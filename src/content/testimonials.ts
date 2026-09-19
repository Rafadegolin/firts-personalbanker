export const testimonialsIntro = {
  eyebrow: "Depoimentos",
  title: "O que nossos clientes",
  titleEmphasis: "dizem.",
};

// Citações literais dos clientes — não reescrever.
export const testimonials = [
  {
    name: "Alessandra Oses",
    company: "Copperfio Ind. e Com.",
    position: "Diretora Financeira e Sócia",
    quote:
      "Excelência profissional e ótima consultoria em todos aspectos financeiros. Conhecimento de mercado e auxílio nas tomadas de decisões.",
  },
  {
    name: "Maria José Barioni",
    company: "Mocafor Tratores e Equipamentos Agrícolas",
    position: "Sócia-Proprietária",
    quote:
      "Nossa parceria iniciou com a confiança durante relacionamento com o Emerson através de bancos parceiros, sendo essencial para crescimento da empresa através de grandes conquistas na parte de aconselhamento financeiro.",
  },
  {
    name: "Cláudio Garcia Jr",
    company: "R J Nascimento",
    position: "Diretor Financeiro",
    quote:
      "Parceria de mais de 13 anos junto ao Emerson. Sempre com profissionalismo incrível, eficiência e conhecimento junto ao mercado financeiro, orientando sempre nossas dúvidas financeiras.",
  },
  {
    name: "José Roberto",
    company: "Cairu PMA Bicicletas",
    position: "Diretor Financeiro",
    quote:
      "Seu trabalho é de alta qualidade e sempre entrega resultados impressionantes.",
  },
] as const;

export type Testimonial = (typeof testimonials)[number];
