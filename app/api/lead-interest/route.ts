import { NextResponse } from "next/server";
import { appendFile } from "node:fs/promises";

export const runtime = "nodejs";

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

    const leadRecord = {
      timestamp: new Date().toISOString(),
      source: "events-expression-of-interest",
      name: payload.fullName,
      email: payload.email,
      city: payload.cityOfInterest,
      dates: payload.travelDates ?? "",
      experience: payload.experienceType,
      notes: payload.additionalNotes ?? "",
    };

    const response = await fetch("https://formspree.io/f/xqeywzzq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(leadRecord),
      cache: "no-store",
    });

    if (!response.ok) {
      const responseText = await response.text();
      console.error("Formspree error", response.status, responseText);

      try {
        await appendFile(
          "/tmp/expedition-america-leads-backup.jsonl",
          `${JSON.stringify({ ...leadRecord, backupReason: `formspree-${response.status}` })}\n`,
          "utf8"
        );

        return NextResponse.json({
          ok: true,
          queued: true,
          message: "Lead was saved to backup queue.",
        });
      } catch (backupError) {
        console.error("Backup write failed", backupError);
        return NextResponse.json(
          { error: "Lead capture failed at destination and backup storage." },
          { status: 502 }
        );
      }
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
