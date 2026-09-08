"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { SITE_CONFIG } from "@/data/siteData";
import {
  CheckCircle2,
  Download,
  Mail,
  ArrowRight,
  ShieldCheck,
  Clock,
  Calendar,
  CreditCard,
  Layers,
  FileCheck,
} from "lucide-react";

function PaymentSuccessContent() {
  const searchParams = useSearchParams();

  const plan = searchParams.get("plan") || "Custom Service Plan";
  const category = searchParams.get("category") || "Technology Services";
  const amount = searchParams.get("amount") || "$35";
  const currency = searchParams.get("currency") || "USD";
  const billingType = searchParams.get("billing") || "one-time";
  const paymentRef = searchParams.get("ref") || searchParams.get("session_id") || "TX-" + Date.now().toString().slice(-8);
  const email = searchParams.get("email") || "Customer Email";
  const downloadUrl = searchParams.get("downloadUrl") || searchParams.get("download") || "";

  const today = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Top Success Badge */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 rounded-3xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-sm animate-bounce-short">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Payment Verified &amp; Confirmed</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Payment Successful
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium">
          Thank you. Your transaction has been securely processed and recorded.
        </p>
      </div>

      {/* Receipt Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 mb-6">
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Order Receipt
            </span>
            <h2 className="text-base sm:text-lg font-black text-slate-900">
              {plan}
            </h2>
          </div>
          <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 capitalize">
            {billingType}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block flex items-center gap-1">
              <Layers className="w-3 h-3 text-blue-600" />
              Service Category
            </span>
            <span className="font-semibold text-slate-800">{category}</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block flex items-center gap-1">
              <CreditCard className="w-3 h-3 text-emerald-600" />
              Amount Paid
            </span>
            <span className="font-black text-emerald-600 text-sm">
              {amount} {currency}
            </span>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block flex items-center gap-1">
              <FileCheck className="w-3 h-3 text-slate-500" />
              Payment Reference
            </span>
            <span className="font-mono text-slate-700 text-[11px] truncate block">
              {paymentRef}
            </span>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block flex items-center gap-1">
              <Calendar className="w-3 h-3 text-slate-500" />
              Transaction Date
            </span>
            <span className="font-semibold text-slate-800">{today}</span>
          </div>
        </div>

        {/* Download Button (If Downloadable Resource is Attached) */}
        {downloadUrl && (
          <div className="mt-6 pt-6 border-t border-slate-100 text-center">
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download Included Resource</span>
            </a>
          </div>
        )}
      </div>

      {/* What's Next Card */}
      <div className="bg-slate-50 rounded-3xl border border-slate-200/80 p-6 sm:p-8 mb-6">
        <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
          <Clock className="w-4 h-4 text-blue-600" />
          <span>What Happens Next?</span>
        </h3>
        <ol className="space-y-3 text-xs text-slate-600 font-medium">
          <li className="flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center shrink-0 text-[11px]">
              1
            </span>
            <span>
              A confirmation receipt and reference ID have been generated for your records.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center shrink-0 text-[11px]">
              2
            </span>
            <span>
              Our team reviews your selected plan and prepares the initial onboarding schedule or technical deliverables.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center shrink-0 text-[11px]">
              3
            </span>
            <span>
              You will receive direct communication within 24 business hours to initiate the kickoff.
            </span>
          </li>
        </ol>
      </div>

      {/* Need Help / Direct Support CTAs */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 text-center space-y-4">
        <h3 className="text-sm font-black text-slate-900">
          Need Assistance or Have Questions?
        </h3>
        <p className="text-xs text-slate-500 font-normal max-w-md mx-auto">
          We provide direct founder-level communication. Feel free to message on WhatsApp or email anytime.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-xs border border-emerald-200 transition-colors"
          >
            <svg viewBox="0 0 32 32" className="w-4 h-4 fill-emerald-600 shrink-0" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2C8.28 2 2 8.28 2 16c0 2.72.78 5.26 2.13 7.42L2.5 30l6.78-1.58C11.36 29.5 13.62 30 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm8.18 19.82c-.34.96-1.7 1.83-2.77 2.05-.73.15-1.68.27-4.88-1.05-4.1-1.69-6.74-5.87-6.95-6.14-.2-.28-1.66-2.21-1.66-4.22 0-2.01 1.05-3 1.42-3.41.37-.41.82-.52 1.09-.52.27 0 .55.01.79.02.25.02.59-.1.92.7.34.82 1.16 2.84 1.26 3.05.1.21.17.46.03.73-.14.28-.21.46-.42.71-.21.25-.43.55-.62.74-.21.21-.42.44-.18.85.24.41 1.07 1.76 2.3 2.85 1.58 1.41 2.92 1.85 3.33 2.05.41.21.65.17.89-.1.24-.28 1.02-1.19 1.29-1.6.27-.41.55-.34.92-.21.38.14 2.39 1.13 2.8 1.33.41.21.68.31.78.48.1.17.1.99-.24 1.95z" />
            </svg>
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-slate-500" />
            <span>Email Support</span>
          </a>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors shadow-xs"
          >
            <span>Back to Home</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col justify-between">
      <Navbar />
      <main className="pt-24 pb-12">
        <Suspense
          fallback={
            <div className="max-w-md mx-auto p-12 text-center text-xs text-slate-400">
              Loading confirmation details...
            </div>
          }
        >
          <PaymentSuccessContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
