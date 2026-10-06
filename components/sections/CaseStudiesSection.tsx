"use client";

import Link from "next/link";
import { PORTFOLIO_CASE_STUDIES } from "@/data/curatedCatalog";
import {
  FolderKanban,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Code2,
} from "lucide-react";

export function CaseStudiesSection() {
  // Show first 3 highlighted projects on the homepage
  const featuredCases = PORTFOLIO_CASE_STUDIES.slice(0, 3);

  return (
    <section id="work" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
              <FolderKanban className="w-3.5 h-3.5 text-blue-600" />
              <span>Selected Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Real Work &amp; Verified Systems
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl">
              Every project is clearly categorized by its authentic status. No manufactured revenue figures or inflated claims.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm transition-colors shrink-0"
          >
            <span>View All Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Featured Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featuredCases.map((cs) => (
            <div
              key={cs.id}
              className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 px-2 py-0.5 rounded-full bg-blue-50 border border-blue-100">
                    {cs.category}
                  </span>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                      cs.classification === "Real Client Project"
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                        : "bg-purple-50 text-purple-700 border-purple-200"
                    }`}
                  >
                    {cs.classification}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {cs.title}
                </h3>
                <p className="text-xs text-slate-500 mb-4 line-clamp-2">
                  {cs.summary}
                </p>

                <div className="space-y-3 pt-3 border-t border-slate-100 text-xs">
                  <div>
                    <span className="font-bold text-slate-700 block mb-0.5">
                      Problem:
                    </span>
                    <p className="text-slate-600 line-clamp-2">
                      {cs.problem}
                    </p>
                  </div>
                  <div>
                    <span className="font-bold text-slate-700 block mb-0.5">
                      Solution:
                    </span>
                    <p className="text-slate-600 line-clamp-2">
                      {cs.solution}
                    </p>
                  </div>
                  <div>
                    <span className="font-bold text-slate-700 block mb-0.5">
                      Result:
                    </span>
                    <p className="text-emerald-700 font-medium line-clamp-2">
                      {cs.result}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cs.technologies.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href="/work"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 font-bold text-xs border border-slate-200 hover:border-blue-200 transition-colors"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
