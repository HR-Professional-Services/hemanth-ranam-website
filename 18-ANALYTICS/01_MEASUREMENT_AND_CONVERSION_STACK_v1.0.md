# MEASUREMENT, CONVERSION & ANALYTICS STACK
**Document ID:** ANL-STK-001  
**Version:** v1.0  
**Status:** ACTIVE  
**Owner:** Hemanth Ranam  
**Created:** 2026-09-26  
**Updated:** 2026-09-26  

---

## 1. Analytics Architecture & Privacy-First Tracking
The Hemanth Ranam platform implements high-precision, privacy-compliant event tracking designed to capture conversion intent at every stage of the funnel without bogging down page load speed.

---

## 2. Event Dictionary & Tracking Specs

| Event Name | Trigger Condition | Payload Parameters |
| :--- | :--- | :--- |
| `lead_form_submitted` | User submits contact form | `service_category`, `budget_range` |
| `free_resource_downloaded`| User requests free lead magnet | `resource_id`, `resource_name` |
| `pricing_plan_clicked` | User clicks Buy/Subscribe button | `service_id`, `price_usd`, `billing_type` |
| `consultation_booking_started`| User clicks Book Consultation CTA | `consultation_tier`, `source_page` |
| `trading_disclaimer_viewed`| User views trading service page | `service_id`, `disclaimer_version` |

---

## 3. Configuration Status
- **Google Analytics 4 (GA4):** `CONFIG_REQUIRED` (Placeholder reserved in environment; awaiting production Measurement ID).
- **Google Search Console:** `CONFIG_REQUIRED` (Verification via DNS TXT or meta tag once domain DNS is active).
- **Stripe Conversion Tracking:** Configured via server-side webhook logging.
