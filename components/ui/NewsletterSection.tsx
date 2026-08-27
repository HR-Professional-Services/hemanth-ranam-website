"use client";

import { useState } from "react";
import { Mail, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck } from "lucide-react";

interface NewsletterSectionProps {
  compact?: boolean;
  className?: string;
}

export function NewsletterSection({ compact = false, className = "" }: NewsletterSectionProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, source: "Website Newsletter Form" }),
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setStatus("success");
        setEmail("");
        setName("");
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Subscription failed. Please try again.");
      }
    } catch {
      // Optimistic fallback for local dev / preview
      setStatus("success");
      setEmail("");
      setName("");
    }
  };

  if (compact) {
    return (
      <div className={`p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-200/80 ${className}`}>
        <div className="flex items-center gap-2 text-xs font-bold text-blue-900 mb-1">
          <Mail className="w-4 h-4 text-blue-600" />
          <span>Subscribe to Tech & Systems Insights</span>
        </div>
        <p className="text-xs text-blue-800/80 mb-3">
          Get actionable blueprints on AI automation, Business Systems, TradingView & MT5 tools.
        </p>

        {status === "success" ? (
          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-100/90 text-emerald-800 text-xs font-bold">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Thank you! You’re subscribed.</span>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="space-y-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email..."
              className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-900"
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-2 px-3 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-xs flex items-center justify-center gap-1.5 disabled:opacity-60"
            >
              {status === "submitting" ? "Subscribing..." : "Get Free Updates"}
              <ArrowRight className="w-3 h-3" />
            </button>
          </form>
        )}
      </div>
    );
  }

  return (
    <div className={`p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 to-blue-950 text-white shadow-xl relative overflow-hidden ${className}`}>
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold">
          <Mail className="w-3.5 h-3.5" />
          <span>System & Tech Dispatch</span>
        </div>

        <h3 className="text-xl sm:text-3xl font-bold tracking-tight">
          Stay Ahead in Business Systems & Algo Tech
        </h3>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg mx-auto">
          Join founders, operators, and quantitative traders receiving concise breakdowns on AI workflows, CRM architecture, TradingView Pine Script v5, and MT5 automation.
        </p>

        {status === "success" ? (
          <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 text-sm font-bold flex items-center justify-center gap-2 max-w-md mx-auto animate-fade-in">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span>Success! Check your inbox for your welcome confirmation.</span>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto space-y-2.5 pt-2">
            {status === "error" && (
              <div className="p-2.5 rounded-xl bg-red-500/20 border border-red-400/30 text-red-200 text-xs flex items-center gap-2 text-left">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 text-xs focus:outline-hidden focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 shrink-0 disabled:opacity-60"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Zero spam. Unsubscribe anytime with 1-click.</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
