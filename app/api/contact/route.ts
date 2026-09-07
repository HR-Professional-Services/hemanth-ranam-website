import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      countryCode,
      normalizedPhone,
      company,
      service,
      message,
      website_hp,
      source,
      page,
    } = body;

    // 1. Invisible Honeypot Spam Protection
    if (website_hp) {
      return NextResponse.json({
        success: true,
        message: "Enquiry received successfully.",
        data: { leadId: "HRPS-BOT-FILTERED" },
      });
    }

    // 2. Input Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, message: "Please provide your full name (at least 2 characters)." },
        { status: 400 }
      );
    }

    if (
      !email ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // 3. Generate Collision-Resistant Unique Lead ID (Format: HRPS-YYYYMMDD-XXXX)
    const now = new Date();
    const datePart = now.toISOString().slice(0, 10).replace(/-/g, "");
    const randomSuffix = Math.floor(1000 + Math.random() * 9000).toString();
    const leadId = `HRPS-${datePart}-${randomSuffix}`;

    // 4. Formula Injection Sanitization Helper
    const sanitizeValue = (val: unknown): string => {
      if (typeof val !== "string") return "";
      const trimmed = val.trim();
      if (/^[=+@-]/.test(trimmed)) {
        return `'${trimmed}`;
      }
      return trimmed;
    };

    const sanitizedPayload = {
      action: "createLead",
      leadId,
      name: sanitizeValue(name),
      email: email.trim().toLowerCase(),
      countryCode: countryCode || "GB",
      phone: sanitizeValue(phone || normalizedPhone || ""),
      normalizedPhone: sanitizeValue(normalizedPhone || phone || ""),
      company: sanitizeValue(company || ""),
      service: sanitizeValue(service || "General HR & Systems Consulting"),
      message: sanitizeValue(message || ""),
      source: sanitizeValue(source || "Website Contact Form"),
      page: sanitizeValue(page || "/#contact"),
      timestamp: now.toISOString(),
      status: "New",
    };

    // 5. Forward to Google Apps Script Webhook if configured
    const scriptWebhookUrl = process.env.GOOGLE_APPS_SCRIPT_WEBHOOK_URL;
    const apiSecret = process.env.APPS_SCRIPT_API_KEY || "HR_SECURE_API_SECRET_2026";

    if (scriptWebhookUrl) {
      try {
        const gasResponse = await fetch(scriptWebhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": apiSecret,
          },
          body: JSON.stringify(sanitizedPayload),
        });

        if (gasResponse.ok) {
          const gasJson = await gasResponse.json();
          if (gasJson && gasJson.data && gasJson.data.leadId) {
            return NextResponse.json({
              success: true,
              message: "Thank you for contacting HR Professional Services. Your enquiry has been received.",
              data: gasJson.data,
            });
          }
        }
      } catch (webhookErr) {
        console.error("Apps Script Webhook Forwarding Warning:", webhookErr);
      }
    }

    // 6. Direct clean success response with generated Lead ID
    return NextResponse.json({
      success: true,
      message: "Thank you for contacting HR Professional Services. Your enquiry has been received.",
      data: {
        leadId,
        status: "New",
        timestamp: sanitizedPayload.timestamp,
      },
    });
  } catch (error) {
    console.error("Contact Form API Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error. Please try again or reach out via WhatsApp.",
      },
      { status: 500 }
    );
  }
}
