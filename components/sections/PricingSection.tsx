"use client";

import { useState } from "react";
import Link from "next/link";
import { ONE_TIME_PROJECT_PLANS, MONTHLY_SUBSCRIPTION_PLANS, CommercialPlan } from "@/data/siteData";
import { Tag, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Layers, RefreshCw } from "lucide-react";

export function PricingSection() {
  const [billingMode, setBillingMode] = useState<"one-time" | "monthly">("one-time");

  const activePlans: CommercialPlan[] =
    billingMode === "one-time" ? ONE_TIME_PROJECT_PLANS : MONTHLY_SUBSCRIPTION_PLANS;

  const handleSelectPlan = (item: CommercialPlan) => {
    if (item.stripePaymentLink && item.stripePaymentLink.trim().length > 0) {
      window.location.href = item.stripePaymentLink;
      return;
    }

    if (typeof window !== "undefined") {
      const priceVal = item.price.startsWith("$") ? `${item.price} USD` : item.price;

      // Dispatch custom event to auto-populate ContactSection
      window.dispatchEvent(
        new CustomEvent("hrps-select-plan", {
          detail: {
            category: item.category,
            service: item.name,
            selectedPlan: item.name,
            price: priceVal,
          },
        })
      );

      // Smooth scroll to contact form
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="pricing" className="py-14 md:py-20 bg-slate-50/70 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Tag className="w-3.5 h-3.5" />
              <span>Transparent Rates (USD)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Project &amp; Subscription Pricing
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium">
              Clear, affordable rates in USD ($) with no hourly billing. Choose milestone projects or ongoing monthly support.
            </p>
          </div>

          {/* Commercial Model Switcher: One-Time vs Monthly */}
          <div className="inline-flex bg-white p-1 rounded-2xl border border-slate-200 shadow-xs">
            <button
              onClick={() => setBillingMode("one-time")}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                billingMode === "one-time"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              One-Time Projects (5 Approved)
            </button>
            <button
              onClick={() => setBillingMode("monthly")}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                billingMode === "monthly"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Monthly Subscriptions
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {activePlans.map((item) => (
            <div
              key={item.id}
              className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Category & Badge */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 font-mono">
                    {item.category}
                  </span>
                  {item.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Plan Name */}
                <h3 className="text-base font-black text-slate-900 leading-snug group-hover:text-blue-600 transition-colors mb-2">
                  {item.name}
                </h3>

                {/* Price Display: Current price visually dominant, was price subtle */}
                <div className="mb-3">
                  {item.originalPrice && (
                    <div className="text-xs text-slate-400 line-through mb-0.5">
                      Was {item.originalPrice}
                    </div>
                  )}
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xs font-bold text-slate-500">From</span>
                    <span className="text-3xl font-black text-slate-900 tracking-tight">
                      {item.price}
                    </span>
                    <span className="text-xs font-bold text-slate-500 font-mono">
                      {item.currency} {item.period || ""}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 mb-4 leading-relaxed font-normal">
                  {item.description}
                </p>

                {/* Included Bullets */}
                <div className="mb-6 pt-3 border-t border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Included:
                  </span>
                  <ul className="space-y-2">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Actions: [Learn More] [Discuss / Subscribe] */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <Link
                  href={`/services/${item.slug || item.serviceId || "business-consultation"}`}
                  className="text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Learn More →
                </Link>

                <button
                  onClick={() => handleSelectPlan(item)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
                >
                  <span>{item.billing === "monthly" ? "Subscribe" : "Discuss"}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Standard vs Custom Compact 2-Card Banner */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 flex items-start gap-3 shadow-2xs">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-black text-slate-900">
                Standard Packages
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Affordable, rapid deployment with ready blueprints and predictable scope.
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 flex items-start gap-3 shadow-2xs">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 border border-indigo-100">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-black text-slate-900">
                Custom Architecture
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Bespoke systems, custom integrations, advanced automation, and ongoing support.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
