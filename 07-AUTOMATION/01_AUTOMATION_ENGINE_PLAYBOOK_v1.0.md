# Hemanth Ranam — Professional Services OS
## 07-AUTOMATION / 01_AUTOMATION_ENGINE_PLAYBOOK_v1.0

| Metadata | Details |
|---|---|
| **Document Title** | Automation Engine Playbook & Webhook Recovery SOP |
| **Document ID** | `HR-AUTO-PLAYBOOK-001` |
| **Version** | `v1.0` |
| **Status** | `APPROVED / PRODUCTION ACTIVE` |
| **Owner** | Hemanth Ranam |
| **Engine Core** | Google Apps Script (`backend/Code.gs` v2.6.0) |

---

### The 18 Automated Workflows

| # | Automation Name | Trigger Event | Input Data | Primary Logic | Output & Deliverables | Failure Recovery |
|---|---|---|---|---|---|---|
| **01** | Lead Capture | Web Form (`/api/contact`) | Name, Email, Service, Message | Sanitizes inputs, checks honeypot | Appends row to `Enquiries` | Retry fetch, fallback to email |
| **02** | Lead Notification | Row added to `Enquiries` | Lead ID, Contact Details | Formats HTML alert | Email sent to `hemanth.ranam@gmail.com` | Log error, notify admin |
| **03** | Lead Acknowledgement | Row added to `Enquiries` | Customer Email, Name | Injects Lead ID & 24h SLA | Branded customer acknowledgement | Catch quota error |
| **04** | Free Magnet Delivery | Modal submit on `/resources`| Customer Email, Resource Code | Captures lead, fetches Drive URL | Auto-dispatch email with Drive link | Direct redirect on page |
| **05** | Stripe Webhook Acknowledgment | Stripe checkout completed | Webhook payload, Stripe signature | Verifies event signature | Returns HTTP 200 (<500ms) | Stripe auto-retries |
| **06** | Payment Recording | Stripe event verified | Session ID, Amount, Email | Deduplicates via `stripeRef` | Row added to `Payments` (PENDING) | Idempotent check prevents dups |
| **07** | Client ID Generation | Queue Worker | Current Year + Sequence | `CLI-YYYY-XXXX` format | Deterministic Client ID | Monotonic sequence lock |
| **08** | Order ID Generation | Queue Worker | Current Year + Sequence | `ORD-YYYY-XXXX` format | Deterministic Order ID | Monotonic sequence lock |
| **09** | Drive Folder Creation | Queue Worker | Client ID, Company Name | Targets `13 - CLIENT MANAGEMENT` | `CLI-YYYY-XXXX - [Client]` created | Queue retries up to 3 times |
| **10** | Subfolder Provisioning| Folder created | Parent Folder ID | Generates subfolders 00 to 05 | 6 standard client subfolders | Re-run `processProvisioningQueue` |
| **11** | Permission Granting | Subfolders created | Google Delivery Email | Calls `addViewer(googleEmail)` | Private client access granted | Fallback email if non-Google |
| **12** | CRM Client Sync | Workspace ready | Client ID, Folder URL | Logs client details & links | Row added to `CRM_Clients` | Log sheet error |
| **13** | Delivery Email Dispatch| Client logged | Billing & Google Email | Merges workspace URL & SOP links | Branded HTML workspace welcome email | Fallback manual send |
| **14** | Requirements Reminder | T+48 Hours post-order | Order ID, Client Email | Checks intake submission status | Auto-reminder email for credentials | Admin dashboard flag |
| **15** | Consultation Credit | Consultation booked | Order ID, Amount | Issues 30-day coupon code | 100% fee credited toward service | Expiry date validation |
| **16** | Monthly Retainer Sync | Stripe Subscription renewal | Stripe Invoice ID | Verifies payment status | Updates `CRM_Clients` SLA expiry | Grace period notice on fail |
| **17** | Retainer Cancellation | Stripe Subscription deleted | Customer ID | Cancels future recurring access | Marks client `Inactive` at end of term | Manual review gate |
| **18** | Queue Failure Recovery | Automated 15-min trigger | `Payments` Sheet (PENDING rows)| Scans pending/failed provisions | Auto-retries provisioning queue | Alerts admin after 3 fails |

---

### Non-Google Delivery Email Fallback Flow
```
Client checks out with corporate email (e.g. alex@acmecorp.com)
  │
  ▼
Code.gs attempts: clientFolder.addViewer("alex@acmecorp.com")
  │
  ├── SUCCESS (Google Workspace Domain): Access active immediately.
  │
  └── EXCEPTION (Standard POP/IMAP or non-Google domain):
        │
        ├── Exception caught gracefully (Order NOT failed)
        ├── Status recorded: "Non-Google Email Alert: Direct Grant Failed"
        └── Email dispatched with 1-click fallback instructions:
            "Reply to this email with your preferred Google/Gmail account for instant access."
```
