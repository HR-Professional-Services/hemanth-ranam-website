# Hemanth Ranam — Professional Services OS
## 09-STRIPE-COMMERCE / 01_STRIPE_COMMERCE_CATALOGUE_v1.0

| Metadata | Details |
|---|---|
| **Document Title** | Stripe Commerce Configuration & Idempotency Architecture |
| **Document ID** | `HR-STRIPE-COMMERCE-001` |
| **Version** | `v1.0` |
| **Status** | `APPROVED / PRODUCTION ACTIVE` |
| **Owner** | Hemanth Ranam |

---

### 1. Stripe Product & Price Mappings

| Service ID | Service Name | Amount (USD) | Type | Stripe Product ID | Stripe Price ID | Status |
|---|---|---|---|---|---|---|
| **CONS-001** | 30-Min Business Consultation | $25.00 | One-Time | `CONFIG_REQUIRED` | `CONFIG_REQUIRED` | LIVE (Config Gate) |
| **CONS-002** | 60-Min Strategy Session | $49.00 | One-Time | `CONFIG_REQUIRED` | `CONFIG_REQUIRED` | LIVE (Config Gate) |
| **CONS-003** | 90-Min Strategy Consultation | $79.00 | One-Time | `CONFIG_REQUIRED` | `CONFIG_REQUIRED` | LIVE (Config Gate) |
| **CONS-004** | Business Audit & Tool Triage | $99.00 | One-Time | `CONFIG_REQUIRED` | `CONFIG_REQUIRED` | LIVE (Config Gate) |
| **CONS-005** | Business Systems Blueprint | $199.00 | One-Time | `CONFIG_REQUIRED` | `CONFIG_REQUIRED` | LIVE (Config Gate) |
| **WEB-001** | Landing Page | $149.00 | One-Time | `CONFIG_REQUIRED` | `CONFIG_REQUIRED` | LIVE (Config Gate) |
| **WEB-002** | Website Starter | $299.00 | One-Time | `CONFIG_REQUIRED` | `CONFIG_REQUIRED` | LIVE (Config Gate) |
| **WEB-003** | Business Website + Sheets CRM | $499.00 | One-Time | `CONFIG_REQUIRED` | `CONFIG_REQUIRED` | LIVE (Config Gate) |
| **WEB-004** | Website + Automation Engine | $799.00 | One-Time | `CONFIG_REQUIRED` | `CONFIG_REQUIRED` | LIVE (Config Gate) |
| **AUTO-001** | Automation Starter | $149.00 | One-Time | `CONFIG_REQUIRED` | `CONFIG_REQUIRED` | LIVE (Config Gate) |
| **AUTO-002** | Business Workflow Automation | $299.00 | One-Time | `CONFIG_REQUIRED` | `CONFIG_REQUIRED` | LIVE (Config Gate) |
| **AUTO-003** | Operational Automation System| $499.00 | One-Time | `CONFIG_REQUIRED` | `CONFIG_REQUIRED` | LIVE (Config Gate) |
| **SHEET-001** | Smart Business Sheet | $49.00 | One-Time | `CONFIG_REQUIRED` | `CONFIG_REQUIRED` | LIVE (Config Gate) |
| **SHEET-002** | Automated Google Sheet | $99.00 | One-Time | `CONFIG_REQUIRED` | `CONFIG_REQUIRED` | LIVE (Config Gate) |
| **SHEET-003** | Operations Spreadsheet | $199.00 | One-Time | `CONFIG_REQUIRED` | `CONFIG_REQUIRED` | LIVE (Config Gate) |
| **TRD-001** | TradingView Indicator | $49.00 | One-Time | `CONFIG_REQUIRED` | `CONFIG_REQUIRED` | LIVE (Config Gate) |
| **TRD-002** | Pine Script Strategy | $149.00 | One-Time | `CONFIG_REQUIRED` | `CONFIG_REQUIRED` | LIVE (Config Gate) |
| **TRD-003** | MT5 Custom Indicator | $99.00 | One-Time | `CONFIG_REQUIRED` | `CONFIG_REQUIRED` | LIVE (Config Gate) |
| **TRD-004** | MT5 Multi-Symbol Scanner | $149.00 | One-Time | `CONFIG_REQUIRED` | `CONFIG_REQUIRED` | LIVE (Config Gate) |
| **TRD-005** | MT5 Telegram Bridge | $149.00 | One-Time | `CONFIG_REQUIRED` | `CONFIG_REQUIRED` | LIVE (Config Gate) |
| **TRD-006** | MT5 Expert Advisor (EA) | $299.00 | One-Time | `CONFIG_REQUIRED` | `CONFIG_REQUIRED` | LIVE (Config Gate) |
| **TRD-007** | Trading Automation System | $499.00 | One-Time | `CONFIG_REQUIRED` | `CONFIG_REQUIRED` | LIVE (Config Gate) |
| **TRD-008** | Custom Trading Tech | $799.00 | One-Time | `CONFIG_REQUIRED` | `CONFIG_REQUIRED` | LIVE (Config Gate) |
| **CHK-001** | Website Launch Checklist | $5.00 | One-Time | `CONFIG_REQUIRED` | `CONFIG_REQUIRED` | LIVE (Config Gate) |
| **CHK-002** | Master Checklist Bundle | $29.00 | One-Time | `CONFIG_REQUIRED` | `CONFIG_REQUIRED` | LIVE (Config Gate) |
| **SUB-001** | Starter Care | $29.00/mo | Recurring | `CONFIG_REQUIRED` | `CONFIG_REQUIRED` | LIVE (Config Gate) |
| **SUB-002** | Business Care | $79.00/mo | Recurring | `CONFIG_REQUIRED` | `CONFIG_REQUIRED` | LIVE (Config Gate) |
| **SUB-003** | Systems Partner | $149.00/mo| Recurring | `CONFIG_REQUIRED` | `CONFIG_REQUIRED` | LIVE (Config Gate) |
| **SUB-004** | Growth Partner | $299.00/mo| Recurring | `CONFIG_REQUIRED` | `CONFIG_REQUIRED` | LIVE (Config Gate) |

---

### 2. Idempotency Rule
When Stripe delivers a `checkout.session.completed` event:
1. `backend/Code.gs` inspects `Payments` sheet column 12 (`Stripe Reference`).
2. If `session.id` or `payment_intent.id` is found, the script immediately returns:
   ```json
   { "status": "IGNORED_DUPLICATE", "alreadyProcessed": true }
   ```
3. No duplicate folders, records, or emails are created.
