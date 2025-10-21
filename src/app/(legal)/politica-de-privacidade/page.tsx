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
import {
  ArrowUp,
  ExternalLink,
  Shield,
  Info,
  AlertTriangle,
} from "lucide-react";

const sections = [
  { id: "controlador-dados", title: "Controlador de Dados" },
  { id: "dados-coletados", title: "Dados Coletados" },
  { id: "bases-legais-finalidades", title: "Bases Legais e Finalidades" },
  { id: "cookies", title: "Cookies e Tecnologias" },
  { id: "compartilhamento", title: "Compartilhamento" },
  { id: "transferencias", title: "Transferências Internacionais" },
  { id: "seguranca", title: "Segurança da Informação" },
  { id: "retencao", title: "Retenção de Dados" },
  { id: "direitos-titular", title: "Direitos do Titular" },
  { id: "criancas", title: "Dados de Menores" },
  { id: "alteracoes", title: "Alterações da Política" },
  { id: "contato-dpo", title: "Contato DPO" },
];

const LegalCallout = ({
  type,
  children,
}: {
  type: "info" | "warning";
  children: React.ReactNode;
}) => {
  const styles =
    type === "warning"
      ? "border-warning/40 bg-warning/5"
      : "border-primary/30 bg-primary/5";
  const Icon = type === "warning" ? AlertTriangle : Info;

  return (
    <Card className={`p-4 ${styles} shadow-sm`}>
      <div className="flex gap-3">
        <Icon className="w-5 h-5 mt-0.5 text-current flex-shrink-0" />
        <div className="text-sm leading-relaxed">{children}</div>
      </div>
    </Card>
  );
};

