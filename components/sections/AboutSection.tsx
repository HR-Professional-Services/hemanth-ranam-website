import Image from "next/image";
import { SITE_CONFIG } from "@/data/siteData";
import {
  GraduationCap,
  Award,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  Briefcase,
} from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            About Me
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Technology entrepreneur and systems architect combining business strategy with technical software implementation.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Professional Portrait Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-white">
                <div className="relative aspect-square w-full">
                  <Image
                    src="/images/hemanth-portrait.jpg"
                    alt="Hemanth Ranam - Technology Entrepreneur"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 380px"
                    priority
                  />
                </div>

                <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Hemanth Ranam
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      2X Founder • UK Based
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                    Active 2026
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Key Facts, Track Record & Qualifications */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Visual Highlights Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider mb-1">
                  <Briefcase className="w-4 h-4" />
                  <span>Nearly 10 Years Experience</span>
                </div>
                <p className="text-sm font-bold text-slate-900">
                  Business • Technology • Management
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Continuous systems development & entrepreneurship since 2017.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider mb-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>5+ Years Trading & Markets</span>
                </div>
                <p className="text-sm font-bold text-slate-900">
                  Trading • Markets • Strategy • Technology
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Pine Script v5, MT5 Expert Advisors, and alert automation.
                </p>
              </div>
            </div>

            {/* Academic & Strategic Qualifications */}
            <div className="space-y-2">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Executive Qualifications
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SITE_CONFIG.education.map((edu) => (
                  <div
                    key={edu.degree}
                    className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-center gap-3"
                  >
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 leading-tight">
                        {edu.degree}
                      </p>
                      <p className="text-[11px] text-slate-500">{edu.institution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ScaleNova Founder Mention */}
            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80 flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <p className="text-xs font-bold text-blue-900">
                  Founder & CEO — ScaleNova Pvt Ltd
                </p>
                <p className="text-xs text-slate-600">
                  Building a modern Business Operating System for unified operations, ERP, and automation.
                </p>
              </div>
              <a
                href={SITE_CONFIG.scalenovaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-blue-600 bg-white hover:bg-blue-600 hover:text-white rounded-lg transition-colors border border-blue-200 shrink-0 shadow-xs"
              >
                <span>scalenovasys.com</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
