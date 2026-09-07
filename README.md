# HR Professional Services — Web Platform & CRM Engine

Production web platform and integrated lead engine for **HR Professional Services** (overseen by Hemanth Ranam). Built with Next.js App Router, Tailwind CSS, TypeScript, and powered by an automated Google Sheets CRM backend adapted from the **ScaleNova** systems reference architecture.

---

## 1. Project Overview

HR Professional Services provides practical business systems, workflow automation, custom software, HR management, recruitment systems, and rule-based trading technology for founders and growing businesses.

### Core Architectural Pillars
- **ScaleNova UX Adaptation**: Sharp, scannable value propositions, visual operational bento stream, 5-step process section (`How It Works`), verified credentials & zero-fabrication trust section (`Trust & Accountability`), and clear action-oriented CTAs.
- **Mobile-First Responsiveness**: Precision layouts tested across 320px, 375px, 390px, 414px, 768px, 1024px, and 1440px+ viewports with an accessible slide-out mobile drawer and touch-friendly interactive targets (44px+).
- **Automated Lead Engine**: Real-time enquiry submission with client-side validation, formula-injection sanitization, honeypot spam protection, `HRPS-YYYYMMDD-XXXX` unique reference generation, and in-place feedback screens.
- **Integrated Google Sheets CRM**: Container-bound or standalone Google Apps Script engine logging enquiries across 12 canonical columns, triggering immediate management alerts, and sending branded customer confirmations.

---

## 2. Technology Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 + Vanilla CSS Design Tokens
- **3D Graphics**: Three.js WebGL (Interactive Geometric Core with reduced-motion support)
- **Icons**: Lucide React
- **Backend / CRM**: Google Apps Script (`backend/Code.gs`) + Google Sheets
- **Hosting Targets**: Cloudflare Pages / Vercel / Node.js Standalone

---

## 3. Directory Structure

```
├── app/
│   ├── api/
│   │   ├── contact/route.ts       # Lead sanitization, ID generation & Apps Script proxy
│   │   └── newsletter/route.ts    # Newsletter subscription API
│   ├── blogs/                     # Technical insights & article routes
│   ├── privacy/page.tsx           # Privacy Policy
│   ├── terms/page.tsx             # Terms & Conditions
│   ├── refund/page.tsx            # Refund Policy
│   ├── globals.css                # Tailwind CSS v4 styling & design variables
│   ├── layout.tsx                 # Root layout, SEO metadata, JSON-LD Schema
│   └── page.tsx                   # Main composite landing page
├── backend/
│   ├── Code.gs                    # Google Apps Script CRM & Dual-Email Dispatcher
│   └── README.md                  # Comprehensive Google Sheets setup guide
├── components/
│   ├── 3d/
│   │   └── HeroScene3D.tsx        # Three.js 3D hero visualization
│   ├── sections/
│   │   ├── Hero.tsx               # High-contrast hero with operational flow card
│   │   ├── AboutSection.tsx       # Verified founder bio & executive credentials
│   │   ├── ServicesSection.tsx    # ScaleNova-style visual cards & delivery flow
│   │   ├── HowItWorksSection.tsx  # 5-step visual delivery process
│   │   ├── TrustSection.tsx       # Verified commitments & zero-fabrication metrics
│   │   ├── TechStackSection.tsx   # Verified production languages & platforms
│   │   ├── TradingTechSection.tsx # TradingView, Pine Script & MT5 tools
│   │   ├── PricingSection.tsx     # Transparent fixed-scope packages
│   │   ├── ContactSection.tsx     # Working lead capture form with status states
│   │   └── Footer.tsx             # 4-column structured footer with direct channels
│   ├── ui/                        # Modals, phone input, buttons, cookie banner
├── data/
│   ├── siteData.ts                # Site configuration, navigation, services, process
│   └── blogsData.ts               # Blog posts & technical articles
├── public/                        # Optimized images, vector icons, favicon
└── wrangler.jsonc                 # Cloudflare Pages deployment configuration
```

---

## 4. Google Sheets CRM Integration

The platform connects to Google Sheets via a lightweight Google Apps Script endpoint (`backend/Code.gs`).

### Canonical 12-Column Schema
All form submissions are automatically structured into the **`Enquiries`** sheet:

1. **Timestamp** (`yyyy-MM-dd HH:mm:ss`)
2. **Lead ID** (`HRPS-YYYYMMDD-XXXX`)
3. **Name**
4. **Email**
5. **Phone**
6. **Company**
7. **Service**
8. **Message**
9. **Source**
10. **Page**
11. **Status** (`New` by default)
12. **Notes**

### Dual Email Automation
- **Management Notification**: Dispatched to `hemanth.ranam@gmail.com` with full client and project breakdown.
- **Customer Acknowledgement**: Dispatched to the client with branded inline CSS, Lead ID reference, and expected 24-hour turnaround time.

For step-by-step instructions on deploying the Apps Script Web App, see [backend/README.md](backend/README.md).

---

## 5. Local Development & Setup

### Prerequisites
- Node.js 18+ or 20+
- npm 9+

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables Configuration
Create a `.env.local` file in the root directory:
```env
# Optional: Connected Google Apps Script Web App URL
GOOGLE_APPS_SCRIPT_WEBHOOK_URL="https://script.google.com/macros/s/AKfycbx.../exec"
APPS_SCRIPT_API_KEY="HR_SECURE_API_SECRET_2026"
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

### 4. Build Production Bundle
```bash
npm run build
npm run start
```

---

## 6. Verification & Quality Assurance

### Automated Testing Matrix
- **TypeScript & App Router**: Validated with `npm run build` (0 errors, full static page prerendering).
- **Formula Injection Security**: Inputs beginning with `=`, `+`, `-`, or `@` are automatically escaped with leading single quotes.
- **Bot Mitigation**: Invisible honeypot field (`website_hp`) quietly rejects automated spambots without disturbing real users.
- **Mobile Breakpoint Audit**: Checked across 320px, 375px, 390px, 414px, 768px, 1024px, and 1440px+ viewports with zero horizontal overflow.

---

## 7. Direct Support & Communication

- **Founder & Architect**: Hemanth Ranam
- **Direct Management Email**: [hemanth.ranam@gmail.com](mailto:hemanth.ranam@gmail.com)
- **Direct WhatsApp Channel**: [+91 76758 15245](https://wa.me/917675815245)
- **LinkedIn**: [https://www.linkedin.com/in/hemanth-ranam-41b542253](https://www.linkedin.com/in/hemanth-ranam-41b542253)
