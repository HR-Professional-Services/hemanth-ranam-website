import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { VisualFlowsSection } from "@/components/sections/VisualFlowsSection";
import { TradingTechSection } from "@/components/sections/TradingTechSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { WhyWorkWithMeSection } from "@/components/sections/WhyWorkWithMeSection";
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

      {/* Sticky Header */}
      <Navbar />

      {/* Main Single Page Content */}
      <main id="main-content" className="flex flex-col">
        <Hero />
        <TrustStrip />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <VisualFlowsSection />
        <TradingTechSection />
        <TechStackSection />
        <PricingSection />
        <ExperienceSection />
        <WhyWorkWithMeSection />
        <ContactSection />
      </main>

      {/* Minimal White Footer */}
      <Footer />

      {/* Floating Helpers */}
      <BackToTop />
      <FloatingContactCTA />
    </div>
  );
}
