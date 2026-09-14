"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Layers,
  Globe,
  TrendingUp,
  ChevronDown,
  ArrowRight,
  Shield,
  Zap,
  Users,
  Sparkles,
  Phone,
  Workflow,
  CheckCircle2,
} from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [businessOsOpen, setBusinessOsOpen] = useState(false);
  const flyoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close flyout if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (flyoutRef.current && !flyoutRef.current.contains(event.target as Node)) {
        setBusinessOsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "bg-[#060911]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/70"
          : "bg-[#060911]/75 backdrop-blur-lg border-b border-white/[0.05]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand & Identity (Left) */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500/25 via-indigo-500/20 to-cyan-500/20 p-[1px] shadow-md shadow-blue-500/15 group-hover:shadow-blue-500/30 transition-all">
              <div className="w-full h-full bg-[#080d1a] rounded-[11px] flex items-center justify-center border border-white/[0.08]">
                <span className="font-extrabold text-sm tracking-wider bg-gradient-to-r from-white via-slate-100 to-blue-200 bg-clip-text text-transparent">
                  HR
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-white group-hover:text-blue-300 transition-colors leading-none">
                Hemanth Ranam
              </span>
              <span className="text-[11px] text-slate-400 font-normal leading-tight mt-1">
                Founder & Systems Architect
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Center) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {/* Business OS with Flyout Menu */}
            <div
              ref={flyoutRef}
              className="relative"
              onMouseEnter={() => setBusinessOsOpen(true)}
              onMouseLeave={() => setBusinessOsOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all whitespace-nowrap ${
                  businessOsOpen
                    ? "text-white bg-white/[0.08]"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                }`}
                onClick={() => setBusinessOsOpen(!businessOsOpen)}
                aria-expanded={businessOsOpen}
              >
                <Layers className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Business OS</span>
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-200 shrink-0 ${
                    businessOsOpen ? "rotate-180 text-blue-400" : "text-slate-400"
                  }`}
                />
              </button>

              {/* Flyout Menu Panel */}
              {businessOsOpen && (
                <div className="absolute top-full left-0 w-[540px] pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="p-4 rounded-2xl bg-[#090e1c] border border-white/[0.1] shadow-2xl shadow-black/90 backdrop-blur-2xl">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06]">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/25">
                          01 Division
                        </span>
                        <span className="text-xs font-semibold text-white">
                          Connected Business Systems
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-400">
                        Built on Frappe / ERPNext
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        href="/business-os"
                        onClick={() => setBusinessOsOpen(false)}
                        className="p-2.5 rounded-xl hover:bg-white/[0.05] transition-colors group/item"
                      >
                        <div className="flex items-center gap-2 text-white font-medium text-xs group-hover/item:text-blue-400">
                          <Layers className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                          <span>Business OS (All-in-One)</span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                          Unified operating system for all departments.
                        </p>
                      </Link>

                      <Link
                        href="/crm-os"
                        onClick={() => setBusinessOsOpen(false)}
                        className="p-2.5 rounded-xl hover:bg-white/[0.05] transition-colors group/item"
                      >
                        <div className="flex items-center gap-2 text-white font-medium text-xs group-hover/item:text-blue-400">
                          <Users className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                          <span>CRM OS</span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                          Lead capture, pipelines & deal tracking.
                        </p>
                      </Link>

                      <Link
                        href="/hrms-os"
                        onClick={() => setBusinessOsOpen(false)}
                        className="p-2.5 rounded-xl hover:bg-white/[0.05] transition-colors group/item"
                      >
                        <div className="flex items-center gap-2 text-white font-medium text-xs group-hover/item:text-blue-400">
                          <Shield className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                          <span>HRMS OS</span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                          Workforce, payroll, attendance & leave.
                        </p>
                      </Link>

                      <Link
                        href="/finance-os"
                        onClick={() => setBusinessOsOpen(false)}
                        className="p-2.5 rounded-xl hover:bg-white/[0.05] transition-colors group/item"
                      >
                        <div className="flex items-center gap-2 text-white font-medium text-xs group-hover/item:text-blue-400">
                          <Sparkles className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                          <span>Finance OS</span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                          Invoicing, expenses & financial ledger.
                        </p>
                      </Link>

                      <Link
                        href="/sales-os"
                        onClick={() => setBusinessOsOpen(false)}
                        className="p-2.5 rounded-xl hover:bg-white/[0.05] transition-colors group/item"
                      >
                        <div className="flex items-center gap-2 text-white font-medium text-xs group-hover/item:text-blue-400">
                          <TrendingUp className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                          <span>Sales OS</span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                          CPQ quotations & sales forecasting.
                        </p>
                      </Link>

                      <Link
                        href="/operations-os"
                        onClick={() => setBusinessOsOpen(false)}
                        className="p-2.5 rounded-xl hover:bg-white/[0.05] transition-colors group/item"
                      >
                        <div className="flex items-center gap-2 text-white font-medium text-xs group-hover/item:text-blue-400">
                          <Zap className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                          <span>Operations OS</span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                          Approvals, SOPs & automated workflows.
                        </p>
                      </Link>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <CheckCircle2 className="w-3 h-3 text-blue-400" />
                        <span>Managed setup + monthly maintenance</span>
                      </div>
                      <Link
                        href="/#products"
                        onClick={() => setBusinessOsOpen(false)}
                        className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1"
                      >
                        <span>View all 10 OS cards</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Digital Growth */}
            <Link
              href="/#digital-growth"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs lg:text-sm font-medium text-slate-300 hover:text-white rounded-full hover:bg-white/[0.05] transition-all whitespace-nowrap"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Digital Growth</span>
            </Link>

            {/* Trading Technology */}
            <Link
              href="/#trading-tech"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs lg:text-sm font-medium text-slate-300 hover:text-white rounded-full hover:bg-white/[0.05] transition-all whitespace-nowrap"
            >
              <TrendingUp className="w-3.5 h-3.5 text-violet-400 shrink-0" />
              <span>Trading Tech</span>
            </Link>

            {/* How It Works */}
            <Link
              href="/#how-it-works"
              className="px-3 py-1.5 text-xs lg:text-sm font-medium text-slate-300 hover:text-white rounded-full hover:bg-white/[0.05] transition-all whitespace-nowrap"
            >
              How It Works
            </Link>

            {/* Pricing */}
            <Link
              href="/#pricing"
              className="px-3 py-1.5 text-xs lg:text-sm font-medium text-slate-300 hover:text-white rounded-full hover:bg-white/[0.05] transition-all whitespace-nowrap"
            >
              Pricing
            </Link>
          </nav>

          {/* Desktop Right Action Area */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            {/* WhatsApp Quick Link */}
            <a
              href="https://wa.me/917675815245?text=Hi%20Hemanth%2C%20I%20would%20like%20to%20discuss%20a%20Business%20OS%20for%20my%20company."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-500/25 transition-all whitespace-nowrap"
              title="Chat directly on WhatsApp"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <Phone className="w-3 h-3 shrink-0" />
              <span>WhatsApp</span>
            </a>

            {/* Book Consultation Primary CTA */}
            <a
              href="#contact"
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-500/20 border border-blue-400/30 transition-all hover:scale-[1.02] whitespace-nowrap"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-3 h-3 shrink-0" />
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="#contact"
              className="px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500"
            >
              Consult
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-300 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#070b16]/98 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-1">
            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 px-3 pt-1 pb-1">
              Divisions & Products
            </div>
            <Link
              href="/#products"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-xs font-medium text-slate-200 hover:bg-white/[0.05] flex items-center gap-2"
            >
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              <span>01 Business OS (10 Products)</span>
            </Link>
            <Link
              href="/#digital-growth"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-xs font-medium text-slate-200 hover:bg-white/[0.05] flex items-center gap-2"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>02 Digital Growth & Websites</span>
            </Link>
            <Link
              href="/#trading-tech"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-xs font-medium text-slate-200 hover:bg-white/[0.05] flex items-center gap-2"
            >
              <TrendingUp className="w-3.5 h-3.5 text-violet-400" />
              <span>03 Trading Technology</span>
            </Link>

            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 px-3 pt-3 pb-1">
              Platform & Process
            </div>
            <Link
              href="/#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-xs font-medium text-slate-300 hover:bg-white/[0.05] flex items-center gap-2"
            >
              <Workflow className="w-3.5 h-3.5 text-slate-400" />
              <span>How It Works (8 Stages)</span>
            </Link>
            <Link
              href="/#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-xs font-medium text-slate-300 hover:bg-white/[0.05] flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-400" />
              <span>Pricing Architecture</span>
            </Link>
            <Link
              href="/#why-hemanth"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-xs font-medium text-slate-300 hover:bg-white/[0.05] flex items-center gap-2"
            >
              <Users className="w-3.5 h-3.5 text-slate-400" />
              <span>Why Hemanth</span>
            </Link>
            <Link
              href="/blogs"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-xs font-medium text-slate-300 hover:bg-white/[0.05] flex items-center gap-2"
            >
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <span>Articles & Guides</span>
            </Link>
          </div>

          <div className="pt-3 border-t border-white/[0.06] flex flex-col gap-2">
            <a
              href="https://wa.me/917675815245?text=Hi%20Hemanth%2C%20I%20would%20like%20to%20discuss%20a%20Business%20OS%20for%20my%20company."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/25"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp (+91 76758 15245)</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/25"
            >
              <span>Book Systems Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
