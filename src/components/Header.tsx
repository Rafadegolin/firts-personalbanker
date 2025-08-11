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
    { name: "Serviços", href: "#servicos" },
    { name: "Crédito", href: "#credito" },
    { name: "Sobre", href: "#sobre" },
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
          ? "bg-background/20 backdrop-blur-xl border-b border-border/30 shadow-lg"
          : "bg-background/95 backdrop-blur-sm border-b border-border"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/Logo.png" // coloque o arquivo em /public/first-logo.png
              alt="FIRST - Personal Banker & Financial Advisor"
              width={160}
              height={48}
              priority
              className="h-10 lg:h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium relative group cursor-pointer"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Button
              onClick={() => scrollToSection("#contato")}
              variant="default"
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              Fale com Especialista
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Abrir/fechar menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
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
