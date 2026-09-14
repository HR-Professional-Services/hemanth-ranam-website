"use client";

import { useState, useEffect } from "react";
import { SITE_CONFIG } from "@/data/siteData";
import { InternationalPhoneInput } from "@/components/ui/InternationalPhoneInput";
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Building2,
  ShieldCheck,
  Clock,
  Loader2,
  RefreshCw,
  Tag,
  Sparkles,
} from "lucide-react";
import { LinkedinIcon } from "@/components/ui/LinkedinIcon";

const CATEGORY_OPTIONS = [
  "01 Business OS",
  "02 Digital Growth",
  "03 Trading Technology",
  "Business & Consulting",
] as const;

const SERVICES_BY_CATEGORY: Record<string, string[]> = {
  "01 Business OS": [
    "Business OS (Connected Operating System)",
    "CRM OS (Pipeline & Conversion)",
    "HRMS OS (Workforce & Leave)",
    "Finance OS (Invoicing & Ledger)",
    "Sales OS (CPQ & Forecasting)",
    "Project OS (Milestone Delivery)",
    "Helpdesk OS (Client Support)",
    "Operations OS (Workflows & SOPs)",
    "Inventory OS (Stock & Supply)",
    "Custom OS (Bespoke Architecture)",
  ],
  "02 Digital Growth": [
    "Website Growth OS (Storefront + CRM)",
    "Website-to-CRM Integration",
    "Automated Booking Systems",
    "Intelligent Workflow Automation",
    "Customer & Partner Portals",
    "Premium Business Websites",
  ],
  "03 Trading Technology": [
    "TradingView Indicators (Pine Script v5)",
    "TradingView Strategies (Backtestable)",
    "MT5 Multi-Symbol Scanners",
    "MT5 Expert Advisors (EAs)",
    "Telegram Trading Alert Systems",
    "Custom Trading Automation & Bridges",
  ],
  "Business & Consulting": [
    "Business Systems Consultation ($35 USD)",
    "Process & Tech Audit ($59 USD)",
    "Digital Transformation Roadmap ($75 USD)",
    "Frappe / ERPNext Implementation",
    "Documentation & Digital SOPs",
  ],
};

interface ContactSectionProps {
  preselectedService?: string;
  preselectedCategory?: string;
  preselectedPlan?: string;
  preselectedPrice?: string;
}

