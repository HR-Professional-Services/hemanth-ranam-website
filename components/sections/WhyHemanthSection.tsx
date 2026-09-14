"use client";

import { WHY_HEMANTH_POINTS } from "@/data/businessOsData";
import {
  UserCheck,
  Network,
  ShieldCheck,
  CheckCircle2,
  RefreshCw,
  Cpu,
  ArrowRight,
  GraduationCap,
  Award,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  UserCheck,
  Network,
  ShieldCheck,
  CheckCircle2,
  RefreshCw,
  Cpu,
};

export function WhyHemanthSection() {
  return (
    <section id="why-hemanth" className="py-16 sm:py-20 lg:py-24 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider font-semibold">
            Direct Partnership
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Founder-Led Engineering.{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
              Zero Agency Overhead.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            When you partner with Hemanth Ranam, you don&apos;t get shuffled between junior account managers or sales reps. You work directly with a seasoned systems architect and strategic executive.
          </p>
        </div>

        {/* Credentials Callout Card (Mac/Windows Pure White Window Frame) */}
        <div className="mt-10 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-blue-500/5 max-w-5xl mx-auto overflow-hidden">
          <div className="px-5 py-3 bg-slate-50/90 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="ml-2 text-xs font-mono text-slate-600 font-semibold">
                architect-profile // credentials.verified
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-semibold">
              Principal Architect
            </span>
          </div>

          <div className="p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-[2px] shadow-lg shadow-blue-500/20 shrink-0">
                <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-blue-600">
                  <Award className="w-7 h-7" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Hemanth Ranam</h3>
                <p className="text-xs text-blue-600 font-medium">
                  Founder &amp; Systems Architect • Enterprise Systems &amp; Trading Technology
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-600 font-mono">
                  <span className="flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                    MBA (University of South Wales, UK)
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-emerald-600" />
                    CMI Level 7 Strategic Management &amp; Leadership
                  </span>
                </div>
              </div>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/hemanth-ranam-41b542253"
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:text-blue-600 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all"
              >
                LinkedIn Profile
              </a>
              <a
                href="#contact"
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-500/25 transition-all"
              >
                Book Systems Consultation
              </a>
            </div>
          </div>
        </div>

        {/* 6 Value Pillars Grid with Headings Next to Icons */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_HEMANTH_POINTS.map((pt, idx) => {
            const IconC = ICON_MAP[pt.icon] || UserCheck;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/5 transition-all space-y-3"
              >
                {/* Heading next to icon */}
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <IconC className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 leading-tight">{pt.title}</h4>
                    <span className="text-[11px] text-blue-600 font-medium block">
                      {pt.tagline}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  {pt.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
