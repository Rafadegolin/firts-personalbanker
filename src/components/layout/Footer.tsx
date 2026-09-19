import { Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import { Email } from "@/components/brand/Email";
import { Logo } from "@/components/brand/Logo";
import { Ornament } from "@/components/brand/Ornament";
import { Button } from "@/components/ui/button";
import { nav, primaryCta, site } from "@/config/site";

const solutionLinks = [
  { label: "Mentoria", href: "/#mentoria" },
  { label: "Crédito empresarial", href: "/#credito" },
  { label: "Assessoria em investimentos", href: "/#solucoes" },
  { label: "Assessoria bancária", href: "/#solucoes" },
  { label: "Oportunidades internacionais", href: "/#internacional" },
];

const legalLinks = [
  { label: "Política de Privacidade", href: "/politica-de-privacidade" },
  { label: "Termos de Uso", href: "/termos-de-uso" },
];

const socialLinks = [
  { label: "LinkedIn", href: site.social.linkedin, icon: Linkedin },
  { label: "Instagram", href: site.social.instagram, icon: Instagram },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="theme-navy relative bg-navy-950 text-foreground">
      <div className="shell pt-20 pb-12 lg:pt-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="min-w-0 lg:col-span-8">
            <Logo size="lg" />
            <p className="mt-10 max-w-2xl text-balance font-serif text-2xl leading-snug text-foreground/85 italic md:text-3xl">
              {site.slogan}
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Button asChild variant="outline-gold" size="lg">
              <a href={primaryCta.href}>{primaryCta.label}</a>
            </Button>
          </div>
        </div>

        <Ornament wide className="my-16 lg:my-20" />

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1fr_1.2fr_1.4fr_1fr]">
          <FooterColumn title="Navegação" links={[...nav]} />
          <FooterColumn title="Soluções" links={solutionLinks} />

          <div>
            <FooterTitle>Contato</FooterTitle>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href={site.contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  {site.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="transition-colors hover:text-gold"
                >
                  <Email address={site.contact.email} />
                </a>
              </li>
              <li>
                {site.contact.city} · {site.contact.country}
              </li>
              <li>{site.contact.hours}</li>
            </ul>
          </div>

          <div>
            <FooterTitle>Legal</FooterTitle>
            <ul className="mt-6 space-y-3 text-sm">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="mt-8 flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid size-11 place-items-center rounded-full border border-hairline text-foreground/80 transition-colors duration-300 hover:border-gold hover:text-gold"
                  >
                    <Icon className="size-4" strokeWidth={1.5} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="shell flex flex-col gap-4 py-8 text-xs leading-relaxed text-muted-foreground lg:flex-row lg:items-start lg:justify-between">
          <p>
            © {year} {site.legal.name}. Todos os direitos reservados.
            <span className="mx-2 text-gold/60">·</span>
            CNPJ {site.legal.cnpj}
          </p>
          <p className="max-w-xl lg:text-right">
            A {site.name} não é instituição financeira. As operações de crédito
            estão sujeitas à análise e aprovação das instituições parceiras.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-gold">
      {children}
    </h2>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <FooterTitle>{title}</FooterTitle>
      <ul className="mt-6 space-y-3 text-sm">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="group inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
              <ArrowUpRight
                aria-hidden
                className="size-3 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-gold group-hover:opacity-100"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
