import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustSection } from "@/components/sections/TrustSection";
import { CoreCategoriesSection } from "@/components/sections/CoreCategoriesSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { StandardVsCustomSection } from "@/components/sections/StandardVsCustomSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { MonthlySupportSection } from "@/components/sections/MonthlySupportSection";
import { LifecycleSection } from "@/components/sections/LifecycleSection";
import { DoMoreBusinessSection } from "@/components/sections/DoMoreBusinessSection";
import { SmallBizEntrySection } from "@/components/sections/SmallBizEntrySection";
import { FAQSection } from "@/components/sections/FAQSection";
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
        {/* 1. Hero: Short Value Proposition & Direct CTAs */}
        <Hero />

        {/* 2. Trust & Verified Qualifications: Zero Fabricated Metrics */}
        <TrustSection />

        {/* 3. Three Core Commercial Categories */}
        <CoreCategoriesSection />

        {/* 4. Compact Horizontal Service Cards */}
        <ServicesSection />

        {/* 5. How We Work: 5-Step Delivery Sequence */}
        <HowItWorksSection />

        {/* 6. Standard vs Custom Architecture */}
        <StandardVsCustomSection />

        {/* 7. Project Pricing: Transparent Rates in USD ($) */}
        <PricingSection />

        {/* 8. Monthly Support Plans: "Your system should not be abandoned" */}
        <MonthlySupportSection />

        {/* 9. More Than a Handover: 7-Stage Lifecycle */}
        <LifecycleSection />

        {/* 10. Do More Business: Connected Systems Multiplier */}
        <DoMoreBusinessSection />

        {/* 11. Website + Lead Capture + Basic CRM: Small Biz Flow */}
        <SmallBizEntrySection />

        {/* 12. Transparent FAQs Accordion */}
        <FAQSection />

        {/* 13. Production Lead Capture / Contact Section */}
        <ContactSection />
      </main>

      {/* Production Footer */}
      <Footer />

      {/* Persistent Direct Action Controls */}
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
