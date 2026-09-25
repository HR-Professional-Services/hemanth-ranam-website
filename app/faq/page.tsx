import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { BusinessOsFaqSection } from "@/components/sections/BusinessOsFaqSection";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BackToTop } from "@/components/ui/BackToTop";
import { TechBackground3D } from "@/components/ui/TechBackground3D";
import { Sparkles, HelpCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Hemanth Ranam Professional Services",
  description:
    "Got questions about Business Operating Systems, Google Drive workspace provisioning, consulting credits, or trading technology? Find comprehensive answers here.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FaqPage() {
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
              <span>Knowledge Base &amp; Answers</span>
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 bg-clip-text text-transparent">
                Questions.
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Clear, transparent answers on how our services work, payment security, Google Drive workspaces, consultation credits, and scope boundaries.
            </p>
          </div>
        </section>

        {/* Existing FAQ Section */}
        <BusinessOsFaqSection />

        {/* Bottom Support Banner */}
        <section className="py-12 bg-slate-50 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-3">
            <h2 className="text-xl font-bold text-slate-900">Still have a specific operational question?</h2>
            <p className="text-xs text-slate-600">
              Reach out directly. No call centers or outsourced bots — you speak directly with Hemanth.
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs"
              >
                Send Us a Message
              </Link>
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
