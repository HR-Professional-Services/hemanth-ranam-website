import Image from "next/image";
import { SITE_CONFIG } from "@/data/siteData";
import {
  GraduationCap,
  Sparkles,
  ArrowUpRight,
  Briefcase,
  TrendingUp,
  Award,
} from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-16 bg-slate-50/50 border-y border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left: Real User Portrait */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px]">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={SITE_CONFIG.profileImage}
                    alt={SITE_CONFIG.profileAlt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 320px"
                    priority
                  />
                </div>

                <div className="p-3 bg-white border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 leading-tight">
                      Hemanth Ranam
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium">
                      2X Founder • UK Based
                    </p>
                  </div>
                  <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                    Active 2026
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Compact Bio + Visual Statistics */}
          <div className="lg:col-span-8 space-y-5 text-left">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3 h-3" />
                <span>About Me</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Technology Entrepreneur & Systems Architect
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                I help businesses design, build and automate practical digital systems that eliminate manual overhead and turn messy operations into scalable software engines. In parallel, I engineer custom algorithmic trading indicators, MT5 Expert Advisors, and alert workflows.
              </p>
            </div>

            {/* 4 Compact Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {SITE_CONFIG.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-3 rounded-xl bg-white border border-slate-200/90 shadow-xs"
                >
                  <p className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs font-bold text-blue-700 leading-tight mt-0.5">
                    {stat.label}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5 leading-tight">
                    {stat.sub}
                  </p>
                </div>
              ))}
            </div>

            {/* Founder Note & Education */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <div className="p-3 rounded-xl bg-white border border-slate-200/90 flex items-center justify-between gap-2">
                <div className="space-y-0.5">
                  <p className="text-xs font-bold text-slate-900">
                    Founder & CEO — ScaleNova
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Building a unified Business Operating System.
                  </p>
                </div>
                <a
                  href={SITE_CONFIG.scalenovaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 p-1.5 rounded-lg bg-blue-50 shrink-0"
                  aria-label="ScaleNova Website"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200/90 flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">
                    MBA & CMI Level 7
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Univ of South Wales • Strategic Leadership
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
