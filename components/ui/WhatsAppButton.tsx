"use client";

import { useState } from "react";
import { SITE_CONFIG } from "@/data/siteData";

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      {/* Desktop Tooltip */}
      {showTooltip && (
        <div className="hidden sm:block mr-3 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-semibold shadow-md whitespace-nowrap animate-fade-in border border-slate-800">
          Chat on WhatsApp
        </div>
      )}

      {/* Floating Circular Action Button */}
      <a
        href={SITE_CONFIG.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="whatsapp-floating-btn"
        aria-label="Chat with Hemanth Ranam on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center ring-4 ring-white/90 group"
      >
        {/* Crisp Vector WhatsApp Icon */}
        <svg
          viewBox="0 0 32 32"
          className="w-7 h-7 fill-white transition-transform group-hover:rotate-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 2C8.28 2 2 8.28 2 16c0 2.72.78 5.26 2.13 7.42L2.5 30l6.78-1.58C11.36 29.5 13.62 30 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm8.18 19.82c-.34.96-1.7 1.83-2.77 2.05-.73.15-1.68.27-4.88-1.05-4.1-1.69-6.74-5.87-6.95-6.14-.2-.28-1.66-2.21-1.66-4.22 0-2.01 1.05-3 1.42-3.41.37-.41.82-.52 1.09-.52.27 0 .55.01.79.02.25.02.59-.1.92.7.34.82 1.16 2.84 1.26 3.05.1.21.17.46.03.73-.14.28-.21.46-.42.71-.21.25-.43.55-.62.74-.21.21-.42.44-.18.85.24.41 1.07 1.76 2.3 2.85 1.58 1.41 2.92 1.85 3.33 2.05.41.21.65.17.89-.1.24-.28 1.02-1.19 1.29-1.6.27-.41.55-.34.92-.21.38.14 2.39 1.13 2.8 1.33.41.21.68.31.78.48.1.17.1.99-.24 1.95z" />
        </svg>
      </a>
    </div>
  );
}
