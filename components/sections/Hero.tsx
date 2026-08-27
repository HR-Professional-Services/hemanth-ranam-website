"use client";

import { SITE_CONFIG } from "@/data/siteData";
import { HeroScene3D } from "@/components/3d/HeroScene3D";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-24 pb-10 md:pt-32 md:pb-16 overflow-hidden bg-white"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[250px] bg-gradient-to-tr from-blue-100/40 via-sky-50/30 to-transparent blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left: Direct & Powerful Positioning */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Business Systems & Tech</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-slate-900 leading-[1.12]">
              Building Digital Systems That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Work Smarter.
              </span>
            </h1>

            <p className="mt-3.5 text-base sm:text-lg font-medium text-slate-600">
              {SITE_CONFIG.positioning}
            </p>

            <p className="mt-1.5 text-xs sm:text-sm text-slate-500 max-w-lg leading-relaxed">
              I design and build practical digital systems, workflow automation, custom software and trading technology.
            </p>

            {/* Actions */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#services"
                id="hero-services-cta"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs hover:shadow-sm transition-all group"
              >
                <span>View Services</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                id="hero-contact-cta"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-950 bg-slate-50 hover:bg-slate-100 border border-slate-200/90 rounded-xl transition-all"
              >
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Right: 3D Object */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <HeroScene3D />
          </div>
        </div>
      </div>
    </section>
  );
}
