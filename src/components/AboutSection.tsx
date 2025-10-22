// components/AboutSection.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, TrendingUp, Users, Building, Quote } from "lucide-react";

const AboutSection = () => {
  const achievements = [
    {
      icon: TrendingUp,
      title: "20+ Anos",
      description: "Experiência em Bancos Internacionais",
      color: "text-first-blue-light",
    },
    {
      icon: Award,
      title: "Certificação CEA",
      description: "Anbima - Especialista em Investimentos",
      color: "text-first-yellow-dark",
    },
    {
      icon: Building,
      title: "Hub de Parceiros",
      description: "Rede estratégica para melhores soluções",
      color: "text-emerald",
    },
  ];

  return (
    <section
      id="sobre"
      className="py-20 bg-gradient-to-br from-background via-muted/20 to-background scroll-mt-24 relative overflow-hidden"
    >
      {/* Subtle background pattern - mais sutil e profissional */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--first-blue)/0.02),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--muted)/0.5),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 text-sm font-medium border-primary/30 hover:border-primary/50 transition-colors"
          >
            Sobre a Empresa
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            FIRST -{" "}
            <span className="bg-gradient-to-r from-primary to-first-blue-light bg-clip-text text-transparent">
              Seu interesse em primeiro lugar.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Uma abordagem personalizada e exclusiva para suas necessidades
            financeiras empresariais
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-transparent rounded-2xl p-8 border border-primary/10 hover:border-primary/20 transition-all duration-500 shadow-card hover:shadow-elegant group">
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                Emerson Gonzaga
              </h3>
              <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                Com mais de 20 anos de experiência no mercado financeiro, a
                First Serviços Especializados é liderada por Emerson Gonzaga,
                profissional com sólida formação acadêmica com MBAs em Gestão
                Empresarial (FGV), Finanças e Banking (UNIP) e Agronegócios
                (USP/ESALQ) e Especialista em Investimentos (ANBIMA-CEA).
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Na First, valorizamos a individualidade de cada cliente e
                buscamos construir um relacionamento de confiança e
                transparência. Queremos entender suas necessidades específicas e
                oferecer estratégias personalizadas que atendam aos seus
                objetivos financeiros. Se você está em busca de um parceiro
                confiável para ajudá-lo em suas decisões financeiras, entre em
                contato. Estamos prontos para ajudá-lo a alcançar suas metas.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 shadow-card hover:shadow-elegant transition-all duration-500 group">
              <h4 className="text-xl font-semibold text-foreground mb-3 flex items-center group-hover:text-primary transition-colors">
                <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full mr-3" />
                O Diferencial da FIRST
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Atuamos como um elo junto aos bancos e fundos, oferecendo um hub
                de parceiros estratégicos e soluções sob medida. Nossa abordagem
                consultiva garante que cada cliente receba atenção exclusiva e
                estratégias customizadas para suas necessidades específicas,
                nosso cliente tem um Profissional Bancário dentro da sua empresa
                ou para cuidar de seus investimentos particulares. Isso
                proporciona redução de custos com juros, taxas, tarifas, melhor
                estruturação de operações de crédito para eficiência de fluxo de
                caixa e assessoria em investimentos personalizada sem viés dos
                bancos para obter o melhor desempenho de acordo com seu perfil.
              </p>
            </div>
          </div>

          <div className="grid gap-6 animate-slide-in-right">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="group bg-card border border-border hover:border-primary/30 hover:shadow-elegant transition-all duration-500 animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-accent/5 rounded-bl-[4rem] -z-0" />
                  <div className="flex items-start space-x-4 relative z-10">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                      <achievement.icon
                        className={`w-8 h-8 ${achievement.color} group-hover:scale-110 transition-transform`}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-gradient-to-br from-primary/5 via-accent/5 to-purple/5 border border-primary/20 hover:border-primary/40 transition-all duration-500 shadow-card hover:shadow-premium overflow-hidden group">
              <CardContent className="p-8 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 animate-shimmer" />
                </div>
                <div className="text-center relative z-10">
                  <div className="flex justify-center mb-4">
                    <Quote className="w-12 h-12 text-primary/30" />
                  </div>
                  <p className="text-foreground italic mb-6 text-lg leading-relaxed">
                    "Nossa missão é proporcionar soluções bancárias customizadas
                    e de alta qualidade, atuando como um Advisor Pessoal para
                    tomadas de créditos e investimentos, sempre em busca das
                    melhores soluções financeiras para nossos clientes."
                  </p>
                  <div className="pt-4 border-t border-border/30">
                    <div className="text-sm text-primary font-semibold">
                      Emerson Gonzaga
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Fundador & CEO
                    </div>
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
