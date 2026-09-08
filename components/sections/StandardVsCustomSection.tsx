import { STANDARD_VS_CUSTOM } from "@/data/siteData";
import { CheckCircle2, Sliders } from "lucide-react";

export function StandardVsCustomSection() {
  const { standard, custom } = STANDARD_VS_CUSTOM;

  return (
    <section id="standard-vs-custom" className="py-12 md:py-20 bg-slate-50/50 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sliders className="w-3.5 h-3.5" />
            <span>Deployment Models</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Standard vs Custom Architecture
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 font-medium">
            Start simple with proven blueprints, then scale into tailored business systems as your team expands.
          </p>
        </div>

        {/* Side-by-side comparative cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          
          {/* 1. Standard Systems Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-2xs hover:border-blue-300 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                  {standard.badge}
                </span>
                <span className="text-xs text-slate-400 font-mono">Fast Track</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                {standard.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed font-normal">
                {standard.description}
              </p>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 mb-6">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Ideal For:
                </span>
                <p className="text-xs text-slate-700 font-medium leading-snug">
                  {standard.idealFor}
                </p>
              </div>

              <ul className="space-y-2.5 mb-6">
                {standard.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-5 border-t border-slate-100">
              <a
                href={standard.ctaHref}
                className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs text-center block transition-colors"
              >
                {standard.ctaText}
              </a>
            </div>
          </div>

          {/* 2. Custom Systems Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-linear-to-b from-slate-900 to-slate-950 text-white border border-slate-800 shadow-lg flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-900/60 text-blue-300 border border-blue-800">
                  {custom.badge}
                </span>
                <span className="text-xs text-slate-400 font-mono">Bespoke Scope</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                {custom.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed font-normal">
                {custom.description}
              </p>

              <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 mb-6">
                <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider block mb-1">
                  Ideal For:
                </span>
                <p className="text-xs text-slate-200 font-medium leading-snug">
                  {custom.idealFor}
                </p>
              </div>

              <ul className="space-y-2.5 mb-6">
                {custom.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-5 border-t border-slate-800">
              <a
                href={custom.ctaHref}
                className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs text-center block transition-colors shadow-xs"
              >
                {custom.ctaText}
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
