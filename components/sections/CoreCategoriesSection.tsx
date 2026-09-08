import Link from "next/link";
import { CORE_CATEGORIES } from "@/data/siteData";
import {
  Briefcase,
  Code2,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Layers,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export function CoreCategoriesSection() {
  const iconMap: Record<string, React.ReactNode> = {
    Briefcase: <Briefcase className="w-6 h-6 text-blue-600" />,
    Code2: <Code2 className="w-6 h-6 text-indigo-600" />,
    TrendingUp: <TrendingUp className="w-6 h-6 text-emerald-600" />,
  };

  const badgeStyles: Record<string, string> = {
    blue: "bg-blue-50 text-blue-700 border-blue-200",
    indigo: "bg-indigo-50 text-indigo-700 border-indigo-200",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
  };

  const headerBorders: Record<string, string> = {
    blue: "hover:border-blue-400 focus-within:border-blue-400",
    indigo: "hover:border-indigo-400 focus-within:border-indigo-400",
    emerald: "hover:border-emerald-400 focus-within:border-emerald-400",
  };

  return (
    <section id="categories" className="py-14 md:py-24 bg-slate-50/60 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Commercial Pillars</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Three Core Commercial Categories
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-600 font-medium leading-relaxed">
            From operational audits and Frappe/ERPNext systems to full-stack web platforms and rule-based trading automation. Start simple, scale when needed.
          </p>
        </div>

        {/* 3 Major Category Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {CORE_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className={`p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm transition-all duration-300 flex flex-col justify-between group ${
                headerBorders[cat.accentColor] || "hover:border-blue-400"
              }`}
            >
              <div>
                {/* Top Number & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {iconMap[cat.icon] || <Sparkles className="w-6 h-6 text-blue-600" />}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-slate-400">
                      {cat.categoryNumber}
                    </span>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                        badgeStyles[cat.accentColor] || "bg-blue-50 text-blue-700 border-blue-200"
                      }`}
                    >
                      {cat.badge}
                    </span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2 leading-tight">
                  {cat.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-4">
                  {cat.tagline}
                </p>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  {cat.description}
                </p>

                {/* Service Highlights List */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Included Services:
                  </span>
                  {cat.services.map((s, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-slate-50/70 border border-slate-100 flex items-start justify-between gap-2 group/item hover:bg-blue-50/40 hover:border-blue-200/60 transition-colors"
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span className="text-xs font-bold text-slate-900 truncate">
                            {s.name}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5 font-normal pl-5">
                          {s.tagline}
                        </p>
                      </div>

                      {s.slug && (
                        <Link
                          href={`/services/${s.slug}`}
                          className="shrink-0 text-slate-400 group-hover/item:text-blue-600 transition-colors p-1"
                          title="View service details"
                        >
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">
                  Standard &amp; Custom Scope
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors group-hover:translate-x-0.5"
                >
                  <span>Discuss Category</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Value Anchor Banner */}
        <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                Transparent Milestone-Based Delivery
              </h4>
              <p className="text-xs text-slate-600">
                Clear deliverables, fixed milestone pricing in USD ($), and zero hourly surprise billing.
              </p>
            </div>
          </div>
          <a
            href="#pricing"
            className="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors text-center shrink-0"
          >
            Review Project Pricing
          </a>
        </div>

      </div>
    </section>
  );
}
