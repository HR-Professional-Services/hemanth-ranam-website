import { EXPERIENCE_TIMELINE } from "@/data/siteData";
import { History, Calendar, ArrowRight } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-slate-50/60 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-2.5">
            <History className="w-3.5 h-3.5" />
            <span>Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Nearly a Decade of Experience
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            A continuous journey of technical problem-solving, systems architecture, and product entrepreneurship.
          </p>
        </div>

        {/* Minimal Timeline Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 relative">
          {EXPERIENCE_TIMELINE.map((item, index) => (
            <div
              key={item.year}
              className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between relative group hover:border-blue-300 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-black font-mono text-blue-600">
                    {item.year}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                </div>

                <h3 className="text-sm font-bold text-slate-900 leading-snug">
                  {item.label}
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span>Phase 0{index + 1}</span>
                <span className="text-blue-600">✓ Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
