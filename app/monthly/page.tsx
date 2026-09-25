"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ContactSection } from "@/components/sections/ContactSection";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BackToTop } from "@/components/ui/BackToTop";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { TechBackground3D } from "@/components/ui/TechBackground3D";
import { MONTHLY_OS_PLANS, RECURRING_VALUE_EXPLANATION } from "@/data/pricingData";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Server,
  RefreshCw,
  Headphones,
  Sliders,
  BookOpen,
  Calendar,
  Lock,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Server,
  Shield: ShieldCheck,
  RefreshCw,
  Headphones,
  Sliders,
  BookOpen,
};

export default function MonthlyPage() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-blue-600/20 selection:text-blue-700 overflow-x-hidden">
      <TechBackground3D />
      <ScrollProgressBar />
      <Navbar />

      <main id="main-content" className="relative z-10 flex flex-col pt-16">
        {/* Header Hero */}
        <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 border-b border-slate-200/80 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Operational Stewardship &amp; SLA Retainers</span>
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Continuous System Reliability.{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 bg-clip-text text-transparent">
                Zero Headaches.
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Software setup is only day one. Our monthly management tiers keep your website, CRM pipelines, webhook synchronizers, and automated trading bridges running smoothly with direct architect SLA access.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {MONTHLY_OS_PLANS.map((plan) => (
                <div
                  key={plan.id}
                  className={`p-6 sm:p-7 rounded-3xl bg-white border transition-all flex flex-col justify-between ${
                    plan.popular
                      ? "border-2 border-blue-600 shadow-xl shadow-blue-500/10"
                      : "border-slate-200 hover:border-slate-300 shadow-sm"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-bold uppercase tracking-wider">
                        {plan.planCode}
                      </span>
                      {plan.badge && (
                        <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 font-bold">
                          {plan.badge}
                        </span>
                      )}
                    </div>

                    <div>
                      <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
                        {plan.name}
                      </h2>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {plan.tagline}
                      </p>
                    </div>

                    <div className="py-3 border-y border-slate-100 flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono">
                        {plan.price}
                      </span>
                      <span className="text-xs text-slate-500 font-mono">
                        {plan.period}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-slate-600">
                      <strong className="text-slate-800 block mb-0.5">SLA Response:</strong>
                      {plan.sla}
                    </div>

                    <div>
                      <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider block mb-2">
                        What&apos;s Included:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {plan.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <a
                      href={
                        plan.stripePaymentLink ||
                        `/#contact?service=${encodeURIComponent(plan.name)}`
                      }
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-500 hover:to-blue-700 shadow-md shadow-blue-500/25 transition-all cursor-pointer"
                    >
                      <span>{plan.ctaLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <p className="text-[10px] text-center text-slate-400 mt-2">
                      Cancel anytime. Zero long-term lock-in.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6 Value Pillars */}
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {RECURRING_VALUE_EXPLANATION.title}
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                {RECURRING_VALUE_EXPLANATION.subtitle}
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {RECURRING_VALUE_EXPLANATION.pillars.map((pillar, i) => {
                const IconComponent = ICON_MAP[pillar.icon] || ShieldCheck;
                return (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
