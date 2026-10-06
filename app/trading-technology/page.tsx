"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BackToTop } from "@/components/ui/BackToTop";
import { useCart } from "@/context/CartContext";
import {
  TrendingUp,
  Code2,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Server,
  Terminal,
  Activity,
  Layers,
  ShoppingBag,
  ExternalLink,
} from "lucide-react";

export default function TradingTechnologyPage() {
  const { addItem } = useCart();

  const offerings = [
    {
      id: "trade-indicator",
      name: "TradingView Indicator",
      price: "$49",
      numericPrice: 49,
      timeline: "2–3 Business Days",
      desc: "Custom Pine Script v6 indicator tailored to your specific technical analysis rules.",
      features: [
        "Pine Script v6 clean source code",
        "Designed with confirmed-bar logic to reduce repainting",
        "Built-in alerts for price & indicator triggers",
        "100% proprietary code ownership",
      ],
      cta: "Order Indicator ($49)",
    },
    {
      id: "trade-mt5",
      name: "MT5 Indicator / Scanner",
      price: "$99",
      numericPrice: 99,
      timeline: "3–5 Business Days",
      desc: "Native MetaTrader 5 (MQL5) indicator or multi-asset dashboard scanner.",
      features: [
        "Compiled .ex5 and editable .mq5 code",
        "Multi-currency & multi-timeframe scanner",
        "Lightweight execution with zero terminal lag",
        "Instant desktop, sound, & mobile push alerts",
      ],
      cta: "Order MT5 Scanner ($99)",
    },
    {
      id: "trade-automation",
      name: "Trading Automation",
      price: "$299",
      numericPrice: 299,
      timeline: "5–7 Business Days",
      desc: "Automated webhook-to-broker execution bridge connecting TradingView to MT5 or Telegram.",
      features: [
        "TradingView alert to MT5 bridge application",
        "Telegram channel real-time alert broadcasts",
        "Sub-second signal processing latency",
        "Drawdown guards & strict lot sizing caps",
      ],
      cta: "Order Automation ($299)",
      badge: "Popular Bridge",
    },
    {
      id: "trade-custom",
      name: "Custom Trading Technology",
      price: "Custom Quote",
      numericPrice: 599,
      timeline: "Milestone-based",
      desc: "Institutional algorithmic suites, custom Expert Advisors (EAs), and Python backtesting tools.",
      features: [
        "Custom MT5 Expert Advisor with full source code",
        "Backtesting & parameter optimization guide",
        "VPS setup & automated restart safeguards",
        "Full intellectual property transfer",
      ],
      cta: "Enquire for Custom",
      isCustom: true,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white flex flex-col">
      <Navbar />
      <ScrollProgressBar />

      <main className="flex-1 pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Trading Technology</span>
        </div>

        {/* Hero Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
            <span>Specialist Software Engineering</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Trading Technology &amp; Algorithmic Software
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Professional Pine Script v6 and MetaTrader 5 software engineering. We build confirmed-bar indicators, multi-symbol market scanners, and automated execution bridges.
          </p>
        </div>

        {/* Mandatory Regulatory Disclaimer Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200/90 text-amber-900 mb-12 flex items-start gap-3.5 text-xs leading-relaxed">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold block mb-0.5">
              Strict Software Engineering Disclaimer:
            </strong>
            <p className="text-amber-800">
              Hemanth Ranam provides software engineering and technical coding services. We do NOT provide financial, trading, or investment advice, nor do we manage client funds or guarantee financial profits. Trading financial markets carries substantial risk of capital loss. All software tools are engineered strictly for analytical and workflow automation purposes.
            </p>
          </div>
        </div>

        {/* Commercial Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {offerings.map((offering) => (
            <div
              key={offering.id}
              className={`bg-white rounded-3xl border p-6 flex flex-col justify-between transition-all ${
                offering.badge
                  ? "border-blue-600 shadow-md shadow-blue-500/10 ring-1 ring-blue-600"
                  : "border-slate-200 hover:border-slate-300 shadow-xs"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
                    {offering.timeline}
                  </span>
                  {offering.badge && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                      {offering.badge}
                    </span>
                  )}
                </div>

                <h2 className="text-lg font-bold text-slate-900 mb-1">
                  {offering.name}
                </h2>
                <div className="text-2xl font-black text-slate-900 my-2">
                  {offering.price}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                  {offering.desc}
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-100 mb-6 text-xs text-slate-700">
                  {offering.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {offering.isCustom ? (
                  <Link
                    href="/contact?service=Trading%20Technology"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-900 font-bold text-xs transition-colors"
                  >
                    <span>{offering.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() =>
                      addItem({
                        id: offering.id,
                        name: offering.name,
                        price: offering.numericPrice,
                        priceDisplay: offering.price,
                        category: "Trading Technology",
                        billingType: "ONE_TIME",
                        deliveryTime: offering.timeline,
                        shortDescription: offering.desc,
                      })
                    }
                    className="w-full inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors shadow-xs cursor-pointer min-h-[44px]"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>{offering.cta}</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Architecture & Verification */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 mb-12 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600">
              Engineering Rigour
            </span>
            <h2 className="text-2xl font-black text-slate-900">
              Confirmed-Bar Logic &amp; Platform Execution
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <h3 className="font-bold text-slate-900">
                Pine Script v6 Standards
              </h3>
              <p className="text-slate-600 leading-relaxed font-normal">
                Engineered with confirmed-bar logic to reduce historical signal changes caused by repainting. Clean input parameter tables, user-customizable visual clouds, and standardized alert syntax.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <h3 className="font-bold text-slate-900">
                Native MQL5 Execution
              </h3>
              <p className="text-slate-600 leading-relaxed font-normal">
                Zero third-party DLL dependencies. Multi-currency scanners evaluate chart matrices on timer ticks to prevent terminal freezing and CPU bottlenecks.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <h3 className="font-bold text-slate-900">
                Automated Signal Bridges
              </h3>
              <p className="text-slate-600 leading-relaxed font-normal">
                Webhook relays connecting TradingView alert payloads directly to MetaTrader 5 VPS terminals and Telegram channels with millisecond execution.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Contact CTA */}
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 text-center shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-3">
            Have a custom trading algorithm to build?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-6 leading-relaxed">
            Send your strategy rules, technical indicators, or execution requirements for an upfront technical scope and fixed quote.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact?service=Trading%20Technology"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-colors shadow-sm"
            >
              <span>Submit Strategy for Scoping</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/disclaimer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-200 font-bold text-sm transition-colors"
            >
              <span>Read Full Legal Disclaimer</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
