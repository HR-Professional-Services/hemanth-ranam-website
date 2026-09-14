import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { BusinessOsIntroSection } from "@/components/sections/BusinessOsIntroSection";
import { BusinessOsProductGrid } from "@/components/sections/BusinessOsProductGrid";
import { InteractiveBusinessOsDiagram } from "@/components/sections/InteractiveBusinessOsDiagram";
import { DigitalGrowthSection } from "@/components/sections/DigitalGrowthSection";
import { HowItWorksProcess } from "@/components/sections/HowItWorksProcess";
import { BusinessOsPricingSection } from "@/components/sections/BusinessOsPricingSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { TradingTechnologySection } from "@/components/sections/TradingTechnologySection";
import { WhyHemanthSection } from "@/components/sections/WhyHemanthSection";
import { BusinessOsFaqSection } from "@/components/sections/BusinessOsFaqSection";
import { BusinessOsFinalCta } from "@/components/sections/BusinessOsFinalCta";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BackToTop } from "@/components/ui/BackToTop";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#060911] text-slate-100 selection:bg-blue-600/30 selection:text-blue-200 overflow-x-hidden">
      {/* Viewport Reading Progress Bar */}
      <ScrollProgressBar />

      {/* Sticky Header Navigation with Division Menus */}
      <Navbar />

      {/* Main Homepage Flow (SaaS Platform Architecture) */}
      <main id="main-content" className="flex flex-col">
        {/* 1. HERO: "BUILD YOUR BUSINESS OPERATING SYSTEM" + Floating Dashboard Mockup */}
        <Hero />

        {/* 2. BUSINESS OS INTRODUCTION: "Your business should not run across ten disconnected tools." */}
        <BusinessOsIntroSection />

        {/* 3. BUSINESS OS PRODUCT GRID: 10 Core Operating Systems */}
        <BusinessOsProductGrid />

        {/* 4. INTERACTIVE BUSINESS OS DIAGRAM: Automated Inbound-to-Management Flow */}
        <InteractiveBusinessOsDiagram />

        {/* 5. 02 DIGITAL GROWTH: Featuring Website Growth OS */}
        <DigitalGrowthSection />

        {/* 6. HOW IT WORKS: 8-Stage Methodology (Discover to Improve) */}
        <HowItWorksProcess />

        {/* 7. PRICING ARCHITECTURE: One-Time Implementation vs. Monthly Managed Business OS */}
        <BusinessOsPricingSection />

        {/* 8. SELECTED SYSTEMS & CASE STUDIES: UI Dashboard Mockups */}
        <CaseStudiesSection />

        {/* 9. 03 TRADING TECHNOLOGY: Systematic Pine Script & MT5 Tools */}
        <TradingTechnologySection />

        {/* 10. WHY HEMANTH: Founder-Led, MBA/CMI Level 7, Zero Agency Fluff */}
        <WhyHemanthSection />

        {/* 11. FREQUENTLY ASKED QUESTIONS */}
        <BusinessOsFaqSection />

        {/* 12. FINAL CTA: "Build the system your business actually needs." */}
        <BusinessOsFinalCta />

        {/* 13. LEAD CAPTURE CONTACT FORM (Preserving Google Sheets CRM & Lead IDs) */}
        <ContactSection />
      </main>

      {/* Compact Clean Executive Footer */}
      <Footer />

      {/* Persistent WhatsApp Floating Button & Back to Top */}
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
