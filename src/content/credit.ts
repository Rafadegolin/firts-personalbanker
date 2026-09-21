export const creditIntro = {
  eyebrow: "Crédito empresarial",
  title: "Estrutura de capital",
  titleEmphasis: "para cada fase do negócio.",
  subtitle:
    "Hub completo de soluções de crédito com as melhores condições do mercado.",
};

export const creditGroups = [
  {
    id: "operacao",
    label: "Operação & caixa",
    items: [
      {
        title: "Capital de Giro",
        text: "Financiamento para necessidades operacionais e fluxo de caixa empresarial.",
      },
      {
        title: "Antecipação de Recebíveis",
        text: "Antecipação de pagamentos de clientes para melhorar o fluxo de caixa.",
      },
      {
        title: "Domicílio via Escrow Account e Comissárias",
        text: "Soluções customizadas para vendas sem boletos.",
      },
      {
        title: "Comissárias",
        text: "Parcerias estratégicas para soluções de crédito especializadas.",
      },
    ],
  },
  {
    id: "expansao",
    label: "Expansão & BNDES",
    items: [
      {
        title: "Investimento Fixo",
        text: "Recursos para aquisição de equipamentos, máquinas e expansão da infraestrutura.",
      },
      {
        title: "Finame",
        text: "Financiamento BNDES para aquisição de máquinas e equipamentos nacionais.",
      },
      {
        title: "BNDES Automático",
        text: "Crédito automático do BNDES para investimentos em modernização.",
      },
    ],
  },
  {
    id: "estruturado",
    label: "Estruturado",
    items: [
      {
        title: "Private Debt",
        text: "Soluções de dívida privada para empresas de médio e grande porte.",
      },
      {
        title: "Venture Debt",
        text: "Financiamento especializado para startups e empresas de tecnologia.",
      },
      {
        title: "Crédito Estruturado",
        text: "Soluções customizadas de crédito para necessidades específicas.",
      },
    ],
  },
  {
    id: "internacional",
    label: "Internacional",
    items: [
      {
        title: "ACC/ACE",
        text: "Adiantamento sobre contratos de câmbio para empresas exportadoras.",
      },
      {
        title: "Crédito via Fundo Internacional",
        text: "Parceria para captações estratégicas em euro e dólar.",
      },
    ],
  },
  {
    id: "agro-esg",
    label: "Agro & ESG",
    items: [
      {
        title: "Agronegócio",
        text: "Financiamentos específicos para o setor agrícola e pecuário.",
      },
      {
        title: "ESG",
        text: "Financiamentos sustentáveis com foco em responsabilidade ambiental.",
      },
    ],
  },
] as const;

export type CreditGroup = (typeof creditGroups)[number];
