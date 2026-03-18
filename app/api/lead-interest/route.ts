import { NextResponse } from "next/server";

type LeadPayload = {
  fullName?: string;
  email?: string;
  cityOfInterest?: string;
  travelDates?: string;
  experienceType?: string;
  additionalNotes?: string;
};

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as LeadPayload;

    if (!payload.fullName || !payload.email || !payload.cityOfInterest || !payload.experienceType) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
    if (!webhookUrl) {
      return NextResponse.json(
        { error: "Google Sheets integration is not configured." },
        { status: 500 }
      );
    }

    const leadRow = {
      timestamp: new Date().toISOString(),
      source: "events-expression-of-interest",
      fullName: payload.fullName,
      email: payload.email,
      cityOfInterest: payload.cityOfInterest,
      travelDates: payload.travelDates ?? "",
      experienceType: payload.experienceType,
      additionalNotes: payload.additionalNotes ?? "",
    };

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(leadRow),
      cache: "no-store",
    });

    if (!response.ok) {
      const responseText = await response.text();
      console.error("Sheets webhook error", response.status, responseText);
      return NextResponse.json(
        { error: "Lead capture failed at destination." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lead API unexpected error", error);
    return NextResponse.json(
      { error: "Unexpected server error." },
      { status: 500 }
    );
  }
}
