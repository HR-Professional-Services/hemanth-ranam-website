import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { WhatWeSolveSection } from "@/components/sections/WhatWeSolveSection";
import { CoreCategoriesSection } from "@/components/sections/CoreCategoriesSection";
import { InteractiveBusinessOsDiagram } from "@/components/sections/InteractiveBusinessOsDiagram";
import { HowItWorksProcess } from "@/components/sections/HowItWorksProcess";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { WhyHemanthSection } from "@/components/sections/WhyHemanthSection";
import { BusinessOsPricingSection } from "@/components/sections/BusinessOsPricingSection";
import { BusinessOsFaqSection } from "@/components/sections/BusinessOsFaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BackToTop } from "@/components/ui/BackToTop";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-blue-600/20 selection:text-blue-700 overflow-x-hidden">
      {/* Viewport Reading Progress Bar */}
      <ScrollProgressBar />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Homepage Flow */}
      <main id="main-content" className="relative z-10 flex flex-col">
        {/* 1. HERO: "Business Systems That Make Your Business Easier to Run" */}
        <Hero />

        {/* 2. PROBLEM: "Your business shouldn't depend on disconnected tools." */}
        <WhatWeSolveSection />

        {/* 3. CORE SERVICES: The 5 Pillars */}
        <CoreCategoriesSection />

        {/* 4. BUSINESS SYSTEMS FLAGSHIP: 9-Stage Connected Sequence */}
        <InteractiveBusinessOsDiagram />

        {/* 5. HOW IT WORKS: 6-Stage Process (Understand to Support) */}
        <HowItWorksProcess />

        {/* 6. SELECTED WORK: Real Projects, Internal Architectures & Demonstrations */}
        <CaseStudiesSection />

        {/* 7. FOUNDER: "Built directly by Hemanth Ranam" */}
        <WhyHemanthSection />

        {/* 8. PRICING & MONTHLY CARE: Clear Investment */}
        <BusinessOsPricingSection />

        {/* 9. FREQUENTLY ASKED QUESTIONS */}
        <BusinessOsFaqSection />

        {/* 10. LEAD CAPTURE & CONSULTATION BOOKING */}
        <ContactSection />
      </main>

      {/* Clean Professional Footer */}
      <Footer />

      {/* Persistent WhatsApp Floating Button & Back to Top */}
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
