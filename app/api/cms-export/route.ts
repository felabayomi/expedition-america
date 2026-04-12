export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const response = await fetch(
      "https://felix-platform-backend.onrender.com/api/expedition-america-standalone/content/export",
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return Response.json(
        { error: "Failed to load CMS export" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return Response.json(data, {
      status: 200,
      headers: {
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("CMS proxy error", error);
    return Response.json({ error: "CMS proxy request failed" }, { status: 500 });
  }
}