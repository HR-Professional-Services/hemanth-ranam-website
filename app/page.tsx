import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { BusinessSystemsSection } from "@/components/sections/BusinessSystemsSection";
import { TradingTechSection } from "@/components/sections/TradingTechSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ScaleNovaSection } from "@/components/sections/ScaleNovaSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { BackToTop } from "@/components/ui/BackToTop";
import { FloatingContactCTA } from "@/components/ui/FloatingContactCTA";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Primary Sticky Header */}
      <Navbar />

      {/* Main Page Flow */}
      <main id="main-content" className="flex flex-col">
        <Hero />
        <TrustStrip />
        <AboutSection />
        <ServicesSection />
        <BusinessSystemsSection />
        <TradingTechSection />
        <TechStackSection />
        <ProcessSection />
        <ExperienceSection />
        <ScaleNovaSection />
        <ContactSection />
      </main>

      {/* Primary Footer */}
      <Footer />

      {/* Floating Helpers */}
      <BackToTop />
      <FloatingContactCTA />
    </div>
  );
}
