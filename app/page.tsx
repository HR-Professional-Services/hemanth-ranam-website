import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { CoreCategoriesSection } from "@/components/sections/CoreCategoriesSection";
import { WhatWeSolveSection } from "@/components/sections/WhatWeSolveSection";
import { HowItWorksSection as HowWeWorkSection } from "@/components/sections/HowItWorksSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SystemWorkflowVisualsSection } from "@/components/sections/SystemWorkflowVisualsSection";
import { StandardVsCustomSection } from "@/components/sections/StandardVsCustomSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { SupportAndTrainingSection } from "@/components/sections/SupportAndTrainingSection";
import { LifecycleSection } from "@/components/sections/LifecycleSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BackToTop } from "@/components/ui/BackToTop";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      {/* Viewport Reading Progress Bar */}
      <ScrollProgressBar />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Production Homepage Flow (ScaleNova-Level Systems Architecture) */}
      <main id="main-content" className="flex flex-col">
        {/* 1. Hero: Business Systems, Software, Automation, Trading Technology */}
        <Hero />

        {/* 2. Three Core Categories: Business & Consulting, Software & Web, Trading Technology */}
        <CoreCategoriesSection />

        {/* 3. What We Solve: Manual Work, Disconnected Tools, Lead Leakage, Repetitive Work */}
        <WhatWeSolveSection />

        {/* 4. How We Work: Problem -> Plan -> Build -> Automate -> Train -> Support */}
        <HowWeWorkSection />

        {/* 5. Services: Compact Horizontal Icon + Heading Layout */}
        <ServicesSection />

        {/* 6. System Workflow Visuals: Real Pipelines & Interactive Examples */}
        <SystemWorkflowVisualsSection />

        {/* 7. Standard vs Custom Architecture */}
        <StandardVsCustomSection />

        {/* 8. Project Pricing: Locked Rates in USD ($), Was Price Subtle */}
        <PricingSection />

        {/* 9. Monthly Support & Improvement: Configurable Post-Launch Support Tiers */}
        <SupportAndTrainingSection />

        {/* 10. More Than a Handover: 7-Stage Support & Training Lifecycle */}
        <LifecycleSection />

        {/* 11. FAQ: Transparent, Practical Answers */}
        <FAQSection />

        {/* 12. Final CTA: "Your business doesn't need more tools. It needs better systems." */}
        <FinalCTASection />

        {/* 13. Production Lead Capture / Contact Section with Service Context */}
        <div id="contact">
          <ContactSection />
        </div>
      </main>

      {/* Production Footer */}
      <Footer />

      {/* Persistent Direct Action Controls */}
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
