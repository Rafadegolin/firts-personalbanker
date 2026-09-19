import { RevealObserver } from "@/components/brand/RevealObserver";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Credit } from "@/components/sections/Credit";
import { Hero } from "@/components/sections/Hero";
import { International } from "@/components/sections/International";
import { Manifesto } from "@/components/sections/Manifesto";
import { Mentoria } from "@/components/sections/Mentoria";
import { Numbers } from "@/components/sections/Numbers";
import { Solutions } from "@/components/sections/Solutions";
import { Testimonials } from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Numbers />
        <Manifesto />
        <About />
        <Mentoria />
        <Solutions />
        <Credit />
        <International />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
