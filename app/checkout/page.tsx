"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { TechBackground3D } from "@/components/ui/TechBackground3D";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { BackToTop } from "@/components/ui/BackToTop";
import { useCart, CartItem } from "@/context/CartContext";
import {
  CURATED_OFFERS,
  MONTHLY_PLANS,
  getCanonicalPrice,
} from "@/data/curatedCatalog";
import {
  CANONICAL_SERVICES_CATALOGUE,
  FREE_RESOURCES,
} from "@/data/pricingData";
import {
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ShoppingBag,
  Plus,
  Minus,
  Lock,
  Clock,
  AlertTriangle,
  FolderLock,
  Mail,
  User,
  Building,
  FileText,
  CreditCard,
  Download,
  ExternalLink,
  RefreshCw,
} from "lucide-react";

interface ValidatedCartItem extends CartItem {
  verifiedPrice: number;
  lineTotal: number;
}

interface DirectItem {
  id: string;
  name: string;
  category: string;
  price: number;
  priceDisplay: string;
  billingType: string;
  deliveryTime: string;
  shortDescription: string;
  stripePaymentLink?: string;
  bookingUrl?: string;
  downloadUrl?: string;
}

function CheckoutContent() {
  const searchParams = useSearchParams();
  const initialItemId =
    searchParams.get("id") ||
    searchParams.get("item") ||
    searchParams.get("sku") ||
    "";

  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
  } = useCart();

  // Lookup canonical single item if cart is empty but URL parameter is present
  const directItem: DirectItem | null = useMemo(() => {
    if (!initialItemId) return null;

    // Check curated offers first
    const curated = CURATED_OFFERS.find(
      (o) =>
        o.id.toLowerCase() === initialItemId.toLowerCase() ||
        o.slug.toLowerCase() === initialItemId.toLowerCase()
    );
    if (curated) {
      return {
        id: curated.id,
        name: curated.name,
        category: curated.category,
        price: curated.price,
        priceDisplay: curated.priceDisplay,
        billingType: curated.billingType,
        deliveryTime: curated.deliveryTime,
        shortDescription: curated.shortDescription,
        stripePaymentLink: curated.stripePaymentLink,
        bookingUrl: curated.bookingUrl,
      };
    }

    // Check monthly plans
    const plan = MONTHLY_PLANS.find(
      (p) =>
        p.id.toLowerCase() === initialItemId.toLowerCase() ||
        p.slug.toLowerCase() === initialItemId.toLowerCase()
    );
    if (plan) {
      return {
        id: plan.id,
        name: plan.name,
        category: "Monthly Support",
        price: plan.price,
        priceDisplay: plan.priceDisplay,
        billingType: "MONTHLY",
        deliveryTime: "Active within 24 hours",
        shortDescription: plan.tagline,
        stripePaymentLink: plan.stripePaymentLink,
      };
    }

    // Check free resources
    const free = FREE_RESOURCES.find(
      (r) =>
        (r.freeResourceId || r.id).toLowerCase() ===
        initialItemId.toLowerCase()
    );
    if (free) {
      return {
        id: free.freeResourceId || free.id,
        name: free.title,
        category: "Free Resource",
        price: 0,
        priceDisplay: "FREE ($0)",
        billingType: "FREE",
        deliveryTime: "Instant Download",
        shortDescription: free.description,
        downloadUrl: free.downloadUrl,
      };
    }

    // Check legacy 50 canonical catalogue
    const canon = CANONICAL_SERVICES_CATALOGUE.find(
      (s) => s.serviceId.toLowerCase() === initialItemId.toLowerCase()
    );
    if (canon) {
      const priceNum =
        parseFloat(canon.price.replace(/[^0-9.]/g, "")) || 0;
      return {
        id: canon.serviceId,
        name: canon.serviceName,
        category: canon.category,
        price: priceNum,
        priceDisplay: canon.price,
        billingType: canon.billingType,
        deliveryTime: canon.deliveryTime,
        shortDescription: canon.shortDescription,
        stripePaymentLink: canon.stripePaymentLink,
        bookingUrl: canon.bookingUrl,
      };
    }

    return null;
  }, [initialItemId]);

  // Form Fields
  const [fullName, setFullName] = useState("");
  const [billingEmail, setBillingEmail] = useState("");
  const [googleEmail, setGoogleEmail] = useState("");
  const [company, setCompany] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [freeDeliveredUrl, setFreeDeliveredUrl] = useState<string | null>(
    null
  );
  const [orderConfirmation, setOrderConfirmation] = useState<{
    orderId: string;
    total: number;
    email: string;
  } | null>(null);

  const GAS_URL =
    process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_WEBHOOK_URL ||
    "https://script.google.com/macros/s/AKfycbz0PfSDNcjbNUnMJRP0PgaI-jgPd2VCNvfXVEasYElOk_1jH1wWaXeZOKA9ewmONJlX-w/exec";

  // Revalidate totals strictly using canonical server-side prices
  const isUsingCart = cart.length > 0;

  const validatedCartItems: ValidatedCartItem[] = useMemo(() => {
    if (!isUsingCart) return [];
    return cart.map((item: CartItem): ValidatedCartItem => {
      const canonicalPrice = getCanonicalPrice(item.id);
      const unitPrice =
        canonicalPrice !== null ? canonicalPrice : item.price;
      return {
        ...item,
        verifiedPrice: unitPrice,
        lineTotal: unitPrice * item.quantity,
      };
    });
  }, [cart, isUsingCart]);

  const verifiedSubtotal = useMemo(() => {
    if (isUsingCart) {
      return validatedCartItems.reduce(
        (sum: number, item: ValidatedCartItem) => sum + item.lineTotal,
        0
      );
    }
    return directItem ? directItem.price : 0;
  }, [isUsingCart, validatedCartItems, directItem]);

  const hasOnlyFreeItems = useMemo(() => {
    if (isUsingCart) {
      return (
        validatedCartItems.length > 0 &&
        validatedCartItems.every((item: ValidatedCartItem) => item.verifiedPrice === 0)
      );
    }
    return directItem ? directItem.price === 0 : false;
  }, [isUsingCart, validatedCartItems, directItem]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !billingEmail.trim()) {
      setErrorMessage(
        "Please provide your full name and billing email address."
      );
      return;
    }
    setErrorMessage("");
    setIsSubmitting(true);

    const orderId = `HR-ORD-${Date.now().toString(36).toUpperCase()}`;

    try {
      const itemsPurchased = isUsingCart
        ? validatedCartItems.map((item: ValidatedCartItem) => ({
            id: item.id,
            name: item.name,
            quantity: item.quantity,
            unitPrice: `$${item.verifiedPrice}`,
            lineTotal: `$${item.lineTotal}`,
          }))
        : directItem
        ? [
            {
              id: directItem.id,
              name: directItem.name,
              quantity: 1,
              unitPrice: directItem.priceDisplay,
              lineTotal: directItem.priceDisplay,
            },
          ]
        : [];

      const primaryItemName =
        itemsPurchased.map((i: { name: string }) => i.name).join(", ") ||
        "Custom Professional Service";

      const payload = {
        action: "createOrder",
        orderId,
        name: fullName,
        email: billingEmail,
        googleEmail: googleEmail || billingEmail,
        company: company || "Independent",
        service: primaryItemName,
        items: itemsPurchased,
        total: `$${verifiedSubtotal.toFixed(2)}`,
        notes: notes || "None provided",
        source: "Checkout Page",
        page: "/checkout",
        timestamp: new Date().toISOString(),
      };

      // 1. Direct log to Google Apps Script CRM Webhook
      try {
        await fetch(GAS_URL, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(payload),
        });
      } catch (gasErr) {
        console.warn("CRM notification caught:", gasErr);
      }

      // If it's a 100% free digital resource
      if (hasOnlyFreeItems) {
        const downloadTarget =
          directItem?.downloadUrl ||
          "https://drive.google.com/drive/folders/1YmEJ3MhozQ5yVNKIKq4YwUaCKQa0Fb3l";
        clearCart();
        setFreeDeliveredUrl(downloadTarget);
        setIsSubmitting(false);
        return;
      }

      // If there is a direct Stripe link on a single-item purchase
      if (directItem?.stripePaymentLink && directItem.stripePaymentLink.startsWith("https://buy.stripe.com")) {
        clearCart();
        const sep = directItem.stripePaymentLink.includes("?") ? "&" : "?";
        const redirectUrl = `${directItem.stripePaymentLink}${sep}prefilled_email=${encodeURIComponent(
          billingEmail
        )}&client_reference_id=${encodeURIComponent(orderId)}`;
        window.location.assign(redirectUrl);
        return;
      }

      // If consultation booking URL
      if (directItem?.bookingUrl && directItem.price === 49) {
        clearCart();
        window.location.assign(directItem.bookingUrl);
        return;
      }

      // Otherwise, forward to professional payment confirmation
      clearCart();
      setOrderConfirmation({
        orderId,
        total: verifiedSubtotal,
        email: billingEmail,
      });
    } catch (err) {
      console.error("Checkout submission failed:", err);
      setErrorMessage(
        "There was a network error registering your order. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // ---------------------------------------------------------------------------
  // STATE A: Order Confirmation Success View
  // ---------------------------------------------------------------------------
  if (orderConfirmation) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Navbar />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-20 text-center">
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-sm">
            <CheckCircle2 className="w-8 h-8 text-emerald-600" />
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Order Intent Confirmed
          </span>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            Thank You, {fullName || "Customer"}!
          </h1>
          <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
            Your order reference is{" "}
            <span className="font-mono font-bold text-slate-900">
              {orderConfirmation.orderId}
            </span>
            . A confirmation receipt has been sent to{" "}
            <strong>{orderConfirmation.email}</strong>.
          </p>

          <div className="mt-8 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-left space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              What Happens Next
            </h2>
            <ol className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center shrink-0 text-xs">
                  1
                </span>
                <span>
                  Hemanth Ranam will personally review your project scope and
                  deliverables.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center shrink-0 text-xs">
                  2
                </span>
                <span>
                  You will receive an onboarding invitation or calendar link
                  via email within 4–12 hours.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center shrink-0 text-xs">
                  3
                </span>
                <span>
                  If digital templates or Google Drive delivery was requested,
                  access permissions are provisioned to{" "}
                  <strong>{googleEmail || billingEmail}</strong>.
                </span>
              </li>
            </ol>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors"
            >
              Return to Homepage
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-bold text-xs transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // STATE B: Free Delivery Download View
  // ---------------------------------------------------------------------------
  if (freeDeliveredUrl) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Navbar />
        <div className="max-w-xl mx-auto px-4 sm:px-6 py-20 text-center">
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-sm">
            <Sparkles className="w-8 h-8 text-emerald-600" />
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            Instant Access Granted
          </span>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            Your Free Resource Is Ready
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Thank you, {fullName}. We have granted Google Drive delivery access
            to <strong>{googleEmail || billingEmail}</strong>.
          </p>

          <div className="mt-8 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <a
              href={freeDeliveredUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-md shadow-emerald-600/25 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Open in Google Drive</span>
              <ExternalLink className="w-4 h-4 text-emerald-200" />
            </a>

            <div className="pt-4 border-t border-slate-100 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                Need Implementation Assistance?
              </span>
              <p className="text-xs text-slate-600 mb-3">
                Need this system customized, connected to your website, or
                automated end-to-end?
              </p>
              <Link
                href="/services"
                className="text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
              >
                <span>View Implementation Services from $149</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // STATE C: Empty Cart & No Direct Item Selected
  // ---------------------------------------------------------------------------
  if (!isUsingCart && !directItem) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Navbar />
        <TechBackground3D />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-24 text-center">
          <div className="w-16 h-16 rounded-2xl bg-slate-100 border border-slate-200 text-slate-400 flex items-center justify-center mx-auto mb-6 shadow-xs">
            <ShoppingBag className="w-8 h-8 text-slate-400" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Your Cart Is Empty
          </h1>
          <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
            You don’t have any services or items loaded for checkout yet.
            Select a commercial offer or browse our curated roadmap.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-lg mx-auto">
            <Link
              href="/checkout?id=biz-sys-consultation"
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-600 hover:shadow-sm transition-all group"
            >
              <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block">
                Quick Start Discovery
              </span>
              <h2 className="font-bold text-slate-900 text-sm mt-0.5 group-hover:text-blue-600 transition-colors">
                Systems Consultation
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                60-min 1-on-1 architecture diagnosis.
              </p>
              <span className="font-black text-slate-900 text-sm mt-2 block">
                $49
              </span>
            </Link>

            <Link
              href="/checkout?id=biz-sys-audit"
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-600 hover:shadow-sm transition-all group"
            >
              <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block">
                Comprehensive Audit
              </span>
              <h2 className="font-bold text-slate-900 text-sm mt-0.5 group-hover:text-blue-600 transition-colors">
                Systems &amp; Stack Audit
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Audit software sprawl &amp; bottlenecks.
              </p>
              <span className="font-black text-slate-900 text-sm mt-2 block">
                $99
              </span>
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              href="/services"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors shadow-sm"
            >
              Browse All Services
            </Link>
            <Link
              href="/pricing"
              className="px-6 py-3 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-bold text-xs transition-colors"
            >
              View Pricing Roadmap
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // MAIN CHECKOUT VIEW
  // ---------------------------------------------------------------------------
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
      <Navbar />
      <ScrollProgressBar />
      <TechBackground3D />

      {/* Header Bar */}
      <section className="relative pt-28 pb-8 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide uppercase mb-2">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>Verified Client Checkout</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900">
                Checkout &amp; Service Provisioning
              </h1>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                Confirm your order details and specify where deliverables or
                client workspace access should be provisioned.
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                <Lock className="w-3.5 h-3.5 text-blue-600" />
                <span>256-Bit SSL Encrypted</span>
              </div>
              <div className="flex items-center gap-1.5 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 text-emerald-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Founder Verified Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checkout Form & Order Summary Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Customer Information & Delivery Form (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                <div>
                  <h2 className="text-base font-black text-slate-900">
                    Customer Details
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Please provide your contact and delivery credentials.
                  </p>
                </div>
                <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                  Step 1 of 2
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    <span>Full Name</span>
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. David Miller"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  />
                </div>

                {/* Email Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-blue-600" />
                      <span>Billing Email</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="billing@company.com"
                      value={billingEmail}
                      onChange={(e) => setBillingEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                    <span className="text-[10px] text-slate-400 mt-1 block">
                      Used for receipts, tax invoices &amp; payment confirmation.
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                      <FolderLock className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Delivery / Google Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="you@gmail.com (Optional)"
                      value={googleEmail}
                      onChange={(e) => setGoogleEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                    <span className="text-[10px] text-slate-400 mt-1 block">
                      For Google Drive templates &amp; workspace provisioning.
                    </span>
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-slate-400" />
                    <span>Company or Organisation</span>
                    <span className="text-slate-400 font-normal text-[11px]">
                      (Optional)
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Miller Logistics Ltd"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  />
                </div>

                {/* Project Scope / Notes */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-slate-400" />
                    <span>Project Scope or Requirements</span>
                    <span className="text-slate-400 font-normal text-[11px]">
                      (Optional)
                    </span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your current tech stack, pain points, or timeline..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  />
                </div>

                {/* Error Banner */}
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-red-700 flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-2xl font-black text-sm text-white flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer ${
                      hasOnlyFreeItems
                        ? "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/25"
                        : "bg-blue-600 hover:bg-blue-700 shadow-blue-600/25"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin text-white" />
                        <span>Confirming Order...</span>
                      </>
                    ) : hasOnlyFreeItems ? (
                      <>
                        <Download className="w-4 h-4 text-white" />
                        <span>Claim Instant Free Download ($0.00)</span>
                      </>
                    ) : (
                      <>
                        <CreditCard className="w-4 h-4 text-white" />
                        <span>
                          Proceed to Payment (${verifiedSubtotal.toFixed(2)})
                        </span>
                        <ArrowRight className="w-4 h-4 text-white" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Reassurance Guarantee Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-600 leading-relaxed">
                <strong className="text-slate-900 block mb-0.5">
                  Direct Founder Accountability
                </strong>
                Every system, consultation, and automation is engineered
                directly by Hemanth Ranam. No third-party outsourcing, no hidden
                agencies, and 100% money-back guarantee if we cannot diagnose
                your operational bottlenecks.
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Itemized Order Summary (5 Cols) */}
          <div className="lg:col-span-5 sticky top-28 space-y-4">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden">
              <div className="p-5 bg-slate-900 text-white flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-sm text-white">
                    Order Summary
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    {isUsingCart ? `${totalItems} items in cart` : "1 Selected Offering"}
                  </p>
                </div>
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-white/10 text-white">
                  USD
                </span>
              </div>

              <div className="p-5 space-y-4">
                {/* Cart Items List */}
                {isUsingCart ? (
                  <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
                    {validatedCartItems.map((item: ValidatedCartItem) => (
                      <div
                        key={item.id}
                        className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs flex items-center justify-between gap-3"
                      >
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-slate-900 truncate">
                            {item.name}
                          </h4>
                          <span className="text-[11px] text-slate-500">
                            ${item.verifiedPrice} each
                          </span>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-1.5 shrink-0 bg-white px-2 py-1 rounded-lg border border-slate-200">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-5 h-5 flex items-center justify-center text-slate-500 hover:text-slate-900"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-bold text-xs w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-5 h-5 flex items-center justify-center text-slate-500 hover:text-slate-900"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <div className="text-right shrink-0">
                          <span className="font-black text-slate-900">
                            ${item.lineTotal.toFixed(2)}
                          </span>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="block text-[10px] text-red-500 hover:text-red-700 font-semibold mt-0.5 ml-auto"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : directItem ? (
                  /* Single Item Direct Summary */
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block">
                          {directItem.category}
                        </span>
                        <h4 className="font-bold text-slate-900 text-sm mt-0.5">
                          {directItem.name}
                        </h4>
                      </div>
                      <span className="font-black text-slate-900 text-base">
                        {directItem.priceDisplay}
                      </span>
                    </div>
                    <p className="text-slate-500 text-[11px] leading-relaxed line-clamp-2">
                      {directItem.shortDescription}
                    </p>
                    <div className="flex items-center gap-3 pt-2 border-t border-slate-200 text-[11px] text-slate-600">
                      <div className="flex items-center gap-1 font-semibold">
                        <Clock className="w-3.5 h-3.5 text-blue-600" />
                        <span>{directItem.deliveryTime}</span>
                      </div>
                    </div>
                  </div>
                ) : null}

                {/* Subtotal & Totals breakdown */}
                <div className="pt-3 border-t border-slate-200 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal</span>
                    <span className="font-semibold text-slate-900">
                      ${verifiedSubtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Estimated Taxes &amp; Fees</span>
                    <span className="font-semibold text-slate-900">
                      $0.00 (Included)
                    </span>
                  </div>
                  <div className="pt-2 border-t border-slate-200 flex justify-between items-center text-sm">
                    <span className="font-black text-slate-900">Total Due</span>
                    <span className="font-black text-xl text-blue-600">
                      ${verifiedSubtotal.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Navigation Back */}
                <div className="pt-2 flex items-center justify-between text-xs font-semibold text-slate-500">
                  <Link
                    href={isUsingCart ? "/cart" : "/services"}
                    className="inline-flex items-center gap-1 hover:text-slate-900 transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>{isUsingCart ? "Back to Cart" : "Back to Services"}</span>
                  </Link>

                  {isUsingCart && (
                    <button
                      type="button"
                      onClick={clearCart}
                      className="text-red-500 hover:text-red-700"
                    >
                      Clear Cart
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Quick Guarantees */}
            <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 text-xs text-slate-600 space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Instant automated receipt &amp; CRM order tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Stripe-verified payment links with webhook validation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
            <RefreshCw className="w-5 h-5 animate-spin" />
            <span>Loading Checkout...</span>
          </div>
        </div>
      }
    >
      <CheckoutContent />
    </Suspense>
  );
}
