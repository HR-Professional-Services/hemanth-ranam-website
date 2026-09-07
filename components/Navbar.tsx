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

          {/* Desktop Navigation Links inside Pill Container */}
          <nav
            aria-label="Main Navigation"
            className="hidden xl:flex items-center gap-1 bg-slate-50/90 p-1 rounded-full border border-slate-200/80"
          >
            {NAV_ITEMS.map((item) => {
              const isBlogRoute = item.isRoute && pathname.startsWith("/blogs");
              const isSectionActive =
                !item.isRoute &&
                pathname === "/" &&
                activeSection === item.href.replace("/#", "").replace("#", "");
              const isActive = isBlogRoute || isSectionActive;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-150 ${
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

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-linkedin-btn"
              aria-label="Connect on LinkedIn"
              className="p-2 rounded-xl text-slate-500 hover:text-blue-600 hover:bg-slate-50 border border-slate-200/80 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <Link
              href="/#contact"
              id="nav-contact-cta"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-xs"
            >
              <span>Talk to Us</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Actions: Contact + Hamburger Toggle */}
          <div className="flex xl:hidden items-center gap-2">
            <Link
              href="/#contact"
              className="sm:hidden p-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center justify-center min-w-[36px] min-h-[36px]"
              aria-label="Contact Form"
            >
              <MessageSquare className="w-4 h-4" />
            </Link>
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
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-40 xl:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Accessible Sliding Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white z-50 shadow-2xl flex flex-col justify-between p-6 border-l border-slate-200 xl:hidden transform transition-transform duration-300 ease-in-out ${
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

        {/* Drawer Bottom Actions */}
        <div className="pt-6 border-t border-slate-100 space-y-3">
          <Link
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Talk to Us</span>
          </Link>
          <a
            href={SITE_CONFIG.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors border border-slate-200/80"
          >
            <LinkedinIcon className="w-4 h-4 text-blue-600" />
            <span>LinkedIn Profile</span>
          </a>
        </div>
      </div>
    </header>
  );
}
