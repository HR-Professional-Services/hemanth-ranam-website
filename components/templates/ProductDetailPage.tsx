"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ContactSection } from "@/components/sections/ContactSection";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BackToTop } from "@/components/ui/BackToTop";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import {
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Sparkles,
  Users,
  ChevronRight,
  Clock,
  Server,
  Zap,
} from "lucide-react";

export interface ProductDetailProps {
  slug: string;
  name: string;
  tagline: string;
  badge: string;
  whatItSolves: string;
  problemDetails: string[];
  solution: string;
  whoItIsFor: string;
  coreModules: string[];
  workflow: string[];
  setupFeeNote: string;
  monthlyPlanNote: string;
  whatsIncluded: string[];
  supportLevel: string;
  techStack: string[];
  faqs: { question: string; answer: string }[];
}

export function ProductDetailPage({ product }: { product: ProductDetailProps }) {
  return (
    <div className="relative min-h-screen bg-[#060911] text-slate-100 selection:bg-blue-600/30 selection:text-blue-200 overflow-x-hidden">
      <ScrollProgressBar />
      <Navbar />

      <main id="main-content" className="flex flex-col">
        {/* Product Hero */}
        <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden border-b border-white/[0.06]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[450px] bg-gradient-to-b from-blue-600/10 via-indigo-600/5 to-transparent pointer-events-none blur-3xl -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3 text-slate-600" />
              <Link href="/#products" className="hover:text-white transition-colors">
                Business OS
              </Link>
              <ChevronRight className="w-3 h-3 text-slate-600" />
              <span className="text-blue-400 font-semibold">{product.name}</span>
            </div>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{product.badge}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                {product.name}
              </h1>

              <p className="mt-4 text-xl sm:text-2xl text-blue-300 font-medium leading-relaxed">
                &ldquo;{product.tagline}&rdquo;
              </p>

              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
                {product.solution}
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-3.5">
                <a
                  href={`#contact?service=${encodeURIComponent(product.name)}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/25 transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Discuss {product.name} Setup</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#workflow"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/[0.04] border border-white/[0.1] transition-all"
                >
                  <span>Explore Modules & Workflow</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem It Solves & Who It Is For */}
        <section className="py-16 sm:py-20 border-b border-white/[0.06] bg-[#070b16]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Problem Breakdown */}
              <div className="p-7 sm:p-8 rounded-3xl bg-rose-950/10 border border-rose-500/20 space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold">
                  The Problem It Solves
                </span>
                <h3 className="text-2xl font-bold text-white">
                  Why Legacy Systems Fail
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {product.whatItSolves}
                </p>

                <ul className="space-y-2.5 pt-2 text-xs text-slate-300">
                  {product.problemDetails.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-rose-400 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Who It Is For */}
              <div className="p-7 sm:p-8 rounded-3xl bg-blue-950/15 border border-blue-500/25 space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
                  Ideal Operating Profile
                </span>
                <h3 className="text-2xl font-bold text-white">
                  Who This System Is Engineered For
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {product.whoItIsFor}
                </p>

                <div className="pt-4 border-t border-white/[0.06] space-y-2 text-xs text-slate-300">
                  <span className="font-semibold text-white block">
                    Underlying Technology Foundation:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {product.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/[0.08] text-blue-300 font-mono text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Modules & Example Workflow */}
        <section id="workflow" className="py-16 sm:py-24 border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {/* Modules Grid */}
            <div>
              <div className="max-w-2xl">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
                  Component Architecture
                </span>
                <h2 className="text-3xl font-bold text-white mt-1">
                  Core Configured Modules
                </h2>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {product.coreModules.map((mod, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-[#090e1b]/80 border border-white/[0.08] flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-200">
                      {mod}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Example Workflow */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#09101e] border border-blue-500/20 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
                  End-to-End Execution
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  Example Operational Workflow
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {product.workflow.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2"
                  >
                    <span className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-400 font-mono text-xs font-bold flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Commercial Setup & Monthly Managed Support */}
        <section className="py-16 sm:py-20 border-b border-white/[0.06] bg-[#070b16]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
                Investment & Management
              </span>
              <h2 className="text-3xl font-bold text-white mt-1">
                Implementation & Managed SLA
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-6 sm:p-8 rounded-3xl bg-[#090e1b] border border-white/[0.08] space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  One-Time Implementation
                </span>
                <h4 className="text-xl font-bold text-white">
                  Architecture & Deployment
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {product.setupFeeNote}
                </p>
                <div className="pt-4 border-t border-white/[0.06] space-y-2 text-xs text-slate-300">
                  <span className="font-semibold text-white block">Deliverables:</span>
                  {product.whatsIncluded.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 sm:p-8 rounded-3xl bg-[#0b1222] border border-blue-500/30 space-y-4 shadow-xl">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
                  Ongoing Stewardship
                </span>
                <h4 className="text-xl font-bold text-white">
                  Managed Business OS
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {product.monthlyPlanNote}
                </p>
                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-200">
                  <span className="font-semibold text-white block mb-1">
                    Direct Support SLA:
                  </span>
                  <p className="text-[11px] leading-relaxed">
                    {product.supportLevel}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        {product.faqs.length > 0 && (
          <section className="py-16 sm:py-20 border-b border-white/[0.06]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
              <h3 className="text-2xl font-bold text-white text-center">
                Frequently Asked Questions about {product.name}
              </h3>
              <div className="space-y-3">
                {product.faqs.map((faq, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-[#090e1b]/80 border border-white/[0.08] space-y-2">
                    <h4 className="text-sm font-semibold text-white">{faq.question}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact Form with Pre-Selected Service */}
        <ContactSection
          preselectedService={product.name}
          preselectedCategory="01 Business OS"
        />
      </main>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
