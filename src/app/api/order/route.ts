import { NextResponse } from "next/server";
import { parseOrder, sendWhatsAppToOwner, whatsappChatUrl } from "@/lib/order";

export async function POST(req: Request) {
  const order = parseOrder(await req.json().catch(() => null));
  if (!order) {
    return NextResponse.json({ error: "Please complete every field." }, { status: 400 });
  }

  const whatsappUrl = whatsappChatUrl(order);
  if (!whatsappUrl) {
    return NextResponse.json(
      { error: "WhatsApp is not configured. Add NEXT_PUBLIC_WHATSAPP_NUMBER in .env.local." },
      { status: 500 }
    );
  }

  let sent = false;
  try {
    sent = await sendWhatsAppToOwner(order);
  } catch {
    sent = false;
  }

  return NextResponse.json({ ok: true, sent, whatsappUrl });
}
