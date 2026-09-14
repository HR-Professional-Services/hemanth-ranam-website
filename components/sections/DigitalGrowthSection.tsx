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
    <section id="digital-growth" className="py-16 sm:py-20 lg:py-24 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
            02 Digital Growth & Conversion
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Websites That Feed Your{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
              Operating Pipeline
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            A website shouldn&apos;t just look pretty. It must capture qualified demand, eliminate data leakage, and connect directly into your lead and customer management workflows.
          </p>
        </div>

        {/* Featured Flagship: Website Growth OS */}
        <div className="mt-12 lg:mt-16 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#09111c] border border-emerald-500/30 shadow-2xl shadow-emerald-500/5 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Side: Overview & Features */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      Website Growth OS
                    </h3>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                      High-ROI Entry Product
                    </span>
                  </div>
                  <p className="text-sm font-medium text-emerald-400 mt-0.5">
                    &ldquo;A premium website connected directly to your lead and customer workflow.&rdquo;
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {websiteGrowthOs.description}
              </p>

              {/* Core Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
                {websiteGrowthOs.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="#contact?service=Website+Growth+OS"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-500/25 transition-all"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Deploy Website Growth OS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <Link
                  href="/website-growth-os"
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-white/[0.04] border border-white/[0.08] transition-all"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Side: Step-by-Step Visual Conversion Workflow */}
            <div className="lg:col-span-5 p-5 sm:p-6 rounded-2xl bg-[#070d17] border border-white/[0.08] shadow-xl space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  The Lead-to-Customer Pipeline
                </span>
                <span className="text-[10px] font-mono text-slate-400">Canonical Flow</span>
              </div>

              <div className="space-y-2 text-xs">
                {(websiteGrowthOs.workflow || []).map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-emerald-500/30 transition-colors"
                  >
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-slate-200 text-xs font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Supplementary Digital Growth Solutions */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {DIGITAL_GROWTH_PRODUCTS.slice(1).map((prod) => (
            <div
              key={prod.id}
              className="p-6 rounded-2xl bg-[#090e1b]/80 border border-white/[0.08] hover:border-emerald-500/30 transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    {prod.badge}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white">{prod.name}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{prod.description}</p>

                <ul className="space-y-1.5 pt-2 border-t border-white/[0.06] text-xs text-slate-400">
                  {prod.features.slice(0, 3).map((f, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <a
                  href={`#contact?service=${encodeURIComponent(prod.name)}`}
                  className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
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
