import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ContactSection } from "@/components/sections/ContactSection";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BackToTop } from "@/components/ui/BackToTop";
import { TechBackground3D } from "@/components/ui/TechBackground3D";
import { Sparkles, MessageSquare, Mail, Calendar, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Contact & Project Discovery | Hemanth Ranam",
  description:
    "Get in touch with Hemanth Ranam for Business Operating Systems, CRM automation, Frappe/ERPNext implementation, or trading technology consultations.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-blue-600/20 selection:text-blue-700 overflow-x-hidden">
      <TechBackground3D />
      <Navbar />

      <main id="main-content" className="relative z-10 flex flex-col pt-16">
        {/* Header Hero */}
        <section className="pt-16 pb-8 sm:pt-20 sm:pb-12 border-b border-slate-200/80 bg-slate-50/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Direct Discovery &amp; Enquiries</span>
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Start Your Project{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 bg-clip-text text-transparent">
                Discovery.
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
              Every submission goes directly to Hemanth Ranam. Expect a direct, actionable response within 24 business hours.
            </p>

            {/* Quick Contact Badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={SITE_CONFIG.whatsappUrl}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold hover:bg-emerald-100 transition-all shadow-xs"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Instant WhatsApp Chat</span>
              </a>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 text-blue-800 border border-blue-200 text-xs font-bold shadow-xs">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>Guaranteed 24h Turnaround SLA</span>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Capture Form Section */}
        <ContactSection />
      </main>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
