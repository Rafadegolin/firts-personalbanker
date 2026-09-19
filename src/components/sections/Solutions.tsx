import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/brand/Section";
import { services, servicesIntro } from "@/content/services";

export function Solutions() {
  return (
    <Section id="solucoes" data-nav="solucoes" theme="ivory">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            eyebrow={servicesIntro.eyebrow}
            title={servicesIntro.title}
            emphasis={servicesIntro.titleEmphasis}
            className="lg:col-span-7"
          />
          <p
            data-reveal
            className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg lg:col-span-5 lg:justify-self-end"
          >
            {servicesIntro.subtitle}
          </p>
        </div>

        <ol className="mt-16 border-t border-border lg:mt-24">
          {services.map((service, i) => (
            <li
              key={service.title}
              data-reveal
              className="group relative grid gap-6 border-b border-border py-10 transition-colors duration-500 lg:grid-cols-12 lg:gap-10 lg:py-14"
            >
              <span
                aria-hidden
                className="absolute inset-y-0 left-0 w-px origin-top scale-y-0 bg-gold transition-transform duration-700 ease-luxe group-hover:scale-y-100"
              />
              <span className="text-gold-gradient numeral pt-1.5 text-[1.7rem] leading-none lg:col-span-1 lg:pl-4">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="lg:col-span-5">
                <h3 className="font-serif text-3xl leading-tight md:text-[2.2rem]">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                {"href" in service && (
                  <a
                    href={service.href}
                    className="mt-6 inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-gold transition-colors hover:text-foreground"
                  >
                    Saiba mais
                    <ArrowRight aria-hidden className="size-3.5" />
                  </a>
                )}
              </div>

              <ul className="grid content-center gap-x-10 gap-y-4 sm:grid-cols-2 lg:col-span-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-4 text-[0.95rem] leading-snug text-foreground/85"
                  >
                    <span
                      aria-hidden
                      className="mt-2.5 h-px w-4 shrink-0 bg-gold"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
