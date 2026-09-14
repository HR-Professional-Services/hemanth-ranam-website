"use client";

import Link from "next/link";
import { ArrowRight, Calendar, Layers, ShieldCheck, Sparkles } from "lucide-react";
import { HeroVisualDashboard } from "./HeroVisualDashboard";

export function Hero() {
  return (
    <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
      {/* Subtle radial ambient gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-gradient-to-b from-blue-600/10 via-indigo-600/5 to-transparent pointer-events-none blur-3xl -z-10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow Tag */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md shadow-lg shadow-black/40">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-medium text-slate-300">
              Hemanth Ranam • Founder & Systems Architect
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-xs font-mono text-blue-400">Managed Business OS</span>
          </div>
        </div>

        {/* Primary Headline */}
        <div className="text-center max-w-4xl mx-auto mt-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            BUILD YOUR{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              BUSINESS OPERATING SYSTEM.
            </span>
          </h1>

          <p className="mt-5 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            One connected system for your customers, people, operations and growth. We design, configure and support practical Business OS solutions using ERPNext, CRM, automation and modern web technology.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href="#products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-500/25 border border-blue-400/30 transition-all hover:scale-[1.02]"
            >
              <Layers className="w-4 h-4" />
              <span>Explore Business OS</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] transition-all hover:scale-[1.02]"
            >
              <Calendar className="w-4 h-4 text-blue-400" />
              <span>Book a Systems Consultation</span>
            </a>
          </div>

          {/* Trust Capability Strip */}
          <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Business Systems
            </span>
            <span className="text-slate-400">•</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              ERPNext Core
            </span>
            <span className="text-slate-400">•</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              CRM Pipelines
            </span>
            <span className="text-slate-400">•</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              AI Automation
            </span>
            <span className="text-slate-400">•</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              Website Growth OS
            </span>
            <span className="text-slate-400">•</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              Trading Technology
            </span>
          </div>
        </div>

        {/* 7. Floating Animated Dashboard Visual */}
        <HeroVisualDashboard />
      </div>
    </section>
  );
}