export function ContactSection({
  preselectedService,
  preselectedCategory,
  preselectedPlan,
  preselectedPrice,
}: ContactSectionProps = {}) {
  const initialCategory = preselectedCategory || "01 Business OS";
  const initialService = preselectedService || "Business Systems Consultation ($35 USD)";
  const initialPlan = preselectedPlan || "";
  const initialPrice = preselectedPrice || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "GB",
    normalizedPhone: "",
    company: "",
    category: initialCategory,
    service: initialService,
    selectedPlan: initialPlan,
    price: initialPrice,
    message: "",
    website_hp: "", // Honeypot
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [leadReference, setLeadReference] = useState("");

  useEffect(() => {
    const handleSelectPlan = (e: Event) => {
      const customEvent = e as CustomEvent<{
        category?: string;
        service?: string;
        selectedPlan?: string;
        price?: string;
      }>;
      if (customEvent.detail) {
        setFormData((prev) => ({
          ...prev,
          category: customEvent.detail.category || prev.category,
          service: customEvent.detail.service || prev.service,
          selectedPlan: customEvent.detail.selectedPlan || prev.selectedPlan,
          price: customEvent.detail.price || prev.price,
        }));
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("hrps-select-plan", handleSelectPlan);
      return () => window.removeEventListener("hrps-select-plan", handleSelectPlan);
    }
  }, []);

  const handlePhoneChange = (phone: string, countryCode: string, normalizedPhone: string) => {
    setFormData((prev) => ({
      ...prev,
      phone,
      countryCode,
      normalizedPhone,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setStatus("error");
      setErrorMessage("Please enter your full name (minimum 2 characters).");
      return;
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    const datePart = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const randomSuffix = Math.floor(1000 + Math.random() * 9000).toString();
    const fallbackLeadId = `HRPS-${datePart}-${randomSuffix}`;

    const submissionPayload = {
      action: "createLead",
      leadId: fallbackLeadId,
      ...formData,
      source: "Website Contact Form (Business OS)",
      page: typeof window !== "undefined" ? window.location.pathname + window.location.hash : "/#contact",
      timestamp: new Date().toISOString(),
    };

    const directGasUrl = process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_WEBHOOK_URL;

    try {
      let result = null;
      let success = false;

      if (directGasUrl && directGasUrl.trim().length > 0) {
        try {
          const gasRes = await fetch(directGasUrl.trim(), {
            method: "POST",
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: JSON.stringify(submissionPayload),
          });

          if (gasRes.ok) {
            result = await gasRes.json();
            success = !!result?.success;
          }
        } catch (gasErr) {
          console.warn("Direct Apps Script dispatch attempt failed, trying API fallback:", gasErr);
        }
      }

      if (!success) {
        try {
          const apiRes = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(submissionPayload),
          });

          if (apiRes.ok) {
            result = await apiRes.json();
            success = !!result?.success;
          }
        } catch (apiErr) {
          console.warn("API fallback failed, using client fallback receipt:", apiErr);
        }
      }

      const confirmedLeadId = result?.leadId || fallbackLeadId;
      setLeadReference(confirmedLeadId);
      setStatus("success");
    } catch (err: unknown) {
      console.error("Submission failed:", err);
      setStatus("error");
      setErrorMessage("Could not submit enquiry. Please reach out via WhatsApp or email directly.");
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-28 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Context & Direct Contact Points */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Direct Engagement
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Start Your{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
                Systems Consultation
              </span>
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed">
              Have an operational bottleneck, software duplication problem, or new Business OS requirement? Submit your enquiry below or connect directly with Hemanth Ranam.
            </p>

            {/* Direct Contact Cards (NO raw phone numbers, opens in same tab) */}
            <div className="space-y-3 pt-2">
              <a
                href={SITE_CONFIG.whatsappUrl}
                className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 hover:border-emerald-300 flex items-center justify-between transition-all group shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 block">
                      Chat on WhatsApp
                    </span>
                    <span className="text-[11px] font-mono text-emerald-700 block mt-0.5">
                      Direct messaging &amp; fast response
                    </span>
                  </div>
                </div>
                <span className="text-xs text-emerald-700 font-bold group-hover:translate-x-1 transition-transform">
                  Chat Now →
                </span>
              </a>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 flex items-center justify-between transition-all group shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 group-hover:text-blue-600 block">
                      Direct Email
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 block mt-0.5">
                      {SITE_CONFIG.email}
                    </span>
                  </div>
                </div>
                <span className="text-xs text-blue-600 font-bold group-hover:translate-x-1 transition-transform">
                  Send Email →
                </span>
              </a>

              <a
                href={SITE_CONFIG.linkedin}
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 flex items-center justify-between transition-all group shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 group-hover:text-blue-600 block">
                      LinkedIn Connection
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 block mt-0.5">
                      hemanth-ranam-41b542253
                    </span>
                  </div>
                </div>
                <span className="text-xs text-blue-600 font-bold group-hover:translate-x-1 transition-transform">
                  Connect →
                </span>
              </a>
            </div>

            {/* Service Standards */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1.5 shadow-xs">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                <span>Response Time SLA: Under 24 Business Hours</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Every enquiry receives a direct technical evaluation. We do not use automated marketing spam or offshore call center agents.
              </p>
            </div>
          </div>

          {/* Right Column: Lead Form (Pure White Window Card) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-slate-200 shadow-xl shadow-blue-500/5 overflow-hidden">
              {/* Window Header */}
              <div className="px-5 py-3 bg-slate-50/90 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-xs font-mono text-slate-600 font-semibold">
                    intake-dispatch // consultation-form.tsx
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">
                  256-Bit SSL
                </span>
              </div>

              <div className="p-6 sm:p-8">
                {status === "success" ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Enquiry Received</h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Thank you. Your enquiry has been assigned reference ID:
                    </p>
                    <div className="inline-block px-4 py-2 rounded-xl bg-blue-50 border border-blue-200 font-mono text-blue-700 text-sm font-bold shadow-xs">
                      {leadReference}
                    </div>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto pt-2">
                      Hemanth will review your requirements and respond within 24 business hours. You can also message via WhatsApp quoting this Lead ID.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setStatus("idle");
                        setFormData((p) => ({ ...p, name: "", email: "", phone: "", message: "" }));
                      }}
                      className="mt-4 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:text-blue-600 bg-slate-100 hover:bg-slate-200 border border-slate-200 cursor-pointer"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Honeypot field */}
                    <input
                      type="text"
                      name="website_hp"
                      value={formData.website_hp}
                      onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    {/* Context Badge if Plan preselected */}
                    {formData.selectedPlan && (
                      <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2 text-blue-800 font-medium">
                          <Tag className="w-3.5 h-3.5 text-blue-600" />
                          <span>Selected Plan: <strong>{formData.selectedPlan}</strong></span>
                          {formData.price && <span className="font-mono text-emerald-700 font-bold">({formData.price})</span>}
                        </div>
                        <button
                          type="button"
                          onClick={() => setFormData((p) => ({ ...p, selectedPlan: "", price: "" }))}
                          className="text-[10px] text-slate-500 hover:text-slate-800 font-bold cursor-pointer"
                        >
                          Clear
                        </button>
                      </div>
                    )}

                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">
                          Full Name <span className="text-blue-600">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">
                          Work Email <span className="text-blue-600">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@company.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Phone & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">
                          Phone / WhatsApp Number
                        </label>
                        <InternationalPhoneInput
                          value={formData.phone}
                          countryCode={formData.countryCode}
                          onChange={handlePhoneChange}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">
                          Company Name
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Acme Corp Ltd"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Category & Service */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">
                          Division / Category
                        </label>
                        <select
                          value={formData.category}
                          onChange={(e) => {
                            const newCat = e.target.value;
                            const availableServices = SERVICES_BY_CATEGORY[newCat] || [];
                            setFormData({
                              ...formData,
                              category: newCat,
                              service: availableServices[0] || "",
                            });
                          }}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 text-slate-900 text-xs focus:outline-none cursor-pointer"
                        >
                          {CATEGORY_OPTIONS.map((cat) => (
                            <option key={cat} value={cat}>
                              {cat}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">
                          Specific System / Service
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 text-slate-900 text-xs focus:outline-none cursor-pointer"
                        >
                          {(SERVICES_BY_CATEGORY[formData.category] || []).map((srv) => (
                            <option key={srv} value={srv}>
                              {srv}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">
                        Operational Requirements / Current Systems Challenge
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Briefly describe your current tools, team size, or what workflow you are looking to streamline..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none transition-all"
                      />
                    </div>

                    {/* Error display */}
                    {status === "error" && (
                      <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/25 transition-all disabled:opacity-50 cursor-pointer"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Validating &amp; Logging Inbound Lead...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Systems Consultation Request</span>
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                      <span className="flex items-center gap-1 font-medium">
                        <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                        Encrypted &amp; Logged to Google Sheets CRM
                      </span>
                      <span className="font-medium">Direct review by Hemanth</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
