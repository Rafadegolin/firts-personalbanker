import { Eyebrow } from "@/components/brand/Eyebrow";
import { GoldArcs } from "@/components/brand/GoldArcs";
import { BackToTop, LegalToc } from "@/components/legal/LegalToc";
import { site } from "@/config/site";

type LegalDocumentProps = {
  title: string;
  description: string;
  sections: { id: string; title: string }[];
  children: React.ReactNode;
};

export function LegalDocument({
  title,
  description,
  sections,
  children,
}: LegalDocumentProps) {
  return (
    <>
      <section
        id="topo"
        className="theme-navy grain relative overflow-hidden bg-navy-900 pt-[calc(var(--header-h)+3.5rem)] pb-16 text-foreground md:pb-24"
      >
        <GoldArcs idPrefix="documento" className="-z-10 opacity-40" />
        <div className="shell">
          <nav aria-label="Trilha de navegação">
            <ol className="flex items-center gap-3 text-[0.65rem] font-medium tracking-[0.24em] text-muted-foreground uppercase">
              <li>
                <a href="/" className="transition-colors hover:text-gold">
                  Início
                </a>
              </li>
              <li aria-hidden className="text-gold/60">
                /
              </li>
              <li aria-current="page" className="text-foreground">
                {title}
              </li>
            </ol>
          </nav>
          <Eyebrow className="mt-14">Documento legal</Eyebrow>
          <h1 className="mt-6 font-serif text-[2.6rem] leading-[1.05] font-normal md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
          <p className="mt-10 text-[0.65rem] font-medium tracking-[0.24em] text-muted-foreground uppercase">
            Última atualização: {site.legal.updatedAt}
            <span className="mx-3 text-gold/60">·</span>
            Versão {site.legal.version}
          </p>
        </div>
      </section>

      <div className="theme-ivory bg-background text-foreground">
        <div className="shell grid gap-12 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24">
          <aside className="lg:col-span-3">
            <LegalToc sections={sections} />
          </aside>
          <article className="max-w-3xl min-w-0 lg:col-span-9">
            {children}
          </article>
        </div>
      </div>

      <BackToTop />
    </>
  );
}
