// components/HeroSection.tsx
"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Users } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-accent/10 rounded-full animate-float" />
      <div
        className="absolute bottom-1/4 right-16 w-16 h-16 bg-primary/10 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-12 h-12 bg-warning/10 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center bg-accent/10 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              Personal Banker Empresarial
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Transforme Capital em{" "}
              <span className="text-primary relative">
                Oportunidades
                <svg
                  className="absolute bottom-0 left-0 w-full h-3 text-accent/30"
                  viewBox="0 0 300 12"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M2 10C100 3 200 3 298 10"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-4 max-w-2xl">
              Soluções Financeiras Inteligentes para Empresas e Investidores
            </p>

            <p className="text-lg text-foreground/80 mb-8 max-w-2xl">
              Com 20 anos de experiência em Bancos Internacionais, ofereço
              assessoria personalizada como seu Personal Banker empresarial.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollTo("#contato")}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer"
              >
                Solicitar Consultoria
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                onClick={() => scrollTo("#servicos")}
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                Conhecer Soluções
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">
                  20+
                </div>
                <div className="text-sm text-muted-foreground">
                  Anos de Experiência
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">
                  CEA
                </div>
                <div className="text-sm text-muted-foreground">
                  Certificação Anbima
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">
                  Hub
                </div>
                <div className="text-sm text-muted-foreground">
                  de Parceiros
                </div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative animate-slide-in-right">
            <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 lg:p-12">
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-center text-primary-foreground">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-24 h-24 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                      <Users className="w-12 h-12" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <Shield className="w-4 h-4 text-accent-foreground" />
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">Emerson Gonzaga</h3>
                <p className="text-primary-foreground/90 text-sm mb-6">
                  Personal Banker Empresarial
                  <br />
                  MBAs FGV/UNIP/ESALQ
                  <br />
                  Certificação CEA Anbima
                </p>

                <div className="bg-primary-foreground/10 rounded-lg p-4">
                  <div className="text-lg font-semibold text-accent mb-1">
                    R$ 2.5M+
                  </div>
                  <div className="text-xs text-primary-foreground/80">
                    Volume Intermediado
                  </div>
                </div>
              </div>

              {/* Floating achievement cards */}
              <div className="absolute -top-4 -left-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-float">
                ✨ Boutique Financeira
              </div>

              <div
                className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                🏆 20 Anos Experiência
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
