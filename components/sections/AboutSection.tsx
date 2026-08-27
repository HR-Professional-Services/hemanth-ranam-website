import Image from "next/image";
import { SITE_CONFIG } from "@/data/siteData";
import {
  GraduationCap,
  Award,
  CheckCircle2,
  Calendar,
  Briefcase,
  Layers,
  Sparkles,
} from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-slate-50/60 border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Business Thinking. <span className="text-blue-600">Technology Execution.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Bridging executive management strategy with deep technical implementation to build scalable business architectures, automation workflows, and trading technology.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Portrait Presentation */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm">
              {/* Soft Blue Glow Behind */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600/20 via-sky-400/20 to-indigo-600/20 rounded-3xl blur-xl opacity-70" />

              <div className="relative rounded-3xl overflow-hidden border-2 border-white shadow-xl bg-white">
                <div className="relative aspect-square w-full">
                  <Image
                    src="/images/hemanth-portrait.jpg"
                    alt="Hemanth Ranam - Technology Entrepreneur & Business Systems Architect"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                  />
                </div>

                {/* Bottom Overlay Card */}
                <div className="p-4 bg-white/95 backdrop-blur-md border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 leading-tight">
                      Hemanth Ranam
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      2X Founder • CEO @ ScaleNova
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-semibold border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    UK Based
                  </div>
                </div>
              </div>

              {/* Float badge */}
              <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-2xl border border-slate-200/90 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                  10Y
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-900">2017 → 2026</p>
                  <p className="text-[10px] text-slate-500">Business & Tech Journey</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative + Key Credentials */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            <div className="prose prose-slate max-w-none text-slate-600 text-base leading-relaxed space-y-4">
              <p>
                I am a technology entrepreneur and business systems specialist who operates at the intersection of business management, technology architecture, automation, custom software, and trading technology.
              </p>
              <p>
                As a 2X founder and the CEO of <strong className="text-slate-900 font-semibold">ScaleNova Pvt Ltd</strong>, my focus centers on designing practical, connected software systems that eliminate fragmented tools, reduce manual overhead, and turn messy business workflows into automated operating engines.
              </p>
              <p>
                In parallel, I have spent over 5 years studying and engineering financial markets technology—translating strict price action rules into bespoke Pine Script indicators, MetaTrader 5 Expert Advisors, and low-latency alert automation pipelines.
              </p>
            </div>

            {/* Strategic Education & Credentials */}
            <div className="w-full pt-4 border-t border-slate-200/80">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Executive & Academic Qualifications
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {SITE_CONFIG.education.map((edu) => (
                  <div
                    key={edu.degree}
                    className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3.5"
                  >
                    <div className="p-2 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 leading-tight">
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        {edu.institution}
                      </p>
                      <span className="inline-block mt-1 text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-sm">
                        {edu.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Competencies Checklist */}
            <div className="w-full pt-2">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-slate-700">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Business Systems Architecture</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>SaaS, ERP & CRM Solutions</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>AI & Workflow Automation</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Pine Script & MT5 Algo Tech</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Process Optimisation & SOP</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Strategic Leadership</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
