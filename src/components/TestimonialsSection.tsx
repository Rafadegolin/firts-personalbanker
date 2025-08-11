// components/TestimonialsSection.tsx
"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const AUTOPLAY_MS = 6000;

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches,
    []
  );

  const testimonials = [
    {
      name: "Alessandra Oses",
      company: "Copperfio",
      position: "Diretora Financeira",
      testimonial:
        "A FIRST revolucionou nossa gestão financeira. Com a consultoria do Emerson, conseguimos otimizar nosso fluxo de caixa e encontrar as melhores condições de crédito do mercado. Recomendo sem hesitar.",
      rating: 5,
    },
    {
      name: "Maria José Barioni",
      company: "Mocafor",
      position: "CEO",
      testimonial:
        "O atendimento personalizado da FIRST fez toda a diferença. Emerson entende profundamente as necessidades empresariais e sempre encontra soluções inovadoras. Uma parceria que agrega muito valor.",
      rating: 5,
    },
    {
      name: "Cláudio Garcia Jr",
      company: "R J Nascimento",
      position: "Diretor Comercial",
      testimonial:
        "Trabalhar com a FIRST é ter um personal banker dedicado exclusivamente aos nossos objetivos. A expertise e rede de contatos do Emerson nos abriu portas que não imaginávamos possíveis.",
      rating: 5,
    },
    {
      name: "José Roberto",
      company: "Cairu PMA",
      position: "Diretor Executivo",
      testimonial:
        "A FIRST nos trouxe soluções financeiras que impactaram diretamente nossos resultados. O conhecimento técnico aliado ao atendimento humanizado faz da FIRST nossa primeira escolha em consultoria financeira.",
      rating: 5,
    },
  ];

  const len = testimonials.length;

  useEffect(() => {
    if (reducedMotion || paused) return;
    const id = setInterval(() => setCurrent((i) => (i + 1) % len), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [len, paused, reducedMotion]);

  const next = () => setCurrent((i) => (i + 1) % len);
  const prev = () => setCurrent((i) => (i - 1 + len) % len);

  return (
    <section
      className="py-20 bg-gradient-to-br from-primary/5 to-accent/5"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 text-sm font-medium"
          >
            Depoimentos
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            O que nossos <span className="text-primary">clientes dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Histórias reais de empresas que transformaram seus resultados com
            nossas soluções
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12 animate-fade-in">
          <Card className="relative overflow-hidden border border-primary/20 shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
            <CardContent className="p-8 lg:p-12">
              <div className="flex flex-col items-center text-center">
                {/* Quote icon */}
                <div className="mb-6">
                  <Quote className="w-16 h-16 text-primary/20" />
                </div>

                {/* Stars */}
                <div
                  className="flex items-center space-x-1 mb-6"
                  aria-label={`${testimonials[current].rating} de 5 estrelas`}
                >
                  {Array.from({ length: testimonials[current].rating }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-accent text-accent"
                      />
                    )
                  )}
                </div>

                {/* Testimonial text */}
                <blockquote
                  className="text-xl lg:text-2xl text-foreground leading-relaxed mb-8 italic"
                  aria-live="polite"
                >
                  “{testimonials[current].testimonial}”
                </blockquote>

                {/* Author info */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-4">
                    <span className="text-primary-foreground font-bold text-xl">
                      {testimonials[current].name.charAt(0)}
                    </span>
                  </div>

                  <div className="text-center">
                    <h4 className="text-lg font-bold text-foreground">
                      {testimonials[current].name}
                    </h4>
                    <p className="text-primary font-medium">
                      {testimonials[current].position}
                    </p>
                    <p className="text-muted-foreground">
                      {testimonials[current].company}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              aria-label="Depoimento anterior"
              className="w-12 h-12 rounded-full border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots indicator */}
            <div
              className="flex space-x-2"
              role="tablist"
              aria-label="Selecionar depoimento"
            >
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  role="tab"
                  aria-selected={index === current}
                  aria-label={`Selecionar depoimento ${index + 1}`}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                    index === current
                      ? "bg-primary scale-125"
                      : "bg-primary/30 hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              aria-label="Próximo depoimento"
              className="w-12 h-12 rounded-full border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* All testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
          {testimonials.map((t, index) => (
            <Card
              key={t.name}
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                index === current
                  ? "ring-2 ring-primary/50 shadow-lg"
                  : "hover:shadow-md"
              }`}
              onClick={() => setCurrent(index)}
              aria-label={`Ver depoimento de ${t.name}`}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-primary font-bold">
                    {t.name.charAt(0)}
                  </span>
                </div>

                <h4 className="font-bold text-foreground mb-1">{t.name}</h4>
                <p className="text-primary text-sm font-medium mb-1">
                  {t.position}
                </p>
                <p className="text-muted-foreground text-sm">{t.company}</p>

                <div
                  className="flex items-center justify-center space-x-1 mt-3"
                  aria-hidden="true"
                >
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Satisfação dos Clientes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">250+</div>
            <div className="text-muted-foreground">Empresas Atendidas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-warning mb-2">15 anos</div>
            <div className="text-muted-foreground">Relacionamento Médio</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5★</div>
            <div className="text-muted-foreground">Avaliação Média</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
