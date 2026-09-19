import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { LegalDocument } from "@/components/legal/LegalDocument";
import {
  LegalCallout,
  LegalList,
  LegalPairs,
  LegalSection,
  LegalSubheading,
} from "@/components/legal/LegalBlocks";
import { Email } from "@/components/brand/Email";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: `Como a ${site.name} coleta, usa e protege seus dados pessoais de acordo com a LGPD.`,
  alternates: { canonical: "/politica-de-privacidade" },
};

const sections = [
  { id: "controlador-dados", title: "Controlador de dados" },
  { id: "dados-coletados", title: "Dados coletados" },
  { id: "bases-legais-finalidades", title: "Bases legais e finalidades" },
  { id: "cookies", title: "Cookies e tecnologias" },
  { id: "compartilhamento", title: "Compartilhamento" },
  { id: "transferencias", title: "Transferências internacionais" },
  { id: "seguranca", title: "Segurança da informação" },
  { id: "retencao", title: "Retenção de dados" },
  { id: "direitos-titular", title: "Direitos do titular" },
  { id: "criancas", title: "Dados de menores" },
  { id: "alteracoes", title: "Alterações da política" },
  { id: "contato-dpo", title: "Contato do encarregado" },
  { id: "perguntas", title: "Perguntas frequentes" },
];

const email = site.contact.email;

