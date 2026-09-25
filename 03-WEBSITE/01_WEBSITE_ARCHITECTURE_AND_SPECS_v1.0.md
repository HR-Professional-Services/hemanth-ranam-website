# WEBSITE ARCHITECTURE & TECHNICAL SPECIFICATION
**Document ID:** WEB-SPEC-001  
**Version:** v1.0  
**Status:** ACTIVE  
**Owner:** Hemanth Ranam  
**Created:** 2026-09-26  
**Updated:** 2026-09-26  

---

## 1. Visual Design Principles & Color Palette
- **Background Architecture:** 100% Pure White (`#FFFFFF`, `bg-white`) across primary layout, ensuring readability and enterprise credibility.
- **Typography & Hierarchy:**
  - Primary text: High-contrast rich charcoal/black (`#111827`, `text-slate-900` / `text-gray-950`).
  - Secondary text: Accessible slate grey (`#4B5563`, `text-slate-600` / `text-gray-600`), strictly meeting WCAG AA 4.5:1 contrast ratios.
- **Accent System:** Premium Royal Blue (`#2563EB`, `bg-blue-600`) and Deep Navy (`#1E3A8A`, `bg-blue-900`) for badges, links, borders, and interactive states.
- **CRITICAL CONTRAST MANDATE:**
  - **Zero black text on blue banners:** Any section, button, or badge utilizing a blue background (`bg-blue-600`, `bg-blue-900`, `from-blue-600 to-indigo-700`) MUST strictly use pure white text (`text-white`) with high-contrast subtitles (`text-blue-100` / `text-blue-50`).

---

## 2. Navigation Architecture

### Desktop Header
`Logo (Hemanth Ranam)` → `Services` → `Business Systems` → `Automation` → `Digital Products` → `Trading Tech` → `Monthly Care` → `Free Resources` → `[Book Consultation CTA]`

### Mobile Navigation
- Full-screen slide-down drawer with 48px+ tap targets.
- Categorized grouping: Core Services, Systems & Automation, Retainers, and Resources.
- Direct quick-action buttons for WhatsApp and Direct Booking.

---

## 3. Indexable Static Routes (59+ Verified Pages)
1. `/` (Homepage OS Hub)
2. `/services` (Central Service Directory)
3. `/services/consulting` (Strategic Advisory & Audits)
4. `/services/websites` (Website & Landing Page Engineering)
5. `/services/automation` (Workflow & Webhook Automation)
6. `/services/google-sheets` (Spreadsheet Architecture)
7. `/services/apps-script` (Google Apps Script Engineering)
8. `/services/frappe` (Frappe Framework Development)
9. `/services/erpnext` (ERPNext Implementation & Customization)
10. `/services/trading-technology` (TradingView & MT5 Tools)
11. `/products` (Digital Products Hub)
12. `/products/templates` (Ready-to-Use Spreadsheet Templates)
13. `/products/checklists` (Operations & Launch Checklists)
14. `/products/training` (Self-Paced Implementation Guides)
15. `/products/automation-kits` (Turnkey Apps Script & Webhook Kits)
16. `/products/dashboards` (Visual Executive KPI Dashboards)
17. `/products/business-os` (All-in-One Business Operating System)
18. `/business-systems` (Interactive Systems Overview)
19. `/business-systems/crm` (CRM & Pipeline System)
20. `/business-systems/lead-management` (Lead Intake & Scoring)
21. `/business-systems/sales-management` (Sales Quotation & Tracking)
22. `/business-systems/client-management` (Client Onboarding & Retention)
23. `/business-systems/business-operations` (Operations & Task Flow)
24. `/business-systems/business-automation` (Automation Engine)
25. `/business-systems/business-os` (Master Business OS)
26. `/resources` (Free Resources Hub)
27. `/resources/business-audit` (Free Business Audit Workbook)
28. `/resources/free-crm` (Free Google Sheets CRM)
29. `/resources/free-lead-tracker` (Free Lead Tracker)
30. `/resources/free-sales-tracker` (Free Sales Funnel Tracker)
31. `/resources/free-cash-flow` (Free Cash Flow Model)
32. `/resources/website-launch-checklist` (Free Website Launch Checklist)
33. `/resources/automation-checklist` (Free Automation Audit Checklist)
34. `/resources/seo-checklist` (Free Technical SEO Checklist)
35. `/resources/ai-business-guide` (Free AI Business Implementation Guide)
36. `/resources/business-operations` (Free Business Operations Template)
37. `/resources/business-systems` (Free Business Systems Assessment)
38. `/resources/google-sheets-guide` (Free Google Sheets Master Guide)
39. `/monthly` (Monthly Retainer Packages)
40. `/monthly/starter-care` ($29/mo Starter Care)
41. `/monthly/business-care` ($79/mo Business Care)
42. `/monthly/systems-partner` ($149/mo Systems Partner)
43. `/monthly/growth-partner` ($299/mo Growth Partner)
44. `/about` (Founder Background & Credentials)
45. `/contact` (Direct Discovery & Intake Form)
46. `/faq` (Comprehensive Searchable Knowledge Hub)
47. `/privacy` (Privacy Policy)
48. `/terms` (Terms of Service)
49. `/refund-policy` (Commercial Refund & Guarantee Policy)
50. `/disclaimer` (Educational & Analytical Tool Disclaimer)

---

## 4. Performance & Responsive Verification Matrix
- Mobile (375px, 390px, 430px): 0 horizontal overflow, sticky navigation with blur backdrop, single-column stacked pricing cards.
- Tablet (768px, 820px, 1024px): 2-column responsive grid, adaptive drawer layout.
- Desktop (1280px, 1440px+): 3-to-4 column bento grids, balanced negative space, fixed width containers (`max-w-7xl`).
