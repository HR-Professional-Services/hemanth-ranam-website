"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ContactSection } from "@/components/sections/ContactSection";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BackToTop } from "@/components/ui/BackToTop";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { TechBackground3D } from "@/components/ui/TechBackground3D";
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
  HelpCircle,
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
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-blue-600/20 selection:text-blue-700 overflow-x-hidden">
      {/* 3D Wireframe Tech Background */}
      <TechBackground3D />

      <ScrollProgressBar />
      <Navbar />

      <main id="main-content" className="relative z-10 flex flex-col">
        {/* Product Hero */}
        <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-6">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <Link href="/#products" className="hover:text-blue-600 transition-colors">
                Business OS
              </Link>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <span className="text-blue-600 font-bold">{product.name}</span>
            </div>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider mb-4 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>{product.badge}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                {product.name}
              </h1>

              <p className="mt-4 text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent leading-relaxed">
                &ldquo;{product.tagline}&rdquo;
              </p>

              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
                {product.solution}
              </p>

              {/* Action Buttons (same tab) */}
              <div className="mt-8 flex flex-wrap gap-3.5">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-500/25 transition-all hover:scale-[1.02]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Discuss {product.name} Setup</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#workflow"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-xs font-bold text-slate-700 hover:text-blue-600 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all"
                >
                  <span>Explore Modules &amp; Workflow</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem It Solves & Who It Is For */}
        <section className="py-14 sm:py-20 border-b border-slate-200/80 bg-slate-50/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Problem Breakdown (Window Card) */}
              <div className="rounded-3xl bg-white border border-rose-200/90 shadow-sm p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="text-xs font-mono uppercase tracking-wider text-rose-700 font-bold">
                    The Problem It Solves
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Why Legacy Systems Fail
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {product.whatItSolves}
                </p>

                <ul className="space-y-2.5 pt-2 text-xs text-slate-700">
                  {product.problemDetails.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Who It Is For (Window Card) */}
              <div className="rounded-3xl bg-white border border-blue-200 shadow-sm p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                  <span className="text-xs font-mono uppercase tracking-wider text-blue-700 font-bold">
                    Ideal Operating Profile
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Who This System Is Engineered For
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {product.whoItIsFor}
                </p>

                <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                  <span className="font-bold text-slate-900 block">
                    Underlying Technology Foundation:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {product.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 font-mono text-[11px] font-semibold"
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
        <section id="workflow" className="py-16 sm:py-24 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {/* Modules Grid */}
            <div>
              <div className="max-w-2xl">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-700 font-bold">
                  Component Architecture
                </span>
                <h2 className="text-3xl font-bold text-slate-900 mt-1">
                  Core Configured Modules
                </h2>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {product.coreModules.map((mod, i) => (
                  <div
                    key={i}
                    className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex items-center gap-3 shadow-xs"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-slate-900">
                      {mod}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Example Workflow */}
            <div className="p-6 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-blue-700 font-bold">
                  End-to-End Execution
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  Example Operational Workflow
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {product.workflow.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-slate-200/90 space-y-2 shadow-xs"
                  >
                    <span className="w-6 h-6 rounded-lg bg-blue-50 text-blue-700 font-mono text-xs font-bold flex items-center justify-center border border-blue-200">
                      {idx + 1}
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Commercial Setup & Monthly Managed Support */}
        <section className="py-14 sm:py-20 border-b border-slate-200/80 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono uppercase tracking-wider text-blue-700 font-bold">
                Investment &amp; Management
              </span>
              <h2 className="text-3xl font-bold text-slate-900 mt-1">
                Implementation &amp; Managed SLA
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* One Time */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                  One-Time Implementation
                </span>
                <h4 className="text-xl font-bold text-slate-900">
                  Architecture &amp; Deployment
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {product.setupFeeNote}
                </p>
                <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                  <span className="font-bold text-slate-900 block">Deliverables:</span>
                  {product.whatsIncluded.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Managed */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-blue-600 shadow-xl shadow-blue-500/10 space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-700 font-bold">
                  Ongoing Stewardship
                </span>
                <h4 className="text-xl font-bold text-slate-900">
                  Managed Business OS
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {product.monthlyPlanNote}
                </p>
                <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900">
                  <span className="font-bold text-slate-900 block mb-1">
                    Direct Support SLA:
                  </span>
                  <p className="text-[11px] leading-relaxed text-slate-700">
                    {product.supportLevel}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        {product.faqs.length > 0 && (
          <section className="py-14 sm:py-20 border-b border-slate-200/80">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 text-center">
                Frequently Asked Questions about {product.name}
              </h3>
              <div className="space-y-3">
                {product.faqs.map((faq, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        <HelpCircle className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">{faq.question}</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8.5">{faq.answer}</p>
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
