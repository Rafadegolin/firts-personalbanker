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
  title: "Termos de Uso",
  description: `Condições gerais para utilização dos serviços e do site da ${site.name}.`,
  alternates: { canonical: "/termos-de-uso" },
};

const sections = [
  { id: "aceite", title: "Aceite dos termos" },
  { id: "elegibilidade-conta", title: "Elegibilidade e conta" },
  { id: "servicos", title: "Descrição dos serviços" },
  { id: "condutas-proibidas", title: "Condutas proibidas" },
  { id: "propriedade-intelectual", title: "Propriedade intelectual" },
  { id: "isencoes", title: "Isenções de responsabilidade" },
  { id: "limitacao", title: "Limitação de responsabilidade" },
  { id: "indenizacao", title: "Indenização" },
  { id: "rescisao", title: "Rescisão" },
  { id: "lei-foro", title: "Lei aplicável e foro" },
  { id: "alteracoes-termos", title: "Alterações dos termos" },
  { id: "contato-termos", title: "Contato" },
  { id: "perguntas", title: "Perguntas frequentes" },
];

const company = site.legal.name;

export default function TermosDeUsoPage() {
  return (
    <LegalDocument
      title="Termos de Uso"
      description="Condições gerais para utilização dos nossos serviços e do nosso site."
      sections={sections}
    >
      <LegalSection id="aceite" title="Aceite dos termos">
        <LegalCallout title="Importante">
          Ao acessar e utilizar os serviços da {company}, você declara ter lido,
          compreendido e concordado integralmente com estes Termos de Uso.
        </LegalCallout>
        <p>
          Estes termos constituem um acordo legal vinculante entre você
          (usuário) e a <strong>{company}</strong>. Se você não concorda com
          qualquer disposição destes termos, não deve utilizar nossos serviços.
        </p>
      </LegalSection>

      <LegalSection id="elegibilidade-conta" title="Elegibilidade e conta do usuário">
        <p>Nossos serviços são destinados exclusivamente a:</p>
        <LegalPairs
          items={[
            {
              label: "Empresas",
              value: "Pessoas jurídicas devidamente constituídas no Brasil",
            },
            {
              label: "Profissionais",
              value: "Maiores de 18 anos em plena capacidade civil",
            },
          ]}
        />
        <LegalSubheading>Responsabilidades do usuário</LegalSubheading>
        <LegalList
          items={[
            "Fornecer informações verdadeiras e atualizadas",
            "Manter a confidencialidade das credenciais de acesso",
            "Notificar imediatamente sobre uso não autorizado",
            "Utilizar os serviços de forma ética e legal",
          ]}
        />
      </LegalSection>

      <LegalSection id="servicos" title="Descrição dos serviços">
        <p>
          A {company} oferece serviços especializados de consultoria e
          intermediação bancária empresarial, incluindo:
        </p>
        <LegalPairs
          items={[
            {
              label: "Consultoria",
              value: "Análise financeira e estratégica para empresas",
            },
            {
              label: "Intermediação",
              value: "Negociação com instituições financeiras",
            },
            {
              label: "Assessoria",
              value: "Suporte especializado em produtos bancários",
            },
          ]}
        />
        <LegalCallout title="Natureza dos serviços">
          A {company} atua como consultora e intermediadora, não sendo
          instituição financeira. As decisões finais de crédito cabem
          exclusivamente às instituições bancárias parceiras.
        </LegalCallout>
      </LegalSection>

      <LegalSection id="condutas-proibidas" title="Condutas proibidas">
        <p>É expressamente proibido utilizar nossos serviços para:</p>
        <LegalList
          items={[
            <>
              <strong>Atividades ilegais:</strong> qualquer finalidade que viole
              leis brasileiras ou internacionais.
            </>,
            <>
              <strong>Fraude ou falsificação:</strong> fornecimento de
              informações falsas ou documentos fraudulentos.
            </>,
            <>
              <strong>Uso indevido da plataforma:</strong> tentativas de burlar
              sistemas de segurança ou violar propriedade intelectual.
            </>,
            <>
              <strong>Spam ou assédio:</strong> envio de comunicações não
              solicitadas ou comportamento inadequado.
            </>,
            <>
              <strong>Lavagem de dinheiro:</strong> qualquer atividade
              relacionada à lavagem de dinheiro ou ao financiamento do
              terrorismo.
            </>,
          ]}
        />
        <LegalCallout title="Consequências">
          O descumprimento dessas regras pode resultar no encerramento imediato
          da relação e na comunicação às autoridades competentes.
        </LegalCallout>
      </LegalSection>

      <LegalSection
        id="propriedade-intelectual"
        title="Propriedade intelectual e marcas"
      >
        <p>
          Todos os direitos de propriedade intelectual relacionados à marca{" "}
          {company}, seus conteúdos, metodologias e tecnologias são de nossa
          exclusiva propriedade ou licenciados por terceiros.
        </p>
        <LegalPairs
          items={[
            {
              label: "Protegido por direitos autorais",
              value: `Marca e logotipo ${company}, conteúdos do site, metodologias proprietárias e interface da plataforma.`,
            },
            {
              label: "Uso permitido",
              value:
                "Acesso aos serviços contratados, download para uso pessoal, impressão de documentos próprios e compartilhamento autorizado.",
            },
          ]}
        />
      </LegalSection>

      <LegalSection id="isencoes" title="Isenções de responsabilidade">
        <LegalCallout title="Importante">
          A {company} presta serviços de consultoria e intermediação. As
          decisões de crédito e as condições oferecidas são de responsabilidade
          exclusiva das instituições financeiras.
        </LegalCallout>
        <LegalSubheading>A {company} não se responsabiliza por</LegalSubheading>
        <LegalList
          items={[
            "Decisões de aprovação ou reprovação de crédito pelas instituições financeiras",
            "Alterações nas condições oferecidas pelos bancos",
            "Interrupções temporárias dos serviços por manutenção",
            "Problemas técnicos de terceiros (bancos, telecomunicações etc.)",
            "Danos indiretos ou lucros cessantes",
          ]}
        />
      </LegalSection>

      <LegalSection id="limitacao" title="Limitação de responsabilidade">
        <p>
          Nossa responsabilidade está limitada ao valor efetivamente pago pelos
          serviços nos 12 meses anteriores ao evento que deu origem à
          reclamação.
        </p>
        <LegalSubheading>Exclusões de responsabilidade</LegalSubheading>
        <LegalList
          items={[
            "Danos indiretos, incidentais ou consequenciais",
            "Perda de lucros, receitas ou oportunidades de negócio",
            "Danos morais não comprovadamente causados por nossa negligência",
            "Problemas decorrentes do uso inadequado dos serviços",
          ]}
        />
      </LegalSection>

      <LegalSection id="indenizacao" title="Indenização">
        <p>
          O usuário compromete-se a indenizar e isentar a {company} de qualquer
          reclamação, perda, dano, multa ou penalidade decorrente do uso
          inadequado dos serviços ou da violação destes termos.
        </p>
      </LegalSection>

      <LegalSection id="rescisao" title="Rescisão">
        <p>
          Estes termos vigoram enquanto você utilizar nossos serviços e podem
          ser rescindidos:
        </p>
        <LegalPairs
          items={[
            {
              label: "Pelo usuário",
              value:
                "A qualquer momento, mediante comunicação por escrito com 30 dias de antecedência.",
            },
            {
              label: `Pela ${company}`,
              value:
                "Por violação dos termos ou atividades suspeitas, com notificação prévia.",
            },
          ]}
        />
      </LegalSection>

      <LegalSection id="lei-foro" title="Lei aplicável e foro">
        <LegalPairs
          items={[
            { label: "Lei aplicável", value: "Legislação brasileira" },
            { label: "Foro competente", value: "Comarca de São Paulo — SP" },
          ]}
        />
        <p className="text-sm text-muted-foreground">
          Com renúncia expressa a qualquer outro, por mais privilegiado que
          seja.
        </p>
      </LegalSection>

      <LegalSection id="alteracoes-termos" title="Alterações dos termos">
        <p>
          Reservamo-nos o direito de alterar estes termos a qualquer momento.
          As alterações entram em vigor imediatamente após sua publicação.
        </p>
        <LegalCallout title="Notificação de mudanças">
          Comunicaremos alterações significativas por e-mail ou por aviso em
          nosso site com antecedência mínima de 15 dias.
        </LegalCallout>
      </LegalSection>

      <LegalSection id="contato-termos" title="Contato">
        <p>Dúvidas sobre estes Termos de Uso? Fale conosco:</p>
        <LegalPairs
          items={[
            {
              label: "E-mail",
              value: (
                <a
                  href={`mailto:${site.contact.email}`}
                  className="hover:text-gold"
                >
                  <Email address={site.contact.email} />
                </a>
              ),
            },
            { label: "Telefone", value: site.contact.phoneDisplay },
            {
              label: "Endereço",
              value: `${site.contact.city} — ${site.contact.country}`,
            },
            { label: "CNPJ", value: site.legal.cnpj },
          ]}
        />
      </LegalSection>

      <LegalSection id="perguntas" title="Perguntas frequentes">
        <Accordion type="single" collapsible className="border-t border-border">
          {[
            {
              q: `A ${company} é um banco?`,
              a: "Não. Somos uma consultoria especializada em intermediação bancária empresarial. Facilitamos o acesso a produtos financeiros, mas não somos uma instituição financeira.",
            },
            {
              q: "Quais são os custos dos serviços?",
              a: "Nossos honorários são transparentes e acordados previamente. Entre em contato para uma proposta personalizada, baseada nas suas necessidades específicas.",
            },
            {
              q: "Vocês garantem a aprovação de crédito?",
              a: "Não podemos garantir aprovação, pois a decisão final é das instituições financeiras. Nosso papel é maximizar suas chances por meio de uma intermediação qualificada.",
            },
            {
              q: "Como posso cancelar os serviços?",
              a: "Você pode cancelar a qualquer momento mediante comunicação por escrito com 30 dias de antecedência, conforme descrito na seção Rescisão.",
            },
            {
              q: "Meus dados estão seguros?",
              a: "Sim. Seguimos protocolos de segurança e estamos em conformidade com a LGPD. Consulte nossa Política de Privacidade para mais detalhes.",
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
            <p className="font-serif text-2xl">Precisa de esclarecimentos?</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Nossa equipe responde às suas dúvidas sobre estes termos.
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
