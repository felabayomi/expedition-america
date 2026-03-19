import emailjs from "@emailjs/nodejs";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type NYCGroupTourPayload = {
  name?: string;
  email?: string;
  phone?: string;
  participants?: string;
  updates?: boolean;
  emergencyName?: string;
  emergencyPhone?: string;
  requests?: string;
  referral?: string;
};

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as NYCGroupTourPayload;

    if (!payload.name || !payload.email || !payload.phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required." },
        { status: 400 }
      );
    }

    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY;

    if (!serviceId || !templateId || !publicKey || !privateKey) {
      return NextResponse.json(
        { error: "Email service is not fully configured on the server. Missing EmailJS private key." },
        { status: 500 }
      );
    }

    await emailjs.send(
      serviceId,
      templateId,
      {
        tour_name: "NYC Group Tour",
        tour_dates: "September 18-21, 2026",
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
        participants: payload.participants ?? "1",
        emergencyName: payload.emergencyName ?? "",
        emergencyPhone: payload.emergencyPhone ?? "",
        requests: payload.requests ?? "",
        referral: payload.referral || "Not specified",
        updates: payload.updates ? "Yes" : "No",
      },
      {
        publicKey,
        privateKey,
      }
    );

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("NYC group tour submission failed", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? `EmailJS rejected the request: ${error.message}`
            : "Unexpected server error while sending the form.",
      },
      { status: 500 }
    );
  }
}