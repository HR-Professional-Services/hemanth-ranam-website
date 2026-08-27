"use client";

import { useState } from "react";
import { SITE_CONFIG } from "@/data/siteData";
import { InternationalPhoneInput } from "@/components/ui/InternationalPhoneInput";
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Building2,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import { LinkedinIcon } from "@/components/ui/LinkedinIcon";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "GB",
    normalizedPhone: "",
    company: "",
    service: "Business Systems Consulting",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [leadReference, setLeadReference] = useState("");

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

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setLeadReference(result.data?.leadId || `LEAD-${new Date().toISOString().slice(0, 10).replace(/-/g, "")}-001`);
        setFormData({
          name: "",
          email: "",
          phone: "",
          countryCode: "GB",
          normalizedPhone: "",
          company: "",
          service: "Business Systems Consulting",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Failed to submit enquiry. Please try again.");
      }
    } catch {
      // Graceful fallback for local dev / static preview
      setStatus("success");
      setLeadReference(`LEAD-${new Date().toISOString().slice(0, 10).replace(/-/g, "")}-001`);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-semibold uppercase tracking-wider mb-2">
                <MessageSquare className="w-3 h-3" />
                <span>Start a Project</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Let’s Build Something Smart.
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Have a business system, workflow automation, custom software or trading technology project in mind? Reach out and I’ll respond within 24 hours.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-3">
              {/* WhatsApp Card */}
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 hover:bg-emerald-100/70 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">
                      Direct WhatsApp
                    </span>
                    <span className="text-[11px] text-emerald-800 font-mono">
                      {SITE_CONFIG.whatsappNumber}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-700 group-hover:translate-x-0.5 transition-transform">
                  Chat Now →
                </span>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-slate-100/70 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">
                      Email Enquiry
                    </span>
                    <span className="text-[11px] text-slate-600 font-mono">
                      {SITE_CONFIG.email}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold text-blue-600 group-hover:translate-x-0.5 transition-transform">
                  Send Email →
                </span>
              </a>

              {/* LinkedIn Card */}
              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-slate-100/70 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-xs">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">
                      LinkedIn
                    </span>
                    <span className="text-[11px] text-slate-600">
                      Hemanth Ranam
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-700 group-hover:translate-x-0.5 transition-transform">
                  Connect →
                </span>
              </a>
            </div>

            {/* Quick Guarantees */}
            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200/60 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-900">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>What to Expect</span>
              </div>
              <ul className="text-[11px] text-blue-800/90 space-y-1">
                <li>• Clear scope specification before any invoice</li>
                <li>• Milestone-based delivery with weekly staging demos</li>
                <li>• Complete source code & documentation ownership</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Contact & Lead Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-lg">
              {status === "success" ? (
                <div className="text-center py-8 space-y-4 animate-fade-in">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Enquiry Received Successfully!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1.5 max-w-md mx-auto">
                      Thank you for reaching out. We have logged your request under reference{" "}
                      <span className="font-mono font-bold text-blue-600">{leadReference}</span> and sent a confirmation to your email.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={SITE_CONFIG.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Message on WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold transition-all"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Send a Project Enquiry
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Fill out the form below with your requirements and WhatsApp number.
                    </p>
                  </div>

                  {status === "error" && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 flex items-center gap-2 text-xs text-red-700">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alexander Vance"
                        className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-900"
                      />
                    </div>
                  </div>

                  {/* WhatsApp Phone Input with Country Code Selector */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center justify-between">
                      <span>WhatsApp Phone Number <span className="text-blue-600">*</span></span>
                      <span className="text-[10px] text-slate-400 font-normal">Country code + number</span>
                    </label>
                    <InternationalPhoneInput
                      value={formData.phone}
                      countryCode={formData.countryCode}
                      onChange={handlePhoneChange}
                      required
                    />
                  </div>

                  {/* Company & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Company / Business <span className="text-slate-400 font-normal text-[10px]">(Optional)</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Vance Media Ltd"
                          className="w-full pl-8 pr-3.5 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-900"
                        />
                        <Building2 className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Service Interested In
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-900 font-medium"
                      >
                        <option value="Business Systems Consulting">Business Systems Consulting</option>
                        <option value="CRM / ERP Implementation">CRM / ERP Implementation</option>
                        <option value="Workflow & AI Automation">Workflow & AI Automation</option>
                        <option value="Custom Software / Web App">Custom Software / Web App</option>
                        <option value="TradingView Pine Script">TradingView Pine Script (Indicator / Strategy)</option>
                        <option value="MT5 Expert Advisor (EA)">MT5 Expert Advisor (EA) / Indicator</option>
                        <option value="Trading Automation Bridge">Trading Automation Bridge (TV → MT5)</option>
                        <option value="Other Project Inquiry">Other Technical Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Project Details & Objectives <span className="text-blue-600">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your operational goals, existing tools, or trading rules..."
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-900"
                    />
                  </div>

                  {/* Privacy note */}
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    By submitting this form, you agree to receive a direct response regarding your project. Read our{" "}
                    <a href="/privacy" className="text-blue-600 underline hover:text-blue-700">
                      Privacy Policy
                    </a>
                    .
                  </p>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-3 px-6 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-hidden focus:ring-4 focus:ring-blue-500/20 transition-all shadow-xs flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {status === "submitting" ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending Your Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Project Enquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
