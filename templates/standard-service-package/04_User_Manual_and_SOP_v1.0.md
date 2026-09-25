# [SERVICE_ID]: Standard Operating Procedure (SOP) & User Manual
**Document Type**: Operational User Manual  
**Version**: 1.0  
**Target Audience**: Client Team Members & Operations Staff  
**Location**: `04 - Training & SOPs`  

---

## 1. System Overview & Core Workflow
This guide outlines the day-to-day operation of your new system. The architecture is engineered so your team spends zero time on manual tracking or formatting.

```
                      DAILY OPERATING LIFECYCLE
                                  │
    1. INCOMING EVENT ───────────►│ Form Submission / Trade Trigger / File Upload
                                  │
    2. AUTOMATED CAPTURE ────────►│ Webhook validates & writes row to Sheet/DB
                                  │
    3. INSTANT NOTIFICATION ─────►│ Manager & Client receive formatted alerts
                                  │
    4. TEAM ACTION ──────────────►│ Update status in dropdown (Qualified, In Progress, Closed)
                                  │
    5. REPORTING ────────────────►│ Visual KPI dashboard updates in real time
```

---

## 2. Daily Step-by-Step Instructions

### Step 1: Accessing Your Master Workspace
1. Open Google Drive using your authorized Google account.
2. Navigate to **Shared with me** or your personal workspace link.
3. Your core working files are located in `03 - Deliverables`.

### Step 2: Managing Enquiries / Leads
1. When a new enquiry arrives, an automated email notification is sent to your inbox.
2. Open your **Master Operating Spreadsheet**.
3. View the new lead row with its unique reference ID (`HRPS-YYYYMMDD-XXXX`).
4. To update status, click the **Status** column dropdown:
   - `New` ➔ `Contacted` ➔ `Qualified` ➔ `Converted` / `Closed`

### Step 3: Generating Client Documents (If applicable)
1. In the designated sheet, enter the client reference ID.
2. Select **HR Services Engine ➔ Generate PDF** from the top custom menu.
3. The script compiles the document and saves it directly to your `03 - Deliverables` folder.

---

## 3. Best Practices & Routine Maintenance
* **Do NOT delete header rows**: Row 1 contains column mapping for automations.
* **Do NOT rename existing sheet tabs**: Script functions reference tabs by exact name.
* **Keep your Google storage within quota**: Regularly empty your Google Drive trash bin.

---
*Authorized by Systems Architect*: **Hemanth Ranam**
