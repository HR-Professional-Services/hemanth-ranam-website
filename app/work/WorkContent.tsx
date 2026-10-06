"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BackToTop } from "@/components/ui/BackToTop";
import { PORTFOLIO_CASE_STUDIES } from "@/data/curatedCatalog";
import {
  FolderKanban,
  ArrowRight,
  Info,
} from "lucide-react";

const WORK_CATEGORIES = [
  "All Work",
  "Business Systems",
  "Automation",
  "ERPNext",
  "Websites",
  "Trading Technology",
];

export function WorkContent() {
  const [activeCategory, setActiveCategory] = useState("All Work");

  const filteredProjects = PORTFOLIO_CASE_STUDIES.filter((p) => {
    if (activeCategory === "All Work") return true;
    return p.category === activeCategory;
  });

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white flex flex-col">
      <Navbar />
      <ScrollProgressBar />

      <main className="flex-1 pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Selected Work</span>
        </div>

        {/* Hero Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <FolderKanban className="w-3.5 h-3.5 text-blue-600" />
            <span>Case Studies &amp; Projects</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Selected Work &amp; Systems Architecture
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Real implementations, internal architectures, and technical demonstrations. Every project is explicitly classified with problem, solution, result, and technology stack.
          </p>

          <div className="mt-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
            <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <p>
              <strong>Integrity Guarantee:</strong> All case studies reflect actual engineered systems. Illustrative or internal models are transparently labeled with their exact status to ensure zero exaggerated or invented claims.
            </p>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-slate-100">
          {WORK_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-slate-900 text-white shadow-xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/5 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200">
                    {project.category}
                  </span>
                  <span
                    className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${
                      project.classification === "Real Client Project"
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                        : project.classification === "Internal Project"
                        ? "bg-purple-50 text-purple-700 border-purple-200"
                        : "bg-amber-50 text-amber-700 border-amber-200"
                    }`}
                  >
                    {project.classification}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
                  {project.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                  {project.summary}
                </p>

                {/* Structured Breakdown */}
                <div className="space-y-4 mb-6 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 block mb-1">
                      Problem
                    </span>
                    <p className="text-slate-700 leading-relaxed font-normal">
                      {project.problem}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 block mb-1">
                      Solution
                    </span>
                    <p className="text-slate-700 leading-relaxed font-normal">
                      {project.solution}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                      Result
                    </span>
                    <p className="text-slate-700 leading-relaxed font-normal">
                      {project.result}
                    </p>
                  </div>
                </div>

                {project.metricsDisclaimer && (
                  <p className="text-[11px] text-slate-400 italic mb-6">
                    * {project.metricsDisclaimer}
                  </p>
                )}
              </div>

              {/* Technologies Used & Action */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Technology Stack
                </span>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 text-slate-700 font-bold text-xs transition-colors"
                >
                  <span>Discuss Similar Implementation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-3">
            Need a similar system for your business?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-6 leading-relaxed">
            Let&apos;s map your current software stack, diagnose your manual bottlenecks, and design a practical implementation plan.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact?service=consultation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-colors shadow-sm"
            >
              <span>Book a $49 Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-200 font-bold text-sm transition-colors"
            >
              <span>View All Services</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
