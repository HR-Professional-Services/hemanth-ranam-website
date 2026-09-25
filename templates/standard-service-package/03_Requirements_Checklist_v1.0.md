# [SERVICE_ID]: Pre-Flight Requirements Checklist
**Document Type**: Pre-Flight Technical Verification  
**Version**: 1.0  
**Status**: ACTIVE  
**Owner**: Systems Architecture Team  

---

## 1. Client Prerequisite Readiness Matrix
Before production development initiates, verify each item has been submitted and validated:

| Item | Requirement Description | Verification Method | Status |
| :--- | :--- | :--- | :--- |
| **REQ-01** | Verified Google Account for Drive Access | Check `clientFolder.addViewer()` | [ ] PENDING / [x] READY |
| **REQ-02** | Brand Identity (Logo, Colors, Fonts) | Uploaded to `02 - Working Files` | [ ] PENDING / [x] READY |
| **REQ-03** | DNS / Hosting Access (if applicable) | Cloudflare / Registrar verified | [ ] PENDING / [x] READY |
| **REQ-04** | Completed Intake Questionnaire | Saved in `01 - Requirements & Intake` | [ ] PENDING / [x] READY |
| **REQ-05** | Master Data / Spreadsheet Samples | Scrubbed CSV/Excel data verified | [ ] PENDING / [x] READY |

---

## 2. Technical Quality Gates (Zero-Defect Standards)
Every system delivered by HR Professional Services must pass these strict criteria:

1. **Security & Secrets Governance**:
   - Zero hardcoded API keys or Stripe secrets in client-side code.
   - Private Google Drive links restricted strictly to authorized user accounts.
2. **Data Integrity & Formatting**:
   - Unique collision-free IDs for all records (`ORD-YYYY-XXXX`, `CLI-YYYY-XXXX`, `HRPS-YYYYMMDD-XXXX`).
   - Formula injection protection on all spreadsheet string inputs.
3. **Execution Reliability**:
   - Sub-3-second webhook processing time.
   - Asynchronous queuing for heavy folder creation or PDF generation to avoid timeouts.
4. **Mobile & Device Responsiveness**:
   - 100% viewport optimization across Mobile (375px), Tablet (768px), and Desktop (1280px+).

---
*QA Sign-Off by*: **Hemanth Ranam**  
*Date Verified*: `[Date]`
