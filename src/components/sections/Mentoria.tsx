import { ArrowRight, Building2, TrendingUp, Users } from "lucide-react";
import { FramedPortrait } from "@/components/brand/FramedPortrait";
import { Section, SectionHeading } from "@/components/brand/Section";
import { Button } from "@/components/ui/button";
import { primaryCta } from "@/config/site";
import { mentoria } from "@/content/mentoria";

const icons = {
  building: Building2,
  chart: TrendingUp,
  family: Users,
};

export function Mentoria() {
  return (
    <Section id="mentoria" data-nav="mentoria" className="grain overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_90%_20%,rgb(212_176_106/0.08),transparent_70%)]"
      />

      <div className="shell grid gap-20 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow={mentoria.eyebrow}
            title={mentoria.title}
            emphasis={mentoria.titleEmphasis}
          />
          <p
            data-reveal
            className="mt-9 max-w-2xl text-lg leading-[1.8] text-foreground/85"
          >
            {mentoria.description}
          </p>

          <ol className="mt-14 border-t border-hairline">
            {mentoria.steps.map((step, i) => (
              <li
                key={step.title}
                data-reveal
                style={{ "--reveal-delay": `${i * 110}ms` } as React.CSSProperties}
                className="grid grid-cols-[3.5rem_1fr] gap-4 border-b border-hairline py-7 md:grid-cols-[5rem_1fr]"
              >
                <span className="text-gold-gradient numeral pt-1 text-2xl leading-none md:text-[1.7rem]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-2xl leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div data-reveal className="lg:col-span-5 lg:pt-28 lg:pl-8">
          <FramedPortrait
            src={mentoria.portrait.src}
            alt={mentoria.portrait.alt}
            sizes="(min-width: 1024px) 400px, (min-width: 640px) 448px, 90vw"
            className="mx-auto max-w-md lg:max-w-none"
          />
        </div>
      </div>

      <div className="shell mt-24 lg:mt-32">
        <div data-reveal className="flex items-center gap-6">
          <h3 className="shrink-0 font-serif text-3xl md:text-4xl">
            {mentoria.audienceTitle}
          </h3>
          <span aria-hidden className="h-px flex-1 bg-hairline" />
        </div>

        <ul className="mt-12 grid gap-px border border-hairline bg-hairline md:grid-cols-3">
          {mentoria.audience.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <li
                key={item.title}
                data-reveal
                style={{ "--reveal-delay": `${i * 120}ms` } as React.CSSProperties}
                className="group bg-navy-900 p-8 transition-colors duration-500 hover:bg-navy-850 lg:p-10"
              >
                <Icon
                  aria-hidden
                  strokeWidth={1.1}
                  className="size-9 text-gold transition-transform duration-500 group-hover:-translate-y-1"
                />
                <h4 className="mt-8 font-serif text-2xl md:text-[1.7rem]">
                  {item.title}
                </h4>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </li>
            );
          })}
        </ul>

        <div data-reveal className="mt-14 flex justify-center">
          <Button asChild variant="gold" size="lg">
            <a href={primaryCta.href}>
              {primaryCta.label}
              <ArrowRight />
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
}
