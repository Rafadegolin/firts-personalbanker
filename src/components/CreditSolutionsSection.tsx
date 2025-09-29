import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import {
  CreditCard,
  TrendingUp,
  Banknote,
  Building,
  Factory,
  Leaf,
  Shield,
  Coins,
  Receipt,
  Truck,
  Users,
  Briefcase,
  BanknoteArrowUp,
} from "lucide-react";

const CreditSolutionsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const creditSolutions = [
    {
      icon: CreditCard,
      title: "Capital de Giro",
      description:
        "Financiamento para necessidades operacionais e fluxo de caixa empresarial.",
      category: "Operacional",
      color: "from-primary/10 to-primary/5",
    },
    {
      icon: Factory,
      title: "Investimento Fixo",
      description:
        "Recursos para aquisição de equipamentos, máquinas e expansão da infraestrutura.",
      category: "Expansão",
      color: "from-accent/10 to-accent/5",
    },
    {
      icon: Receipt,
      title: "Antecipação de Recebíveis",
      description:
        "Antecipação de pagamentos de clientes para melhorar o fluxo de caixa.",
      category: "Fluxo de Caixa",
      color: "from-warning/10 to-warning/5",
    },
    {
      icon: TrendingUp,
      title: "ACC/ACE",
      description:
        "Adiantamento sobre Contratos de Câmbio para empresas exportadoras.",
      category: "Exportação",
      color: "from-primary/10 to-primary/5",
    },
    {
      icon: Truck,
      title: "Finame",
      description:
        "Financiamento BNDES para aquisição de máquinas e equipamentos nacionais.",
      category: "BNDES",
      color: "from-accent/10 to-accent/5",
    },
    {
      icon: Building,
      title: "BNDES Automático",
      description:
        "Crédito automático do BNDES para investimentos em modernização.",
      category: "BNDES",
      color: "from-warning/10 to-warning/5",
    },
    {
      icon: Briefcase,
      title: "Private Debt",
      description:
        "Soluções de dívida privada para empresas de médio e grande porte.",
      category: "Estruturado",
      color: "from-primary/10 to-primary/5",
    },
    {
      icon: Coins,
      title: "Venture Debt",
      description:
        "Financiamento especializado para startups e empresas de tecnologia.",
      category: "Inovação",
      color: "from-accent/10 to-accent/5",
    },
    {
      icon: Shield,
      title: "Crédito Estruturado",
      description:
        "Soluções customizadas de crédito para necessidades específicas.",
      category: "Customizado",
      color: "from-warning/10 to-warning/5",
    },
    {
      icon: Leaf,
      title: "ESG",
      description:
        "Financiamentos sustentáveis com foco em responsabilidade ambiental.",
      category: "Sustentável",
      color: "from-primary/10 to-primary/5",
    },
    {
      icon: Banknote,
      title: "Domicílio via Escrow Account e Comissárias",
      description: "Soluções customizadas para vendas sem boletos.",
      category: "Bancário",
      color: "from-accent/10 to-accent/5",
    },
    {
      icon: BanknoteArrowUp,
      title: "Crédito via Fundo Internacional",
      description: "Parceria para captações estratégicas em Euro e Dólar.",
      category: "Bancário",
      color: "from-accent/10 to-accent/5",
    },
    {
      icon: Users,
      title: "Comissárias",
      description:
        "Parcerias com comissárias para soluções de crédito especializadas.",
      category: "Parceria",
      color: "from-warning/10 to-warning/5",
    },
    {
      icon: Truck,
      title: "Agronegócio",
      description:
        "Financiamentos específicos para o setor agrícola e pecuário.",
      category: "Agro",
      color: "from-primary/10 to-primary/5",
    },
  ];

  const categories = [
    ...new Set(creditSolutions.map((solution) => solution.category)),
  ];

  const filteredSolutions = selectedCategory
    ? creditSolutions.filter(
        (solution) => solution.category === selectedCategory
      )
    : creditSolutions;

  return (
    <section id="credito" className="py-20 bg-bg-section-2">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge
            variant="warning"
            className="mb-4 px-4 py-2 text-sm font-medium"
          >
            Soluções de Crédito
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="text-primary">Crédito Empresarial</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hub completo de soluções de crédito com as melhores condições do
            mercado
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          <Badge
            variant={selectedCategory === null ? "secondary" : "outline"}
            className={`px-4 py-2 text-sm cursor-pointer transition-colors ${
              selectedCategory === null
                ? "bg-primary text-primary-foreground"
                : "hover:bg-primary/10"
            }`}
            onClick={() => setSelectedCategory(null)}
          >
            Todas as Categorias
          </Badge>
          {categories.slice(0, 6).map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "secondary" : "outline"}
              className={`px-4 py-2 text-sm cursor-pointer transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-primary/10"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Credit Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredSolutions.map((solution, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:scale-105 animate-fade-in`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              {/* Category badge */}
              <div className="absolute top-3 right-3 z-10">
                <Badge
                  variant="secondary"
                  className="text-xs bg-background/80 text-foreground"
                >
                  {solution.category}
                </Badge>
              </div>

              <CardHeader className="relative z-10 pb-3">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <solution.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-lg font-bold text-foreground text-center group-hover:text-primary transition-colors">
                  {solution.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative z-10 pt-0 pb-6">
                <p className="text-muted-foreground text-sm leading-relaxed text-center mb-4">
                  {solution.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreditSolutionsSection;
