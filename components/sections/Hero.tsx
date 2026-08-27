"use client";

import { SITE_CONFIG } from "@/data/siteData";
import { HeroScene3D } from "@/components/3d/HeroScene3D";
import { ArrowRight, Layers, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white"
    >
      {/* Background Subtle Gradient & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-gradient-to-tr from-blue-100/50 via-sky-50/40 to-transparent blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left: Concise High-Impact Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Minimal Name Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-200/70 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-5">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Hemanth Ranam</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.12]">
              Building Digital Systems That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Work Smarter.
              </span>
            </h1>

            {/* Small Supporting Line */}
            <p className="mt-4 text-base sm:text-lg font-medium text-slate-600">
              {SITE_CONFIG.mainPositioning}
            </p>

            <p className="mt-2 text-sm sm:text-base text-slate-500 max-w-xl font-normal leading-relaxed">
              {SITE_CONFIG.shortDescription}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#services"
                id="hero-services-cta"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm hover:shadow-md transition-all group"
              >
                <span>View Services</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                id="hero-contact-cta"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-700 hover:text-slate-950 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-all"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Metrics Strip */}
            <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span>2X Founder</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span>~10Y Systems & Tech</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span>5+Y Financial Markets</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span>MBA & CMI Level 7</span>
              </div>
            </div>
          </div>

          {/* Right: 3D Interactive Scene */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <HeroScene3D />
          </div>
        </div>
      </div>
    </section>
  );
}
