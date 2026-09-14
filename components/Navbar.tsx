"use client";

import { useState, useEffect } from "react";
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
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [businessOsOpen, setBusinessOsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#060911]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/60"
          : "bg-[#060911]/60 backdrop-blur-md border-b border-white/[0.04]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand & Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 p-[1px] shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all">
              <div className="w-full h-full bg-[#060911] rounded-[11px] flex items-center justify-center">
                <span className="font-bold text-lg bg-gradient-to-r from-white via-slate-100 to-blue-200 bg-clip-text text-transparent">
                  HR
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-base tracking-tight text-white group-hover:text-blue-400 transition-colors">
                  Hemanth Ranam
                </span>
                <span className="text-[10px] font-medium tracking-wide uppercase px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Business OS
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">
                Founder & Systems Architect
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* 01 Business OS with Hover Flyout */}
            <div
              className="relative"
              onMouseEnter={() => setBusinessOsOpen(true)}
              onMouseLeave={() => setBusinessOsOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/[0.05] transition-colors"
                onClick={() => setBusinessOsOpen(!businessOsOpen)}
              >
                <Layers className="w-4 h-4 text-blue-400" />
                <span>01 Business OS</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    businessOsOpen ? "rotate-180 text-blue-400" : "text-slate-400"
                  }`}
                />
              </button>

              {/* Flyout Menu */}
              {businessOsOpen && (
                <div className="absolute top-full left-0 w-[580px] pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="p-4 rounded-2xl bg-[#0b101d] border border-white/[0.1] shadow-2xl shadow-black/80 backdrop-blur-2xl grid grid-cols-2 gap-2">
                    <Link
                      href="/business-os"
                      className="p-2.5 rounded-xl hover:bg-white/[0.05] transition-colors group/item"
                    >
                      <div className="flex items-center gap-2 text-white font-medium text-xs group-hover/item:text-blue-400">
                        <Layers className="w-3.5 h-3.5 text-blue-400" />
                        <span>Business OS (Flagship)</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                        Complete multi-department operating system.
                      </p>
                    </Link>

                    <Link
                      href="/crm-os"
                      className="p-2.5 rounded-xl hover:bg-white/[0.05] transition-colors group/item"
                    >
                      <div className="flex items-center gap-2 text-white font-medium text-xs group-hover/item:text-blue-400">
                        <Users className="w-3.5 h-3.5 text-blue-400" />
                        <span>CRM OS</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                        Capture, manage and convert deal opportunities.
                      </p>
                    </Link>

                    <Link
                      href="/hrms-os"
                      className="p-2.5 rounded-xl hover:bg-white/[0.05] transition-colors group/item"
                    >
                      <div className="flex items-center gap-2 text-white font-medium text-xs group-hover/item:text-blue-400">
                        <Shield className="w-3.5 h-3.5 text-blue-400" />
                        <span>HRMS OS</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                        Workforce, attendance, leave & HR operations.
                      </p>
                    </Link>

                    <Link
                      href="/finance-os"
                      className="p-2.5 rounded-xl hover:bg-white/[0.05] transition-colors group/item"
                    >
                      <div className="flex items-center gap-2 text-white font-medium text-xs group-hover/item:text-blue-400">
                        <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                        <span>Finance OS</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                        Invoicing, expenses, payments & real-time ledger.
                      </p>
                    </Link>

                    <Link
                      href="/sales-os"
                      className="p-2.5 rounded-xl hover:bg-white/[0.05] transition-colors group/item"
                    >
                      <div className="flex items-center gap-2 text-white font-medium text-xs group-hover/item:text-blue-400">
                        <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
                        <span>Sales OS</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                        CPQ proposals & sales velocity tracking.
                      </p>
                    </Link>

                    <Link
                      href="/operations-os"
                      className="p-2.5 rounded-xl hover:bg-white/[0.05] transition-colors group/item"
                    >
                      <div className="flex items-center gap-2 text-white font-medium text-xs group-hover/item:text-blue-400">
                        <Zap className="w-3.5 h-3.5 text-blue-400" />
                        <span>Operations OS</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                        Standardise approvals, SOPs & workflows.
                      </p>
                    </Link>

                    <div className="col-span-2 pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400 px-1">
                      <span>Powered by Frappe & ERPNext foundation</span>
                      <Link
                        href="/#products"
                        className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1"
                      >
                        <span>View all 10 OS products</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 02 Digital Growth */}
            <Link
              href="/#digital-growth"
              className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/[0.05] transition-colors"
            >
              <Globe className="w-4 h-4 text-emerald-400" />
              <span>02 Digital Growth</span>
            </Link>

            {/* 03 Trading Technology */}
            <Link
              href="/#trading-tech"
              className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/[0.05] transition-colors"
            >
              <TrendingUp className="w-4 h-4 text-violet-400" />
              <span>03 Trading Tech</span>
            </Link>

            {/* Process */}
            <Link
              href="/#how-it-works"
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/[0.05] transition-colors"
            >
              How It Works
            </Link>

            {/* Pricing */}
            <Link
              href="/#pricing"
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/[0.05] transition-colors"
            >
              Pricing
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/917675815245?text=Hi%20Hemanth%2C%20I%20would%20like%20to%20discuss%20a%20Business%20OS%20for%20my%20company."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-500/20 transition-all font-mono"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/25 border border-blue-400/30 transition-all hover:scale-[1.02]"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="#contact"
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600"
            >
              Consultation
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/[0.08] bg-[#080d19]/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            <Link
              href="/#products"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/[0.05] flex items-center gap-2"
            >
              <Layers className="w-4 h-4 text-blue-400" />
              <span>01 Business OS Products</span>
            </Link>
            <Link
              href="/#digital-growth"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/[0.05] flex items-center gap-2"
            >
              <Globe className="w-4 h-4 text-emerald-400" />
              <span>02 Digital Growth & Websites</span>
            </Link>
            <Link
              href="/#trading-tech"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/[0.05] flex items-center gap-2"
            >
              <TrendingUp className="w-4 h-4 text-violet-400" />
              <span>03 Trading Technology</span>
            </Link>
            <Link
              href="/#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-sm font-medium text-slate-300 hover:bg-white/[0.05]"
            >
              The 7-Stage Process
            </Link>
            <Link
              href="/#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-sm font-medium text-slate-300 hover:bg-white/[0.05]"
            >
              Pricing Architecture
            </Link>
            <Link
              href="/#why-hemanth"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-sm font-medium text-slate-300 hover:bg-white/[0.05]"
            >
              Why Hemanth
            </Link>
            <Link
              href="/blogs"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-sm font-medium text-slate-300 hover:bg-white/[0.05]"
            >
              Articles & Guides
            </Link>
          </div>

          <div className="pt-3 border-t border-white/[0.06] flex flex-col gap-2">
            <a
              href="https://wa.me/917675815245?text=Hi%20Hemanth%2C%20I%20would%20like%20to%20discuss%20a%20Business%20OS%20for%20my%20company."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/20"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp (+917675815245)</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/25"
            >
              <span>Book Systems Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
