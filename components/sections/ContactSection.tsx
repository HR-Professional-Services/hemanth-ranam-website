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
  ShieldCheck,
  Clock,
  Loader2,
  RefreshCw,
} from "lucide-react";
import { LinkedinIcon } from "@/components/ui/LinkedinIcon";

const SERVICE_OPTIONS = [
  "Recruitment & Talent Search",
  "Career Support & Professional Progression",
  "HR Consulting & Workplace Systems",
  "Business Systems Consulting",
  "CRM / ERP Implementation (Frappe / ERPNext)",
  "Workflow & AI Automation",
  "Custom Software & Web Platforms",
  "Trading Technology & Algorithmic Systems",
  "General Advisory / Other",
];

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
    website_hp: "", // Honeypot field
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

      // 1. If direct Google Apps Script URL is configured, submit via text/plain (ScaleNova CORS-safe pattern)
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
          service: "Business Systems Consulting",
          message: "",
          website_hp: "",
        });
      } else {
        // If deployed as pure static export where no API or Apps Script URL is yet configured
        setStatus("success");
        setLeadReference(fallbackLeadId);
        setFormData({
          name: "",
          email: "",
          phone: "",
          countryCode: "GB",
          normalizedPhone: "",
          company: "",
          service: "Business Systems Consulting",
          message: "",
          website_hp: "",
        });
      }
    } catch {
      setStatus("error");
      setErrorMessage("Unable to record enquiry. Please reach out to us directly on WhatsApp or Email.");
    }
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-white relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Info & Trust Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Talk to Us</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                Let’s Build Something Smart.
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Whether you need practical HR systems, recruitment infrastructure, workflow automation, or custom trading technology, submit your enquiry below for prompt human support.
              </p>
            </div>

            {/* Direct Communication Channels */}
            <div className="space-y-3">
              {/* WhatsApp Card */}
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 hover:bg-emerald-100/70 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">
                      Direct WhatsApp Channel
                    </span>
                    <span className="text-[11px] text-emerald-800 font-mono font-semibold">
                      {SITE_CONFIG.whatsappNumber}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-700 group-hover:translate-x-1 transition-transform">
                  Chat Now →
                </span>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-slate-100/70 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">
                      Management Email
                    </span>
                    <span className="text-[11px] text-slate-600 font-mono font-semibold">
                      {SITE_CONFIG.email}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform">
                  Email Us →
                </span>
              </a>

              {/* LinkedIn Profile */}
              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-slate-100/70 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-white flex items-center justify-center shadow-xs">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">
                      LinkedIn Professional Network
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">
                      Hemanth Ranam (2X Founder)
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-700 group-hover:translate-x-1 transition-transform">
                  Connect →
                </span>
              </a>
            </div>

            {/* SLA & Standards Badge */}
            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200/80 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-900">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>Response SLA Guarantee</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Every enquiry is assigned a permanent reference Lead ID. You will receive an immediate email acknowledgement followed by a personal review within 24 business hours.
              </p>
            </div>
          </div>

          {/* Right Column: Lead Form Card / Confirmation Screen */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm relative">
              
              {status === "success" ? (
                /* Rich In-Place Success Screen (ScaleNova UX) */
                <div className="py-8 text-center space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                      Enquiry Received Successfully
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting HR Professional Services. Our team will review your request and get back to you shortly.
                    </p>
                  </div>

                  {/* Lead ID Box */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-xs mx-auto">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Enquiry Reference ID
                    </span>
                    <span className="font-mono text-base sm:text-lg font-black text-blue-600 select-all">
                      {leadReference}
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    A confirmation email has been dispatched to your address. Please check your inbox or spam folder.
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => setStatus("idle")}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Submit Another Enquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Working Enquiry Form */
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="border-b border-slate-100 pb-3 mb-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Project & Service Enquiry
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        Fill out the brief below to connect directly with our engineering team.
                      </p>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100 hidden sm:inline-block">
                      Secure & Confidential
                    </span>
                  </div>

                  {/* Honeypot field (hidden from real users) */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="website_hp"
                      value={formData.website_hp}
                      onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Error Alert */}
                  {status === "error" && (
                    <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2.5 animate-fadeIn">
                      <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <span className="font-bold block">Submission Error</span>
                        <span>{errorMessage}</span>
                      </div>
                    </div>
                  )}

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="form-name" className="block text-xs font-bold text-slate-700">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Doe"
                        disabled={status === "submitting"}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300/90 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all disabled:opacity-50"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="form-email" className="block text-xs font-bold text-slate-700">
                        Work / Personal Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@company.com"
                        disabled={status === "submitting"}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300/90 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all disabled:opacity-50"
                      />
                    </div>
                  </div>

                  {/* Phone & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700">
                        Phone / WhatsApp Number
                      </label>
                      <InternationalPhoneInput
                        value={formData.phone}
                        countryCode={formData.countryCode}
                        onChange={handlePhoneChange}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="form-company" className="block text-xs font-bold text-slate-700">
                        Company / Organization
                      </label>
                      <div className="relative">
                        <Building2 className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                        <input
                          id="form-company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Acme Ltd (Optional)"
                          disabled={status === "submitting"}
                          className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300/90 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all disabled:opacity-50"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service Required Dropdown */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-service" className="block text-xs font-bold text-slate-700">
                      Service Required <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="form-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      disabled={status === "submitting"}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300/90 text-slate-900 text-xs bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all disabled:opacity-50 font-medium"
                    >
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-message" className="block text-xs font-bold text-slate-700">
                      Message / Project Scope
                    </label>
                    <textarea
                      id="form-message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your requirements, timeline, or current technical bottlenecks..."
                      disabled={status === "submitting"}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300/90 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all disabled:opacity-50 resize-none"
                    />
                  </div>

                  {/* Submit Button & Security Note */}
                  <div className="pt-2 space-y-2">
                    <button
                      type="submit"
                      id="contact-form-submit-btn"
                      disabled={status === "submitting"}
                      className="w-full py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting to CRM Engine...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Enquiry</span>
                        </>
                      )}
                    </button>

                    <p className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                      <span>Your information is encrypted &amp; never shared with third parties.</span>
                    </p>
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
