import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/brand/Eyebrow";
import { FramedPortrait } from "@/components/brand/FramedPortrait";
import { GoldArcs } from "@/components/brand/GoldArcs";
import { Button } from "@/components/ui/button";
import { primaryCta, site } from "@/config/site";
import { hero } from "@/content/home";

export function Hero() {
  return (
    <section
      id="inicio"
      className="theme-navy grain relative flex min-h-[100svh] items-center overflow-hidden bg-navy-900 pt-[var(--header-h)] text-foreground"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(55%_60%_at_80%_35%,rgb(212_176_106/0.13),transparent_70%),radial-gradient(60%_60%_at_5%_100%,rgb(42_70_112/0.6),transparent_70%)]"
      />
      <GoldArcs idPrefix="hero" className="-z-10 opacity-90" />

      <div className="shell grid items-center gap-20 py-16 lg:grid-cols-12 lg:gap-12 lg:py-24">
        <div className="lg:col-span-7">
          <Eyebrow className="animate-fade-up">{hero.eyebrow}</Eyebrow>

          <h1 className="mt-8 animate-fade-up text-balance font-serif text-[2.25rem] leading-[1.1] font-normal anim-delay-150 sm:text-[2.6rem] md:text-5xl xl:text-[3.4rem]">
            {hero.headline}
            <em className="text-gold-gradient mt-4 block box-decoration-clone pr-1 italic">
              {hero.headlineEmphasis}
            </em>
          </h1>

          <p className="mt-8 max-w-xl animate-fade-up text-base leading-relaxed text-muted-foreground anim-delay-300 md:text-lg">
            {hero.subheadline}
          </p>

          <div className="mt-11 flex animate-fade-up flex-col gap-4 anim-delay-450 sm:flex-row">
            <Button asChild variant="gold" size="lg">
              <a href={primaryCta.href}>
                {primaryCta.label}
                <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="outline-gold" size="lg">
              <a href={hero.secondaryCta.href}>{hero.secondaryCta.label}</a>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-fade-up anim-delay-300 lg:col-span-5 lg:max-w-none lg:pl-6">
          <FramedPortrait
            src={hero.portrait.src}
            alt={hero.portrait.alt}
            sizes="(min-width: 1280px) 460px, (min-width: 1024px) 38vw, (min-width: 640px) 448px, 90vw"
            preload
          >
            <figcaption className="absolute right-6 -bottom-10 left-6 border border-hairline bg-navy-950/90 px-6 py-5 backdrop-blur-md md:-left-10 md:right-10">
              <p className="font-serif text-2xl leading-none">
                {site.founder.name}
              </p>
              <p className="mt-2 text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">
                {site.founder.role}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                {site.founder.certifications} · {site.founder.education}
              </p>
            </figcaption>
          </FramedPortrait>
        </div>
      </div>
    </section>
  );
}
