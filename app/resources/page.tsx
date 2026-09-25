"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BackToTop } from "@/components/ui/BackToTop";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { TechBackground3D } from "@/components/ui/TechBackground3D";
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
} from "lucide-react";

export default function ResourcesPage() {
  const [activeResource, setActiveResource] = useState<FreeResource | null>(null);
  const [selectedFormat, setSelectedFormat] = useState("All");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDownloadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      // Post to contact API to record the lead into Google Sheets
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
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
      console.error("Lead submission error:", err);
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
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-blue-600/20 selection:text-blue-700 overflow-x-hidden">
      <TechBackground3D />
      <ScrollProgressBar />
      <Navbar />

      <main id="main-content" className="relative z-10 flex flex-col pt-16">
        {/* Header Hero */}
        <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 border-b border-slate-200/80 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono uppercase tracking-wider font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Free Practical Tools &amp; Blueprints</span>
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              12 Free Tools to Eliminate{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Manual Drag.
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Immediate access to battle-tested Google Sheets CRM templates, cash flow forecasting models, and operations audit checklists. Zero cost, no credit card required.
            </p>

            {/* Visual Metric Highlights */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col items-center">
                <span className="text-xl sm:text-2xl font-black text-emerald-600 font-mono">12</span>
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mt-0.5">Free Blueprints</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col items-center">
                <span className="text-xl sm:text-2xl font-black text-slate-900 font-mono">$0</span>
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mt-0.5">No Credit Card</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col items-center">
                <span className="text-xl sm:text-2xl font-black text-blue-600 font-mono">Drive</span>
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mt-0.5">Instant Access</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col items-center">
                <span className="text-xl sm:text-2xl font-black text-teal-600 font-mono">100%</span>
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mt-0.5">Production Ready</span>
              </div>
            </div>

            {/* Visual Format Tabs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {["All", "Google Sheets", "Checklists", "Workbooks & Guides"].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setSelectedFormat(tab)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    selectedFormat === tab
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/20"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Resource Grid */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((res) => (
                <div
                  key={res.id}
                  className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Header tags */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 font-bold uppercase tracking-wider">
                        {res.resourceCode}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 font-bold">
                        {res.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
                      {res.format.includes("Sheet") ? (
                        <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                      ) : res.format.includes("Code") ? (
                        <Code2 className="w-4 h-4 text-blue-600" />
                      ) : (
                        <FileText className="w-4 h-4 text-cyan-600" />
                      )}
                      <span>{res.format}</span>
                    </div>

                    <h2 className="text-lg font-bold text-slate-900 leading-snug">
                      {res.title}
                    </h2>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {res.description}
                    </p>

                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-slate-500">
                      <strong className="text-slate-700 block mb-0.5">Ideal For:</strong>
                      {res.whoItIsFor}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setActiveResource(res)}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all cursor-pointer shadow-sm"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>{res.ctaLabel}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lead Capture Modal */}
        {activeResource && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
            <div className="relative w-full max-w-md p-6 sm:p-8 rounded-3xl bg-white shadow-2xl border border-slate-200 text-slate-900">
              <button
                type="button"
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {!submitted ? (
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-mono font-bold mb-3">
                    <Sparkles className="w-3 h-3" />
                    <span>Free Instant Download</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {activeResource.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                    Enter your email to receive direct view &amp; clone access in Google Drive.
                  </p>

                  <form onSubmit={handleDownloadSubmit} className="mt-6 space-y-3.5">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Your Name (Optional)
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-500 hover:to-blue-700 shadow-md shadow-blue-500/25 transition-all cursor-pointer disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Preparing Access...</span>
                      ) : (
                        <>
                          <Download className="w-3.5 h-3.5" />
                          <span>Unlock Google Drive Resource</span>
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 pt-2">
                      <Lock className="w-3 h-3 text-slate-400" />
                      <span>Zero spam. Direct Google Drive view/clone access granted immediately.</span>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="text-center py-4 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    Your Resource Is Ready!
                  </h3>
                  <p className="text-xs text-slate-600">
                    Click below to open the master Google Drive folder. You can make a personal copy directly to your own Google Drive.
                  </p>

                  <a
                    href={activeResource.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/25 transition-all cursor-pointer"
                  >
                    <span>Open in Google Drive</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    type="button"
                    onClick={closeModal}
                    className="text-xs text-slate-400 hover:text-slate-600 cursor-pointer block mx-auto pt-2"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
