import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FileCheck, ArrowLeft, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Hemanth Ranam",
  description: "Terms and conditions governing business systems consulting, custom software development, and trading technology services by Hemanth Ranam.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white flex flex-col justify-between">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Header */}
          <div className="border-b border-slate-100 pb-6 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
              <FileCheck className="w-3.5 h-3.5" />
              <span>Service Agreement</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Terms & Conditions
            </h1>
            <p className="text-xs text-slate-500">
              Last updated: August 27, 2026
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed space-y-6 text-slate-700">
            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">1. Acceptance of Terms</h2>
              <p>
                By accessing this website or engaging Hemanth Ranam for consulting, software engineering, workflow automation, or trading technology development, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you must discontinue use of the services.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">2. Scope of Services</h2>
              <p>
                All project engagements are provided on a milestone or clearly defined scope-of-work basis. Custom software, ERP implementations, and API integrations are engineered to the written technical specifications agreed upon prior to project kickoff.
              </p>
            </section>

            {/* Trading Tech Risk Notice */}
            <section className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-950">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Financial & Trading Technology Risk Disclaimer</span>
              </div>
              <p className="text-xs leading-relaxed text-amber-900">
                Trading in financial markets, equities, forex, futures, and digital assets involves substantial risk of loss and is not suitable for every investor. Custom indicators (Pine Script v5), Expert Advisors (MQL5), alert bots, and automated trading bridges are technical software tools designed for algorithmic execution and rule evaluation.
              </p>
              <p className="text-xs leading-relaxed font-bold text-amber-950">
                Hemanth Ranam is a software architect and technology specialist, NOT a registered financial advisor or broker. No software, consultation, or indicator constitutes investment advice, financial recommendations, or guarantees of future trading profitability.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">3. Intellectual Property & Deliverables</h2>
              <p>
                Upon final invoice settlement, full ownership of bespoke source code, custom scripts, and client-specific documentation is transferred to the client. Pre-existing proprietary libraries, open-source frameworks, and generalized utilities remain licensed for client use under their respective standard open-source or commercial terms.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">4. Payment & Milestones</h2>
              <p>
                Project fees are quoted in USD or agreed local currency. Work is typically structured into an initial mobilization deposit and milestone delivery balances. Invoices must be settled within the agreed invoice terms prior to deployment to production environments.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">5. Limitation of Liability</h2>
              <p>
                In no event shall Hemanth Ranam be liable for indirect, incidental, special, consequential, or punitive damages—including loss of profits, data corruption, third-party API outages, or market losses—arising from the use of or inability to use delivered software systems.
              </p>
            </section>
          </div>

          <div className="pt-6 border-t border-slate-100">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
