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
    "Hemanth Ranam",
    "Business Systems Architect",
    "AI Automation",
    "Custom Software Development",
    "Trading Technology",
    "Pine Script Developer",
    "MetaTrader 5 Expert Advisors",
    "ScaleNova",
    "ERPNext Specialist",
    "Frappe Framework Developer",
    "Technology Entrepreneur",
    "United Kingdom",
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
        url: "/images/hemanth-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Hemanth Ranam - Business Systems, Technology & Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: ["/images/hemanth-portrait.jpg"],
    creator: "@hemanthranam",
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
        jobTitle: "Technology Entrepreneur & Business Systems Architect",
        description: SITE_CONFIG.description,
        email: `mailto:${SITE_CONFIG.email}`,
        url: "https://hemanthranam.com",
        sameAs: [
          SITE_CONFIG.linkedin,
          SITE_CONFIG.scalenovaUrl,
        ],
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
        worksFor: {
          "@type": "Organization",
          name: "ScaleNova Pvt Ltd",
          url: SITE_CONFIG.scalenovaUrl,
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://hemanthranam.com/#service",
        name: "Hemanth Ranam Technology & Business Systems Consulting",
        url: "https://hemanthranam.com",
        provider: {
          "@id": "https://hemanthranam.com/#person",
        },
        areaServed: "United Kingdom & Worldwide",
        serviceType: [
          "Business Systems Architecture",
          "ERP & CRM Implementation",
          "AI & Workflow Automation",
          "Custom Software Engineering",
          "Trading Technology Development",
          "Pine Script & MT5 Automation",
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
