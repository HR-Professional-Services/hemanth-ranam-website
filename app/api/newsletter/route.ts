import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, source } = body;

    // 1. Validation
    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // 2. Generate Subscriber ID
    const todayStr = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const subscriberId = `SUB-${todayStr}-${randomSuffix}`;

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
      action: "createSubscriber",
      subscriberId,
      email: email.trim().toLowerCase(),
      name: sanitizeValue(name || ""),
      source: sanitizeValue(source || "Website Newsletter"),
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
        console.error("Apps Script Newsletter Forwarding Warning:", webhookErr);
      }
    }

    return NextResponse.json({
      success: true,
      action: "createSubscriber",
      data: {
        subscriberId,
        message: "Subscribed successfully to technical insights dispatch.",
      },
    });
  } catch (error) {
    console.error("Newsletter API Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
