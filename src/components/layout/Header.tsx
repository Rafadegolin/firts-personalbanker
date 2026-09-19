"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { Email } from "@/components/brand/Email";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import { nav, primaryCta, site } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Destaca no menu a seção visível (só na home)
  useEffect(() => {
    if (pathname !== "/") {
      setActive(null);
      return;
    }
    const sections = document.querySelectorAll<HTMLElement>("[data-nav]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive((entry.target as HTMLElement).dataset.nav ?? null);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

  // Menu mobile: trava a rolagem e fecha com Esc
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={cn(
          "theme-navy fixed inset-x-0 top-0 z-50 text-foreground transition-[background-color,box-shadow] duration-500",
          solid
            ? "bg-navy-950/[0.96] shadow-[0_1px_0_0_rgb(212_176_106/0.2)] backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <div className="shell flex h-[var(--header-h)] items-center justify-between gap-6">
          <a
            href="/#inicio"
            aria-label={`${site.name} — página inicial`}
            className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => setOpen(false)}
          >
            <Logo tagline={false} />
          </a>

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-7 xl:gap-9">
              {nav.map((item) => {
                const id = item.href.split("#")[1];
                const isActive = active === id;
                return (
                  // "Contato" some quando o CTA (que leva ao mesmo lugar) aparece
                  <li
                    key={item.href}
                    className={cn(id === "contato" && "xl:hidden")}
                  >
                    <a
                      href={item.href}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "group relative py-2 text-[0.7rem] font-medium uppercase tracking-[0.22em] transition-colors duration-300",
                        isActive
                          ? "text-gold"
                          : "text-foreground/70 hover:text-foreground"
                      )}
                    >
                      {item.label}
                      <span
                        aria-hidden
                        className={cn(
                          "absolute -bottom-0.5 left-0 h-px w-full origin-left bg-gold transition-transform duration-500 ease-luxe",
                          isActive
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        )}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Button
            asChild
            variant="outline-gold"
            size="sm"
            className="hidden xl:inline-flex"
          >
            <a href={primaryCta.href}>{primaryCta.label}</a>
          </Button>

          <button
            type="button"
            className="grid size-11 place-items-center rounded-sm border border-gold/40 text-foreground transition-colors hover:border-gold lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">
              {open ? "Fechar menu" : "Abrir menu"}
            </span>
          </button>
        </div>
      </header>

      {/* Fora do <header>: o backdrop-filter dele prenderia este painel fixo */}
      <div
        id="menu-mobile"
        hidden={!open}
        className="theme-navy fixed inset-x-0 top-[var(--header-h)] bottom-0 z-40 overflow-y-auto bg-navy-950 text-foreground lg:hidden"
      >
        <nav
          aria-label="Menu mobile"
          className="shell flex min-h-full flex-col py-10"
        >
          <ul className="border-t border-hairline">
            {nav.map((item, i) => (
              <li key={item.href} className="border-b border-hairline">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-5 py-5 font-serif text-3xl text-foreground transition-colors hover:text-gold"
                >
                  <span className="font-sans text-xs tracking-[0.2em] text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild variant="gold" size="lg" className="mt-10 w-full">
            <a href={primaryCta.href} onClick={() => setOpen(false)}>
              {primaryCta.label}
              <ArrowRight />
            </a>
          </Button>
          <div className="mt-auto pt-12 text-sm text-muted-foreground">
            <a href={site.contact.phoneHref} className="block hover:text-gold">
              {site.contact.phoneDisplay}
            </a>
            <a
              href={`mailto:${site.contact.email}`}
              className="mt-2 block hover:text-gold"
            >
              <Email address={site.contact.email} />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
