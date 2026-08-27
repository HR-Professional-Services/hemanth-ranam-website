import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { TradingTechSection } from "@/components/sections/TradingTechSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BackToTop } from "@/components/ui/BackToTop";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      {/* Viewport Progress */}
      <ScrollProgressBar />

      {/* Sticky Header */}
      <Navbar />

      {/* Streamlined Main Page Flow */}
      <main id="main-content" className="flex flex-col">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <TechStackSection />
        <TradingTechSection />
        <PricingSection />
        <ContactSection />
      </main>

      {/* Clean White Footer */}
      <Footer />

      {/* Floating Action Elements */}
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
