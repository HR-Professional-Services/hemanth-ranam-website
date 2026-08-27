import { EXPERIENCE_TIMELINE } from "@/data/siteData";
import { History, CheckCircle2, Calendar, Award, Sparkles } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <History className="w-3.5 h-3.5" />
            <span>Track Record & Evolution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Nearly a Decade of <span className="text-blue-600">Building, Managing & Solving Problems.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            A continuous track record since 2017 spanning corporate strategic management, software engineering, SaaS entrepreneurship, and financial markets automation.
          </p>
        </div>

        {/* Milestone Cards */}
        <div className="space-y-8">
          {EXPERIENCE_TIMELINE.map((item, index) => (
            <div
              key={item.year}
              className="rounded-3xl bg-white border border-slate-200/90 shadow-sm p-6 sm:p-8 relative overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                      {item.year}
                    </span>
                    <span className="text-xs font-medium text-slate-400">
                      {item.period}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-blue-700 mt-0.5">
                    {item.role}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description & Highlights */}
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-5">
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="lg:col-span-7 space-y-2.5">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Key Focus & Milestone Highlights
                  </p>
                  {item.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Evolution Roadmap Bar */}
        <div className="mt-12 rounded-2xl bg-white border border-slate-200/80 p-5 sm:p-6">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
            Progressive Competency Evolution (2017 → 2026)
          </p>
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium">
            <span className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 border border-slate-200">
              Business & Management
            </span>
            <span className="text-slate-400">→</span>
            <span className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 border border-slate-200">
              Technology Development
            </span>
            <span className="text-slate-400">→</span>
            <span className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 border border-slate-200">
              2X Entrepreneurship
            </span>
            <span className="text-slate-400">→</span>
            <span className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 border border-slate-200">
              ERP & Business Systems
            </span>
            <span className="text-slate-400">→</span>
            <span className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 border border-slate-200">
              AI & Automation
            </span>
            <span className="text-slate-400">→</span>
            <span className="px-3 py-1.5 rounded-xl bg-blue-50 text-blue-700 font-bold border border-blue-200">
              Trading Systems & Tech
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