const TOCDesktop = ({ activeSection }: { activeSection: string }) => (
  <nav
    className="sticky top-24 hidden lg:block w-64 flex-none self-start"
    aria-label="Sumário"
  >
    <Card className="p-5 shadow-card border-border/60">
      <h3 className="font-semibold text-foreground mb-4 text-lg">Sumário</h3>
      <ul className="space-y-1.5">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={`block text-sm py-2 px-3 rounded-lg transition-all duration-200 ${
                activeSection === section.id
                  ? "text-primary font-medium border-l-2 border-primary bg-primary/10 pl-4"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
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
        <AccordionTrigger>Sumário da Política</AccordionTrigger>
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
}) => {
  return (
    <Card
      id={id}
      className="scroll-mt-24 p-6 md:p-8 shadow-card border-border/60 mb-6 hover:shadow-elegant transition-shadow duration-300"
    >
      <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 border-b border-border/30 pb-3">
        {title}
      </h2>
      <div className="prose prose-gray prose-base md:prose-lg max-w-none text-foreground/90 leading-relaxed">
        {children}
      </div>
    </Card>
  );
};

const BackToTop = ({ visible }: { visible: boolean }) => (
  <Button
    variant="elegant"
    size="icon"
    className={`fixed bottom-6 right-6 z-50 transition-all duration-300 cursor-pointer ${
      visible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-4 pointer-events-none"
    }`}
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  >
    <ArrowUp className="w-4 h-4" />
  </Button>
);

const PoliticaPrivacidade = () => {
  const [activeSection, setActiveSection] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setShowBackToTop(scrolled > window.innerHeight * 0.5);

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
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-first-yellow/8 rounded-full blur-3xl shadow-warm animate-float" />
        <div
          className="absolute top-40 right-16 w-24 h-24 bg-emerald/8 rounded-full blur-3xl shadow-success animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-32 left-1/4 w-28 h-28 bg-orange/8 rounded-full blur-3xl shadow-warm animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Header - Full Width no Background */}
      <header className="w-full bg-gradient-hero border-b border-border/60">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8">
          <Breadcrumb className="mb-3 md:mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-foreground">
                  Política de Privacidade
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div>
            <Badge variant="outline" className="mb-3 md:mb-4">
              <Shield className="w-3 h-3 mr-1" />
              Documento Legal
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
              Política de Privacidade
            </h1>
            <p className="text-muted-foreground text-base md:text-lg mb-3 md:mb-4 max-w-3xl">
              Como coletamos, usamos e protegemos seus dados pessoais de acordo
              com a LGPD
            </p>
            <p className="text-foreground/60 text-sm">
              Última atualização: 20 de outubro de 2025
            </p>
          </div>
        </div>
      </header>

      {/* Conteúdo - Centralizado com max-width */}
      <div className="w-full">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
          {/* Layout: TOC na lateral + conteúdo principal */}
          <div className="flex flex-col lg:flex-row lg:gap-8 lg:items-start">
            {/* TOC Desktop - Lateral Esquerda */}
            <aside className="hidden lg:block lg:flex-none lg:w-64">
              <TOCDesktop activeSection={activeSection} />
            </aside>

            {/* Conteúdo Principal */}
            <main className="flex-1 min-w-0 w-full max-w-4xl lg:max-w-none">
              <TOCMobile />
              {/* === Seções === */}
              <LegalSection
                id="controlador-dados"
                title="Quem Somos e Dados de Contato do Controlador"
              >
                <p className="mb-4 leading-relaxed">
                  A{" "}
                  <strong>FIRST SERVICOS E NEGOCIOS ESPECIALIZADOS LTDA</strong>{" "}
                  (CNPJ: 59.715.892/0001-50), com sede em Mogi Guaçu, SP -
                  Brasil, é a empresa responsável pelo controle dos seus dados
                  pessoais.
                </p>
                <div className="bg-card p-4 rounded-lg border border-border/60">
                  <h4 className="font-semibold mb-2">Dados para Contato:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <strong>E-mail:</strong>{" "}
                      emerson.gonzaga@advisorfirst.com.br
                    </li>
                    <li>
                      <strong>Telefone:</strong> +55 (19) 99761-8780
                    </li>
                    <li>
                      <strong>Endereço:</strong> Mogi Guaçu, SP - Brasil
                    </li>
                  </ul>
                </div>
              </LegalSection>{" "}
              <LegalSection
                id="dados-coletados"
                title="Quais Dados Pessoais Coletamos"
              >
                <p className="mb-4 leading-relaxed">
                  Coletamos diferentes tipos de dados pessoais dependendo da sua
                  interação com nossos serviços:
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">
                      Dados de Identificação e Contato:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Nome completo</li>
                      <li>E-mail</li>
                      <li>Telefone</li>
                      <li>Empresa e cargo</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Dados Técnicos:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Endereço IP</li>
                      <li>Informações do navegador</li>
                      <li>Dados de cookies</li>
                      <li>Logs de acesso</li>
                    </ul>
                  </div>
                </div>
              </LegalSection>
              <LegalSection
                id="bases-legais-finalidades"
                title="Bases Legais e Finalidades"
              >
                <p className="mb-4 leading-relaxed">
                  Processamos seus dados pessoais com base nas seguintes bases
                  legais:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4 border-primary/20 bg-primary/5">
                    <h4 className="font-semibold mb-2">Consentimento</h4>
                    <p className="text-sm">
                      Para comunicações de marketing e cookies não essenciais.
                    </p>
                  </Card>
                  <Card className="p-4 border-emerald/20 bg-emerald/5">
                    <h4 className="font-semibold mb-2">Legítimo Interesse</h4>
                    <p className="text-sm">
                      Para análise de dados e melhoria dos serviços.
                    </p>
                  </Card>
                  <Card className="p-4 border-orange/20 bg-orange/5">
                    <h4 className="font-semibold mb-2">Execução de Contrato</h4>
                    <p className="text-sm">
                      Para prestação dos serviços solicitados.
                    </p>
                  </Card>
                  <Card className="p-4 border-purple/20 bg-purple/5">
                    <h4 className="font-semibold mb-2">Cumprimento Legal</h4>
                    <p className="text-sm">
                      Para atender obrigações regulatórias.
                    </p>
                  </Card>
                </div>
              </LegalSection>
              <LegalSection
                id="cookies"
                title="Cookies e Tecnologias Semelhantes"
              >
                <p className="mb-4 leading-relaxed">
                  Utilizamos cookies e tecnologias similares para melhorar sua
                  experiência em nosso site.
                </p>
                <LegalCallout type="info">
                  <strong>Gerencie suas preferências:</strong> Você pode
                  gerenciar suas preferências de cookies a qualquer momento
                  através do nosso{" "}
                  <a href="#" className="text-primary hover:underline">
                    painel de configurações
                  </a>
                  .
                </LegalCallout>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">
                    Tipos de Cookies Utilizados:
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Essenciais:</strong> Necessários para o
                        funcionamento básico do site
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-emerald rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Analíticos:</strong> Para entender como você usa
                        nosso site
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Marketing:</strong> Para personalizar anúncios e
                        comunicações
                      </div>
                    </li>
                  </ul>
                </div>
              </LegalSection>
              <LegalSection
                id="compartilhamento"
                title="Compartilhamento e Operadores"
              >
                <p className="mb-4 leading-relaxed">
                  Compartilhamos seus dados apenas quando necessário e com
                  parceiros confiáveis:
                </p>
                <div className="space-y-3">
                  <div className="border-l-4 border-primary/40 pl-4 py-2">
                    <strong>Prestadores de Serviços:</strong> Hospedagem,
                    analytics, CRM e ferramentas de comunicação
                  </div>
                  <div className="border-l-4 border-emerald/40 pl-4 py-2">
                    <strong>Autoridades Competentes:</strong> Quando exigido por
                    lei ou ordem judicial
                  </div>
                  <div className="border-l-4 border-orange/40 pl-4 py-2">
                    <strong>Parceiros Comerciais:</strong> Apenas com seu
                    consentimento explícito
                  </div>
                </div>
              </LegalSection>
              <LegalSection
                id="transferencias"
                title="Transferências Internacionais"
              >
                <p className="leading-relaxed">
                  Alguns de nossos prestadores de serviços podem estar
                  localizados fora do Brasil. Nestes casos, garantimos que sejam
                  aplicadas salvaguardas adequadas conforme a LGPD.
                </p>
              </LegalSection>
              <LegalSection id="seguranca" title="Segurança da Informação">
                <LegalCallout type="info">
                  <strong>Compromisso com a Segurança:</strong> Implementamos
                  medidas técnicas e organizacionais robustas para proteger seus
                  dados contra acesso não autorizado, alteração, divulgação ou
                  destruição.
                </LegalCallout>
                <div className="mt-4 grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-sm">Criptografia</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Dados protegidos em trânsito e em repouso
                    </p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <ExternalLink className="w-6 h-6 text-emerald" />
                    </div>
                    <h4 className="font-semibold text-sm">Acesso Controlado</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Apenas pessoal autorizado
                    </p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <AlertTriangle className="w-6 h-6 text-orange" />
                    </div>
                    <h4 className="font-semibold text-sm">Monitoramento</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Detecção de ameaças 24/7
                    </p>
                  </div>
                </div>
              </LegalSection>
              <LegalSection id="retencao" title="Retenção e Descarte">
                <p className="mb-4 leading-relaxed">
                  Mantemos seus dados pessoais apenas pelo tempo necessário para
                  cumprir as finalidades descritas nesta política ou conforme
                  exigido por lei.
                </p>
                <div className="bg-gradient-card p-4 rounded-lg border border-border/60">
                  <h4 className="font-semibold mb-2">Prazos de Retenção:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <strong>Dados de contato:</strong> Até a revogação do
                      consentimento
                    </li>
                    <li>
                      <strong>Dados contratuais:</strong> 5 anos após o fim do
                      contrato
                    </li>
                    <li>
                      <strong>Logs de acesso:</strong> 6 meses
                    </li>
                    <li>
                      <strong>Dados fiscais:</strong> Conforme legislação
                      aplicável
                    </li>
                  </ul>
                </div>
              </LegalSection>
              <LegalSection
                id="direitos-titular"
                title="Direitos do Titular e Como Exercer"
              >
                <p className="mb-4 leading-relaxed">
                  Você possui os seguintes direitos em relação aos seus dados
                  pessoais:
                </p>
                <div className="grid md:grid-cols-2 gap-3 mb-6">
                  {[
                    "Confirmação da existência de tratamento",
                    "Acesso aos dados",
                    "Correção de dados incompletos ou inexatos",
                    "Anonimização, bloqueio ou eliminação",
                    "Portabilidade dos dados",
                    "Eliminação dos dados",
                    "Informação sobre compartilhamento",
                    "Revogação do consentimento",
                  ].map((direito, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{direito}</span>
                    </div>
                  ))}
                </div>
                <Card className="p-4 bg-gradient-elegant text-white">
                  <h4 className="font-semibold mb-2">
                    Como Exercer Seus Direitos
                  </h4>
                  <p className="text-sm mb-3">
                    Entre em contato conosco através dos canais oficiais.
                    Responderemos em até 15 dias.
                  </p>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                  >
                    Solicitar Acesso/Exclusão
                  </Button>
                </Card>
              </LegalSection>
              <LegalSection
                id="criancas"
                title="Dados de Crianças e Adolescentes"
              >
                <LegalCallout type="warning">
                  <strong>Proteção de Menores:</strong> Nossos serviços são
                  direcionados para empresas e profissionais adultos. Não
                  coletamos intencionalmente dados de menores de 18 anos.
                </LegalCallout>
                <p className="mt-4 leading-relaxed">
                  Caso identifiquemos que coletamos dados de menores sem o
                  devido consentimento parental, tomaremos medidas imediatas
                  para deletar essas informações.
                </p>
              </LegalSection>
              <LegalSection id="alteracoes" title="Alterações nesta Política">
                <p className="leading-relaxed">
                  Esta política pode ser atualizada periodicamente.
                  Notificaremos sobre mudanças significativas através de nossos
                  canais de comunicação habituais e atualizaremos a data de
                  "última modificação" no topo desta página.
                </p>
              </LegalSection>
              <LegalSection
                id="contato-dpo"
                title="Contato com o DPO/Encarregado"
              >
                <div className="bg-card p-6 rounded-lg border border-border/60">
                  <h4 className="font-semibold mb-4">
                    Entre em Contato com Nosso Encarregado de Dados
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">
                        E-mail do DPO
                      </p>
                      <p className="font-medium">
                        emerson.gonzaga@advisorfirst.com.br
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Prazo de Resposta
                      </p>
                      <p className="font-medium">Até 15 dias úteis</p>
                    </div>
                  </div>
                </div>
              </LegalSection>{" "}
              {/* FAQ */}
              <Card className="p-6 shadow-card border-border/60 mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Perguntas Frequentes
                </h3>
                <Accordion type="single" collapsible>
                  <AccordionItem value="faq-1">
                    <AccordionTrigger>
                      Como posso excluir meus dados?
                    </AccordionTrigger>
                    <AccordionContent>
                      Você pode solicitar a exclusão dos seus dados entrando em
                      contato através do e-mail
                      emerson.gonzaga@advisorfirst.com.br. Processaremos sua
                      solicitação em até 15 dias úteis.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-2">
                    <AccordionTrigger>
                      Meus dados são compartilhados com terceiros?
                    </AccordionTrigger>
                    <AccordionContent>
                      Compartilhamos dados apenas com prestadores de serviços
                      essenciais e sempre com contratos que garantem a proteção
                      adequada dos seus dados pessoais.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-3">
                    <AccordionTrigger>
                      Como posso gerenciar cookies?
                    </AccordionTrigger>
                    <AccordionContent>
                      Você pode gerenciar suas preferências de cookies através
                      das configurações do seu navegador ou usando nossa
                      ferramenta de gerenciamento de cookies.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-4">
                    <AccordionTrigger>
                      Por quanto tempo vocês guardam meus dados?
                    </AccordionTrigger>
                    <AccordionContent>
                      O tempo de retenção varia conforme o tipo de dado e
                      finalidade. Consulte a seção "Retenção e Descarte" para
                      mais detalhes.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Card>
              {/* CTA Final */}
              <Card className="p-6 bg-gradient-card shadow-elegant text-center">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Tem Dúvidas ou Deseja Exercer Seus Direitos?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Nossa equipe de proteção de dados está pronta para ajudá-lo
                </p>
                <Button variant="elegant" size="lg">
                  <a href="/#contato">Entrar em Contato</a>
                </Button>
              </Card>
              {/* Footer Legal */}
              <footer className="mt-8 pt-6 border-t border-border/60">
                <div className="flex flex-wrap gap-4 justify-center text-sm text-muted-foreground">
                  <a href="#" className="hover:text-primary transition-colors">
                    Gerenciar Cookies
                  </a>
                  <span>•</span>
                  <a
                    href="mailto:emerson.gonzaga@advisorfirst.com.br"
                    className="hover:text-primary transition-colors"
                  >
                    Contato do DPO
                  </a>
                  <span>•</span>
                  <span>Versão 1.0 - Set/2024</span>
                </div>
              </footer>
            </main>
          </div>
        </div>
      </div>

      <BackToTop visible={showBackToTop} />
    </div>
  );
};

export default PoliticaPrivacidade;
