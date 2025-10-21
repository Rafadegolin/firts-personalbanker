"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Users } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Mesmo fundo do Lovable */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Grid sutil de fundo para profissionalismo */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)]" />

      {/* Bolinhas com sombra - mais discretas e profissionais */}
      <div className="absolute top-1/4 left-10 w-12 h-12 bg-first-blue/8 rounded-full animate-float blur-md" />
      <div
        className="absolute bottom-1/4 right-16 w-10 h-10 bg-first-yellow/8 rounded-full animate-float blur-md"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-8 h-8 bg-emerald/8 rounded-full animate-float blur-md"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-6 h-6 bg-muted/20 rounded-full animate-float blur-md"
        style={{ animationDelay: "3s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in">
              Seu Advisor Pessoal para as melhores{" "}
              <span className="text-primary relative inline-block animate-slide-in-up delay-200">
                soluções financeiras.
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-accent/40"
                  viewBox="0 0 300 12"
                  fill="none"
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

            <p className="text-xl text-muted-foreground max-w-2xl animate-fade-in delay-300">
              Soluções Financeiras Inteligentes para Empresas e Investidores
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 animate-fade-in delay-400">
              <Button
                onClick={() => scrollTo("#contato")}
                variant="elegant"
                size="lg"
                className="font-semibold px-8 py-4 rounded-lg hover:scale-105 group cursor-pointer shadow-elegant hover:shadow-glow transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Solicitar Consultoria
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-first-blue-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>

              <Button
                onClick={() => scrollTo("#servicos")}
                variant="accent"
                size="lg"
                className="font-semibold px-8 py-4 rounded-lg hover:scale-105 cursor-pointer shadow-button transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Conhecer Soluções</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/90 to-first-yellow-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border/30">
              <div className="text-center group animate-scale-in delay-500">
                <div className="text-2xl lg:text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                  20+
                </div>
                <div className="text-sm text-muted-foreground">
                  Anos de Experiência
                </div>
              </div>
              <div className="text-center group animate-scale-in delay-[600ms]">
                <div className="text-2xl lg:text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                  CEA
                </div>
                <div className="text-sm text-muted-foreground">
                  Certificação Anbima
                </div>
              </div>
              <div className="text-center group animate-scale-in delay-[700ms]">
                <div className="text-2xl lg:text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                  Hub
                </div>
                <div className="text-sm text-muted-foreground">
                  de Parceiros
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right delay-200">
            <div className="relative bg-gradient-card rounded-3xl p-8 lg:p-12 shadow-elegant hover:shadow-premium transition-all duration-500">
              <div className="bg-gradient-premium rounded-2xl p-8 text-center text-white shadow-premium relative overflow-hidden group">
                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
                </div>

                <div className="flex justify-center mb-6 relative z-10">
                  <div className="relative">
                    <div className="relative w-32 h-32 lg:w-40 lg:h-40 ring-4 ring-accent/20 rounded-full group-hover:ring-accent/40 transition-all duration-500">
                      <Image
                        src="/foto1.jpg"
                        alt="Foto Emerson Gonzaga"
                        fill
                        className="rounded-full object-cover object-top"
                        quality={95}
                        priority
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-lg animate-pulse-subtle">
                      <Shield className="w-5 h-5 text-accent-foreground" />
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4 relative z-10 text-white">
                  Emerson Gonzaga
                </h3>
                <p className="text-white/95 text-sm mb-6 relative z-10">
                  Advisor Financeiro Pessoal e Corporativo
                  <br />
                  MBAs FGV/UNIP/ESALQ
                  <br />
                  Certificação CEA Anbima
                </p>

                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20 hover:border-accent/50 transition-all duration-300 relative z-10">
                  <div className="text-lg font-semibold text-accent mb-1">
                    R$ 1BI+
                  </div>
                  <div className="text-xs text-white/90">
                    Volume Intermediado
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
