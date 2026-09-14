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
    <section id="why-hemanth" className="py-16 sm:py-20 lg:py-24 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider">
            Direct Partnership
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Founder-Led Engineering.{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              Zero Agency Overhead.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            When you partner with Hemanth Ranam, you don&apos;t get shuffled between junior account managers or sales reps. You work directly with a seasoned systems architect and strategic executive.
          </p>
        </div>

        {/* Credentials Callout Card */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-[#090f1e] border border-blue-500/25 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-[1px] shadow-lg shadow-blue-500/30 shrink-0">
              <div className="w-full h-full bg-[#060911] rounded-[15px] flex items-center justify-center text-blue-400">
                <Award className="w-7 h-7" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Hemanth Ranam</h3>
              <p className="text-xs text-blue-300">
                Founder & Systems Architect • ScaleNova & Chartora
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-300 font-mono">
                <span className="flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                  MBA (University of South Wales, UK)
                </span>
                <span className="text-slate-500">•</span>
                <span className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-emerald-400" />
                  CMI Level 7 Strategic Management & Leadership
                </span>
              </div>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/hemanth-ranam-41b542253"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] transition-all"
            >
              LinkedIn Profile
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/25 transition-all"
            >
              Book Systems Consultation
            </a>
          </div>
        </div>

        {/* 6 Value Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_HEMANTH_POINTS.map((pt, idx) => {
            const IconC = ICON_MAP[pt.icon] || UserCheck;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#090e1b]/80 border border-white/[0.08] hover:border-blue-500/30 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-400">
                  <IconC className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">{pt.title}</h4>
                  <span className="text-xs text-blue-400 font-medium block mt-0.5">
                    {pt.tagline}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pt-1">
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
