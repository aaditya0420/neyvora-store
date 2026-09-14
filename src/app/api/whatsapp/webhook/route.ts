import { NextResponse } from "next/server";

/**
 * Meta WhatsApp Cloud API webhooks.
 * Used so Production setup can Verify and save.
 * Order alerts still go out from /api/order — this only receives Meta events.
 */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");
  const verify = process.env.WHATSAPP_VERIFY_TOKEN || "";

  if (mode === "subscribe" && token && verify && token === verify && challenge) {
    return new NextResponse(challenge, { status: 200 });
  }

  return NextResponse.json({ error: "Forbidden" }, { status: 403 });
}

export async function POST() {
  // Acknowledge delivery / inbound events so Meta does not retry.
  return NextResponse.json({ ok: true });
}
