"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Quote } from "lucide-react";
import { useState } from "react";

const VideoTestimonialSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      id="video-depoimento"
      className="relative py-16 md:py-24 bg-gradient-to-br from-background via-background to-muted/30 overflow-hidden"
    >
      {/* Decorative Background - mais sutil e profissional */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-first-blue/6 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 -right-20 w-80 h-80 bg-muted/40 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            <Quote className="w-3 h-3 mr-1" />
            Depoimento Real
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Veja o que nossos clientes{" "}
            <span className="text-gradient">falam sobre nós</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Histórias reais de sucesso e transformação financeira com a FIRST.
          </p>
        </div>

        {/* Video Card */}
        <div className="max-w-5xl mx-auto animate-scale-in delay-200">
          <Card className="relative overflow-hidden shadow-elegant border-border/60 bg-card/50 backdrop-blur-sm">
            <div className="relative aspect-video bg-gradient-to-br from-muted/50 to-muted/80">
              <video
                id="testimonial-video"
                className="w-full h-full object-cover"
                controls
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              >
                <source src="/depoimento_mock.mp4" type="video/mp4" />
                Seu navegador não suporta a reprodução de vídeos.
              </video>

              {/* Play Overlay - aparece apenas quando o vídeo não está tocando */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-background/60 to-background/40 backdrop-blur-[2px] transition-opacity duration-300 hover:bg-background/50">
                  <button
                    onClick={() => {
                      const video = document.getElementById(
                        "testimonial-video"
                      ) as HTMLVideoElement;
                      if (video) {
                        video.play();
                      }
                    }}
                    className="group relative"
                    aria-label="Reproduzir vídeo"
                  >
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-all duration-300 animate-pulse-subtle" />
                    <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-elegant rounded-full flex items-center justify-center shadow-elegant group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1 fill-white cursor-pointer" />
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Video Info */}
            <div className="p-6 md:p-8 bg-gradient-card">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                    Depoimento de Cliente
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Veja como ajudamos empresas a alcançar seus objetivos
                    financeiros
                  </p>
                </div>
                <Badge
                  variant="outline"
                  className="self-start md:self-center border-success/40 text-success bg-success/10"
                >
                  ⭐ Cliente Satisfeito
                </Badge>
              </div>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in delay-300">
          <p className="text-muted-foreground mb-4">
            Quer compartilhar sua experiência com a FIRST?
          </p>
          <a
            href="#contato"
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors group"
          >
            Entre em contato conosco
            <span className="ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialSection;
