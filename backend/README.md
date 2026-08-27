# Hemanth Ranam CRM & Automation Backend Guide

This folder contains the complete Google Apps Script CRM and automation engine (`Code.gs`) that powers:
1. **Website Contact Form Leads** (with automated user confirmation & admin alert emails)
2. **Newsletter Subscriptions** (with automated welcome emails)
3. **Lead-to-Client Conversions** (idempotent 1-click conversion)
4. **Automated Follow-up Sequences**
5. **Full AppSheet CRM Compatibility**

---

## 1. Quick Setup in Google Sheets

1. Go to [Google Sheets](https://sheets.new) and create a new Spreadsheet named **`Hemanth Ranam CRM`**.
2. In the top menu, click **Extensions → Apps Script**.
3. Replace any code in `Code.gs` with the code in `backend/Code.gs`.
4. Click **Save** (💾).

---

## 2. Initialize Spreadsheet Tabs & Columns

1. In the Apps Script editor toolbar, select the function **`initializeSpreadsheet`** and click **Run**.
2. Review your Google Sheet. It will automatically create 4 structured tabs with bold headers:
   - **`Leads`**: `Lead ID`, `Created At`, `Updated At`, `Full Name`, `Email`, `WhatsApp Country Code`, `WhatsApp Number`, `Normalized WhatsApp Number`, `Company`, `Service Interested`, `Message`, `Source`, `Status`, `Assigned To`, `Follow-up Date`, `Last Contact Date`, `Notes`.
   - **`Clients`**: `Client ID`, `Linked Lead ID`, `Client Name`, `Email`, `WhatsApp`, `Company`, `Services`, `Status`, `Created At`, `Updated At`, `Notes`.
   - **`Newsletter Subscribers`**: `Subscriber ID`, `Email`, `Name`, `Source`, `Subscription Date`, `Status`, `Unsubscribe Date`, `Notes`.
   - **`Activities`**: `Activity ID`, `Entity Type`, `Entity ID`, `Action`, `Timestamp`, `Details`.

---

## 3. Deploy as a Web App

1. Click **Deploy → New deployment**.
2. Select type: **Web app**.
3. Configuration:
   - **Description**: `Hemanth Ranam CRM Webhook v2`
   - **Execute as**: `Me (hemanth.ranam@gmail.com)`
   - **Who has access**: `Anyone`
4. Click **Deploy** and grant Google permissions.
5. Copy the generated **Web App URL** (e.g. `https://script.google.com/macros/s/.../exec`).

---

## 4. Connect to Website / Cloudflare Worker

Add the Web App URL to your website's environment variables:
```env
GOOGLE_APPS_SCRIPT_WEBHOOK_URL="https://script.google.com/macros/s/.../exec"
APPS_SCRIPT_API_KEY="HR_SECURE_API_SECRET_2026"
```

---

## 5. Setting Up Scheduled Follow-Up Trigger

To enable automated follow-up emails on Day X:
1. In Apps Script, click the **Triggers** icon (alarm clock) in the left sidebar.
2. Click **+ Add Trigger**.
3. Choose which function to run: `handleFollowUpSweep`.
4. Select event source: `Time-driven`.
5. Select type of time based trigger: `Day timer` (e.g., 9am to 10am daily).
6. Click **Save**.

---

## 6. Connecting to AppSheet for Mobile & Desktop CRM

1. Go to [AppSheet](https://www.appsheet.com/) and sign in with your Google account.
2. Click **Create → App → Start with existing data**.
3. Select your Google Sheet **`Hemanth Ranam CRM`**.
4. AppSheet will automatically detect the **`Leads`**, **`Clients`**, and **`Newsletter Subscribers`** tables with all columns and relationships ready for mobile and desktop lead management!
