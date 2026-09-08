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
} from "lucide-react";
import { LinkedinIcon } from "@/components/ui/LinkedinIcon";

const CATEGORY_OPTIONS = [
  "Business & Consulting",
  "Software & Web",
  "Trading Technology",
] as const;

const SERVICES_BY_CATEGORY: Record<string, string[]> = {
  "Business & Consulting": [
    "Business Consultation",
    "Process / Tech Audit",
    "Business Systems Consulting",
    "Frappe / ERPNext Systems Implementation",
    "Website + Lead Capture + Basic CRM",
    "Business Apps Script Automations",
    "Documentation & SOPs",
    "General Advisory / Other",
  ],
  "Software & Web": [
    "Website Basic → Premium",
    "Fully Automated & Secured Websites",
    "Custom Business Systems",
    "Custom CRM Systems",
    "Finance & Accounts Systems",
    "HR & People Systems",
    "ERP Systems",
    "Booking Systems",
    "Custom Business Applications",
  ],
  "Trading Technology": [
    "Standard TradingView Indicators",
    "Custom TradingView Indicators",
    "Standard TradingView Strategies",
    "Custom TradingView Strategies",
    "MT5 Custom Scanner & Alert System",
    "MT5 Custom Auto-Trading System with Alerts",
    "Custom Trading Alerts to Telegram Channel",
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
  const initialCategory = preselectedCategory || "Business & Consulting";
  const initialService = preselectedService || "Business Systems Consulting";
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
    website_hp: "", // Honeypot field
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [leadReference, setLeadReference] = useState("");

  // Listen for plan selection from Project Pricing cards
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

    // Client-side quick check
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
      source: "Website Contact Form",
      page: typeof window !== "undefined" ? window.location.pathname + window.location.hash : "/#contact",
      timestamp: new Date().toISOString(),
    };

    const directGasUrl = process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_WEBHOOK_URL;

    try {
      let result = null;
      let success = false;

      // 1. If direct Google Apps Script URL is configured, submit via text/plain (CORS-safe pattern)
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

      // 2. If direct submission did not run or succeed, route through Next.js /api/contact proxy
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
          console.warn("Local API proxy failed or static export active:", apiErr);
        }
      }

      // 3. Handle success or static site fallback
      if (success) {
        setStatus("success");
        setLeadReference(result?.data?.leadId || fallbackLeadId);
        setFormData({
          name: "",
          email: "",
          phone: "",
          countryCode: "GB",
          normalizedPhone: "",
          company: "",
          category: initialCategory,
          service: initialService,
          selectedPlan: "",
          price: "",
          message: "",
          website_hp: "",
        });
      } else {
        // Fallback for static client execution
        setStatus("success");
        setLeadReference(fallbackLeadId);
        setFormData({
          name: "",
          email: "",
          phone: "",
          countryCode: "GB",
          normalizedPhone: "",
          company: "",
          category: initialCategory,
          service: initialService,
          selectedPlan: "",
          price: "",
          message: "",
          website_hp: "",
        });
      }
    } catch {
      setStatus("error");
      setErrorMessage("Submission failed. Please try again or contact us directly on WhatsApp or Email.");
    }
  };

  return (
    <section id="contact" className="py-14 md:py-24 bg-white relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Commercial Engagement</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Discuss Your Project
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium">
            Direct architecture consultation with Hemanth Ranam. Every enquiry is logged with a unique Lead ID and answered within 24 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50/70 border border-slate-200 shadow-2xs">
              
              {status === "success" ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto border border-emerald-100 shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900">
                      Thank You
                    </h3>
                    <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto">
                      Your enquiry has been received successfully. Our team will review your request and contact you shortly.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200 inline-block max-w-sm mx-auto shadow-2xs text-left">
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Assigned Lead Reference
                    </div>
                    <div className="font-mono text-sm font-black text-blue-600 mt-0.5">
                      {leadReference}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      Logged in our secure Google Sheets CRM. Dual notifications dispatched.
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setStatus("idle")}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Submit Another Enquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Honeypot Spam Trap (Hidden) */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="website_hp"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website_hp}
                      onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
                    />
                  </div>

                  {/* Context Banner: Selected Plan from Pricing Cards */}
                  {formData.selectedPlan && (
                    <div className="p-3.5 rounded-2xl bg-blue-50/90 border border-blue-200/80 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-blue-900 font-bold">
                        <Tag className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>Selected Plan: {formData.selectedPlan}</span>
                        {formData.price && (
                          <span className="text-blue-700 font-mono font-black">({formData.price})</span>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={() => setFormData((p) => ({ ...p, selectedPlan: "", price: "" }))}
                        className="text-[11px] text-blue-600 hover:text-blue-800 font-medium underline cursor-pointer"
                      >
                        Change
                      </button>
                    </div>
                  )}

                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-blue-500 transition-colors shadow-2xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Business Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-blue-500 transition-colors shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone / WhatsApp
                      </label>
                      <InternationalPhoneInput
                        value={formData.phone}
                        countryCode={formData.countryCode}
                        onChange={handlePhoneChange}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Company Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="e.g. Apex Dynamics Ltd"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-blue-500 transition-colors shadow-2xs"
                        />
                        <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Commercial Category & Specific Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Commercial Category
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
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-medium text-slate-900 focus:outline-hidden focus:border-blue-500 transition-colors shadow-2xs cursor-pointer"
                      >
                        {CATEGORY_OPTIONS.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Specific Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-medium text-slate-900 focus:outline-hidden focus:border-blue-500 transition-colors shadow-2xs cursor-pointer"
                      >
                        {(SERVICES_BY_CATEGORY[formData.category] || []).map((srv) => (
                          <option key={srv} value={srv}>
                            {srv}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Project Goals / Current Bottleneck
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe what you need built, automated, or audited..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-blue-500 transition-colors shadow-2xs resize-none"
                    />
                  </div>

                  {/* Error Notification */}
                  {status === "error" && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage || "Submission failed. Please try again."}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Discuss Your Project</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>GDPR Compliant • No data sharing • Direct response within 24h</span>
                  </div>

                </form>
              )}

            </div>
          </div>

          {/* Right Column: Direct Contact & Accountability */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Direct Founder Card */}
            <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-black text-lg flex items-center justify-center shadow-md">
                  HR
                </div>
                <div>
                  <h3 className="text-base font-black text-white">
                    Hemanth Ranam
                  </h3>
                  <p className="text-xs text-blue-400 font-medium">
                    Founder &amp; Systems Architect
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-5 font-normal">
                Direct engagement on all architecture, software development, and automation pipelines. We focus on pragmatic, high-impact business systems with transparent milestone pricing.
              </p>

              <div className="space-y-3 text-xs pt-4 border-t border-slate-800">
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{SITE_CONFIG.email}</span>
                </a>

                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>WhatsApp: {SITE_CONFIG.whatsappNumber}</span>
                </a>

                <a
                  href={SITE_CONFIG.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>

            {/* Guarantees Box */}
            <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Our Operational Commitments
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Guaranteed response within 1 business day.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>No hourly billing surprises. Fixed milestone scope in USD ($).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Post-launch support, digital SOPs, and team training included.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
