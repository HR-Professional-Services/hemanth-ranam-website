# HR Professional Services — Google Sheets CRM & Apps Script Engine

This document provides complete instructions for configuring and deploying the **Google Apps Script backend** (`backend/Code.gs`) that powers the lead capture, Google Sheets CRM synchronization, and automated dual-email dispatch for **HR Professional Services**.

---

## 1. Architectural Overview
- **Frontend Form**: Next.js responsive client form with client-side validation and invisible honeypot anti-spam protection.
- **API Proxy**: `/api/contact` route sanitizing against formula injection, assigning a unique Lead ID (`HRPS-YYYYMMDD-XXXX`), and forwarding to the deployed Apps Script Web App.
- **Backend Storage**: Google Sheets tab named **`Enquiries`** storing submissions across the exact 12 canonical columns.
- **Dual Email Notification**:
  1. **Management Alert**: Dispatched immediately to `hemanth.ranam@gmail.com` with lead breakdown.
  2. **Customer Acknowledgement**: Dispatched immediately to the customer with branded inline CSS, Lead ID reference, and expected 24-hour turnaround time.

---

## 2. Google Sheet Structure

Create a Google Sheet (e.g. named **`HR Professional Services CRM`**) with a tab named **`Enquiries`**. The header row must contain exactly these 12 columns:

| Column # | Column Header | Description | Example Value |
|---|---|---|---|
| **A** | `Timestamp` | Submission date & time (GMT/IST) | `2026-09-08 10:30:15` |
| **B** | `Lead ID` | Unique permanent reference ID | `HRPS-20260908-4821` |
| **C** | `Name` | Customer full name | `Sarah Jenkins` |
| **D** | `Email` | Customer contact email | `sarah.jenkins@company.com` |
| **E** | `Phone` | International phone / WhatsApp | `+44 7700 900123` |
| **F** | `Company` | Client organization / company | `Jenkins Logistics Ltd` |
| **G** | `Service` | Requested service category | `Recruitment & Talent Search` |
| **H** | `Message` | Project requirements / brief | `Looking to hire 3 senior full-stack devs...` |
| **I** | `Source` | Source channel | `Website Contact Form` |
| **J** | `Page` | Relative path where submitted | `/#contact` |
| **K** | `Status` | Operational CRM status | `New` *(Default)* |
| **L** | `Notes` | Internal team notes & audit log | *(Updated by team)* |

### Status Lifecycle
The `Status` column defaults to **`New`**. Team members can update this cell in Google Sheets to:
- `New` (Fresh submission)
- `Contacted` (Initial outreach sent)
- `Qualified` (Requirements validated)
- `In Progress` (Proposal/contract in drafting)
- `Converted` (Client onboarded)
- `Closed` (Completed or inactive)
- `Not Interested` (Unqualified/withdrawn)

---

## 3. Step-by-Step Google Apps Script Setup

### Step 1: Open Apps Script Editor
1. In your Google Sheet, click **Extensions** → **Apps Script**.
2. Clear any placeholder code in `Code.gs`.
3. Copy the entire contents of [`backend/Code.gs`](./Code.gs) and paste it into the editor.
4. Click **Save Project** (💾 icon or `Cmd + S` / `Ctrl + S`).

### Step 2: Initialize Sheet Schema Automatically
1. In the Apps Script toolbar, select the function **`initializeSheet`** from the function dropdown.
2. Click **Run**.
3. When prompted, click **Review Permissions** and grant access to your Google account.
4. Check your Google Sheet: the **`Enquiries`** tab will now be automatically generated with styled dark headers and pre-formatted column widths.

### Step 3: Deploy as Web App
1. Click the blue **Deploy** button in the top right → **New deployment**.
2. Click the gear icon (⚙️) next to *Select type* and select **Web app**.
3. Configure the deployment settings:
   - **Description**: `HR Professional Services Production CRM v2.5`
   - **Execute as**: `Me (your-email@gmail.com)`
   - **Who has access**: `Anyone` *(Crucial: allows the website form to submit without requiring Google sign-in)*.
4. Click **Deploy**.
5. Copy the generated **Web App URL** (format: `https://script.google.com/macros/s/.../exec`).

---

## 4. Website Configuration

Add the Web App URL to your website's `.env.local` or hosting provider environment variables (e.g. Cloudflare Pages, Vercel):

```env
GOOGLE_APPS_SCRIPT_WEBHOOK_URL="https://script.google.com/macros/s/AKfycbx.../exec"
APPS_SCRIPT_API_KEY="HR_SECURE_API_SECRET_2026"
```

---

## 5. Testing & Validation

### Testing via cURL
Run the following terminal command to verify end-to-end processing:

```bash
curl -X POST "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec" \
  -H "Content-Type: application/json" \
  -d '{
    "action": "createLead",
    "name": "Alex Mercer",
    "email": "alex.mercer@example.com",
    "phone": "+44 7911 123456",
    "company": "Mercer Systems",
    "service": "Business Systems Consulting",
    "message": "Testing end-to-end Google Sheets CRM integration.",
    "source": "CLI Test",
    "page": "/test"
  }'
```

**Expected Response**:
```json
{
  "success": true,
  "message": "Enquiry submitted and recorded successfully.",
  "data": {
    "leadId": "HRPS-20260908-XXXX",
    "status": "New",
    "timestamp": "2026-09-08 10:35:00"
  }
}
```

### Verification Checklist
- [ ] New row appeared in the `Enquiries` tab with all 12 columns correctly populated.
- [ ] Status is set to `New`.
- [ ] Management email received at `hemanth.ranam@gmail.com`.
- [ ] Customer confirmation email received at `alex.mercer@example.com`.
- [ ] Formula injection strings (e.g. `=1+1`) are escaped with a leading apostrophe (`'`).
