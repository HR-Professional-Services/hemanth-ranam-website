import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { TechBackground3D } from "@/components/ui/TechBackground3D";
import { ShieldCheck, ArrowLeft, CheckCircle2, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Refund Policy | Hemanth Ranam Professional Services",
  description:
    "Transparent refund policy for instant digital downloads, business consulting, custom software implementation, and monthly care retainers.",
  alternates: {
    canonical: "/refund-policy",
  },
};

export default function RefundPolicyPage() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-blue-600/20 selection:text-blue-700 overflow-x-hidden">
      <TechBackground3D />
      <Navbar />

      <main id="main-content" className="relative z-10 flex flex-col pt-16">
        <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 border-b border-slate-200/80 bg-slate-50/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>Commercial Terms</span>
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Refund &amp; Cancellation Policy
            </h1>
            <p className="mt-3 text-xs sm:text-sm text-slate-500 font-mono">
              Version 1.0 • Effective September 2026
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm leading-relaxed text-slate-700">
            {/* Digital Products Box */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>1. Instant Digital Downloads &amp; Spreadsheets ($5 – $99)</span>
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                Because our Google Sheets templates, digital checklists, SOP document packs, and code kits grant immediate, irrevocable access to digital source files, purchases are <strong>non-refundable once download links or Google Drive folder permissions have been granted</strong>. If you experience an access issue or technical formula defect, our support team will resolve it within 48 business hours.
              </p>
            </div>

            {/* Implementation Services Box */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>2. Implementation Services &amp; Custom Development ($149 – $1,499+)</span>
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                Custom website builds, ERP implementations, and bespoke trading scripts operate on a milestone-based agreement. If you decide to cancel before the initial discovery milestone is completed, unearned fees are refunded minus pro-rata work completed. Once final deliverables are approved and handed over, fees are non-refundable.
              </p>
            </div>

            {/* Monthly Retainers Box */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>3. Monthly Managed Care Retainers ($29 – $299/month)</span>
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                Monthly retainers are billed on a recurring 30-day cycle. You may cancel your subscription at any time with 7 days&apos; written notice before your renewal date. Services and monitoring remain active through the end of the paid billing period.
              </p>
            </div>

            {/* Consultation Credit Policy */}
            <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-2">
              <h2 className="text-base font-bold text-blue-900">
                4. 100% Consultation Credit Guarantee
              </h2>
              <p className="text-xs leading-relaxed text-blue-800">
                If you book a $25 or $49 consultation session and decide to proceed with an eligible implementation project within 30 days, 100% of your consultation fee is credited directly toward your project invoice.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Catalogue</span>
              </Link>
              <Link
                href="/contact"
                className="text-xs font-bold text-slate-600 hover:text-slate-900"
              >
                Have a billing question? Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
