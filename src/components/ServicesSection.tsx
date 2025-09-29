import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CreditCard,
  TrendingUp,
  Building2,
  Handshake,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: CreditCard,
      title: "Soluções em Crédito",
      description:
        "Hub de parceiros especializados para obter as melhores condições do mercado para suas necessidades.",
      features: [
        "Capital de Giro.",
        "Investimento Fixo.",
        "Antecipação de Recebíveis.",
        "BNDES Automático.",
      ],
      color: "from-first-blue/15 to-emerald/10",
      badge: "Mais Popular",
    },
    {
      icon: TrendingUp,
      title: "Assessoria em Investimentos",
      description:
        "Decisões e acompanhamentos personalizados de investimentos com foco na segurança e rentabilidade.",
      features: [
        "Fundos de Investimentos.",
        "Renda Fixa.",
        "Renda Variável.",
        "Opções Internacionais.",
      ],
      color: "from-first-yellow/15 to-orange/10",
      badge: "Exclusivo",
    },
    {
      icon: Building2,
      title: "Assessoria Bancária",
      description:
        "Personal Banker dedicado para otimizar relacionamentos bancários e negociar condições diferenciadas visando economia com despesas financeiras e eficiência das reservas de recursos.",
      features: [
        "Negociação de operações de crédito.",
        "Atuação para otimizar rentabilidades as aplicações financeiras.",
        "Conselheiro para dúvidas de equipe no tocante a serviços e soluções bancárias.",
        "Negociação para reduzir tarifas e custos bancários em geral.",
      ],
      color: "from-purple/15 to-teal/10",
      badge: "Personalizado",
    },
    {
      icon: Handshake,
      title: "Outras Soluções",
      description: "Parcerias estratégicas que podem melhorar seu negócio.",
      features: [
        "Fundo para Crédito Internacional.",
        "Revisão de Recuperação Tributária dos últimos 5 anos.",
        "Assessoria para Planejamento Sucessório e Holding Familiar.",
        "Seguros de todos os tipos * Opções Resgatáveis (Vida).",
        "Valuation.",
        "Consultoria Especializada em Agronegócios (Para produtores e Empresas da Cadeia Agro).",
      ],
      color: "from-emerald/15 to-first-blue/10",
      badge: "Completo",
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-bg-section-1">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge
            variant="premium"
            className="mb-4 px-4 py-2 text-sm font-medium"
          >
            Nossos Serviços
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Serviços <span className="text-primary">Principais</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções financeiras completas e personalizadas para empresas de
            todos os portes
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-50`}
              ></div>

              {/* Badge */}
              <div className="absolute top-4 right-4 z-10">
                <Badge
                  variant={
                    index === 0
                      ? "success"
                      : index === 1
                      ? "accent"
                      : index === 2
                      ? "premium"
                      : "info"
                  }
                >
                  {service.badge}
                </Badge>
              </div>

              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="relative z-10 pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-foreground font-medium text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
