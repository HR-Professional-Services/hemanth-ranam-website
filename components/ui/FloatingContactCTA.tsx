"use client";

import { useEffect, useState } from "react";
import { MessageSquare, ArrowRight } from "lucide-react";

export function FloatingContactCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Only show after scrolling past hero (approx 500px) and hide near bottom
      const scrolled = window.scrollY > 500;
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 600;
      setShow(scrolled && !nearBottom);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-5 left-4 right-4 z-40 md:hidden animate-fade-in">
      <div className="bg-slate-900/95 text-white backdrop-blur-md rounded-2xl p-3 shadow-xl border border-slate-800 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 pl-1">
          <div className="w-8 h-8 rounded-lg bg-blue-600/30 flex items-center justify-center text-blue-400">
            <MessageSquare className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-semibold text-white">Have a project in mind?</p>
            <p className="text-[11px] text-slate-400">Systems • Automation • Trading Tech</p>
          </div>
        </div>
        <a
          href="#contact"
          id="mobile-floating-cta-btn"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-colors shadow-sm"
        >
          <span>Connect</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
