"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BUSINESS_OS_PRODUCTS,
  BusinessOsProduct,
} from "@/data/businessOsData";
import {
  Layers,
  Users,
  UserCheck,
  Receipt,
  TrendingUp,
  CheckSquare,
  Headphones,
  Sliders,
  Boxes,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Sparkles,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";

// Icon mapping helper
const ICON_MAP: Record<string, React.ElementType> = {
  Layers,
  Users,
  UserCheck,
  Receipt,
  TrendingUp,
  CheckSquare,
  Headphones,
  Sliders,
  Boxes,
  Cpu,
};

export function BusinessOsProductGrid() {
  const [selectedProductId, setSelectedProductId] = useState<string>(
    BUSINESS_OS_PRODUCTS[0].id
  );

  const activeProduct =
    BUSINESS_OS_PRODUCTS.find((p) => p.id === selectedProductId) ||
    BUSINESS_OS_PRODUCTS[0];

  const IconComponent = ICON_MAP[activeProduct.icon] || Layers;

  return (
    <section id="products" className="py-16 sm:py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider">
            01 Business OS Products
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Modular Operating Systems.{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              One Unified Foundation.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Deploy the specific operating environment your company requires today. Expand seamlessly tomorrow as you grow—with zero data migrations and zero per-seat licensing penalties.
          </p>
        </div>

        {/* Product Selector Ribbon / Tabs */}
        <div className="mt-10 lg:mt-12 flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none justify-start lg:justify-center">
          {BUSINESS_OS_PRODUCTS.map((prod) => {
            const TabIcon = ICON_MAP[prod.icon] || Layers;
            const isSelected = prod.id === selectedProductId;
            return (
              <button
                key={prod.id}
                type="button"
                onClick={() => setSelectedProductId(prod.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30 border border-blue-400/40"
                    : "bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
                }`}
              >
                <TabIcon className="w-3.5 h-3.5" />
                <span>{prod.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Product Hero Card (Executive Detail View) */}
        <div className="mt-6 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#090e1b]/95 border border-white/[0.1] shadow-2xl shadow-black/80 backdrop-blur-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Product Information & Value Specs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-lg shadow-blue-500/10">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {activeProduct.name}
                    </h3>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30">
                      {activeProduct.badge}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-blue-400 mt-0.5">
                    &ldquo;{activeProduct.tagline}&rdquo;
                  </p>
                </div>
              </div>

              {/* What It Solves & Who It Is For */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
                  <span className="text-[11px] uppercase tracking-wider font-mono text-slate-400 font-semibold">
                    What It Solves
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeProduct.whatItSolves}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
                  <span className="text-[11px] uppercase tracking-wider font-mono text-slate-400 font-semibold">
                    Who It Is For
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeProduct.whoItIsFor}
                  </p>
                </div>
              </div>

              {/* Core Modules List */}
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider font-mono text-slate-300">
                  Core Configured Modules
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {activeProduct.coreModules.map((mod, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Example Workflow */}
              <div className="p-4.5 rounded-2xl bg-gradient-to-r from-blue-950/20 via-indigo-950/10 to-transparent border border-blue-500/20 space-y-2.5">
                <span className="text-xs font-semibold uppercase tracking-wider font-mono text-blue-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Example Operational Workflow
                </span>
                <div className="space-y-2 text-xs text-slate-300">
                  {activeProduct.exampleWorkflow.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <span className="font-mono text-blue-400 text-[11px] mt-0.5 shrink-0">
                        {idx + 1}.
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Commercial Packaging & Actions */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#0d1424] border border-white/[0.08] shadow-xl space-y-6">
              <div className="border-b border-white/[0.08] pb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Commercial Architecture
                </span>
                <h4 className="text-lg font-bold text-white mt-1">
                  Implementation & Managed OS
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Structured milestone setup followed by ongoing managed technical support.
                </p>
              </div>

              {/* Pricing Cards Context */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-200">One-Time Implementation</span>
                    <span className="text-blue-400 font-mono text-[11px]">Setup & Build</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {activeProduct.setupFeeNote}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-200">Managed Business OS</span>
                    <span className="text-emerald-400 font-mono text-[11px]">Monthly Subscription</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {activeProduct.monthlyPlanNote}
                  </p>
                </div>
              </div>

              {/* What's Included & Support Level */}
              <div className="space-y-2.5 text-xs text-slate-300">
                <span className="font-semibold text-white text-xs block">
                  What&apos;s Included:
                </span>
                <ul className="space-y-1.5">
                  {activeProduct.whatsIncluded.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-400 font-bold">•</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-200">
                <div className="flex items-center gap-1.5 font-semibold text-blue-300 mb-0.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Support Level
                </div>
                <p className="text-[11px] leading-relaxed text-blue-200/90">
                  {activeProduct.supportLevel}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <a
                  href={`#contact?plan=${encodeURIComponent(activeProduct.name)}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/25 transition-all"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Discuss {activeProduct.name} Implementation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <Link
                  href={`/${activeProduct.slug}`}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] transition-all"
                >
                  <span>View Full {activeProduct.name} Specifications</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* All 10 Product Cards Grid (Quick Browse) */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">
              The 10 Core Business OS Applications
            </h3>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              Click any application to inspect specifications
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {BUSINESS_OS_PRODUCTS.map((product) => {
              const CardIcon = ICON_MAP[product.icon] || Layers;
              const isSelected = product.id === selectedProductId;
              return (
                <div
                  key={product.id}
                  onClick={() => setSelectedProductId(product.id)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 relative group ${
                    isSelected
                      ? "bg-[#0f172a] border-2 border-blue-500 shadow-xl shadow-blue-500/10"
                      : "bg-[#0b101d]/80 border border-white/[0.08] hover:border-white/[0.2] hover:bg-[#0f172a]/70"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                      <CardIcon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.05] text-slate-300 border border-white/[0.08]">
                      {product.badge}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-xs text-blue-300/90 font-medium mt-1">
                    &ldquo;{product.tagline}&rdquo;
                  </p>
                  <p className="text-xs text-slate-400 mt-2.5 line-clamp-2 leading-relaxed">
                    {product.whatItSolves}
                  </p>

                  <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                    <span className="text-[11px] font-mono text-slate-400">
                      {product.coreModules.length} Modules
                    </span>
                    <span className="text-blue-400 font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
