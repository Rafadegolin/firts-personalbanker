// app/page.tsx
"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CreditSolutionsSection from "@/components/CreditSolutionsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import VideoTestimonialSection from "@/components/VideoTestimonialSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div id="home">
          <HeroSection />
        </div>
        <AboutSection />
        <ServicesSection />
        <CreditSolutionsSection />
        <TestimonialsSection />
        <VideoTestimonialSection />
        <ContactSection />
      </main>
      <Footer />
      <ThemeToggle />
    </div>
  );
}
