"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ContactSection } from "@/components/sections/ContactSection";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BackToTop } from "@/components/ui/BackToTop";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { TechBackground3D } from "@/components/ui/TechBackground3D";
import {
  CANONICAL_SERVICES_CATALOGUE,
  CanonicalService,
} from "@/data/pricingData";
import {
  EcommerceCheckoutModal,
  CheckoutItem,
} from "@/components/ui/EcommerceCheckoutModal";
import {
  Search,
  Filter,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Sparkles,
  Shield,
  Layers,
  Calendar,
  AlertTriangle,
  Download,
  Zap,
} from "lucide-react";

const CATEGORY_TABS = [
  "All",
  "Consulting & Strategy",
  "Digital & Templates",
  "Google Sheets & Systems",
  "Website Services",
  "Business Automation",
  "Frappe & ERPNext",
  "Trading Technology",
  "Monthly Management",
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedInclusions, setExpandedInclusions] = useState<Record<string, boolean>>({});
  const [selectedItem, setSelectedItem] = useState<CheckoutItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleInclusions = (id: string) => {
    setExpandedInclusions((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredServices = CANONICAL_SERVICES_CATALOGUE.filter((item) => {
    const matchesCategory =
      selectedCategory === "All"
        ? true
        : selectedCategory === "Digital & Templates"
        ? item.category.includes("Template") || item.category.includes("Checklist")
        : item.category.toLowerCase().includes(selectedCategory.toLowerCase());

    const matchesSearch =
      searchQuery === ""
        ? true
        : item.serviceName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.serviceId.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.subcategory.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-blue-600/20 selection:text-blue-700 overflow-x-hidden">
      <TechBackground3D />
      <ScrollProgressBar />
      <Navbar />

      <main id="main-content" className="relative z-10 flex flex-col pt-16">
        {/* Header Hero */}
        <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 border-b border-slate-200/80 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Commercial Service &amp; Product Catalogue</span>
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Small Price.{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 bg-clip-text text-transparent">
                Big Work.
              </span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Explore our complete catalogue of business consulting, spreadsheet engines, custom automations, and trading technology. All services are delivered with fixed milestone scopes and zero hidden hourly billing.
            </p>

            {/* Visual Metric Highlights */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col items-center">
                <span className="text-xl sm:text-2xl font-black text-slate-900 font-mono">15</span>
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mt-0.5">Core Categories</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col items-center">
                <span className="text-xl sm:text-2xl font-black text-blue-600 font-mono">$25</span>
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mt-0.5">Starting Price</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col items-center">
                <span className="text-xl sm:text-2xl font-black text-emerald-600 font-mono">100%</span>
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mt-0.5">Fixed Milestone</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col items-center">
                <span className="text-xl sm:text-2xl font-black text-cyan-600 font-mono">0</span>
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mt-0.5">Hourly Lock-in</span>
              </div>
            </div>

            {/* Visual 4-Step Client Journey */}
            <div className="mt-6 max-w-4xl mx-auto p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
              <div className="text-[11px] font-mono text-slate-400 font-bold uppercase tracking-wider mb-2.5">
                Automated Service &amp; Delivery Engine:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-left">
                <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-mono text-[10px] font-bold flex items-center justify-center shrink-0">1</span>
                  <span className="text-xs font-semibold text-slate-800">Pick Service</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-mono text-[10px] font-bold flex items-center justify-center shrink-0">2</span>
                  <span className="text-xs font-semibold text-slate-800">Stripe Checkout</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-mono text-[10px] font-bold flex items-center justify-center shrink-0">3</span>
                  <span className="text-xs font-semibold text-slate-800">Auto Drive Folder</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-mono text-[10px] font-bold flex items-center justify-center shrink-0">4</span>
                  <span className="text-xs font-semibold text-slate-800">SOP &amp; Delivery</span>
                </div>
              </div>
            </div>

            {/* Search Input */}
            <div className="mt-8 max-w-xl mx-auto relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by service name, ID (e.g., CONS-001, SHT-001), or topic..."
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 shadow-sm transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs font-mono text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
              {CATEGORY_TABS.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setSelectedCategory(tab)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory === tab
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-200">
              <div className="text-xs font-mono text-slate-500">
                Showing <strong className="text-slate-900">{filteredServices.length}</strong> verified services &amp; products
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                <Shield className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Fixed Milestone Pricing</span>
              </div>
            </div>

            {filteredServices.length === 0 ? (
              <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200">
                <p className="text-slate-600 text-sm">No services matched your query.</p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                  className="mt-3 text-xs font-bold text-blue-600 hover:underline cursor-pointer"
                >
                  Reset all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((item) => (
                  <div
                    key={item.serviceId}
                    className={`p-6 sm:p-7 rounded-3xl bg-white border transition-all flex flex-col justify-between ${
                      item.popular
                        ? "border-2 border-blue-600 shadow-xl shadow-blue-500/10"
                        : "border-slate-200 hover:border-slate-300 shadow-sm"
                    }`}
                  >
                    <div className="space-y-4">
                      {/* Top Badges */}
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-bold uppercase tracking-wider">
                          {item.serviceId}
                        </span>
                        {item.badge && (
                          <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 font-bold">
                            {item.badge}
                          </span>
                        )}
                      </div>

                      {/* Title & Category */}
                      <div>
                        <span className="text-[11px] font-mono text-slate-400 font-medium uppercase tracking-wider">
                          {item.category} • {item.subcategory}
                        </span>
                        <h2 className="text-lg font-bold text-slate-900 mt-1 leading-snug">
                          {item.serviceName}
                        </h2>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.shortDescription}
                      </p>

                      {/* Pricing Line */}
                      <div className="py-2.5 border-y border-slate-100 flex items-baseline gap-2">
                        <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">
                          {item.price}
                        </span>
                        {item.originalPrice && (
                          <span className="text-xs text-slate-400 line-through font-mono">
                            {item.originalPrice}
                          </span>
                        )}
                        <span className="text-[11px] text-slate-500 font-mono ml-auto">
                          {item.deliveryTime}
                        </span>
                      </div>

                      {/* Scope Expand/Collapse Accordion */}
                      <div className="pt-1">
                        <button
                          type="button"
                          onClick={() => toggleInclusions(item.serviceId)}
                          className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center justify-between w-full cursor-pointer py-1"
                        >
                          <span>{expandedInclusions[item.serviceId] ? "Hide Inclusions / Scope" : "View Scope & Deliverables"}</span>
                          <span className="text-xs">{expandedInclusions[item.serviceId] ? "▲" : "▼"}</span>
                        </button>

                        {expandedInclusions[item.serviceId] && (
                          <div className="mt-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3 text-xs animate-in fade-in duration-150">
                            <div>
                              <span className="font-bold text-slate-900 text-[11px] uppercase tracking-wider block mb-1.5">
                                Included Scope:
                              </span>
                              <ul className="space-y-1 text-slate-600">
                                {item.included.map((inc, i) => (
                                  <li key={i} className="flex items-start gap-1.5">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                                    <span>{inc}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {item.excluded && item.excluded.length > 0 && (
                              <div className="pt-2 border-t border-slate-200">
                                <span className="font-bold text-slate-700 text-[11px] uppercase tracking-wider block mb-1">
                                  Explicitly Excluded:
                                </span>
                                <ul className="space-y-1 text-slate-500">
                                  {item.excluded.map((exc, i) => (
                                    <li key={i} className="flex items-start gap-1.5">
                                      <XCircle className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                                      <span>{exc}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Order Bump Preview */}
                      {item.orderBump && (
                        <div className="p-2.5 rounded-xl bg-blue-50/60 border border-blue-200/80 text-[11px] text-blue-900 flex items-start gap-2">
                          <Zap className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <div>
                            <strong className="font-bold">Add-On: {item.orderBump.title} ({item.orderBump.price})</strong>
                            <p className="text-blue-700 text-[10px] mt-0.5">{item.orderBump.description}</p>
                          </div>
                        </div>
                      )}

                      {/* Trading Disclaimer */}
                      {item.disclaimer && (
                        <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-[10px] text-amber-900 flex items-start gap-1.5 leading-relaxed">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span>{item.disclaimer}</span>
                        </div>
                      )}
                    </div>

                    {/* Bottom CTA */}
                    <div className="pt-6 mt-6 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedItem({
                            id: item.serviceId,
                            name: item.serviceName,
                            category: item.category,
                            subcategory: item.subcategory,
                            price: item.price,
                            originalPrice: item.originalPrice,
                            billingType: item.billingType,
                            deliveryTime: item.deliveryTime,
                            shortDescription: item.shortDescription,
                            included: item.included,
                            stripePaymentLink: item.stripePaymentLink,
                            bookingUrl: item.bookingUrl,
                            orderBump: item.orderBump,
                            disclaimer: item.disclaimer,
                          });
                          setIsModalOpen(true);
                        }}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-500 hover:to-blue-700 shadow-md shadow-blue-500/25 transition-all cursor-pointer"
                      >
                        {item.deliveryType === "instant_download" ? (
                          <Download className="w-3.5 h-3.5" />
                        ) : item.deliveryType === "consultation_booking" ? (
                          <Calendar className="w-3.5 h-3.5" />
                        ) : (
                          <Layers className="w-3.5 h-3.5" />
                        )}
                        <span>
                          {item.deliveryType === "instant_download"
                            ? `Download Now (${item.price})`
                            : item.deliveryType === "consultation_booking"
                            ? `Book Session (${item.price})`
                            : `Secure Service (${item.price})`}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Free Resources Hook */}
        <section className="py-12 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Looking for Free Practical Tools?
            </h2>
            <p className="mt-3 text-slate-400 text-sm max-w-2xl mx-auto">
              Access our library of 12 free business workbooks, Google Sheets CRM templates, and audit checklists designed to save 15+ hours per week.
            </p>
            <div className="mt-6">
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 transition-all shadow-md"
              >
                <span>Browse 12 Free Lead Magnets</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
      <WhatsAppButton />
      <BackToTop />

      {/* Embedded Checkout & Delivery Drawer Modal */}
      <EcommerceCheckoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        item={selectedItem}
      />
    </div>
  );
}
