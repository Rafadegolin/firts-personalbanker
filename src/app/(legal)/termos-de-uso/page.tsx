"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { ArrowUp, Scale, AlertTriangle, Info, CheckCircle } from "lucide-react";

const sections = [
  { id: "aceite", title: "Aceite dos Termos" },
  { id: "elegibilidade-conta", title: "Elegibilidade e Conta" },
  { id: "servicos", title: "Descrição dos Serviços" },
  { id: "condutas-proibidas", title: "Condutas Proibidas" },
  { id: "propriedade-intelectual", title: "Propriedade Intelectual" },
  { id: "isencoes", title: "Isenções de Responsabilidade" },
  { id: "limitacao", title: "Limitação de Responsabilidade" },
  { id: "indenizacao", title: "Indenização" },
  { id: "rescisao", title: "Rescisão" },
  { id: "lei-foro", title: "Lei Aplicável e Foro" },
  { id: "alteracoes-termos", title: "Alterações dos Termos" },
  { id: "contato-termos", title: "Contato" },
];

const LegalCallout = ({
  type,
  children,
}: {
  type: "info" | "warning" | "success";
  children: React.ReactNode;
}) => {
  const styles = {
    warning: "border-warning/40 bg-warning/5",
    info: "border-primary/30 bg-primary/5",
    success: "border-emerald/30 bg-emerald/5",
  };
  const icons = { warning: AlertTriangle, info: Info, success: CheckCircle };
  const Icon = icons[type];

  return (
    <Card className={`p-4 ${styles[type]} shadow-sm`}>
      <div className="flex gap-3">
        <Icon className="w-5 h-5 mt-0.5 text-current flex-shrink-0" />
        <div className="text-sm leading-relaxed">{children}</div>
      </div>
    </Card>
  );
};

const TOCDesktop = ({ activeSection }: { activeSection: string }) => (
  <nav className="sticky top-24 w-64 hidden lg:block" aria-label="Sumário">
    <Card className="p-4 shadow-card">
      <h3 className="font-semibold text-foreground mb-4">Sumário</h3>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={`block text-sm py-1.5 px-2 rounded transition-colors hover:text-primary ${
                activeSection === section.id
                  ? "text-primary border-l-2 border-primary bg-primary/5"
                  : "text-muted-foreground"
              }`}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </Card>
  </nav>
);

const TOCMobile = () => (
  <div className="lg:hidden mb-6">
    <Accordion type="single" collapsible>
      <AccordionItem value="toc">
        <AccordionTrigger>Sumário dos Termos</AccordionTrigger>
        <AccordionContent>
          <nav className="grid grid-cols-2 gap-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-sm py-2 px-3 rounded hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {section.title}
              </a>
            ))}
          </nav>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);

const LegalSection = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) => (
  <Card id={id} className="p-6 shadow-card border-border/60 mb-6">
    <h2 className="text-2xl font-semibold text-foreground mb-4">{title}</h2>
    <div className="prose prose-gray max-w-none">{children}</div>
  </Card>
);

