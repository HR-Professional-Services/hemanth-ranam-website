"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BackToTop } from "@/components/ui/BackToTop";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { FREE_RESOURCES, FreeResource } from "@/data/pricingData";
import {
  Download,
  CheckCircle2,
  Sparkles,
  FileSpreadsheet,
  FileText,
  Code2,
  X,
  ArrowRight,
  ShieldCheck,
  Mail,
  Lock,
  ExternalLink,
} from "lucide-react";

export default function ResourcesPage() {
  const [activeResource, setActiveResource] = useState<FreeResource | null>(null);
  const [selectedFormat, setSelectedFormat] = useState("All");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Map each resource to its natural commercial next step
  const getRelevantOffer = (res: FreeResource) => {
    const title = res.title.toLowerCase();
    if (title.includes("crm") || title.includes("lead") || title.includes("sales")) {
      return {
        title: "Automation Starter",
        price: "From $149",
        desc: "Need this connected live to your website and email alerts?",
        href: "/services?cat=automation",
      };
    }
    if (title.includes("website") || title.includes("seo") || title.includes("launch")) {
      return {
        title: "Business Systems Audit",
        price: "$99",
        desc: "Want a complete professional audit of your online conversions?",
        href: "/checkout?id=biz-sys-audit",
      };
    }
    if (title.includes("trading") || title.includes("pine") || title.includes("mt5")) {
      return {
        title: "TradingView Indicator",
        price: "From $49",
        desc: "Need a custom Pine Script v6 indicator programmed for your strategy?",
        href: "/trading-technology",
      };
    }
    return {
      title: "Business Systems Consultation",
      price: "$49",
      desc: "Discuss how to implement this system directly with Hemanth.",
      href: "/contact?service=consultation",
    };
  };

  const handleDownloadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    const GAS_URL =
      process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_WEBHOOK_URL ||
      "https://script.google.com/macros/s/AKfycbz0PfSDNcjbNUnMJRP0PgaI-jgPd2VCNvfXVEasYElOk_1jH1wWaXeZOKA9ewmONJlX-w/exec";

    try {
      await fetch(GAS_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          action: "createLead",
          name: name || "Free Resource Subscriber",
          email: email,
          category: "Free Resource",
          service: activeResource?.title || "Free Resource Download",
          selectedPlan: activeResource?.resourceCode || "FREE-RESOURCE",
          price: "$0",
          message: `Requested free resource: ${activeResource?.title} (${activeResource?.resourceCode})`,
          source: "Free Resources Page",
          page: "/resources",
        }),
      });
    } catch (err) {
      console.warn("GAS notification caught:", err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  const closeModal = () => {
    setActiveResource(null);
    setSubmitted(false);
    setEmail("");
    setName("");
  };

  const filteredResources = FREE_RESOURCES.filter((res) => {
    if (selectedFormat === "All") return true;
    if (selectedFormat === "Google Sheets") return res.format.includes("Sheet");
    if (selectedFormat === "Checklists") return res.format.includes("Checklist");
    if (selectedFormat === "Workbooks & Guides") return res.format.includes("Workbook") || res.format.includes("PDF");
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white flex flex-col">
      <ScrollProgressBar />
      <Navbar />

      <main className="flex-1 pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Resources</span>
        </div>

        {/* Hero Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Download className="w-3.5 h-3.5 text-blue-600" />
            <span>Free Practical Tools</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Free Systems Checklists &amp; Templates
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Immediate access to practical Google Sheets CRM templates, operational checklists, and workflow blueprints. Zero cost, no credit card required.
          </p>
        </div>

        {/* Format Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["All", "Google Sheets", "Checklists", "Workbooks & Guides"].map((fmt) => (
            <button
              key={fmt}
              type="button"
              onClick={() => setSelectedFormat(fmt)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedFormat === fmt
                  ? "bg-slate-900 text-white shadow-xs"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {fmt}
            </button>
          ))}
        </div>

        {/* Grid of Free Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredResources.map((res) => {
            const nextOffer = getRelevantOffer(res);

            return (
              <div
                key={res.id}
                className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200">
                      {res.format}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400">
                      Free ($0)
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-slate-900 mb-2">
                    {res.title}
                  </h2>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {res.description}
                  </p>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-slate-600 mb-4">
                    <strong className="text-slate-800 block mb-0.5">
                      Target Audience:
                    </strong>
                    <span>{res.whoItIsFor}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <button
                    type="button"
                    onClick={() => setActiveResource(res)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors shadow-xs cursor-pointer min-h-[44px]"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Resource (Free)</span>
                  </button>

                  <div className="p-2.5 rounded-xl bg-blue-50/50 border border-blue-100 flex items-center justify-between text-[11px]">
                    <span className="text-slate-600 truncate mr-2">
                      Need it automated?
                    </span>
                    <Link
                      href={nextOffer.href}
                      className="text-blue-700 font-bold hover:underline shrink-0"
                    >
                      {nextOffer.title} ({nextOffer.price}) →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Free Download Modal with Email Capture & Next Step */}
      {activeResource && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200">
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-4 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-black text-slate-900">
                  Access Confirmed!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Your copy of <strong>{activeResource.title}</strong> is ready for direct Google Drive access.
                </p>

                <div className="pt-2">
                  <a
                    href={activeResource.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-sm"
                  >
                    <span>Open in Google Drive</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Relevant Paid Upsell */}
                <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left">
                  <span className="text-[10px] font-mono font-bold uppercase text-blue-600 block mb-1">
                    Recommended Implementation
                  </span>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {getRelevantOffer(activeResource).title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {getRelevantOffer(activeResource).desc}
                  </p>
                  <Link
                    href={getRelevantOffer(activeResource).href}
                    className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline"
                  >
                    <span>Learn more ({getRelevantOffer(activeResource).price})</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ) : (
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 px-2 py-0.5 rounded-full bg-blue-50 border border-blue-200 mb-2 inline-block">
                  {activeResource.format}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  Get {activeResource.title}
                </h3>
                <p className="text-xs text-slate-600 mb-6">
                  Enter your email below to receive instant Google Drive copy access.
                </p>

                <form onSubmit={handleDownloadSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Jordan Smith"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jordan@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 min-h-[44px]"
                  >
                    <Download className="w-4 h-4" />
                    <span>{loading ? "Preparing Access..." : "Get Instant Access (Free)"}</span>
                  </button>

                  <div className="flex items-center gap-1.5 justify-center text-[11px] text-slate-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Zero spam. Direct Google Drive copy link.</span>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
