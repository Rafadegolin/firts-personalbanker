import { FramedPortrait } from "@/components/brand/FramedPortrait";
import { Ornament } from "@/components/brand/Ornament";
import { Section, SectionHeading } from "@/components/brand/Section";
import { site } from "@/config/site";
import { about } from "@/content/about";

export function About() {
  return (
    <Section id="sobre" data-nav="sobre" theme="ivory" className="pt-12 md:pt-16 lg:pt-20">
      <div className="shell">
        <Ornament wide className="mb-20 lg:mb-28" />

        <div className="grid gap-16 lg:grid-cols-12 lg:gap-16">
          <div data-reveal className="lg:col-span-5">
            <FramedPortrait
              src={about.portrait.src}
              alt={about.portrait.alt}
              sizes="(min-width: 1024px) 420px, (min-width: 640px) 480px, 90vw"
              frame="left"
              className="mx-auto max-w-md lg:sticky lg:top-32 lg:max-w-none"
            />
          </div>

          <div className="lg:col-span-7 lg:pl-6">
            <SectionHeading
              eyebrow={about.eyebrow}
              title={about.title}
              emphasis={about.titleEmphasis}
            />

            <div
              data-reveal
              className="mt-10 space-y-6 text-base leading-[1.85] text-foreground/80 md:text-[1.05rem]"
            >
              {about.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>

            <dl className="mt-14 grid border-t border-border sm:grid-cols-2">
              {about.credentials.map((item, i) => (
                <div
                  key={item.title}
                  data-reveal
                  style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
                  className="border-b border-border py-6 sm:odd:pr-8 sm:even:border-l sm:even:pl-8"
                >
                  <dt className="font-serif text-2xl">{item.title}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </dd>
                </div>
              ))}
            </dl>

            <div data-reveal className="mt-14 border-l-2 border-gold pl-7">
              <h3 className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-gold">
                {about.differential.title}
              </h3>
              <p className="mt-4 leading-[1.85] text-foreground/80">
                {about.differential.text}
              </p>
            </div>

            <figure data-reveal className="mt-16">
              <blockquote className="text-balance font-serif text-2xl leading-snug italic md:text-[1.85rem]">
                <span aria-hidden className="mr-1 text-gold">
                  “
                </span>
                {about.quote}
                <span aria-hidden className="ml-1 text-gold">
                  ”
                </span>
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-5">
                <span aria-hidden className="h-px w-12 bg-gold" />
                <span>
                  <span className="block font-display text-sm tracking-[0.2em] uppercase">
                    {site.founder.name}
                  </span>
                  <span className="mt-1 block text-xs tracking-[0.2em] text-muted-foreground uppercase">
                    {site.founder.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </Section>
  );
}
