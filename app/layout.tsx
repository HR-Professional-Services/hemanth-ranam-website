import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_CONFIG } from "@/data/siteData";
import { CookieConsent } from "@/components/ui/CookieConsent";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Hemanth Ranam | Business OS, Enterprise Systems & Technology Platform",
    template: "%s | Hemanth Ranam",
  },
  description:
    "Hemanth Ranam — Founder & Systems Architect. We design, configure, and support connected Business OS solutions using ERPNext, CRM, automation, and modern web technology.",
  keywords: [
    "Hemanth Ranam",
    "Business OS",
    "Business Systems",
    "Systems Architect",
    "ERPNext",
    "Frappe Framework",
    "CRM OS",
    "HRMS OS",
    "Finance OS",
    "Sales OS",
    "Website Growth OS",
    "AI Automation",
    "Managed Business OS",
    "MetaTrader 5 Developer",
    "TradingView Indicators",
    "Pine Script Developer",
    "Trading Technology",
    "Digital Transformation",
  ],
  authors: [{ name: "Hemanth Ranam", url: "https://www.linkedin.com/in/hemanth-ranam-41b542253" }],
  creator: "Hemanth Ranam",
  metadataBase: new URL("https://app.ranam.workers.dev"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://app.ranam.workers.dev",
    title: "Hemanth Ranam | Business OS & Enterprise Technology Platform",
    description:
      "One connected system for your customers, people, operations and growth. We design, configure and support practical Business OS solutions using ERPNext, CRM, automation and modern web technology.",
    siteName: "Hemanth Ranam — Business OS",
    images: [
      {
        url: "/images/hemanth-ranam-profile.jpg",
        width: 800,
        height: 1000,
        alt: "Hemanth Ranam — Founder & Systems Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hemanth Ranam | Business OS & Enterprise Technology Platform",
    description:
      "One connected system for your customers, people, operations and growth. We design, configure and support practical Business OS solutions.",
    images: ["/images/hemanth-ranam-profile.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/logo.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://app.ranam.workers.dev/#person",
        name: "Hemanth Ranam",
        jobTitle: "Founder & Systems Architect",
        description:
          "Systems Architect & Technology Founder specializing in Business Operating Systems (Business OS), ERPNext, CRM, Workflow Automation, and Trading Technology.",
        email: "hemanth.ranam@gmail.com",
        url: "https://app.ranam.workers.dev",
        sameAs: [
          "https://www.linkedin.com/in/hemanth-ranam-41b542253",
          "https://github.com/hemanthranam",
        ],
        image: "https://app.ranam.workers.dev/images/hemanth-ranam-profile.jpg",
        alumniOf: [
          {
            "@type": "EducationalOrganization",
            name: "University of South Wales",
            description: "MBA (Master of Business Administration)",
          },
          {
            "@type": "EducationalOrganization",
            name: "Chartered Management Institute (CMI)",
            description: "Level 7 Strategic Management & Leadership",
          },
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://app.ranam.workers.dev/#service",
        name: "Hemanth Ranam — Business OS & Technology Platform",
        url: "https://app.ranam.workers.dev",
        provider: {
          "@id": "https://app.ranam.workers.dev/#person",
        },
        serviceType: [
          "Business OS Implementation",
          "Frappe & ERPNext Systems Configuration",
          "CRM OS & Pipeline Automation",
          "HRMS OS & Workforce Systems",
          "Finance OS & Automated Invoicing",
          "Website Growth OS",
          "Workflow & AI Automation",
          "TradingView & MetaTrader 5 Trading Technology",
        ],
      },
    ],
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-600/20 selection:text-blue-900">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
