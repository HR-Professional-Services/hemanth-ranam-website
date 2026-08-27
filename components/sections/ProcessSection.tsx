import { WORK_PROCESS } from "@/data/siteData";
import { Check, Compass, ArrowRight, ShieldCheck } from "lucide-react";

export function ProcessSection() {
  return (
    <section id="process" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Structured Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            How I Work: <span className="text-blue-600">The 5-Stage Engineering Cycle.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            A disciplined, transparent process that eliminates uncertainty, guarantees clear deliverables, and ensures solutions scale seamlessly from day one.
          </p>
        </div>

        {/* Process Steps (Horizontal on Desktop, Vertical on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-5 relative">
          {WORK_PROCESS.map((item, index) => (
            <div
              key={item.step}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between relative group"
            >
              {/* Connector line for desktop */}
              {index < WORK_PROCESS.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-[2px] bg-slate-200 z-10 group-hover:bg-blue-300 transition-colors" />
              )}

              <div>
                {/* Step Number & Name */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-mono text-blue-600">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-mono uppercase font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-sm">
                    {item.name}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {item.heading}
                </h3>
                <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="mt-5 pt-4 border-t border-slate-100 space-y-1.5">
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                  Deliverables
                </p>
                {item.deliverables.map((deliv) => (
                  <div
                    key={deliv}
                    className="flex items-center gap-1.5 text-[11px] text-slate-700 font-medium"
                  >
                    <Check className="w-3 h-3 text-blue-600 shrink-0" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Reliability Guarantee note */}
        <div className="mt-12 p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between flex-wrap gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
            <span className="font-semibold text-slate-800">
              Clear milestone checkpoints, complete source code handover, and structured documentation provided on every engagement.
            </span>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-700"
          >
            <span>Start Stage 01</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
