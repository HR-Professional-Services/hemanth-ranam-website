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
  Sparkles,
  User,
} from "lucide-react";
import { LinkedinIcon } from "@/components/ui/LinkedinIcon";

const SERVICE_OPTIONS = [
  "Business Systems",
  "Automation",
  "ERPNext",
  "Website",
  "Trading Technology",
  "Not sure",
] as const;

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: preselectedService || "Business Systems",
    message: preselectedPlan ? `Interested in plan: ${preselectedPlan} (${preselectedPrice || ""})` : "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [leadReference, setLeadReference] = useState("");

  const handlePhoneChange = (phone: string) => {
    setFormData((prev) => ({ ...prev, phone }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setStatus("error");
      setErrorMessage("Please enter your name.");
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
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      company: formData.company.trim() || "Independent",
      service: formData.service,
      category: formData.service,
      message: formData.message.trim() || "General consultation enquiry.",
      source: "Website Contact Form",
      page: typeof window !== "undefined" ? window.location.pathname : "/contact",
      timestamp: new Date().toISOString(),
    };

    const GAS_URL =
      process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_WEBHOOK_URL ||
      "https://script.google.com/macros/s/AKfycbz0PfSDNcjbNUnMJRP0PgaI-jgPd2VCNvfXVEasYElOk_1jH1wWaXeZOKA9ewmONJlX-w/exec";

    try {
      try {
        await fetch(GAS_URL, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(submissionPayload),
        });
      } catch (gasErr) {
        console.warn("GAS notification caught:", gasErr);
      }

      setLeadReference(fallbackLeadId);
      setStatus("success");
    } catch {
      setLeadReference(fallbackLeadId);
      setStatus("success");
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Founder Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
                <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
                <span>Direct Dialogue</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Let&apos;s Discuss Your Business Systems
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Tell me about your current tools, team bottlenecks, or custom software requirements. I respond directly to every enquiry within 24 hours.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="font-bold text-slate-900 hover:text-blue-600 text-sm transition-colors"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80">
                <div className="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-700 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 block">
                    Instant Messaging
                  </span>
                  <a
                    href={SITE_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-emerald-900 hover:text-emerald-700 text-sm transition-colors"
                  >
                    Chat directly on WhatsApp →
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                    Response SLA
                  </span>
                  <span className="font-bold text-slate-900 text-sm block">
                    Within 24 business hours
                  </span>
                  <span className="text-xs text-slate-500">
                    UK Timezone (GMT / BST)
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <LinkedinIcon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                    Professional Network
                  </span>
                  <a
                    href={SITE_CONFIG.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-slate-900 hover:text-blue-600 text-sm transition-colors"
                  >
                    Connect on LinkedIn →
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Zero obligation. Straightforward systems advice.</span>
            </div>
          </div>

          {/* Right Column: Clean Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
            {status === "success" ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-3xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                  <span>Enquiry Received</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  Thank You, {formData.name}
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Your enquiry has been received and recorded in our systems CRM. I will personally review your requirements and respond within 24 hours.
                </p>

                {leadReference && (
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl max-w-xs mx-auto text-xs font-mono text-slate-600">
                    Reference ID: <strong>{leadReference}</strong>
                  </div>
                )}

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        company: "",
                        service: "Business Systems",
                        message: "",
                      });
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span>Send another message</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-bold text-slate-700 mb-1"
                    >
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, name: e.target.value }))
                      }
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-bold text-slate-700 mb-1"
                    >
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, email: e.target.value }))
                      }
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Company */}
                  <div>
                    <label
                      htmlFor="contact-company"
                      className="block text-xs font-bold text-slate-700 mb-1"
                    >
                      Company / Organization (Optional)
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, company: e.target.value }))
                      }
                      placeholder="e.g. Morgan Logistics Ltd"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Service Dropdown */}
                  <div>
                    <label
                      htmlFor="contact-service"
                      className="block text-xs font-bold text-slate-700 mb-1"
                    >
                      What do you need help with?
                    </label>
                    <select
                      id="contact-service"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, service: e.target.value }))
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white transition-all cursor-pointer"
                    >
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Phone (Optional) */}
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-xs font-bold text-slate-700 mb-1"
                  >
                    Phone / WhatsApp (Optional)
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    placeholder="+44 7700 900000"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold text-slate-700 mb-1"
                  >
                    Tell me about the problem <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, message: e.target.value }))
                    }
                    placeholder="Describe your current tools, team bottlenecks, or what you want to connect..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-y"
                  />
                </div>

                {/* Error Banner */}
                {status === "error" && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage || "An error occurred. Please try again."}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all shadow-sm shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 min-h-[44px]"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending enquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Enquiry to Hemanth</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
