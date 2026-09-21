import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Email } from "@/components/brand/Email";
import { Eyebrow } from "@/components/brand/Eyebrow";
import { GoldArcs } from "@/components/brand/GoldArcs";
import { Ornament } from "@/components/brand/Ornament";
import { Section } from "@/components/brand/Section";
import { ContactForm } from "@/components/sections/ContactForm";
import { site } from "@/config/site";
import { contact } from "@/content/contact";
import { finalCta } from "@/content/home";

const channels: {
  label: string;
  value: React.ReactNode;
  href?: string;
  external?: boolean;
}[] = [
  {
    label: "WhatsApp",
    value: site.contact.phoneDisplay,
    href: site.contact.whatsappHref,
    external: true,
  },
  {
    label: "E-mail",
    value: <Email address={site.contact.email} />,
    href: `mailto:${site.contact.email}`,
  },
  {
    label: "Base",
    value: `${site.contact.city} · ${site.contact.country}`,
  },
  { label: "Atendimento", value: site.contact.hours },
];

export function Contact() {
  return (
    <Section id="contato" data-nav="contato" className="grain overflow-hidden">
      <GoldArcs idPrefix="contato" className="-z-10 opacity-50" />

      <div className="shell">
        <div data-reveal className="mx-auto max-w-4xl text-center">
          <Ornament className="justify-center" />
          <h2 className="mt-10 text-balance font-serif text-[2.1rem] leading-[1.12] font-normal md:text-5xl lg:text-[3.5rem]">
            {finalCta.lead}
            <em className="text-gold-gradient mt-4 block box-decoration-clone pr-1 italic">
              {finalCta.emphasis}
            </em>
          </h2>
        </div>

        <div className="mt-20 grid gap-14 lg:mt-28 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow>{contact.eyebrow}</Eyebrow>

            <div data-reveal className="mt-10 flex items-center gap-6">
              <div className="relative size-24 shrink-0 overflow-hidden rounded-full border border-gold/50">
                <Image
                  src={contact.portrait.src}
                  alt={contact.portrait.alt}
                  fill
                  sizes="96px"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <p className="font-serif text-2xl">{site.founder.name}</p>
                <p className="mt-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-gold">
                  {site.founder.role}
                </p>
              </div>
            </div>

            <ul data-reveal className="mt-12 border-t border-hairline">
              {channels.map((channel) => {
                const body = (
                  <>
                    <span className="min-w-0">
                      <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">
                        {channel.label}
                      </span>
                      <span className="mt-2 block font-serif text-xl break-words transition-colors duration-300 group-hover:text-gold md:text-[1.4rem]">
                        {channel.value}
                      </span>
                    </span>
                    {channel.href && (
                      <ArrowUpRight
                        aria-hidden
                        className="size-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold"
                      />
                    )}
                  </>
                );
                const className =
                  "group flex items-center justify-between gap-6 py-6";
                return (
                  <li key={channel.label} className="border-b border-hairline">
                    {channel.href ? (
                      <a
                        href={channel.href}
                        className={className}
                        {...(channel.external && {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        })}
                      >
                        {body}
                      </a>
                    ) : (
                      <div className={className}>{body}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div data-reveal className="lg:col-span-7">
            <div className="theme-ivory bg-background p-7 text-foreground shadow-[0_50px_100px_-40px_rgb(0_0_0/0.75)] sm:p-10 lg:p-14">
              <h3 className="font-serif text-3xl md:text-4xl">
                {contact.formTitle}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {contact.formSubtitle}
              </p>
              <ContactForm
                greeting={contact.whatsappGreeting}
                needs={contact.needs}
                revenueRanges={contact.revenueRanges}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
