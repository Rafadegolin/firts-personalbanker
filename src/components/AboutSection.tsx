// components/AboutSection.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, TrendingUp, Users, Building } from "lucide-react";

const AboutSection = () => {
  const achievements = [
    {
      icon: TrendingUp,
      title: "20+ Anos",
      description: "Experiência em Bancos Internacionais",
      color: "text-primary",
    },
    {
      icon: Award,
      title: "Certificação CEA",
      description: "Anbima - Especialista em Investimentos",
      color: "text-accent",
    },
    {
      icon: Building,
      title: "Hub de Parceiros",
      description: "Rede estratégica para melhores soluções",
      color: "text-warning", // ver config no tailwind.config.ts abaixo
    },
  ];

  return (
    <section
      id="sobre"
      className="py-20 bg-gradient-to-br from-background to-muted/30 scroll-mt-24"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 text-sm font-medium"
          >
            Sobre a Empresa
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            FIRST - Sua{" "}
            <span className="text-primary">Boutique Financeira</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma abordagem personalizada e exclusiva para suas necessidades
            financeiras empresariais
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/20">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Emerson Gonzaga
                </h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Com mais de duas décadas de experiência no mercado financeiro
                  internacional, Emerson Gonzaga traz uma visão única e
                  estratégica para o mundo corporativo brasileiro.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground font-medium">
                      MBAs pela FGV, UNIP e ESALQ
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-foreground font-medium">
                      Certificação CEA Anbima
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-warning rounded-full" />
                    <span className="text-foreground font-medium">
                      Especialista em Bancos Internacionais
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border shadow-lg">
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  O Diferencial da FIRST
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  A FIRST atua como sua boutique financeira personalizada,
                  oferecendo um hub de parceiros estratégicos e soluções sob
                  medida. Nossa abordagem consultiva garante que cada cliente
                  receba atenção exclusiva e estratégias customizadas para suas
                  necessidades específicas.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 animate-slide-in-right">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border border-border/50 hover:border-primary/20"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 ${achievement.color}`}
                    >
                      <achievement.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-4xl text-primary mb-4">"</div>
                  <p className="text-foreground italic mb-4">
                    Nossa missão é democratizar o acesso a soluções financeiras
                    sofisticadas, oferecendo um atendimento personalizado que
                    grandes instituições não conseguem proporcionar.
                  </p>
                  <div className="text-sm text-muted-foreground font-medium">
                    - Emerson Gonzaga, Fundador
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