export default function PoliticaDePrivacidadePage() {
  return (
    <LegalDocument
      title="Política de Privacidade"
      description="Como coletamos, usamos e protegemos seus dados pessoais de acordo com a Lei Geral de Proteção de Dados (LGPD)."
      sections={sections}
    >
      <LegalSection
        id="controlador-dados"
        title="Quem somos e dados de contato do controlador"
      >
        <p>
          A <strong>{site.legal.name}</strong> (CNPJ: {site.legal.cnpj}), com
          sede em {site.contact.city} — {site.contact.country}, é a empresa
          responsável pelo controle dos seus dados pessoais.
        </p>
        <LegalPairs
          items={[
            { label: "E-mail", value: <Email address={email} /> },
            { label: "Telefone", value: site.contact.phoneDisplay },
            {
              label: "Endereço",
              value: `${site.contact.city} — ${site.contact.country}`,
            },
            { label: "CNPJ", value: site.legal.cnpj },
          ]}
        />
      </LegalSection>

      <LegalSection id="dados-coletados" title="Quais dados pessoais coletamos">
        <p>
          Coletamos diferentes tipos de dados pessoais, dependendo da sua
          interação com nossos serviços:
        </p>
        <LegalSubheading>Dados de identificação e contato</LegalSubheading>
        <LegalList
          columns={2}
          items={["Nome completo", "E-mail", "Telefone", "Empresa e cargo"]}
        />
        <LegalSubheading>Dados técnicos</LegalSubheading>
        <LegalList
          columns={2}
          items={[
            "Endereço IP",
            "Informações do navegador",
            "Dados de cookies",
            "Logs de acesso",
          ]}
        />
      </LegalSection>

      <LegalSection id="bases-legais-finalidades" title="Bases legais e finalidades">
        <p>Tratamos seus dados pessoais com base nas seguintes bases legais:</p>
        <LegalPairs
          items={[
            {
              label: "Consentimento",
              value: "Comunicações de marketing e cookies não essenciais.",
            },
            {
              label: "Legítimo interesse",
              value: "Análise de dados e melhoria dos serviços.",
            },
            {
              label: "Execução de contrato",
              value: "Prestação dos serviços solicitados.",
            },
            {
              label: "Cumprimento legal",
              value: "Atendimento a obrigações regulatórias.",
            },
          ]}
        />
      </LegalSection>

      <LegalSection id="cookies" title="Cookies e tecnologias semelhantes">
        <p>
          Utilizamos cookies e tecnologias similares para melhorar sua
          experiência em nosso site.
        </p>
        <LegalCallout title="Gerencie suas preferências">
          Você pode gerenciar ou excluir cookies a qualquer momento nas
          configurações do seu navegador.
        </LegalCallout>
        <LegalSubheading>Tipos de cookies utilizados</LegalSubheading>
        <LegalList
          items={[
            <>
              <strong>Essenciais:</strong> necessários para o funcionamento
              básico do site, como a proteção do formulário de contato.
            </>,
            <>
              <strong>Analíticos:</strong> para entender como você usa nosso
              site.
            </>,
            <>
              <strong>Marketing:</strong> para personalizar anúncios e
              comunicações.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection id="compartilhamento" title="Compartilhamento e operadores">
        <p>
          Compartilhamos seus dados apenas quando necessário e com parceiros
          confiáveis:
        </p>
        <LegalList
          items={[
            <>
              <strong>Prestadores de serviços:</strong> hospedagem, análise de
              dados, CRM e ferramentas de comunicação.
            </>,
            <>
              <strong>Autoridades competentes:</strong> quando exigido por lei
              ou ordem judicial.
            </>,
            <>
              <strong>Parceiros comerciais:</strong> apenas com o seu
              consentimento explícito.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection id="transferencias" title="Transferências internacionais">
        <p>
          Alguns de nossos prestadores de serviços podem estar localizados fora
          do Brasil. Nesses casos, garantimos que sejam aplicadas salvaguardas
          adequadas, conforme a LGPD.
        </p>
      </LegalSection>

      <LegalSection id="seguranca" title="Segurança da informação">
        <LegalCallout title="Compromisso com a segurança">
          Adotamos medidas técnicas e organizacionais para proteger seus dados
          contra acesso não autorizado, alteração, divulgação ou destruição.
        </LegalCallout>
        <LegalList
          items={[
            <>
              <strong>Criptografia:</strong> dados protegidos em trânsito e em
              repouso.
            </>,
            <>
              <strong>Acesso controlado:</strong> apenas pessoal autorizado.
            </>,
            <>
              <strong>Monitoramento:</strong> detecção contínua de ameaças.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection id="retencao" title="Retenção e descarte">
        <p>
          Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir
          as finalidades descritas nesta política ou conforme exigido por lei.
        </p>
        <LegalPairs
          items={[
            {
              label: "Dados de contato",
              value: "Até a revogação do consentimento",
            },
            {
              label: "Dados contratuais",
              value: "5 anos após o fim do contrato",
            },
            { label: "Logs de acesso", value: "6 meses" },
            { label: "Dados fiscais", value: "Conforme legislação aplicável" },
          ]}
        />
      </LegalSection>

      <LegalSection id="direitos-titular" title="Direitos do titular e como exercê-los">
        <p>Você possui os seguintes direitos em relação aos seus dados pessoais:</p>
        <LegalList
          columns={2}
          items={[
            "Confirmação da existência de tratamento",
            "Acesso aos dados",
            "Correção de dados incompletos ou inexatos",
            "Anonimização, bloqueio ou eliminação",
            "Portabilidade dos dados",
            "Eliminação dos dados",
            "Informação sobre compartilhamento",
            "Revogação do consentimento",
          ]}
        />
        <LegalCallout title="Como exercer seus direitos">
          Entre em contato pelo e-mail{" "}
          <a
            href={`mailto:${email}?subject=${encodeURIComponent("LGPD — solicitação do titular")}`}
            className="underline decoration-gold underline-offset-4 hover:text-gold"
          >
            <Email address={email} />
          </a>
          . Responderemos em até 15 dias.
        </LegalCallout>
      </LegalSection>

      <LegalSection id="criancas" title="Dados de crianças e adolescentes">
        <LegalCallout title="Proteção de menores">
          Nossos serviços são direcionados a empresas e profissionais adultos.
          Não coletamos intencionalmente dados de menores de 18 anos.
        </LegalCallout>
        <p>
          Caso identifiquemos que coletamos dados de menores sem o devido
          consentimento parental, tomaremos medidas imediatas para excluir essas
          informações.
        </p>
      </LegalSection>

      <LegalSection id="alteracoes" title="Alterações nesta política">
        <p>
          Esta política pode ser atualizada periodicamente. Notificaremos sobre
          mudanças significativas por meio de nossos canais de comunicação
          habituais e atualizaremos a data de &quot;última atualização&quot; no
          topo desta página.
        </p>
      </LegalSection>

      <LegalSection id="contato-dpo" title="Contato com o encarregado (DPO)">
        <LegalPairs
          items={[
            {
              label: "E-mail do encarregado",
              value: (
                <a href={`mailto:${email}`} className="hover:text-gold">
                  <Email address={email} />
                </a>
              ),
            },
            { label: "Prazo de resposta", value: "Até 15 dias úteis" },
          ]}
        />
      </LegalSection>

      <LegalSection id="perguntas" title="Perguntas frequentes">
        <Accordion type="single" collapsible className="border-t border-border">
          {[
            {
              q: "Como posso excluir meus dados?",
              a: `Você pode solicitar a exclusão dos seus dados pelo e-mail ${email}. Processaremos sua solicitação em até 15 dias úteis.`,
            },
            {
              q: "Meus dados são compartilhados com terceiros?",
              a: "Compartilhamos dados apenas com prestadores de serviços essenciais e sempre com contratos que garantem a proteção adequada dos seus dados pessoais.",
            },
            {
              q: "Como posso gerenciar cookies?",
              a: "Você pode gerenciar suas preferências de cookies nas configurações do seu navegador.",
            },
            {
              q: "Por quanto tempo vocês guardam meus dados?",
              a: "O tempo de retenção varia conforme o tipo de dado e a finalidade. Consulte a seção “Retenção e descarte” para mais detalhes.",
            },
          ].map((item, i) => (
            <AccordionItem key={item.q} value={`faq-${i}`}>
              <AccordionTrigger className="py-5 font-serif text-xl font-normal hover:text-gold hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 flex flex-col items-start gap-6 border border-border bg-card p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-serif text-2xl">Tem dúvidas sobre seus dados?</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Fale conosco pelos canais oficiais.
            </p>
          </div>
          <Button asChild variant="gold">
            <a href="/#contato">
              Entrar em contato
              <ArrowRight />
            </a>
          </Button>
        </div>
      </LegalSection>
    </LegalDocument>
  );
}
