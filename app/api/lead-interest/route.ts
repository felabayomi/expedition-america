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

    const response = await fetch("https://formspree.io/f/xqeywzzq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        name: payload.fullName,
        email: payload.email,
        city: payload.cityOfInterest,
        dates: payload.travelDates ?? "",
        experience: payload.experienceType,
        notes: payload.additionalNotes ?? "",
      }),
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
