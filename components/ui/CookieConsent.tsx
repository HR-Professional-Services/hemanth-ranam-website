"use client";

import { useState, useEffect } from "react";
import { Cookie, Shield, Check, X, SlidersHorizontal } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("hr_cookie_consent");
    if (!saved) {
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(
      "hr_cookie_consent",
      JSON.stringify({ necessary: true, analytics: true, timestamp: new Date().toISOString() })
    );
    setIsVisible(false);
  };

  const handleRejectNonEssential = () => {
    localStorage.setItem(
      "hr_cookie_consent",
      JSON.stringify({ necessary: true, analytics: false, timestamp: new Date().toISOString() })
    );
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem(
      "hr_cookie_consent",
      JSON.stringify({ necessary: true, analytics: analyticsConsent, timestamp: new Date().toISOString() })
    );
    setIsVisible(false);
    setShowPreferences(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Cookie consent banner"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-6 shadow-2xl border border-slate-200/90 text-slate-800 animate-slide-up"
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 shadow-xs">
          <Cookie className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
            <span>Privacy & Cookie Preferences</span>
          </h3>
          <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
            We use essential cookies to maintain secure sessions and performance analytics to optimize your experience. Read our{" "}
            <a href="/privacy" className="text-blue-600 underline font-semibold hover:text-blue-700">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>

      {showPreferences && (
        <div className="mt-4 pt-4 border-t border-slate-100 space-y-2.5 animate-fade-in text-xs">
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div>
              <span className="font-bold text-slate-900 block">Strictly Necessary</span>
              <span className="text-[10px] text-slate-500">Required for core website security and forms</span>
            </div>
            <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
              Always Active
            </span>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <div>
              <span className="font-bold text-slate-900 block">Performance & Analytics</span>
              <span className="text-[10px] text-slate-500">Anonymous visitor metrics to improve page speed</span>
            </div>
            <input
              type="checkbox"
              checked={analyticsConsent}
              onChange={(e) => setAnalyticsConsent(e.target.checked)}
              className="w-4 h-4 text-blue-600 rounded-md border-slate-300 focus:ring-blue-500"
            />
          </div>
        </div>
      )}

      {/* Buttons */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {showPreferences ? (
          <button
            type="button"
            onClick={handleSavePreferences}
            className="flex-1 py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-xs text-center"
          >
            Save Preferences
          </button>
        ) : (
          <>
            <button
              type="button"
              onClick={handleAcceptAll}
              className="flex-1 py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-xs text-center"
            >
              Accept All
            </button>
            <button
              type="button"
              onClick={handleRejectNonEssential}
              className="py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-all text-center"
            >
              Reject Non-Essential
            </button>
            <button
              type="button"
              onClick={() => setShowPreferences(true)}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Manage cookie preferences"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>
          </>
        )}
      </div>
    </aside>
  );
}
