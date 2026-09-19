"use client";

import { useEffect, useState } from "react";
import { ArrowUp, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type TocSection = { id: string; title: string };

export function LegalToc({ sections }: { sections: TocSection[] }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <>
      <details className="group border border-border bg-card lg:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-[0.68rem] font-semibold tracking-[0.26em] uppercase">
          Sumário
          <ChevronDown
            aria-hidden
            className="size-4 text-gold transition-transform group-open:rotate-180"
          />
        </summary>
        <ol className="border-t border-border px-5 py-3">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="block py-2 text-sm text-muted-foreground hover:text-foreground"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ol>
      </details>

      <nav
        aria-label="Sumário"
        className="sticky top-[calc(var(--header-h)+2rem)] hidden lg:block"
      >
        <p className="text-[0.62rem] font-semibold tracking-[0.3em] text-gold uppercase">
          Sumário
        </p>
        <ol className="mt-6 border-l border-border">
          {sections.map((section) => {
            const current = active === section.id;
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  aria-current={current ? "location" : undefined}
                  className={cn(
                    "-ml-px block border-l py-2 pl-5 text-sm transition-colors duration-300",
                    current
                      ? "border-gold text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  )}
                >
                  {section.title}
                </a>
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#topo"
      aria-label="Voltar ao topo"
      tabIndex={visible ? 0 : -1}
      className={cn(
        "theme-navy fixed right-6 bottom-6 z-40 grid size-12 place-items-center rounded-full border border-gold/50 bg-navy-950/90 text-gold backdrop-blur transition-all duration-500 hover:border-gold",
        visible ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      )}
    >
      <ArrowUp className="size-4" />
    </a>
  );
}
