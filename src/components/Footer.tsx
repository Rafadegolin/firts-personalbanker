// components/Footer.tsx
"use client";

import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
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
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/emersonluizgonzaga1983/",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/emerson.gonzaga.first/",
      label: "Instagram",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-first-blue-dark to-first-blue text-white dark:from-first-blue-deeper dark:to-first-blue-dark">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Company Info - Takes 2 columns on desktop */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Image
                src="/Logopng.png"
                alt="FIRST - Personal Banker & Financial Advisor"
                width={240}
                height={80}
                priority
                className="h-20 w-auto mb-4"
              />
              <p className="text-white/80 dark:text-white/90 leading-relaxed text-sm max-w-xs">
                Seu Advisor Pessoal para as melhores soluções financeiras. 20
                anos de experiência em bancos internacionais ao seu serviço.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-2.5">
              <a
                href="tel:+5519997618780"
                className="flex items-center space-x-2.5 text-white/80 dark:text-white/90 hover:text-accent transition-colors text-sm group"
              >
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span>+55 (19) 99761-8780</span>
              </a>
              <a
                href="mailto:emerson.gonzaga@advisorfirst.com.br"
                className="flex items-center space-x-2.5 text-white/80 dark:text-white/90 hover:text-accent transition-colors text-sm group"
              >
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="break-all">
                  emerson.gonzaga@advisorfirst.com.br
                </span>
              </a>
              <div className="flex items-center space-x-2.5 text-white/80 dark:text-white/90 text-sm">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <span>Mogi Guaçu, SP - Brasil</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-base">
              Serviços
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((service) => (
                <li key={service}>
                  <a
                    href="#servicos"
                    className="text-white/80 dark:text-white/90 hover:text-accent transition-colors text-sm inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-base">Empresa</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((item) => (
                <li key={item}>
                  <a
                    href="#sobre"
                    className="text-white/80 dark:text-white/90 hover:text-accent transition-colors text-sm inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-base">Legal</h4>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((item) => (
                <li key={item}>
                  <a
                    href="/politica-de-privacidade"
                    className="text-white/80 dark:text-white/90 hover:text-accent transition-colors text-sm inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact/Social */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-base">
              Conecte-se
            </h4>
            <div className="flex space-x-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 bg-white/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            <div className="space-y-2 text-xs text-white/70 dark:text-white/80">
              <div className="flex items-center space-x-1.5">
                <Shield className="w-3.5 h-3.5 text-accent" />
                <span>SSL Seguro</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Shield className="w-3.5 h-3.5 text-accent" />
                <span>LGPD Compliance</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Separator */}
      <Separator className="bg-white/10" />

      {/* Bottom Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          {/* Copyright */}
          <div className="text-white/70 dark:text-white/80 text-xs">
            © 2025 FIRST SERVICOS E NEGOCIOS ESPECIALIZADOS LTDA. Todos os
            direitos reservados.
          </div>

          {/* Company Details */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-white/70 dark:text-white/80">
            <div className="flex items-center space-x-1.5">
              <FileText className="w-3.5 h-3.5 text-accent" />
              <span>CNPJ: 59.715.892/0001-50</span>
            </div>
            <span className="hidden md:inline">•</span>
            <div className="flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              <span>Mogi Guaçu, SP</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
