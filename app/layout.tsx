import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_CONFIG } from "@/data/siteData";
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
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "Business Systems Consultant",
    "Business Automation",
    "Business Technology Consultant",
    "Custom Software Development",
    "Web Development",
    "CRM ERP Solutions",
    "Workflow Automation",
    "AI Automation",
    "TradingView Indicator Development",
    "Pine Script Developer",
    "MetaTrader 5 EA Developer",
    "MT5 Indicator Development",
    "Trading Automation",
    "Trading Alerts",
    "Telegram Trading Alerts",
    "Business Process Optimisation",
    "Hemanth Ranam",
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.linkedin }],
  creator: SITE_CONFIG.name,
  metadataBase: new URL("https://hemanthranam.com"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://hemanthranam.com",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: "Hemanth Ranam",
    images: [
      {
        url: "/images/hemanth-ranam-profile.jpg",
        width: 800,
        height: 1000,
        alt: SITE_CONFIG.profileAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
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
        "@id": "https://hemanthranam.com/#person",
        name: "Hemanth Ranam",
        jobTitle: "Technology Entrepreneur & Business Systems Specialist",
        description: SITE_CONFIG.description,
        email: `mailto:${SITE_CONFIG.email}`,
        url: "https://hemanthranam.com",
        sameAs: [
          SITE_CONFIG.linkedin,
          SITE_CONFIG.scalenovaUrl,
        ],
        image: "https://hemanthranam.com/images/hemanth-ranam-profile.jpg",
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
        "@id": "https://hemanthranam.com/#service",
        name: "Hemanth Ranam — Business Systems & Trading Technology",
        url: "https://hemanthranam.com",
        provider: {
          "@id": "https://hemanthranam.com/#person",
        },
        serviceType: [
          "Business Systems Consulting",
          "Business Automation",
          "Custom Software Development",
          "CRM ERP Implementation",
          "TradingView Pine Script Development",
          "MetaTrader 5 EA Development",
          "Trading Alerts & Automation",
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
      <body className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
