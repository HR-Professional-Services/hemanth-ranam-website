import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BackToTop } from "@/components/ui/BackToTop";
import { TechBackground3D } from "@/components/ui/TechBackground3D";
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Workflow,
  Cpu,
  Layers,
  GraduationCap,
  Briefcase,
  Terminal,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Hemanth Ranam | Founder & Systems Architect",
  description:
    "Learn about Hemanth Ranam: MBA/CMI Level 7 qualified Systems Architect specializing in serverless Business Operating Systems, Frappe/ERPNext, and trading technology.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-blue-600/20 selection:text-blue-700 overflow-x-hidden">
      <TechBackground3D />
      <Navbar />

      <main id="main-content" className="relative z-10 flex flex-col pt-16">
        {/* Header Hero */}
        <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 border-b border-slate-200/80 bg-slate-50/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Founder &amp; Principal Systems Architect</span>
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Direct Engineering Partnership.{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 bg-clip-text text-transparent">
                Zero Agency Fluff.
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              I help growing companies replace chaotic tool stacks with unified, reliable Business Operating Systems — delivered with fixed milestone pricing and lifetime ownership.
            </p>
          </div>
        </section>

        {/* Credentials & Philosophy Grid */}
        <section className="py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Visual Metric Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs text-center">
                <span className="text-2xl sm:text-3xl font-black text-blue-600 font-mono">CMI L7</span>
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider block mt-1">Management &amp; Leadership</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs text-center">
                <span className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">MBA</span>
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider block mt-1">Strategic Operations</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs text-center">
                <span className="text-2xl sm:text-3xl font-black text-emerald-600 font-mono">100%</span>
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider block mt-1">Direct Architect Access</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs text-center">
                <span className="text-2xl sm:text-3xl font-black text-cyan-600 font-mono">0</span>
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider block mt-1">Per-Seat Licensing</span>
              </div>
            </div>

            {/* Operating Principles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <Workflow className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-bold text-slate-900">Show First. Explain Second.</h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We don&apos;t produce 80-page theoretical slide decks. Every project starts with a working spreadsheet model, an interactive prototype, or live code.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-bold text-slate-900">Data Sovereignty</h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  You own your files, spreadsheets, code, and customer records. No vendor lock-in, no hostage subscriptions, and no per-user pricing penalties as you hire.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center font-bold">
                  <Terminal className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-bold text-slate-900">Battle-Tested Engineering</h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every automation engine runs on hardened Google Apps Script, Next.js edge caching, or open-source Frappe Framework architecture designed for 99.9% uptime.
                </p>
              </div>
            </div>

            {/* CTA Box */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 text-center space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Ready to talk through your business systems?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
                Book a focused 30 or 60-minute strategy session. 100% of your consultation fee is credited toward any eligible implementation service.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/products#consulting"
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
                >
                  <span>Book Consultation ($25)</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs border border-slate-200 shadow-xs transition-all"
                >
                  Send Project Enquiry
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
