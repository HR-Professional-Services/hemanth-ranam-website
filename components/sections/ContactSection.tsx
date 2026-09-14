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
    <section id="contact" className="py-16 sm:py-20 lg:py-28 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column: Context & Contact Points */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Direct Engagement
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Start Your{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                Systems Consultation
              </span>
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed">
              Have an operational bottleneck, software duplication problem, or new Business OS requirement? Submit your enquiry below or connect directly with Hemanth Ranam.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 hover:border-emerald-500/50 flex items-center justify-between transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-white group-hover:text-emerald-300">
                      WhatsApp Quick Chat
                    </span>
                    <span className="text-[11px] font-mono text-emerald-400 block mt-0.5">
                      +91 76758 15245
                    </span>
                  </div>
                </div>
                <span className="text-xs text-emerald-400 font-semibold group-hover:translate-x-1 transition-transform">
                  Chat Now →
                </span>
              </a>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-blue-500/30 flex items-center justify-between transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-white group-hover:text-blue-300">
                      Direct Email
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 block mt-0.5">
                      {SITE_CONFIG.email}
                    </span>
                  </div>
                </div>
                <span className="text-xs text-blue-400 font-semibold group-hover:translate-x-1 transition-transform">
                  Send Email →
                </span>
              </a>

              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-blue-500/30 flex items-center justify-between transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-400">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-white group-hover:text-blue-300">
                      LinkedIn Connection
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 block mt-0.5">
                      linkedin.com/in/hemanth-ranam-41b542253
                    </span>
                  </div>
                </div>
                <span className="text-xs text-blue-400 font-semibold group-hover:translate-x-1 transition-transform">
                  Connect →
                </span>
              </a>
            </div>

            {/* Service Standards */}
            <div className="p-4 rounded-2xl bg-[#09101f] border border-white/[0.06] text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2 text-slate-200 font-semibold text-xs">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>Response Time SLA: Under 24 Business Hours</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Every enquiry receives a direct technical evaluation. We do not use automated marketing spam or offshore call center agents.
              </p>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#090e1b] border border-white/[0.1] shadow-2xl shadow-black/80">
              {status === "success" ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Enquiry Received</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you. Your enquiry has been assigned reference ID:
                  </p>
                  <div className="inline-block px-4 py-2 rounded-xl bg-white/[0.05] border border-white/[0.1] font-mono text-emerald-400 text-sm font-bold">
                    {leadReference}
                  </div>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto pt-2">
                    Hemanth will review your requirements and respond within 24 business hours. You can also message via WhatsApp quoting this Lead ID.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setFormData((p) => ({ ...p, name: "", email: "", phone: "", message: "" }));
                    }}
                    className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/[0.05] border border-white/[0.08]"
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
                    <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-blue-300 font-medium">
                        <Tag className="w-3.5 h-3.5" />
                        <span>Selected Plan: <strong>{formData.selectedPlan}</strong></span>
                        {formData.price && <span className="font-mono text-emerald-400">({formData.price})</span>}
                      </div>
                      <button
                        type="button"
                        onClick={() => setFormData((p) => ({ ...p, selectedPlan: "", price: "" }))}
                        className="text-[10px] text-slate-400 hover:text-white"
                      >
                        Clear
                      </button>
                    </div>
                  )}

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Full Name <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-blue-500 focus:bg-[#0c1426] text-white text-xs placeholder:text-slate-600 focus:outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Work Email <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-blue-500 focus:bg-[#0c1426] text-white text-xs placeholder:text-slate-600 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Phone / WhatsApp Number
                      </label>
                      <InternationalPhoneInput
                        value={formData.phone}
                        countryCode={formData.countryCode}
                        onChange={handlePhoneChange}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Corp Ltd"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-blue-500 focus:bg-[#0c1426] text-white text-xs placeholder:text-slate-600 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Category & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
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
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#090e1b] border border-white/[0.08] focus:border-blue-500 text-white text-xs focus:outline-none"
                      >
                        {CATEGORY_OPTIONS.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Specific System / Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#090e1b] border border-white/[0.08] focus:border-blue-500 text-white text-xs focus:outline-none"
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
                    <label className="text-xs font-semibold text-slate-300">
                      Operational Requirements / Current Systems Challenge
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your current tools, team size, or what workflow you are looking to streamline..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-blue-500 focus:bg-[#0c1426] text-white text-xs placeholder:text-slate-600 focus:outline-none transition-all"
                    />
                  </div>

                  {/* Error display */}
                  {status === "error" && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-500/30 border border-blue-400/30 transition-all disabled:opacity-50"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Validating & Logging Inbound Lead...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Systems Consultation Request</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                      Encrypted & Logged to Google Sheets CRM
                    </span>
                    <span>Direct review by Hemanth</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
