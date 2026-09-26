"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { TechBackground3D } from "@/components/ui/TechBackground3D";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BackToTop } from "@/components/ui/BackToTop";
import {
  EcommerceCheckoutModal,
  CheckoutItem,
} from "@/components/ui/EcommerceCheckoutModal";
import {
  CANONICAL_SERVICES_CATALOGUE,
  FREE_RESOURCES,
} from "@/data/pricingData";
import {
  Search,
  Filter,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Download,
  Calendar,
  Layers,
  Lock,
  Zap,
  AlertTriangle,
  FolderLock,
  Tag,
  Clock,
  Shield,
} from "lucide-react";

const STORE_TABS = [
  "All Items",
  "Free Resources ($0)",
  "Consulting ($25–$199)",
  "One-Time Builds ($149–$1,499)",
  "Digital Products ($19–$99)",
  "Trading Tech ($99–$499)",
  "Monthly Retainers ($29–$299/mo)",
];

export default function StorePage() {
  const [activeTab, setActiveTab] = useState("All Items");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState<CheckoutItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedScope, setExpandedScope] = useState<Record<string, boolean>>({});

  // Combine Paid Services and Free Resources into a unified catalogue
  const allStoreItems: CheckoutItem[] = [
    // 12 Free Resources first
    ...FREE_RESOURCES.map((r) => ({
      id: r.freeResourceId || r.id,
      name: r.title,
      category: "Free Resources",
      subcategory: r.category,
      price: "FREE ($0)",
      billingType: "FREE",
      deliveryTime: "Instant Download",
      shortDescription: r.description,
      included: [
        "Instant Google Drive copy access",
        "Step-by-step implementation guide",
        "Pre-built formulas & data validation",
        "Zero subscription or recurring fee",
      ],
      downloadUrl: r.downloadUrl,
    })),
    // All 50+ Canonical Services & Products
    ...CANONICAL_SERVICES_CATALOGUE.map((s) => ({
      id: s.serviceId,
      name: s.serviceName,
      category: s.category,
      subcategory: s.subcategory,
      price: s.price,
      originalPrice: s.originalPrice,
      billingType: s.billingType,
      deliveryTime: s.deliveryTime,
      shortDescription: s.shortDescription,
      included: s.included,
      stripePaymentLink: s.stripePaymentLink,
      bookingUrl: s.bookingUrl,
      orderBump: s.orderBump,
      disclaimer: s.disclaimer,
    })),
  ];

  const filteredItems = allStoreItems.filter((item) => {
    // Tab filter
    let matchesTab = true;
    if (activeTab === "Free Resources ($0)") {
      matchesTab = item.billingType === "FREE";
    } else if (activeTab === "Consulting ($25–$199)") {
      matchesTab = item.category.toLowerCase().includes("consulting");
    } else if (activeTab === "One-Time Builds ($149–$1,499)") {
      matchesTab =
        (item.category.toLowerCase().includes("website") ||
          item.category.toLowerCase().includes("automation") ||
          item.category.toLowerCase().includes("frappe") ||
          item.category.toLowerCase().includes("sheets")) &&
        item.billingType !== "FREE" &&
        item.billingType !== "MONTHLY";
    } else if (activeTab === "Digital Products ($19–$99)") {
      matchesTab =
        item.category.toLowerCase().includes("template") ||
        item.category.toLowerCase().includes("checklist") ||
        item.category.toLowerCase().includes("kit") ||
        item.category.toLowerCase().includes("dashboard");
    } else if (activeTab === "Trading Tech ($99–$499)") {
      matchesTab = item.category.toLowerCase().includes("trading");
    } else if (activeTab === "Monthly Retainers ($29–$299/mo)") {
      matchesTab =
        item.billingType === "MONTHLY" ||
        item.category.toLowerCase().includes("monthly");
    }

    // Search query filter
    const matchesSearch =
      searchQuery === ""
        ? true
        : item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  const handleOpenCheckout = (item: CheckoutItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const toggleScope = (id: string) => {
    setExpandedScope((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-blue-600/20 selection:text-blue-700 overflow-x-hidden">
      <TechBackground3D />
      <ScrollProgressBar />
      <Navbar />

      <main id="main-content" className="relative z-10 flex flex-col pt-16">
        {/* Hero Section */}
        <section className="pt-16 pb-12 sm:pt-20 sm:pb-16 border-b border-slate-200/80 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full E-Commerce Service &amp; Product Store</span>
            </div>

            <h1 className="mt-4 text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Professional Services &amp; Digital Store
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Browse our complete catalog of free templates, strategic consultations, one-time custom builds, and monthly support partnerships. Direct Stripe payment links and automated Google Drive delivery.
            </p>

            {/* Quick Metrics */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col items-center">
                <span className="text-xl sm:text-2xl font-black text-slate-900 font-mono">50+</span>
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mt-0.5">Commercial Services</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col items-center">
                <span className="text-xl sm:text-2xl font-black text-blue-600 font-mono">12</span>
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mt-0.5">Free Lead Magnets</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col items-center">
                <span className="text-xl sm:text-2xl font-black text-emerald-600 font-mono">100%</span>
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mt-0.5">Fixed Scope Guarantee</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col items-center">
                <span className="text-xl sm:text-2xl font-black text-indigo-600 font-mono">Instant</span>
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mt-0.5">Automated Drive Access</span>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Bar & Storefront Grid */}
        <section className="py-12 bg-white min-h-[600px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Search Input */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
              <div className="relative w-full sm:max-w-md">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by service, product, or keyword..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 text-xs text-slate-900 outline-hidden transition-all shadow-xs"
                />
              </div>
              <div className="text-xs text-slate-500 font-mono">
                Showing <strong>{filteredItems.length}</strong> available items
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 border-b border-slate-200 no-scrollbar">
              {STORE_TABS.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    activeTab === tab
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Product Card Grid */}
            {filteredItems.length === 0 ? (
              <div className="py-16 text-center text-slate-500">
                <p className="text-base font-semibold">No services matched your search query.</p>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("All Items");
                    setSearchQuery("");
                  }}
                  className="mt-3 text-xs text-blue-600 font-bold hover:underline cursor-pointer"
                >
                  Reset all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => {
                  const isFree = item.billingType === "FREE";
                  return (
                    <div
                      key={item.id}
                      className="group relative rounded-3xl bg-white border border-slate-200/90 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-200 p-6 flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        {/* Top Badges */}
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                              isFree
                                ? "bg-emerald-50 border border-emerald-200 text-emerald-700"
                                : item.billingType === "MONTHLY"
                                ? "bg-indigo-50 border border-indigo-200 text-indigo-700"
                                : "bg-blue-50 border border-blue-200 text-blue-700"
                            }`}
                          >
                            {item.category}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">
                            {item.id}
                          </span>
                        </div>

                        {/* Title & Description */}
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {item.name}
                          </h3>
                          <p className="mt-1.5 text-xs text-slate-600 leading-relaxed line-clamp-2">
                            {item.shortDescription}
                          </p>
                        </div>

                        {/* Price & Turnaround Badge */}
                        <div className="flex items-baseline gap-2 pt-2 border-t border-slate-100">
                          <span
                            className={`text-2xl font-black font-mono ${
                              isFree ? "text-emerald-600" : "text-slate-900"
                            }`}
                          >
                            {item.price}
                          </span>
                          {item.originalPrice && (
                            <span className="text-xs text-slate-400 line-through font-mono">
                              {item.originalPrice}
                            </span>
                          )}
                          <span className="text-[10px] font-mono text-slate-500 ml-auto flex items-center gap-1">
                            <Clock className="w-3 h-3 text-slate-400" />
                            <span>{item.deliveryTime}</span>
                          </span>
                        </div>

                        {/* Expandable Deliverables */}
                        {item.included && item.included.length > 0 && (
                          <div className="pt-1">
                            <button
                              type="button"
                              onClick={() => toggleScope(item.id)}
                              className="text-[11px] font-semibold text-blue-600 hover:text-blue-800 flex items-center justify-between w-full py-1 cursor-pointer"
                            >
                              <span>
                                {expandedScope[item.id]
                                  ? "Hide Deliverables"
                                  : "View What's Included"}
                              </span>
                              <span className="text-xs">
                                {expandedScope[item.id] ? "▲" : "▼"}
                              </span>
                            </button>

                            {expandedScope[item.id] && (
                              <div className="mt-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5 text-xs animate-in fade-in duration-150">
                                <span className="font-bold text-slate-900 text-[10px] uppercase tracking-wider block">
                                  Scope of Delivery:
                                </span>
                                <ul className="space-y-1 text-slate-600 text-[11px]">
                                  {item.included.map((inc, i) => (
                                    <li key={i} className="flex items-start gap-1.5">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                                      <span>{inc}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Trading Disclaimer */}
                        {item.disclaimer && (
                          <div className="p-2 rounded-xl bg-amber-50 border border-amber-200 text-[10px] text-amber-900 flex items-start gap-1.5">
                            <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                            <span className="line-clamp-2">{item.disclaimer}</span>
                          </div>
                        )}
                      </div>

                      {/* Buy / Download CTA */}
                      <div className="pt-6 mt-6 border-t border-slate-100">
                        <button
                          type="button"
                          onClick={() => handleOpenCheckout(item)}
                          className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer ${
                            isFree
                              ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/25"
                              : "bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white shadow-blue-500/25"
                          }`}
                        >
                          {isFree ? (
                            <Download className="w-3.5 h-3.5" />
                          ) : (
                            <Lock className="w-3.5 h-3.5" />
                          )}
                          <span>
                            {isFree
                              ? "Get Free Access ($0)"
                              : item.billingType === "MONTHLY"
                              ? `Subscribe (${item.price})`
                              : `Buy Now (${item.price})`}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* Global Security & Guarantee Banner */}
        <section className="py-12 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                <Shield className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-white">100% Consultation Credit</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Every $25 to $199 strategy consultation fee is fully credited toward any custom system build.
                  </p>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                <FolderLock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-white">Automated Drive Delivery</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Google Apps Script automatically generates your private Google Drive workspace upon checkout.
                  </p>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                <Lock className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-white">Zero Subscription Lock-In</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    You own 100% of your source code, spreadsheet logic, and workflows. Cancel retainers anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
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
