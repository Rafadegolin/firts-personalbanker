import { Section, SectionHeading } from "@/components/brand/Section";
import { TestimonialSlider } from "@/components/sections/TestimonialSlider";
import { testimonials, testimonialsIntro } from "@/content/testimonials";

export function Testimonials() {
  return (
    <Section id="depoimentos" data-nav="depoimentos" theme="ivory">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow={testimonialsIntro.eyebrow}
            title={testimonialsIntro.title}
            emphasis={testimonialsIntro.titleEmphasis}
          />
          <span
            aria-hidden
            className="text-gold-gradient mt-6 hidden font-serif text-[11rem] leading-none select-none lg:block"
          >
            “
          </span>
        </div>
        <div data-reveal className="lg:col-span-8 lg:pt-16">
          <TestimonialSlider items={testimonials} />
        </div>
      </div>
    </Section>
  );
}
