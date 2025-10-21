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
    <section
      id="servicos"
      className="py-20 bg-bg-section-1 relative overflow-hidden scroll-mt-24"
    >
      {/* Background decorative elements - mais sutis e profissionais */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-first-blue/3 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-muted/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge
            variant="premium"
            className="mb-4 px-4 py-2 text-sm font-medium hover:scale-105 transition-transform bg-gradient-to-r from-first-blue-deeper to-first-blue dark:from-first-blue-dark dark:to-first-blue shadow-md"
          >
            Nossos Serviços
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Oportunidades <span className="text-primary">Customizadas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Soluções financeiras completas e personalizadas para empresas de
            todos os portes
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border border-border/50 hover:border-primary/40 transition-all duration-700 hover:shadow-2xl hover:scale-[1.02] animate-fade-in-delay bg-card/50 backdrop-blur-sm`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              ></div>

              {/* Animated border */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-lg animate-border-flow border-2" />
              </div>

              {/* Badge */}
              <div
                className="absolute top-4 right-4 z-10 animate-slide-in-up"
                style={{ animationDelay: `${index * 150 + 200}ms` }}
              >
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
                  className="hover:scale-110 transition-transform"
                >
                  {service.badge}
                </Badge>
              </div>

              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <service.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="relative z-10 pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground/90 transition-colors">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3 group/item animate-slide-in-left"
                      style={{
                        animationDelay: `${
                          index * 150 + featureIndex * 50 + 300
                        }ms`,
                      }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 group-hover/item:scale-150 transition-transform"></div>
                      <span className="text-foreground/80 font-medium text-sm group-hover:text-foreground transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>

              {/* Hover effect overlay with shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer"></div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
