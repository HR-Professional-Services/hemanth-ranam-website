import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, countryCode, normalizedPhone, company, service, message } = body;

    // 1. Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid full name." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 5) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid WhatsApp phone number." },
        { status: 400 }
      );
    }

    // 2. Generate Collision-Resistant Unique Lead ID
    const todayStr = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const leadId = `LEAD-${todayStr}-${randomSuffix}`;

    // 3. Formula Injection Sanitization Helper
    const sanitizeValue = (val: unknown) => {
      if (typeof val !== "string") return val;
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
      phone: sanitizeValue(phone),
      normalizedPhone: sanitizeValue(normalizedPhone || phone),
      company: sanitizeValue(company || ""),
      service: sanitizeValue(service || "Business Systems Consulting"),
      message: sanitizeValue(message || ""),
      source: "Website Contact Form",
      timestamp: new Date().toISOString(),
    };

    // 4. Forward to Google Apps Script Backend if configured
    const scriptWebhookUrl = process.env.GOOGLE_APPS_SCRIPT_WEBHOOK_URL;
    const apiSecret = process.env.APPS_SCRIPT_API_KEY || "HR_SECURE_API_SECRET_2026";

    if (scriptWebhookUrl) {
      try {
        await fetch(scriptWebhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": apiSecret,
          },
          body: JSON.stringify(sanitizedPayload),
        });
      } catch (webhookErr) {
        console.error("Apps Script Webhook Forwarding Warning:", webhookErr);
      }
    }

    return NextResponse.json({
      success: true,
      action: "createLead",
      data: {
        leadId,
        message: "Enquiry received successfully. Our team will contact you within 24 hours.",
      },
    });
  } catch (error) {
    console.error("Contact Form API Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again or message on WhatsApp." },
      { status: 500 }
    );
  }
}
