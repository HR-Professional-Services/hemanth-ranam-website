import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { CoreCategoriesSection } from "@/components/sections/CoreCategoriesSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SystemWorkflowVisualsSection } from "@/components/sections/SystemWorkflowVisualsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { LifecycleSection } from "@/components/sections/LifecycleSection";
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

      {/* Sticky Header Navigation (5 clean options + WhatsApp + Discuss) */}
      <Navbar />

      {/* Simplified, Fast, Cute, and Premium Personal Services Flow */}
      <main id="main-content" className="flex flex-col">
        {/* 1. Hero: Personal introduction & direct value proposition */}
        <Hero />

        {/* 2. Three Core Categories: Business & Consulting, Software & Web, Trading Technology */}
        <CoreCategoriesSection />

        {/* 3. What I Build / Services: Compact Horizontal Icon + Heading Layout */}
        <ServicesSection />

        {/* 4. One Simple Visual Workflow: Idea -> System -> Automation -> Support -> Grow */}
        <SystemWorkflowVisualsSection />

        {/* 5. Pricing: 5 Approved One-Time Projects + Monthly Subscriptions */}
        <PricingSection />

        {/* 6. More Than a Handover: 4 Pillars (Build, Train, Support, Improve) */}
        <LifecycleSection />

        {/* 7. Final CTA: "Your business doesn't need more tools. It needs better systems." */}
        <FinalCTASection />

        {/* 8. Lead Capture Form with Automated Plan Context */}
        <div id="contact">
          <ContactSection />
        </div>
      </main>

      {/* Compact Clean Footer */}
      <Footer />

      {/* Persistent WhatsApp Floating Button & Back to Top */}
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
