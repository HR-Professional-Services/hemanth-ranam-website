"use client";

import { useState } from "react";
import {
  X,
  ShieldCheck,
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
  ExternalLink,
} from "lucide-react";
import confetti from "canvas-confetti";

export interface CheckoutItem {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  price: string;
  originalPrice?: string;
  billingType: string;
  deliveryTime: string;
  shortDescription: string;
  included?: string[];
  stripePaymentLink?: string;
  bookingUrl?: string;
  downloadUrl?: string;
  orderBump?: {
    title: string;
    price: string;
    description: string;
  };
  disclaimer?: string;
}

interface EcommerceCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: CheckoutItem | null;
}

export function EcommerceCheckoutModal({
  isOpen,
  onClose,
  item,
}: EcommerceCheckoutModalProps) {
  const [fullName, setFullName] = useState("");
  const [billingEmail, setBillingEmail] = useState("");
  const [googleEmail, setGoogleEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [addOrderBump, setAddOrderBump] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [freeDelivered, setFreeDelivered] = useState(false);
  const [deliveryDriveUrl, setDeliveryDriveUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen || !item) return null;

  const isFree =
    item.price.toLowerCase().includes("free") ||
    item.price === "$0" ||
    item.billingType === "FREE";

  const handleFreeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !billingEmail) {
      setErrorMessage("Please provide your name and email.");
      return;
    }
    setErrorMessage("");
    setIsSubmitting(true);

    const GAS_URL =
      process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_WEBHOOK_URL ||
      "https://script.google.com/macros/s/AKfycbz0PfSDNcjbNUnMJRP0PgaI-jgPd2VCNvfXVEasYElOk_1jH1wWaXeZOKA9ewmONJlX-w/exec";

    try {
      const payload = {
        action: "createLead",
        name: fullName,
        email: billingEmail,
        googleEmail: googleEmail || billingEmail,
        service: item.name,
        category: item.category,
        plan: "Free Resource Download",
        message: `Free resource request for ${item.name}. Notes: ${notes || "None"}`,
        source: "Ecommerce Store Checkout",
      };

      try {
        await fetch(GAS_URL, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(payload),
        });
      } catch (gasErr) {
        console.warn("GAS notification caught:", gasErr);
      }

      // Trigger confetti celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (confettiErr) {
        console.warn("Confetti ignored:", confettiErr);
      }

      setDeliveryDriveUrl(
        item.downloadUrl ||
          "https://drive.google.com/drive/folders/1YmEJ3MhozQ5yVNKIKq4YwUaCKQa0Fb3l"
      );
      setFreeDelivered(true);
    } catch (err: unknown) {
      console.error("Free checkout error:", err);
      // Fallback gracefully so customer gets the asset
      setDeliveryDriveUrl(
        item.downloadUrl ||
          "https://drive.google.com/drive/folders/1YmEJ3MhozQ5yVNKIKq4YwUaCKQa0Fb3l"
      );
      setFreeDelivered(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePaidCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!billingEmail) {
      setErrorMessage("Please provide your billing email.");
      return;
    }

    // Direct to Stripe Checkout or Payment Link
    const targetUrl = item.stripePaymentLink || item.bookingUrl || "/#contact";
    
    // Append prefilled email parameters if available
    const separator = targetUrl.includes("?") ? "&" : "?";
    const fullCheckoutUrl = `${targetUrl}${separator}prefilled_email=${encodeURIComponent(
      billingEmail
    )}&client_reference_id=${encodeURIComponent(item.id)}`;

    window.open(fullCheckoutUrl, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="relative px-6 py-5 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center border border-white/20">
              {isFree ? (
                <Download className="w-4 h-4 text-white" />
              ) : item.billingType === "MONTHLY" ? (
                <Calendar className="w-4 h-4 text-white" />
              ) : (
                <Layers className="w-4 h-4 text-white" />
              )}
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-blue-100 font-semibold">
                {isFree ? "Free Resource Access" : "Secure Checkout"}
              </span>
              <h2 className="text-base sm:text-lg font-bold text-white line-clamp-1">
                {item.name}
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {freeDelivered ? (
            /* Thank You / Instant Download State */
            <div className="py-6 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Your Free Access is Ready!
                </h3>
                <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
                  We have granted access to <strong>{item.name}</strong>. A copy has been dispatched to <strong>{billingEmail}</strong>.
                </p>
              </div>

              {/* Direct Link Button */}
              <div className="pt-2">
                <a
                  href={deliveryDriveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 shadow-lg shadow-blue-500/25 transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Open &amp; Make a Copy in Google Drive</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Upsell Card */}
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80 text-left text-xs max-w-lg mx-auto">
                <div className="flex items-center gap-2 text-blue-900 font-bold mb-1">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span>Want Help Tailoring This to Your Team?</span>
                </div>
                <p className="text-slate-600 leading-relaxed mb-3">
                  Book a 30-minute 1-on-1 strategy consultation with Hemanth. 100% of the $25 fee is credited towards any subsequent custom build.
                </p>
                <a
                  href="/services/business-consultation"
                  className="text-xs font-bold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1"
                >
                  <span>Book Strategy Consultation ($25)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ) : (
            /* Checkout Form */
            <form onSubmit={isFree ? handleFreeSubmit : handlePaidCheckout} className="space-y-5">
              {/* Product Summary Card */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-100 text-blue-800">
                      {item.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      {item.id}
                    </span>
                  </div>
                  <h4 className="mt-1.5 font-extrabold text-slate-900 text-sm sm:text-base">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                    {item.shortDescription}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xl sm:text-2xl font-black text-slate-900 font-mono">
                    {item.price}
                  </span>
                  <span className="block text-[10px] font-mono text-slate-500 mt-0.5">
                    {item.deliveryTime}
                  </span>
                </div>
              </div>

              {/* Scope Inclusions Preview */}
              {item.included && item.included.length > 0 && (
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs space-y-2">
                  <span className="font-bold text-slate-900 uppercase tracking-wider text-[11px] block">
                    What is Delivered:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-slate-600">
                    {item.included.slice(0, 4).map((inc, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Form Inputs */}
              <div className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Your Full Name <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Alex Mercer"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 text-xs text-slate-900 outline-hidden transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                      Billing Email <span className="text-blue-600">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={billingEmail}
                      onChange={(e) => setBillingEmail(e.target.value)}
                      placeholder="accounts@yourcompany.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 text-xs text-slate-900 outline-hidden transition-all"
                    />
                    <span className="text-[10px] text-slate-500 mt-1 block">
                      Where receipts and invoices are sent
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                      Google / Delivery Email
                    </label>
                    <input
                      type="email"
                      value={googleEmail}
                      onChange={(e) => setGoogleEmail(e.target.value)}
                      placeholder="your.account@gmail.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 text-xs text-slate-900 outline-hidden transition-all"
                    />
                    <span className="text-[10px] text-slate-500 mt-1 block">
                      For automated Google Drive workspace access
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Project Notes / Special Requirements (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Briefly describe your systems, tech stack, or specific needs..."
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 text-xs text-slate-900 outline-hidden transition-all resize-none"
                  />
                </div>
              </div>

              {/* Order Bump (Optional Add-on) */}
              {item.orderBump && (
                <div
                  onClick={() => setAddOrderBump(!addOrderBump)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                    addOrderBump
                      ? "bg-blue-50/80 border-blue-400 shadow-xs"
                      : "bg-slate-50/60 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={addOrderBump}
                    onChange={() => {}}
                    className="mt-0.5 rounded-md text-blue-600 focus:ring-blue-500"
                  />
                  <div className="text-xs">
                    <div className="flex items-center gap-1.5 font-bold text-slate-900">
                      <Zap className="w-3.5 h-3.5 text-blue-600" />
                      <span>{item.orderBump.title}</span>
                      <span className="text-blue-700 font-mono">
                        ({item.orderBump.price})
                      </span>
                    </div>
                    <p className="text-slate-600 text-[11px] mt-0.5">
                      {item.orderBump.description}
                    </p>
                  </div>
                </div>
              )}

              {/* Trading Technology Disclaimer Banner */}
              {item.disclaimer && (
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-[10px] text-amber-900 flex items-start gap-2 leading-relaxed">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Mandatory Disclaimer:</strong> {item.disclaimer}
                  </span>
                </div>
              )}

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2 py-1 text-[11px] text-slate-500 border-t border-slate-100">
                <span className="inline-flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>100% Fixed Scope Guarantee</span>
                </span>
                <span className="inline-flex items-center gap-1">
                  <FolderLock className="w-3.5 h-3.5 text-blue-600" />
                  <span>Automated Private Drive Delivery</span>
                </span>
                <span className="inline-flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-slate-500" />
                  <span>256-Bit Stripe Encryption</span>
                </span>
              </div>

              {errorMessage && (
                <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs text-center font-medium">
                  {errorMessage}
                </div>
              )}

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 shadow-lg shadow-blue-500/25 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Processing Instant Access...</span>
                  ) : isFree ? (
                    <>
                      <Download className="w-4 h-4" />
                      <span>Download Free Asset ($0)</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>
                        Proceed to Secure Checkout ({item.price}
                        {addOrderBump && item.orderBump ? ` + ${item.orderBump.price}` : ""})
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
