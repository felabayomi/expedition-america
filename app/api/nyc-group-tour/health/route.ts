import { NextResponse } from "next/server";

export const runtime = "nodejs";

const REQUIRED_ENV_VARS = [
  "EMAILJS_SERVICE_ID",
  "EMAILJS_TEMPLATE_ID",
  "EMAILJS_PUBLIC_KEY",
  "EMAILJS_PRIVATE_KEY",
] as const;

export async function GET() {
  const missing = REQUIRED_ENV_VARS.filter((key) => !process.env[key]);

  return NextResponse.json(
    {
      ok: missing.length === 0,
      nycGroupTourEmailConfigured: missing.length === 0,
      missing,
    },
    { status: missing.length === 0 ? 200 : 503 }
  );
}