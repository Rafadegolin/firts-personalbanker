import { Ornament } from "@/components/brand/Ornament";
import { Section } from "@/components/brand/Section";
import { manifesto } from "@/content/home";

export function Manifesto() {
  return (
    <Section theme="ivory" aria-labelledby="manifesto-titulo" className="pb-12 md:pb-16 lg:pb-20">
      <div data-reveal className="shell max-w-5xl text-center">
        <Ornament className="justify-center" />
        <p className="mt-6 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-gold">
          {manifesto.eyebrow}
        </p>
        <h2
          id="manifesto-titulo"
          className="mt-10 text-balance font-serif text-[2.2rem] leading-[1.12] font-normal md:text-5xl lg:text-[3.6rem]"
        >
          {manifesto.lead}{" "}
          <em className="text-gold-gradient box-decoration-clone pr-1 italic">
            {manifesto.emphasis}
          </em>
        </h2>
        <p className="mx-auto mt-8 max-w-3xl text-balance font-serif text-xl leading-relaxed text-muted-foreground md:text-2xl lg:text-[1.75rem]">
          {manifesto.body}
        </p>
        <p className="mt-10 font-display text-xs tracking-[0.28em] text-foreground uppercase md:text-sm">
          {manifesto.closing}
        </p>
      </div>
    </Section>
  );
}
