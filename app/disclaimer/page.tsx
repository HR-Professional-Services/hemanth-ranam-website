import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { TechBackground3D } from "@/components/ui/TechBackground3D";
import { AlertTriangle, ShieldAlert, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Disclaimers & Regulatory Notices | Hemanth Ranam",
  description:
    "Educational & Analytical Tool Disclaimer and terms of use for trading technology, indicators, strategies, and business consulting services.",
  alternates: {
    canonical: "/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-blue-600/20 selection:text-blue-700 overflow-x-hidden">
      <TechBackground3D />
      <Navbar />

      <main id="main-content" className="relative z-10 flex flex-col pt-16">
        <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 border-b border-slate-200/80 bg-slate-50/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono uppercase tracking-wider font-semibold">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
              <span>Mandatory Legal &amp; Regulatory Disclaimers</span>
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Legal Disclaimers
            </h1>
            <p className="mt-3 text-xs sm:text-sm text-slate-500 font-mono">
              Last Updated: September 2026 • Controlled Operating Standard
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm leading-relaxed text-slate-700">
            {/* Primary Trading Tech Box */}
            <div className="p-6 rounded-2xl bg-amber-50/80 border-2 border-amber-300 text-amber-950 space-y-3 shadow-xs">
              <div className="flex items-center gap-2 font-bold text-amber-900 text-base">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                <span>Trading Technology Disclaimer (Mandatory)</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed">
                <strong>Educational &amp; Analytical Tool Disclaimer:</strong> All algorithms, indicators, software, code snippets, Expert Advisors (EAs), and trading frameworks provided on this website or delivered through private client workspaces are strictly for <strong>educational and analytical purposes only</strong>. They do NOT constitute financial, investment, legal, or trading advice.
              </p>
              <p className="text-xs leading-relaxed text-amber-900/90">
                Past performance, backtest simulations, and historical hypothetical results do not guarantee future results. Financial trading in equities, forex, indices, cryptocurrencies, and commodities involves substantial risk of loss and is not suitable for every investor. We do not provide profit guarantees, income promises, or managed account services.
              </p>
            </div>

            {/* General Consulting Disclaimer */}
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900">1. Business Consulting &amp; Technical Advice</h2>
              <p>
                Business audits, roadmap recommendations, and systems architecture consultations are provided on an advisory basis. Implementation outcomes depend upon client team execution, market conditions, and third-party software availability. We do not guarantee specific revenue growth, search engine rankings, or business valuation increases.
              </p>
            </div>

            {/* Third-Party Software */}
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900">2. Third-Party Platforms &amp; API Changes</h2>
              <p>
                Certain services utilize third-party APIs and infrastructure (such as Google Workspace, Cloudflare, Stripe, MetaTrader 5, or TradingView). We are not responsible for pricing changes, API deprecations, rate limits, or outages caused by external third-party providers.
              </p>
            </div>

            {/* Navigation back */}
            <div className="pt-6 border-t border-slate-200">
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Products Catalogue</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
