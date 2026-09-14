"use client";

import Link from "next/link";
import {
  Globe,
  Mail,
  Network,
  Calendar,
  Zap,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { DIGITAL_GROWTH_PRODUCTS } from "@/data/businessOsData";

export function DigitalGrowthSection() {
  const websiteGrowthOs = DIGITAL_GROWTH_PRODUCTS[0];

  return (
    <section id="digital-growth" className="py-16 sm:py-20 lg:py-24 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider font-semibold">
            02 Digital Growth & Conversion
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Websites That Feed Your{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
              Operating Pipeline
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            A website shouldn&apos;t just look pretty. It must capture qualified demand, eliminate data leakage, and connect directly into your lead and customer management workflows.
          </p>
        </div>

        {/* Featured Flagship: Website Growth OS (Mac/Windows Window Frame) */}
        <div className="mt-12 lg:mt-16 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-blue-500/5 relative overflow-hidden">
          {/* Window Header */}
          <div className="px-5 py-3 bg-slate-50/90 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="ml-2 text-xs font-mono text-slate-600 font-semibold">
                website-growth-os // conversion-engine.tsx
              </span>
            </div>
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-semibold">
              High-ROI Flagship
            </span>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Side: Overview & Features */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                      Website Growth OS
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-blue-600 mt-0.5">
                      &ldquo;A premium website connected directly to your lead and customer workflow.&rdquo;
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {websiteGrowthOs.description}
                </p>

                {/* Core Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
                  {websiteGrowthOs.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02]"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Deploy Website Growth OS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <Link
                    href="/website-growth-os"
                    className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-xs font-semibold text-slate-700 hover:text-blue-600 bg-slate-100/80 hover:bg-slate-200/70 border border-slate-200 transition-all"
                  >
                    <span>Full Specification</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Side: Step-by-Step Visual Conversion Workflow */}
              <div className="lg:col-span-5 p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <span className="text-xs font-mono uppercase tracking-wider text-blue-700 font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    Lead-to-Customer Pipeline
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">Live Webhook Stream</span>
                </div>

                <div className="space-y-2 text-xs">
                  {(websiteGrowthOs.workflow || []).map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-slate-200/80 hover:border-blue-300 transition-colors shadow-xs"
                    >
                      <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-mono text-[10px] font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-slate-800 text-xs font-medium">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Supplementary Digital Growth Solutions with headings next to icons */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {DIGITAL_GROWTH_PRODUCTS.slice(1).map((prod) => (
            <div
              key={prod.id}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/5 transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-semibold">
                    {prod.badge}
                  </span>
                </div>

                {/* Heading next to icon */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 leading-tight">{prod.name}</h4>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">{prod.description}</p>

                <ul className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                  {prod.features.slice(0, 3).map((f, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <a
                  href="#contact"
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
                >
                  <span>Inquire about {prod.name}</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
