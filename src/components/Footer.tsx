// components/Footer.tsx
"use client";

import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Youtube,
  ArrowUp,
  Building,
  Shield,
  FileText,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    services: [
      "Soluções em Crédito",
      "Assessoria em Investimentos",
      "Assessoria Bancária",
      "Outras Soluções",
    ],
    company: ["Sobre a FIRST", "Nossa Equipe", "Certificações", "Parceiros"],
    legal: [
      "Política de Privacidade",
      "Termos de Uso",
      "LGPD",
      "Código de Ética",
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-gradient-to-br from-first-blue-dark to-first-blue text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <Image
                src="/Logo.png" // coloque em /public/first-logo.png
                alt="FIRST - Personal Banker & Financial Advisor"
                width={200}
                height={64}
                priority
                className="h-16 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-primary-foreground/80 leading-relaxed">
                Sua boutique financeira especializada em soluções personalizadas
                para empresas. 20 anos de experiência em bancos internacionais
                ao seu serviço.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80">
                  +55 (11) 99999-9999
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80">
                  contato@first.com.br
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80">
                  São Paulo, SP - Brasil
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-primary-foreground mb-4">
                Redes Sociais
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-6 text-lg">
              Serviços
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((service) => (
                <li key={service}>
                  <a
                    href="#servicos" // ⚠️ sem acento para casar com id="servicos"
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-6 text-lg">
              Empresa
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((item) => (
                <li key={item}>
                  <a
                    href="#sobre"
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Newsletter */}
          <div className="space-y-8">
            <div>
              <h4 className="font-semibold text-primary-foreground mb-6 text-lg">
                Legal
              </h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((item) => (
                  <li key={item}>
                    <a
                      href="/politica-de-privacidade"
                      className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="bg-primary-foreground/10 rounded-lg p-6">
              <h4 className="font-semibold text-primary-foreground mb-3 ">
                Newsletter
              </h4>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Receba insights financeiros exclusivos
              </p>
              <div className="flex space-x-2">
                <Button
                  className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-medium cursor-pointer"
                  size="sm"
                >
                  Assinar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Separator */}
      <Separator className="bg-primary-foreground/20" />

      {/* Bottom Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
          {/* Company Details */}
          <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8 text-center lg:text-left">
            <div className="flex items-center space-x-2">
              <Building className="w-5 h-5 text-accent" />
              <span className="text-primary-foreground/80 text-sm">
                FIRST SERVIÇOS ESPECIALIZADOS LTDA
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <FileText className="w-5 h-5 text-accent" />
              <span className="text-primary-foreground/80 text-sm">
                CNPJ: 00.000.000/0001-00
              </span>
            </div>
          </div>

          {/* Copyright & Scroll to Top */}
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <p className="text-primary-foreground/80 text-sm">
                © 2024 FIRST. Todos os direitos reservados.
              </p>
              <div className="flex items-center justify-center space-x-4 mt-2">
                <div className="flex items-center space-x-1">
                  <Shield className="w-4 h-4 text-accent" />
                  <span className="text-primary-foreground/60 text-xs">
                    SSL Seguro
                  </span>
                </div>
                <div className="text-primary-foreground/60 text-xs">•</div>
                <span className="text-primary-foreground/60 text-xs">
                  LGPD Compliance
                </span>
              </div>
            </div>

            <Button
              onClick={scrollToTop}
              size="icon"
              variant="outline"
              aria-label="Voltar ao topo"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <ArrowUp className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Action Button for Quick Contact */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-2xl hover:shadow-accent/25 transition-all duration-300 hover:scale-110 p-4 cursor-pointer"
          onClick={() =>
            document
              .getElementById("contato")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <Phone className="w-6 h-6 mr-2" />
          Contato
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
