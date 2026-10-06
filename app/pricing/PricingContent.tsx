"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BackToTop } from "@/components/ui/BackToTop";
import { MONTHLY_PLANS, CURATED_OFFERS } from "@/data/curatedCatalog";
import { useCart } from "@/context/CartContext";
import {
  CreditCard,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  Clock,
  Layers,
  Calendar,
  Lock,
} from "lucide-react";

export function PricingContent() {
  const { addItem } = useCart();

  const roadmapTiers = [
    {
      step: "01 — Start Small",
      title: "Business Systems Consultation",
      price: "$49",
      numericPrice: 49,
      id: "biz-sys-consultation",
      timeline: "60 Minutes",
      subtitle: "Diagnose acute bottlenecks and clarify your software roadmap.",
      features: [
        "1-on-1 private video session with Hemanth Ranam",
        "Full review of current tools & manual spreadsheets",
        "Executive action notes and immediate next steps",
        "100% of fee credited toward future implementation",
      ],
      ctaLabel: "Book Consultation ($49)",
      isConsult: true,
      popular: true,
      badge: "Best Starting Point",
    },
    {
      step: "02 — Diagnose",
      title: "Business Systems Audit",
      price: "$99",
      numericPrice: 99,
      id: "biz-sys-audit",
      timeline: "3–5 Days",
      subtitle: "Thorough inspection of workflows, team handoffs, and tool redundancy.",
      features: [
        "Complete Systems & Workflow Audit Report",
        "Data flow map & software cost rationalization",
        "Identification of manual data entry risks",
        "45-minute findings review walkthrough",
      ],
      ctaLabel: "Order Systems Audit ($99)",
      badge: "High ROI",
    },
    {
      step: "03 — Plan",
      title: "Systems Blueprint",
      price: "$199",
      numericPrice: 199,
      id: "biz-sys-blueprint",
      timeline: "5–7 Days",
      subtitle: "Detailed system architecture, data models, and automation plan.",
      features: [
        "Full technical architecture specification (PDF)",
        "Entity relationship & data models",
        "Role permissions & approval hierarchy matrix",
        "Implementation milestone roadmap",
      ],
      ctaLabel: "Order Blueprint ($199)",
    },
    {
      step: "04 — Build",
      title: "Implementation & Automation",
      price: "From $149",
      numericPrice: 149,
      id: "auto-starter",
      timeline: "Milestone-based",
      subtitle: "Configured ERPNext, custom automations, or modern websites.",
      features: [
        "Automation workflows (from $149)",
        "Business websites with lead capture (from $399)",
        "ERPNext standard setup (from $499)",
        "Full end-to-end testing & training video",
      ],
      ctaLabel: "Explore Implementation",
      linkToServices: true,
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
          <span className="text-slate-900 font-semibold">Pricing</span>
        </div>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <CreditCard className="w-3.5 h-3.5 text-blue-600" />
            <span>Clear, Honest Pricing</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Predictable Investment. Measurable Results.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            No bloated agency retainers or hidden markups. Start with an accessible consultation or audit, and scale into full implementation and support.
          </p>
        </div>

        {/* Part 1: Four-Stage Project Pricing */}
        <div className="mb-20">
          <div className="flex items-center justify-between pb-4 mb-8 border-b border-slate-200">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600">
                Phase-by-Phase Roadmap
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Project &amp; Advisory Pricing
              </h2>
            </div>
            <span className="text-xs text-slate-500 hidden sm:block">
              All consultation fees credited toward implementation
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmapTiers.map((tier) => (
              <div
                key={tier.step}
                className={`bg-white rounded-3xl border p-6 flex flex-col justify-between transition-all ${
                  tier.popular
                    ? "border-blue-600 shadow-md shadow-blue-500/10 ring-1 ring-blue-600"
                    : "border-slate-200 hover:border-slate-300 shadow-xs"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
                      {tier.step}
                    </span>
                    {tier.badge && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                        {tier.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {tier.title}
                  </h3>
                  <div className="flex items-baseline gap-1 my-3">
                    <span className="text-3xl font-black text-slate-900">
                      {tier.price}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      ({tier.timeline})
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {tier.subtitle}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6 text-xs text-slate-700">
                    {tier.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {tier.linkToServices ? (
                    <Link
                      href="/services"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-900 font-bold text-xs transition-colors"
                    >
                      <span>{tier.ctaLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() =>
                        addItem({
                          id: tier.id,
                          name: tier.title,
                          price: tier.numericPrice,
                          priceDisplay: tier.price,
                          category: "Business Systems",
                          billingType: "ONE_TIME",
                          deliveryTime: tier.timeline,
                          shortDescription: tier.subtitle,
                        })
                      }
                      className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs transition-colors cursor-pointer ${
                        tier.popular
                          ? "bg-blue-600 hover:bg-blue-700 text-white shadow-xs"
                          : "bg-slate-900 hover:bg-slate-800 text-white"
                      }`}
                    >
                      <span>{tier.ctaLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center text-xs text-slate-500 italic">
            * Complex custom software architectures and multi-tenant systems are scoped and quoted after initial discovery.
          </div>
        </div>

        {/* Part 2: Monthly Support Plans */}
        <div className="mb-16">
          <div className="flex items-center justify-between pb-4 mb-8 border-b border-slate-200">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600">
                Ongoing Reliability
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Monthly Managed Support Plans
              </h2>
            </div>
            <span className="text-xs text-slate-500 hidden sm:block">
              Cancel or adjust anytime with 30 days notice
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MONTHLY_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`bg-white rounded-3xl border p-6 flex flex-col justify-between transition-all ${
                  plan.popular
                    ? "border-blue-600 shadow-lg shadow-blue-500/10 ring-1 ring-blue-600"
                    : "border-slate-200 hover:border-slate-300 shadow-xs"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-slate-900">
                      {plan.name}
                    </h3>
                    {plan.badge && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex items-baseline gap-1 my-3">
                    <span className="text-3xl font-black text-slate-900">
                      {plan.priceDisplay}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {plan.period}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {plan.tagline}
                  </p>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-slate-600 mb-6">
                    <strong className="text-slate-800">Ideal for: </strong>
                    {plan.idealFor}
                  </div>

                  <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6 text-xs text-slate-700">
                    {plan.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() =>
                      addItem({
                        id: plan.id,
                        name: `${plan.name} Plan`,
                        price: plan.price,
                        priceDisplay: `${plan.priceDisplay}/mo`,
                        category: "Monthly Support",
                        billingType: "MONTHLY",
                        deliveryTime: "Immediate Activation",
                        shortDescription: plan.tagline,
                      })
                    }
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs transition-colors cursor-pointer ${
                      plan.popular
                        ? "bg-blue-600 hover:bg-blue-700 text-white shadow-xs"
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                    }`}
                  >
                    <span>{plan.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 3: Trust & FAQ Accordion */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 max-w-4xl mx-auto shadow-xs">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              Frequently Asked Pricing Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Straightforward answers about our engagement models and payments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
              <h3 className="font-bold text-slate-900">
                Are consultation fees credited to implementation?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Yes, 100%. If you proceed with any systems build, automation, or audit within 30 days of our call, the consultation fee is deducted from your milestone invoice.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
              <h3 className="font-bold text-slate-900">
                What payment methods do you support?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                We accept major credit/debit cards, Apple Pay, and Google Pay through verified Stripe Checkout. Enterprise clients can also pay via BACS / International Wire transfer.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
              <h3 className="font-bold text-slate-900">
                Can I cancel monthly support anytime?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Yes. Monthly plans have no long-term lock-in and can be adjusted or cancelled anytime with 30 days email notice.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
              <h3 className="font-bold text-slate-900">
                Who actually performs the technical work?
              </h3>
              <p className="text-slate-600 leading-relaxed">
                All systems design, configuration, and coding are conducted directly by Hemanth Ranam. We do not outsource your architecture to junior third-party subcontractors.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span>Have a question about a custom project? Get in touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
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
