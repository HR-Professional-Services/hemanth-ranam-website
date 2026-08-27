import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { RefreshCw, ArrowLeft, ShieldAlert, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Refund Policy | Hemanth Ranam",
  description: "Refund and cancellation policy for custom software development, consulting, and trading technology services by Hemanth Ranam.",
};

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white flex flex-col justify-between">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Header */}
          <div className="border-b border-slate-100 pb-6 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Policy Transparency</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Refund & Cancellation Policy
            </h1>
            <p className="text-xs text-slate-500">
              Last updated: August 27, 2026
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed space-y-6 text-slate-700">
            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">1. Nature of Custom Engineering Services</h2>
              <p>
                Our services comprise bespoke engineering, strategic consulting, tailored software development, and algorithmic script authoring. Because custom intellectual labor and developer time cannot be reclaimed once expended, refunds are governed strictly by the milestone framework below.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">2. Milestone Delivery & Acceptance</h2>
              <p>Work is structured into transparent milestone phases:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Discovery & Audit Deposit:</strong> Non-refundable once initial architecture blueprints or diagnostic audits have commenced.</li>
                <li><strong>In-Progress Development:</strong> If a project is cancelled mid-milestone by mutual consent, any unexpended balance for unstarted deliverables will be refunded pro-rata.</li>
                <li><strong>Approved & Delivered Milestones:</strong> Once a milestone build, script, or ERP module is approved by the client or deployed to production, it is deemed fully accepted and non-refundable.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">3. 30-Day Bug Fix Warranty</h2>
              <p>
                We stand behind the quality of our code. All custom software, Pine Script indicators, and MT5 Expert Advisors include a <strong>30-day warranty</strong> starting from delivery. Any defects, calculation anomalies, or deviation from agreed written specifications will be remediated rapidly at no additional charge.
              </p>
            </section>

            {/* Risk Notice */}
            <section className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                <ShieldAlert className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Trading Tool Performance Disclaimers</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Refunds are not granted due to financial market fluctuations, broker slippage, or trading performance outcomes. Algorithmic tools evaluate technical rules deterministically; past market performance and backtest modeling do not guarantee future live trading results.
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
