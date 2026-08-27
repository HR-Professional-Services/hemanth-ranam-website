import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Shield, ArrowLeft, Lock, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Hemanth Ranam",
  description: "Privacy Policy and data protection practices for Hemanth Ranam business systems and technology services.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white flex flex-col justify-between">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Header */}
          <div className="border-b border-slate-100 pb-6 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
              <Shield className="w-3.5 h-3.5" />
              <span>Data Protection & Privacy</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-500">
              Last updated: August 27, 2026 • Governed under UK GDPR & Data Protection Act 2018
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed space-y-6 text-slate-700">
            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">1. Overview</h2>
              <p>
                Hemanth Ranam ("we", "us", or "our") operates this website and provides custom software development, business systems consulting, workflow automation, and trading technology tools. We respect your privacy and are committed to protecting any personal information you share with us.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">2. Information We Collect</h2>
              <p>When you interact with our website or submit project enquiries, we may collect:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Contact Information:</strong> Full name, business email address, company name, and WhatsApp phone number with international country dialing codes.</li>
                <li><strong>Project Specifications:</strong> Details, objectives, requirements, and technical context submitted through our contact and consultation forms.</li>
                <li><strong>Technical & Analytics Data:</strong> IP address, browser type, device information, and non-identifying usage statistics collected via privacy-conscious analytics.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">3. Purpose and Legal Basis for Processing</h2>
              <p>We process your personal information exclusively for:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Responding to your direct project inquiries and preparing service proposals.</li>
                <li>Fulfilling contracted engineering deliverables, custom software, and technical support.</li>
                <li>Delivering requested email newsletters and system insights (with one-click unsubscribe).</li>
                <li>Ensuring server security, fraud prevention, and uptime monitoring.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">4. Third-Party Processors & Data Security</h2>
              <p>
                We do not sell, rent, or trade your personal data to third parties. We store and process data using enterprise-grade cloud providers with encryption at rest and in transit:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Cloudflare:</strong> Edge hosting, CDN caching, and DDoS mitigation.</li>
                <li><strong>Google Workspace & Apps Script:</strong> Secure CRM logging and transactional notification handling.</li>
                <li><strong>Transactional Email Services:</strong> Encrypted email transmission for enquiry confirmations.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">5. Data Retention & Your Rights</h2>
              <p>
                We retain enquiry records for as long as necessary to facilitate ongoing business relationships or comply with statutory accounting requirements. Under UK GDPR and international privacy frameworks, you have the right to request access, correction, or permanent erasure of your personal data at any time by emailing <strong>hemanth.ranam@gmail.com</strong>.
              </p>
            </section>
          </div>

          <div className="pt-6 border-t border-slate-100">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