const BackToTop = ({ visible }: { visible: boolean }) => (
  <Button
    variant="elegant"
    size="icon"
    className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
      visible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-4 pointer-events-none"
    }`}
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  >
    <ArrowUp className="w-4 h-4" />
  </Button>
);

const TermosUso = () => {
  const [activeSection, setActiveSection] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > window.innerHeight * 0.5);

      const sectionElements = sections
        .map((s) => document.getElementById(s.id))
        .filter(Boolean) as HTMLElement[];
      const current = sectionElements.find((el) => {
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom > 100;
      });

      if (current) setActiveSection(current.id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-first-yellow/12 rounded-full blur-[2px] shadow-warm animate-float" />
        <div className="absolute top-40 right-16 w-24 h-24 bg-emerald/10 rounded-full blur-[2px] shadow-success animate-float delay-1000" />
        <div className="absolute bottom-32 left-1/4 w-28 h-28 bg-orange/10 rounded-full blur-[2px] shadow-warm animate-float delay-2000" />
      </div>

      {/* Header */}
      <header className="bg-gradient-hero border-b border-border/60">
        <div className="container mx-auto px-4 py-6">
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <span className="text-muted-foreground">Jurídico</span>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-foreground">
                  Termos de Uso
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex items-start justify-between">
            <div>
              <Badge variant="outline" className="mb-4">
                <Scale className="w-3 h-3 mr-1" />
                Documento Legal
              </Badge>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                Termos de Uso
              </h1>
              <p className="text-muted-foreground text-lg mb-4">
                Condições gerais para utilização de nossos serviços e plataforma
              </p>
              <p className="text-foreground/60 text-sm">
                Última atualização: 16 de setembro de 2024
              </p>
            </div>
            {/* Botões removidos */}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex gap-8">
          <TOCDesktop activeSection={activeSection} />

          <main className="flex-1 max-w-4xl">
            <TOCMobile />

            <LegalSection id="aceite" title="Aceite dos Termos">
              <LegalCallout type="warning">
                <strong>Importante:</strong> Ao acessar e utilizar os serviços
                da FIRST Personal Banker Empresarial, você declara ter lido,
                compreendido e concordado integralmente com estes Termos de Uso.
              </LegalCallout>

              <p className="mt-4 leading-relaxed">
                Estes termos constituem um acordo legal vinculante entre você
                (usuário) e a<strong> FIRST Personal Banker Empresarial</strong>
                . Se você não concorda com qualquer disposição destes termos,
                não deve utilizar nossos serviços.
              </p>
            </LegalSection>

            <LegalSection
              id="elegibilidade-conta"
              title="Elegibilidade e Conta do Usuário"
            >
              <p className="mb-4 leading-relaxed">
                Nossos serviços são destinados exclusivamente a:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="p-4 border-emerald/20 bg-emerald/5">
                  <h4 className="font-semibold mb-2">Empresas</h4>
                  <p className="text-sm">
                    Pessoas jurídicas devidamente constituídas no Brasil
                  </p>
                </Card>

                <Card className="p-4 border-primary/20 bg-primary/5">
                  <h4 className="font-semibold mb-2">Profissionais</h4>
                  <p className="text-sm">
                    Maiores de 18 anos em plena capacidade civil
                  </p>
                </Card>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Responsabilidades do Usuário:</h4>
                <ul className="space-y-2">
                  {[
                    "Fornecer informações verdadeiras e atualizadas",
                    "Manter a confidencialidade das credenciais de acesso",
                    "Notificar imediatamente sobre uso não autorizado",
                    "Utilizar os serviços de forma ética e legal",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </LegalSection>

            <LegalSection id="servicos" title="Descrição dos Serviços">
              <p className="mb-4 leading-relaxed">
                A FIRST oferece serviços especializados de consultoria e
                intermediação bancária empresarial, incluindo:
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <Card className="p-4 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Scale className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Consultoria</h4>
                  <p className="text-sm text-muted-foreground">
                    Análise financeira e estratégica para empresas
                  </p>
                </Card>

                <Card className="p-4 text-center">
                  <div className="w-12 h-12 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-emerald" />
                  </div>
                  <h4 className="font-semibold mb-2">Intermediação</h4>
                  <p className="text-sm text-muted-foreground">
                    Negociação com instituições financeiras
                  </p>
                </Card>

                <Card className="p-4 text-center">
                  <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Info className="w-6 h-6 text-orange" />
                  </div>
                  <h4 className="font-semibold mb-2">Assessoria</h4>
                  <p className="text-sm text-muted-foreground">
                    Suporte especializado em produtos bancários
                  </p>
                </Card>
              </div>

              <LegalCallout type="info">
                <strong>Natureza dos Serviços:</strong> A FIRST atua como
                consultora e intermediadora, não sendo instituição financeira.
                As decisões finais de crédito cabem exclusivamente às
                instituições bancárias parceiras.
              </LegalCallout>
            </LegalSection>

            <LegalSection id="condutas-proibidas" title="Condutas Proibidas">
              <p className="mb-4 leading-relaxed">
                É expressamente proibido utilizar nossos serviços para:
              </p>

              <div className="space-y-3">
                {[
                  {
                    title: "Atividades Ilegais",
                    description:
                      "Qualquer finalidade que viole leis brasileiras ou internacionais",
                  },
                  {
                    title: "Fraude ou Falsificação",
                    description:
                      "Fornecimento de informações falsas ou documentos fraudulentos",
                  },
                  {
                    title: "Uso Indevido da Plataforma",
                    description:
                      "Tentativas de burlar sistemas de segurança ou violar propriedade intelectual",
                  },
                  {
                    title: "Spam ou Assédio",
                    description:
                      "Envio de comunicações não solicitadas ou comportamento inadequado",
                  },
                  {
                    title: "Lavagem de Dinheiro",
                    description:
                      "Qualquer atividade relacionada à lavagem de dinheiro ou financiamento ao terrorismo",
                  },
                ].map((conduct, index) => (
                  <Card
                    key={index}
                    className="p-4 border-destructive/20 bg-destructive/5"
                  >
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-destructive mb-1">
                          {conduct.title}
                        </h4>
                        <p className="text-sm">{conduct.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <LegalCallout type="warning">
                <strong>Consequências:</strong> O descumprimento dessas regras
                pode resultar no encerramento imediato da conta e comunicação às
                autoridades competentes.
              </LegalCallout>
            </LegalSection>

            <LegalSection
              id="propriedade-intelectual"
              title="Propriedade Intelectual e Marcas"
            >
              <p className="mb-4 leading-relaxed">
                Todos os direitos de propriedade intelectual relacionados à
                marca FIRST, conteúdos, metodologias e tecnologias são de nossa
                exclusiva propriedade ou licenciados por terceiros.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-4 border-primary/20 bg-primary/5">
                  <h4 className="font-semibold mb-2">
                    Protegido por Direitos Autorais
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>• Marca e logotipo FIRST</li>
                    <li>• Conteúdos do website</li>
                    <li>• Metodologias proprietárias</li>
                    <li>• Interface da plataforma</li>
                  </ul>
                </Card>

                <Card className="p-4 border-emerald/20 bg-emerald/5">
                  <h4 className="font-semibold mb-2">Uso Permitido</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Acesso aos serviços contratados</li>
                    <li>• Download para uso pessoal</li>
                    <li>• Impressão de documentos próprios</li>
                    <li>• Compartilhamento autorizado</li>
                  </ul>
                </Card>
              </div>
            </LegalSection>

            <LegalSection id="isencoes" title="Isenções de Responsabilidade">
              <LegalCallout type="warning">
                <strong>Importante:</strong> A FIRST presta serviços de
                consultoria e intermediação. As decisões de crédito e condições
                oferecidas são de responsabilidade exclusiva das instituições
                financeiras.
              </LegalCallout>

              <div className="mt-4 space-y-4">
                <h4 className="font-semibold">
                  A FIRST não se responsabiliza por:
                </h4>

                <div className="grid gap-3">
                  {[
                    "Decisões de aprovação ou reprovação de crédito pelas instituições financeiras",
                    "Alterações nas condições oferecidas pelos bancos",
                    "Interrupções temporárias dos serviços por manutenção",
                    "Problemas técnicos de terceiros (bancos, telecomunicações, etc.)",
                    "Danos indiretos ou lucros cessantes",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 p-3 bg-muted/30 rounded"
                    >
                      <div className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </LegalSection>

            <LegalSection id="limitacao" title="Limitação de Responsabilidade">
              <p className="mb-4 leading-relaxed">
                Nossa responsabilidade está limitada ao valor efetivamente pago
                pelos serviços nos 12 meses anteriores ao evento que deu origem
                à reclamação.
              </p>

              <div className="bg-gradient-card p-4 rounded-lg border border-border/60">
                <h4 className="font-semibold mb-2">
                  Exclusões de Responsabilidade:
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>• Danos indiretos, incidentais ou consequenciais</li>
                  <li>
                    • Perda de lucros, receitas ou oportunidades de negócio
                  </li>
                  <li>
                    • Danos morais não comprovadamente causados por nossa
                    negligência
                  </li>
                  <li>
                    • Problemas decorrentes do uso inadequado dos serviços
                  </li>
                </ul>
              </div>
            </LegalSection>

            <LegalSection id="indenizacao" title="Indenização">
              <p className="leading-relaxed">
                O usuário compromete-se a indenizar e isentar a FIRST de
                qualquer reclamação, perda, dano, multa ou penalidade decorrente
                do uso inadequado dos serviços ou violação destes termos.
              </p>
            </LegalSection>

            <LegalSection id="rescisao" title="Rescisão">
              <p className="mb-4 leading-relaxed">
                Estes termos vigoram enquanto você utilizar nossos serviços e
                podem ser rescindidos:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-4">
                  <h4 className="font-semibold mb-2">Pelo Usuário</h4>
                  <ul className="text-sm space-y-1">
                    <li>• A qualquer momento</li>
                    <li>• Mediante comunicação por escrito</li>
                    <li>• Com 30 dias de antecedência</li>
                  </ul>
                </Card>

                <Card className="p-4">
                  <h4 className="font-semibold mb-2">Pela FIRST</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Por violação dos termos</li>
                    <li>• Por atividades suspeitas</li>
                    <li>• Com notificação prévia</li>
                  </ul>
                </Card>
              </div>
            </LegalSection>

            <LegalSection id="lei-foro" title="Lei Aplicável e Foro">
              <div className="bg-card p-6 rounded-lg border border-border/60">
                <h4 className="font-semibold mb-4">
                  Jurisdição e Lei Aplicável
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Lei Aplicável
                    </p>
                    <p className="font-medium">Legislação Brasileira</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Foro Competente
                    </p>
                    <p className="font-medium">Comarca de São Paulo - SP</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Com renúncia expressa a qualquer outro, por mais privilegiado
                  que seja.
                </p>
              </div>
            </LegalSection>

            <LegalSection id="alteracoes-termos" title="Alterações dos Termos">
              <p className="mb-4 leading-relaxed">
                Reservamo-nos o direito de alterar estes termos a qualquer
                momento. As alterações entrarão em vigor imediatamente após sua
                publicação.
              </p>

              <LegalCallout type="info">
                <strong>Notificação de Mudanças:</strong> Comunicaremos
                alterações significativas através de e-mail ou aviso em nossa
                plataforma com antecedência mínima de 15 dias.
              </LegalCallout>
            </LegalSection>

            <LegalSection id="contato-termos" title="Contato">
              <div className="bg-card p-6 rounded-lg border border-border/60">
                <h4 className="font-semibold mb-4">
                  Dúvidas sobre os Termos de Uso?
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">E-mail</p>
                    <p className="font-medium">juridico@first-pb.com.br</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Telefone
                    </p>
                    <p className="font-medium">+55 (11) XXXX-XXXX</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground mb-2">Endereço</p>
                  <p className="font-medium">[Endereço Completo da Sede]</p>
                </div>
              </div>
            </LegalSection>

            {/* FAQ Section */}
            <Card className="p-6 shadow-card border-border/60 mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Perguntas Frequentes
              </h3>

              <Accordion type="single" collapsible>
                <AccordionItem value="faq-1">
                  <AccordionTrigger>A FIRST é um banco?</AccordionTrigger>
                  <AccordionContent>
                    Não, somos uma consultoria especializada em intermediação
                    bancária empresarial. Facilitamos o acesso a produtos
                    financeiros, mas não somos uma instituição financeira.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-2">
                  <AccordionTrigger>
                    Quais são os custos dos serviços?
                  </AccordionTrigger>
                  <AccordionContent>
                    Nossos honorários são transparentes e acordados previamente.
                    Entre em contato para uma proposta personalizada baseada em
                    suas necessidades específicas.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-3">
                  <AccordionTrigger>
                    Vocês garantem a aprovação de crédito?
                  </AccordionTrigger>
                  <AccordionContent>
                    Não podemos garantir aprovação, pois a decisão final é das
                    instituições financeiras. Nosso papel é maximizar suas
                    chances através de uma intermediação qualificada.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-4">
                  <AccordionTrigger>
                    Como posso cancelar os serviços?
                  </AccordionTrigger>
                  <AccordionContent>
                    Você pode cancelar a qualquer momento mediante comunicação
                    por escrito com 30 dias de antecedência, conforme descrito
                    na seção de Rescisão.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-5">
                  <AccordionTrigger>Meus dados estão seguros?</AccordionTrigger>
                  <AccordionContent>
                    Sim, seguimos rigorosos protocolos de segurança e estamos em
                    conformidade com a LGPD. Consulte nossa Política de
                    Privacidade para mais detalhes.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>

            {/* CTA Final */}
            <Card className="p-6 bg-gradient-card shadow-elegant text-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Precisa de Esclarecimentos Jurídicos?
              </h3>
              <p className="text-muted-foreground mb-4">
                Nossa equipe jurídica está disponível para esclarecer dúvidas
                sobre estes termos
              </p>
              <Button variant="elegant" size="lg">
                <a href="/#contato">Entrar em Contato</a>
              </Button>
            </Card>

            {/* Footer Legal */}
            <footer className="mt-8 pt-6 border-t border-border/60">
              <div className="flex flex-wrap gap-4 justify-center text-sm text-muted-foreground">
                <a
                  href="/politica-de-privacidade"
                  className="hover:text-primary transition-colors"
                >
                  Política de Privacidade
                </a>
                <span>•</span>
                <a
                  href="mailto:juridico@first-pb.com.br"
                  className="hover:text-primary transition-colors"
                >
                  Jurídico
                </a>
                <span>•</span>
                <span>Versão 1.0 - Set/2024</span>
              </div>
            </footer>
          </main>
        </div>
      </div>

      <BackToTop visible={showBackToTop} />
    </div>
  );
};

export default TermosUso;
