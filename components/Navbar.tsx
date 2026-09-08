"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, SITE_CONFIG } from "@/data/siteData";
import { Logo } from "@/components/ui/Logo";
import { LinkedinIcon } from "@/components/ui/LinkedinIcon";
import { Menu, X, ArrowUpRight, MessageSquare } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (pathname === "/") {
        const sections = NAV_ITEMS.filter((i) => !i.isRoute).map((item) =>
          item.href.replace("/#", "").replace("#", "")
        );
        const scrollPosition = window.scrollY + 120;

        for (const sectionId of sections) {
          const el = document.getElementById(sectionId);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md py-3 shadow-xs border-b border-slate-200/90"
          : "bg-white/90 backdrop-blur-sm py-4 border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            id="nav-logo"
            aria-label="HR Professional Services Home"
            className="group focus:outline-hidden focus:ring-2 focus:ring-blue-500 rounded-lg flex items-center"
          >
            <Logo size="sm" />
          </Link>

          {/* Desktop Navigation Links inside Pill Container (5 clean options) */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 bg-slate-50/90 p-1 rounded-full border border-slate-200/80"
          >
            {NAV_ITEMS.map((item) => {
              const isSectionActive =
                pathname === "/" &&
                activeSection === item.href.replace("/#", "").replace("#", "");
              const isHomeActive = item.href === "/" && pathname === "/" && !activeSection;
              const isActive = isSectionActive || isHomeActive;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-150 ${
                    isActive
                      ? "bg-white text-blue-600 shadow-xs font-bold"
                      : "text-slate-600 hover:text-slate-950 hover:bg-white/70"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTAs: WhatsApp + Discuss */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 transition-colors"
            >
              <svg viewBox="0 0 32 32" className="w-3.5 h-3.5 fill-emerald-600 shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 2C8.28 2 2 8.28 2 16c0 2.72.78 5.26 2.13 7.42L2.5 30l6.78-1.58C11.36 29.5 13.62 30 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm8.18 19.82c-.34.96-1.7 1.83-2.77 2.05-.73.15-1.68.27-4.88-1.05-4.1-1.69-6.74-5.87-6.95-6.14-.2-.28-1.66-2.21-1.66-4.22 0-2.01 1.05-3 1.42-3.41.37-.41.82-.52 1.09-.52.27 0 .55.01.79.02.25.02.59-.1.92.7.34.82 1.16 2.84 1.26 3.05.1.21.17.46.03.73-.14.28-.21.46-.42.71-.21.25-.43.55-.62.74-.21.21-.42.44-.18.85.24.41 1.07 1.76 2.3 2.85 1.58 1.41 2.92 1.85 3.33 2.05.41.21.65.17.89-.1.24-.28 1.02-1.19 1.29-1.6.27-.41.55-.34.92-.21.38.14 2.39 1.13 2.8 1.33.41.21.68.31.78.48.1.17.1.99-.24 1.95z" />
              </svg>
              <span>WhatsApp</span>
            </a>

            <Link
              href="/#contact"
              id="nav-discuss-cta"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-xs"
            >
              <span>Discuss</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Actions: WhatsApp Quick Icon + Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="p-2 rounded-lg text-emerald-600 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 flex items-center justify-center min-w-[36px] min-h-[36px]"
            >
              <svg viewBox="0 0 32 32" className="w-4 h-4 fill-emerald-600 shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 2C8.28 2 2 8.28 2 16c0 2.72.78 5.26 2.13 7.42L2.5 30l6.78-1.58C11.36 29.5 13.62 30 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm8.18 19.82c-.34.96-1.7 1.83-2.77 2.05-.73.15-1.68.27-4.88-1.05-4.1-1.69-6.74-5.87-6.95-6.14-.2-.28-1.66-2.21-1.66-4.22 0-2.01 1.05-3 1.42-3.41.37-.41.82-.52 1.09-.52.27 0 .55.01.79.02.25.02.59-.1.92.7.34.82 1.16 2.84 1.26 3.05.1.21.17.46.03.73-.14.28-.21.46-.42.71-.21.25-.43.55-.62.74-.21.21-.42.44-.18.85.24.41 1.07 1.76 2.3 2.85 1.58 1.41 2.92 1.85 3.33 2.05.41.21.65.17.89-.1.24-.28 1.02-1.19 1.29-1.6.27-.41.55-.34.92-.21.38.14 2.39 1.13 2.8 1.33.41.21.68.31.78.48.1.17.1.99-.24 1.95z" />
              </svg>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-50 border border-slate-200 flex items-center justify-center min-w-[38px] min-h-[38px]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop Overlay for Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-40 md:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Accessible Sliding Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white z-50 shadow-2xl flex flex-col justify-between p-6 border-l border-slate-200 md:hidden transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
        <div className="space-y-6 overflow-y-auto">
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <Logo size="sm" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Links list */}
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 px-3.5 text-xs sm:text-sm font-bold text-slate-700 hover:text-blue-600 hover:bg-blue-50/60 rounded-xl transition-all"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Drawer Bottom Actions: WhatsApp + Discuss */}
        <div className="pt-6 border-t border-slate-100 space-y-2.5">
          <Link
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs transition-all"
          >
            <span>Discuss Your Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-colors border border-emerald-200/80"
          >
            <svg viewBox="0 0 32 32" className="w-4 h-4 fill-emerald-600 shrink-0" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2C8.28 2 2 8.28 2 16c0 2.72.78 5.26 2.13 7.42L2.5 30l6.78-1.58C11.36 29.5 13.62 30 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm8.18 19.82c-.34.96-1.7 1.83-2.77 2.05-.73.15-1.68.27-4.88-1.05-4.1-1.69-6.74-5.87-6.95-6.14-.2-.28-1.66-2.21-1.66-4.22 0-2.01 1.05-3 1.42-3.41.37-.41.82-.52 1.09-.52.27 0 .55.01.79.02.25.02.59-.1.92.7.34.82 1.16 2.84 1.26 3.05.1.21.17.46.03.73-.14.28-.21.46-.42.71-.21.25-.43.55-.62.74-.21.21-.42.44-.18.85.24.41 1.07 1.76 2.3 2.85 1.58 1.41 2.92 1.85 3.33 2.05.41.21.65.17.89-.1.24-.28 1.02-1.19 1.29-1.6.27-.41.55-.34.92-.21.38.14 2.39 1.13 2.8 1.33.41.21.68.31.78.48.1.17.1.99-.24 1.95z" />
            </svg>
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
