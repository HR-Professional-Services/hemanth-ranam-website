import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BackToTop } from "@/components/ui/BackToTop";
import { LinkedinIcon } from "@/components/ui/LinkedinIcon";
import {
  GraduationCap,
  Award,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Mail,
  UserCheck,
  Workflow,
  Cpu,
  Globe,
  TrendingUp,
  Layers,
  Sparkles,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";

export const metadata: Metadata = {
  title: "About Hemanth Ranam | Founder & Systems Architect",
  description:
    "Hemanth Ranam — Systems Architect & Founder. Designing practical business systems, workflow automation, ERPNext, and trading technology for growing companies.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white flex flex-col">
      <Navbar />
      <ScrollProgressBar />

      <main className="flex-1 pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">About</span>
        </div>

        {/* Hero Section with Portrait */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 mb-12 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center">
            {/* Portrait */}
            <div className="md:col-span-5 text-center md:text-left">
              <div className="relative inline-block mx-auto md:mx-0">
                <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-3xl overflow-hidden border-4 border-white shadow-xl mx-auto relative bg-slate-100">
                  <Image
                    src="/images/hemanth-ranam-profile.jpg"
                    alt="Hemanth Ranam — Founder & Systems Architect"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 256px, 320px"
                    priority
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-blue-600 text-white p-2.5 rounded-2xl shadow-lg border-2 border-white">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>

              <div className="mt-5 space-y-1">
                <h2 className="text-xl font-black text-slate-900">
                  Hemanth Ranam
                </h2>
                <p className="text-xs font-mono font-bold uppercase text-blue-600">
                  Founder &amp; Systems Architect
                </p>
                <p className="text-xs text-slate-500">
                  United Kingdom • ScaleNova Business OS
                </p>
              </div>

              <div className="mt-4 flex items-center justify-center md:justify-start gap-3">
                <a
                  href={SITE_CONFIG.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-blue-600" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-600" />
                  <span>Email</span>
                </a>
              </div>
            </div>

            {/* Introduction & Positioning */}
            <div className="md:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
                <UserCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>Founder Stewardship</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Built directly by Hemanth Ranam
              </h1>

              <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
                I work directly with business owners to design, build and improve the systems behind their operations.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Growing companies often end up with a tangled patchwork of spreadsheets, disconnected software subscriptions, and manual handoffs. I step into that chaos, diagnose where time and leads are being lost, and engineer clean, unified operating systems that make businesses easier to run.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono font-bold text-slate-700">
                <span className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200">
                  MBA (Univ of South Wales)
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200">
                  CMI Level 7 Executive
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200">
                  Nearly 10 Years Tech &amp; Business
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* What I Do Section */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 mb-12 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600">
              Core Focus
            </span>
            <h2 className="text-2xl font-black text-slate-900">
              What I Do
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">
                Business Systems Architecture
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Replacing messy, disconnected tools with connected business operating systems spanning CRM, quoting, invoicing, operations, and executive visibility.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">
                Workflow &amp; Sheet Automation
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Automating repetitive data entry, email dispatches, status tracking, and Google Workspace pipelines so your team focuses on high-value work.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">
                ERPNext &amp; Trading Technology
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Configuring Frappe/ERPNext for enterprise accounting and inventory, as well as programming quantitative Pine Script v6 and MT5 tools for financial markets.
              </p>
            </div>
          </div>
        </div>

        {/* Business Philosophy & How I Work */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Philosophy */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xs space-y-4">
            <h3 className="text-xl font-black text-slate-900">
              Business Philosophy
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Full Data Sovereignty:</strong> You own your code, databases, and customer records. No hostage subscription pricing.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Show First, Explain Second:</strong> Practical, working prototypes and clear spreadsheets over theoretical 80-page slide decks.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Predictable Value:</strong> Transparent, fixed milestone prices so you know the investment before work begins.
                </span>
              </li>
            </ul>
          </div>

          {/* How I Work */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xs space-y-4">
            <h3 className="text-xl font-black text-slate-900">
              How I Work
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Direct Founder Engagement:</strong> Every line of code, configuration, and architecture is handled directly by me.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Accessible Discovery:</strong> Start with a $49 consultation. If you proceed with implementation, 100% of the fee is credited.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Long-Term Support:</strong> Complete video documentation, SOP handover, and ongoing monthly operational care.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Technical Expertise Matrix */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 mb-12 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600">
              Stack &amp; Tooling
            </span>
            <h2 className="text-2xl font-black text-slate-900">
              Technical Expertise
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <span className="font-bold text-slate-900 block mb-1">
                ERP &amp; Frameworks
              </span>
              <p className="text-slate-500">
                Frappe Framework, ERPNext v14/v15, Next.js 16, React 19
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <span className="font-bold text-slate-900 block mb-1">
                Databases &amp; Cloud
              </span>
              <p className="text-slate-500">
                MariaDB, PostgreSQL, Redis, Cloudflare Workers, Linux
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <span className="font-bold text-slate-900 block mb-1">
                Automation &amp; APIs
              </span>
              <p className="text-slate-500">
                Google Apps Script, REST Webhooks, Python, Stripe
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <span className="font-bold text-slate-900 block mb-1">
                Trading Tech
              </span>
              <p className="text-slate-500">
                Pine Script v6, MQL5, MetaTrader 5, Webhook Bridges
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 text-center shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-3">
            Ready to make your business easier to run?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-6 leading-relaxed">
            Book a 60-minute systems consultation. We review your tools and bottlenecks, and 100% of the $49 fee is credited toward any project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact?service=consultation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-colors shadow-sm"
            >
              <span>Book $49 Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-200 font-bold text-sm transition-colors"
            >
              <span>View Selected Work</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
