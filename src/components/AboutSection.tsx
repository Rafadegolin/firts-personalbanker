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
                  Com mais de 20 anos de experiência no mercado financeiro, a
                  First Personal Banker é liderada por Emerson Gonzaga,
                  profissional com sólida formação acadêmica com MBAs em Gestão
                  Empresarial (FGV), Finanças e Banking (UNIP) e Agronegócios
                  (USP/ESALQ) e Especialista em Investimentos (ANBIMA-CEA). Ao
                  longo de minha carreira, tive a oportunidade de atuar em
                  instituições renomadas, como o Banco Santander e o Banco
                  Safra, onde desenvolvi habilidades essenciais para oferecer um
                  atendimento personalizado e de excelência.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Na First, valorizamos a individualidade de cada cliente e
                  buscamos construir um relacionamento de confiança e
                  transparência. Queremos entender suas necessidades específicas
                  e oferecer estratégias personalizadas que atendam aos seus
                  objetivos financeiros. Se você está em busca de um parceiro
                  confiável para ajudá-lo em suas decisões financeiras, entre em
                  contato. Estamos prontos para ajudá-lo a alcançar suas metas.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border shadow-lg">
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  O Diferencial da FIRST
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Atuamos como um elo junto aos bancos e fundos, oferecendo um
                  hub de parceiros estratégicos e soluções sob medida. Nossa
                  abordagem consultiva garante que cada cliente receba atenção
                  exclusiva e estratégias customizadas para suas necessidades
                  específicas, nosso cliente tem um Profissional Bancário dentro
                  da sua empresa e/ou cuidando de seus investimentos
                  particulares. Isso proporciona redução de custos com juros,
                  taxas, tarifas, melhor estruturação de operações de crédito
                  para eficiência de fluxo de caixa e assessoria em
                  investimentos personalizada sem viés dos bancos para obter o
                  melhor desempenho de acordo com seu perfil.
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
                    Nossa missão é proporcionar soluções bancárias customizadas
                    e de alta qualidade, atuando como um Advisor Pessoal para
                    tomadas de créditos e investimentos, sempre em busca das
                    melhores soluções financeiras para nossos clientes.
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
