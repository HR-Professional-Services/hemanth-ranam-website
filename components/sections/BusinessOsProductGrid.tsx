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
    <section id="products" className="py-14 sm:py-20 lg:py-24 relative bg-slate-50/50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-mono uppercase tracking-wider font-semibold">
            01 Business OS Products
          </div>
          <h2 className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Modular Operating Systems.{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
              One Unified Foundation.
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Deploy the specific operating environment your company requires today. Expand seamlessly tomorrow—with zero data migrations and zero per-seat licensing penalties.
          </p>
        </div>

        {/* Product Selector Ribbon / Tabs (Heading Next to Icon) */}
        <div className="mt-8 sm:mt-10 flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none justify-start lg:justify-center">
          {BUSINESS_OS_PRODUCTS.map((prod) => {
            const TabIcon = ICON_MAP[prod.icon] || Layers;
            const isSelected = prod.id === selectedProductId;
            return (
              <button
                key={prod.id}
                type="button"
                onClick={() => setSelectedProductId(prod.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 border border-blue-500"
                    : "bg-white text-slate-700 hover:text-blue-600 hover:bg-blue-50/60 border border-slate-200 shadow-sm"
                }`}
              >
                <TabIcon className="w-3.5 h-3.5 shrink-0" />
                <span>{prod.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Product Hero Card (Pure White Glassmorphism Window) */}
        <div className="mt-6 p-5 sm:p-8 lg:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 backdrop-blur-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            {/* Left Column: Product Information (Heading Next to Icon) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                      {activeProduct.name}
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200 font-bold">
                      {activeProduct.badge}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-blue-700 mt-0.5">
                    &ldquo;{activeProduct.tagline}&rdquo;
                  </p>
                </div>
              </div>

              {/* What It Solves & Who It Is For */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="text-[10px] uppercase tracking-wider font-mono text-slate-500 font-bold block">
                    What It Solves
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {activeProduct.whatItSolves}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="text-[10px] uppercase tracking-wider font-mono text-slate-500 font-bold block">
                    Who It Is For
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {activeProduct.whoItIsFor}
                  </p>
                </div>
              </div>

              {/* Core Modules List */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider font-mono text-slate-900 block">
                  Core Configured Modules
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {activeProduct.coreModules.map((mod, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2 rounded-lg bg-blue-50/50 border border-blue-100/70 text-slate-800 font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Example Workflow */}
              <div className="p-3.5 rounded-xl bg-blue-50/40 border border-blue-100 space-y-1.5">
                <span className="text-[10px] uppercase tracking-wider font-mono text-blue-800 font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  Canonical Operating Flow
                </span>
                <p className="text-xs text-slate-800 font-mono">
                  {activeProduct.exampleWorkflow}
                </p>
              </div>
            </div>

            {/* Right Column: Commercial Summary */}
            <div className="lg:col-span-5 p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
                  Commercial Architecture
                </span>
                <h4 className="text-base font-bold text-slate-900 mt-0.5">
                  Implementation &amp; Managed OS
                </h4>
              </div>

              <div className="space-y-2.5">
                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-900">One-Time Implementation</span>
                    <span className="text-blue-600 font-mono text-[11px] font-bold">Setup &amp; Build</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed font-normal">
                    {activeProduct.setupFeeNote}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-900">Managed Business OS</span>
                    <span className="text-emerald-700 font-mono text-[11px] font-bold">Monthly Plan</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed font-normal">
                    {activeProduct.monthlyPlanNote}
                  </p>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900">
                <div className="flex items-center gap-1.5 font-bold text-blue-800 mb-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  Support Level
                </div>
                <p className="text-[11px] text-blue-800/90 font-medium">
                  {activeProduct.supportLevel}
                </p>
              </div>

              {/* Action Buttons (All Open in Same Tab) */}
              <div className="space-y-2 pt-1">
                <a
                  href={`#contact?plan=${encodeURIComponent(activeProduct.name)}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-500/20 transition-all"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Discuss {activeProduct.name} Implementation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <Link
                  href={`/${activeProduct.slug}`}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-blue-700 bg-white hover:bg-slate-100 border border-slate-200 shadow-sm transition-all"
                >
                  <span>View Full {activeProduct.name} Specs</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* All 10 Product Cards Grid (Heading Next to Icon to Save Vertical Space) */}
        <div className="mt-12 sm:mt-16">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              The 10 Core Business OS Applications
            </h3>
            <span className="text-xs font-mono text-slate-500 hidden sm:inline font-medium">
              Click any application to inspect specifications
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BUSINESS_OS_PRODUCTS.map((product) => {
              const CardIcon = ICON_MAP[product.icon] || Layers;
              const isSelected = product.id === selectedProductId;
              return (
                <div
                  key={product.id}
                  onClick={() => setSelectedProductId(product.id)}
                  className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-200 relative group ${
                    isSelected
                      ? "bg-white border-2 border-blue-600 shadow-lg shadow-blue-500/10"
                      : "bg-white border border-slate-200/90 hover:border-blue-300 hover:shadow-md shadow-sm"
                  }`}
                >
                  {/* Heading Inline Next to Icon */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 border border-blue-100 group-hover:scale-105 transition-transform">
                        <CardIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                          {product.name}
                        </h4>
                        <span className="text-[10px] text-blue-700 font-semibold font-mono block">
                          {product.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-normal mt-1">
                    {product.whatItSolves}
                  </p>

                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[10px] font-mono text-slate-500 font-semibold">
                      {product.coreModules.length} Modules
                    </span>
                    <span className="text-blue-600 font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform text-xs">
                      <span>Inspect</span>
                      <ArrowRight className="w-3 h-3" />
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
