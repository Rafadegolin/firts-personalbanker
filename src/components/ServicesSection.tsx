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
        "Hub de parceiros especializados oferecendo as melhores condições do mercado para suas necessidades de capital.",
      features: [
        "Capital de Giro",
        "Investimento Fixo",
        "Antecipação de Recebíveis",
        "BNDES Automático",
      ],
      color: "from-first-blue/15 to-emerald/10",
      badge: "Mais Popular",
    },
    {
      icon: TrendingUp,
      title: "Assessoria em Investimentos",
      description:
        "Estratégias personalizadas de investimento e assessoria para internacionalização de patrimônio.",
      features: [
        "Internacionalização",
        "Private Banking",
        "Gestão de Carteiras",
        "Estruturação",
      ],
      color: "from-first-yellow/15 to-orange/10",
      badge: "Exclusivo",
    },
    {
      icon: Building2,
      title: "Assessoria Bancária",
      description:
        "Personal Banker empresarial dedicado para otimizar relacionamentos bancários e negociar condições especiais.",
      features: [
        "Relacionamento Bancário",
        "Negociação de Tarifas",
        "Produtos Especiais",
        "Consultoria",
      ],
      color: "from-purple/15 to-teal/10",
      badge: "Personalizado",
    },
    {
      icon: Handshake,
      title: "Outras Soluções",
      description:
        "Parcerias estratégicas em seguros, previdência, câmbio e outros serviços financeiros especializados.",
      features: [
        "Seguros Corporativos",
        "Previdência",
        "Câmbio",
        "Consultoria Especializada",
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

                {/* CTA Button */}
                <Button
                  variant="outline"
                  className="w-full group/btn border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Saiba Mais
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-card rounded-2xl p-8 border border-first-blue/20 shadow-elegant">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Precisa de uma solução personalizada?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nossa equipe está pronta para desenvolver estratégias financeiras
              únicas para seu negócio.
            </p>
            <Button
              variant="warm"
              size="lg"
              className="font-semibold px-8 py-4 rounded-lg hover:scale-105"
            >
              Solicitar Consultoria Gratuita
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
