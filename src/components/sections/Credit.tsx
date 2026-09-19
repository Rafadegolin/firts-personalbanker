import { Section, SectionHeading } from "@/components/brand/Section";
import { CreditTabs } from "@/components/sections/CreditTabs";
import { creditGroups, creditIntro } from "@/content/credit";

export function Credit() {
  return (
    <Section id="credito" data-nav="solucoes" className="overflow-hidden">
      <div className="shell">
        <SectionHeading
          eyebrow={creditIntro.eyebrow}
          title={creditIntro.title}
          emphasis={creditIntro.titleEmphasis}
          subtitle={creditIntro.subtitle}
        />
        <div data-reveal className="mt-16 lg:mt-20">
          <CreditTabs groups={creditGroups} />
        </div>
      </div>
    </Section>
  );
}
