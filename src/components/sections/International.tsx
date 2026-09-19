import { Section, SectionHeading } from "@/components/brand/Section";
import { AtlanticMap } from "@/components/sections/AtlanticMap";
import { international } from "@/content/international";

export function International() {
  return (
    <Section
      id="internacional"
      data-nav="internacional"
      deep
      className="grain overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(45%_55%_at_70%_45%,rgb(27_52_86/0.7),transparent_75%)]"
      />
      <div className="shell grid gap-16 lg:grid-cols-12 lg:items-center lg:gap-12">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow={international.eyebrow}
            title={international.title}
            emphasis={international.titleEmphasis}
          />
          <p
            data-reveal
            className="mt-8 max-w-lg text-base leading-[1.8] text-muted-foreground md:text-lg"
          >
            {international.text}
          </p>

          <ul className="mt-12 border-t border-hairline">
            {international.offerings.map((item, i) => (
              <li
                key={item.title}
                data-reveal
                style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
                className="border-b border-hairline py-5"
              >
                <h3 className="font-serif text-xl md:text-[1.4rem]">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <AtlanticMap />
        </div>
      </div>
    </Section>
  );
}
