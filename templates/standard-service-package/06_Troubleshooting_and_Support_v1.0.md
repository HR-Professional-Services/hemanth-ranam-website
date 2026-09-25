# [SERVICE_ID]: Troubleshooting, Quotas & Support Guide
**Document Type**: Technical Troubleshooting & Support SLA  
**Version**: 1.0  
**Target Location**: `04 - Training & SOPs`  

---

## 1. Quick Self-Diagnostic Triage
If an automated workflow does not behave as expected, consult this checklist before opening a support ticket:

```
┌─────────────────────────────────┬─────────────────────────────────┬─────────────────────────────────┐
│              SYMPTOM            │          PROBABLE CAUSE         │         RECOMMENDED FIX         │
├─────────────────────────────────┼─────────────────────────────────┼─────────────────────────────────┤
│ "Access Denied" on Google Drive │ User logged into non-Google     │ Switch browser profile to the   │
│ folder                          │ account in browser               │ authorized Google account       │
├─────────────────────────────────┼─────────────────────────────────┼─────────────────────────────────┤
│ New lead form submitted but     │ Header row renamed, or honeypot │ Ensure row 1 matches canonical  │
│ row did not appear in sheet     │ triggered by bot                │ columns; test via clean window  │
├─────────────────────────────────┼─────────────────────────────────┼─────────────────────────────────┤
│ Email notifications stopped     │ Daily Google Apps Script email  │ Wait 24h for quota reset or     │
│ sending                         │ limit reached (100 or 1500/day) │ upgrade to Google Workspace     │
├─────────────────────────────────┼─────────────────────────────────┼─────────────────────────────────┤
│ Formulas display "#REF!" or     │ Row was deleted rather than     │ Restore formula from previous   │
│ "#VALUE!" in dashboard          │ cleared, breaking references    │ row or use version history      │
└─────────────────────────────────┴─────────────────────────────────┴─────────────────────────────────┘
```

---

## 2. Google Platform Quota Boundaries (Free vs Workspace)
* **Email Daily Recipients**: 100/day on personal `@gmail.com`; 1,500/day on paid Google Workspace.
* **Apps Script Execution Timeout**: 6 minutes per single run. (Batch queue logic in `Code.gs` prevents timeouts).
* **Simultaneous Triggers**: Max 20 concurrent script executions.

---

## 3. How to Request Support
During your 14-day warranty (or under an active Monthly Care subscription):
1. **Email Support**: Send an email to `hemanth.ranam@gmail.com` with:
   - Your Client ID (`CLI-YYYY-XXXX`)
   - Exact description of the issue
   - Screenshot of the error or spreadsheet row
2. **WhatsApp Direct**: Urgent operational outages can be messaged directly to your dedicated WhatsApp channel.
3. **Response SLA**:
   - **Starter Care**: 48-hour response
   - **Business Care**: 24-hour response
   - **Systems / Growth Partner**: Same-day / 12-hour priority turnaround
