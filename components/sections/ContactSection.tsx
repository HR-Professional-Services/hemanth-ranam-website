"use client";

import { useState } from "react";
import { SITE_CONFIG } from "@/data/siteData";
import { LinkedinIcon } from "@/components/ui/LinkedinIcon";
import confetti from "canvas-confetti";
import {
  Mail,
  Send,
  CheckCircle2,
  Copy,
  Check,
  ArrowRight,
  MessageSquare,
} from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Business Systems",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = [
    "Business Systems Consulting",
    "Workflow Automation",
    "CRM / ERP Implementation",
    "Business Website",
    "Custom Web Application",
    "TradingView Indicator",
    "MT5 Expert Advisor (EA)",
    "Telegram Trading Alerts",
    "Custom Trading Automation",
    "Other",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 50,
          spread: 50,
          origin: { y: 0.8 },
          colors: ["#2563EB", "#60A5FA", "#1D4ED8"],
        });
      } catch {
        // Confetti fallback
      }
    }, 400);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-12 md:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-semibold uppercase tracking-wider">
              <MessageSquare className="w-3 h-3" />
              <span>Contact</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
              Let's Build Something Useful.
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md">
              Have a business, software or trading technology project in mind? Tell me what you are trying to build, improve or automate.
            </p>

            {/* Direct Cards */}
            <div className="pt-1 space-y-2.5">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Direct Email
                    </p>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-xs font-bold text-slate-900 hover:text-blue-600 transition-colors"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  id="copy-email-btn"
                  aria-label="Copy email address"
                  className="p-1.5 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-white border border-slate-200 transition-colors"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      LinkedIn Network
                    </p>
                    <p className="text-xs font-bold text-slate-900">
                      Hemanth Ranam
                    </p>
                  </div>
                </div>

                <a
                  href={SITE_CONFIG.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-linkedin-btn"
                  className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold text-blue-600 hover:text-white bg-blue-50 hover:bg-blue-600 rounded-lg transition-colors border border-blue-200"
                >
                  <span>Connect</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Short Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-slate-200/90 shadow-sm p-5 sm:p-7">
              {submitted ? (
                <div className="py-8 text-center space-y-2.5">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Message Received
                  </h3>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Thank you! I will review your enquiry for <strong>{formData.service}</strong> and get back to you at <strong>{formData.email}</strong> shortly.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          company: "",
                          service: "Business Systems",
                          message: "",
                        });
                      }}
                      className="px-3.5 py-1.5 text-xs font-semibold text-blue-600 bg-blue-50 rounded-lg"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[11px] font-semibold text-slate-700 mb-1"
                      >
                        Full Name <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[11px] font-semibold text-slate-700 mb-1"
                      >
                        Email Address <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-[11px] font-semibold text-slate-700 mb-1"
                      >
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Company name"
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-[11px] font-semibold text-slate-700 mb-1"
                      >
                        Service Area <span className="text-blue-600">*</span>
                      </label>
                      <select
                        id="service"
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-slate-50/50"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[11px] font-semibold text-slate-700 mb-1"
                    >
                      Project Message <span className="text-blue-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you'd like to build or automate..."
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-slate-50/50"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="contact-submit-btn"
                    className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold text-xs transition-all shadow-xs flex items-center justify-center gap-1.5 group"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Enquiry</span>
                        <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
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
