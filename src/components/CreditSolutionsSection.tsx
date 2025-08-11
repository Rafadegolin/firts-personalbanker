// components/CreditSolutionsSection.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  ArrowRight,
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
      title: "Domicílio Bancário",
      description:
        "Soluções para concentração bancária e otimização de relacionamentos.",
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

  const categories = [...new Set(creditSolutions.map((s) => s.category))];

  const filteredSolutions = selectedCategory
    ? creditSolutions.filter((s) => s.category === selectedCategory)
    : creditSolutions;

  const handleKey = (
    e: React.KeyboardEvent<HTMLSpanElement>,
    category: string | null
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setSelectedCategory(category);
    }
  };

  return (
    <section
      id="credito"
      className="py-20 bg-gradient-to-br from-background to-muted/20 scroll-mt-24"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 text-sm font-medium"
          >
            Soluções de Crédito
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            13 Tipos de{" "}
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
            role="button"
            tabIndex={0}
            aria-pressed={selectedCategory === null}
            onKeyDown={(e) => handleKey(e, null)}
            onClick={() => setSelectedCategory(null)}
            variant={selectedCategory === null ? "secondary" : "outline"}
            className={`px-4 py-2 text-sm cursor-pointer transition-colors ${
              selectedCategory === null
                ? "bg-primary text-primary-foreground"
                : "hover:bg-primary/10"
            }`}
          >
            Todas as Categorias
          </Badge>
          {categories.slice(0, 6).map((category) => (
            <Badge
              key={category}
              role="button"
              tabIndex={0}
              aria-pressed={selectedCategory === category}
              onKeyDown={(e) => handleKey(e, category)}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "secondary" : "outline"}
              className={`px-4 py-2 text-sm cursor-pointer transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-primary/10"
              }`}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Credit Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredSolutions.map((solution, index) => (
            <Card
              key={solution.title}
              className="group relative overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:scale-105 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

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

                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full text-primary hover:text-primary-foreground hover:bg-primary transition-all duration-300 group/btn"
                  onClick={() => {
                    const el = document.querySelector("#contato");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Saiba Mais
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in">
          {/* Stats */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Por que escolher nosso Hub de Crédito?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Nossa rede de parceiros especializados oferece as melhores
                condições do mercado, com análise personalizada e aprovação
                agilizada para cada tipo de necessidade empresarial.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <div className="text-sm text-muted-foreground">
                  Parceiros Credenciados
                </div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <div className="text-3xl font-bold text-accent mb-2">98%</div>
                <div className="text-sm text-muted-foreground">
                  Taxa de Aprovação
                </div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <div className="text-3xl font-bold text-warning mb-2">48h</div>
                <div className="text-sm text-muted-foreground">
                  Resposta Média
                </div>
              </div>
              <div className="text-center p-6 bg-card rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary mb-2">
                  R$ 2B+
                </div>
                <div className="text-sm text-muted-foreground">
                  Volume Intermediado
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Precisa de Crédito para sua Empresa?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipe analisa seu perfil e encontra a melhor solução de
              crédito entre nossos parceiros especializados.
            </p>

            <div className="space-y-4">
              <Button
                onClick={() => {
                  const el = document.querySelector("#contato");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Solicitar Análise Gratuita
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <div className="text-sm text-muted-foreground">
                ✓ Análise sem compromisso • ✓ Resposta em 24h • ✓ Melhores
                condições
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditSolutionsSection;
