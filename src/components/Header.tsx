// components/Header.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Crédito", href: "#credito" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Contato", href: "#contato" },
  ];

  const scrollToSection = (href: string) => {
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border/40 shadow-elegant"
          : "bg-background/98 backdrop-blur-md border-b border-border/20"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24 lg:h-28">
          {/* Logo - Destacado */}
          <div
            className="flex items-center animate-fade-in group cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="relative">
              {/* Glow effect sutil */}
              <div className="absolute inset-0 bg-gradient-to-r from-first-blue/20 to-first-yellow/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image
                src="/Logopng.png"
                alt="FIRST - Personal Banker & Financial Advisor"
                width={700}
                height={500}
                priority
                className={`relative h-30 lg:h-42 pt-2 w-auto transition-all duration-500 ${
                  isScrolled
                    ? "lg:h-20 group-hover:scale-105"
                    : "group-hover:scale-110 drop-shadow-lg"
                }`}
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-foreground/80 hover:text-primary transition-all duration-300 font-medium relative group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-3/4 rounded-full" />
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex animate-slide-in-right">
            <Button
              onClick={() => scrollToSection("#contato")}
              variant="default"
              className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-accent-foreground font-semibold px-6 py-3 rounded-lg shadow-button hover:shadow-glow transition-all duration-300 hover:scale-105 cursor-pointer relative overflow-hidden group"
            >
              <span className="relative z-10">Fale com Especialista</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent/90 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-muted/50 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Abrir/fechar menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-slide-in-up">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.href);
                    setIsMenuOpen(false);
                  }}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2 text-left"
                >
                  {item.name}
                </button>
              ))}
              <Button
                onClick={() => {
                  scrollToSection("#contato");
                  setIsMenuOpen(false);
                }}
                variant="default"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold mt-4 w-full"
              >
                Fale com Especialista
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
