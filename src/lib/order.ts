export type OrderItem = {
  name: string;
  qty: number;
  price: number;
};

export type OrderDetails = {
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  total: number;
};

export function formatPrice(n: number) {
  return `₹${n}`;
}

export function ownerWhatsAppNumber() {
  const raw = process.env.WHATSAPP_OWNER_NUMBER || process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  return raw.replace(/\D/g, "");
}

export function formatOrderMessage(order: OrderDetails) {
  const items = order.items
    .map((item) => `• ${item.name} × ${item.qty} — ${formatPrice(item.price * item.qty)}`)
    .join("\n");
  const shipping = order.shipping === 0 ? "Complimentary" : formatPrice(order.shipping);
  const placed = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  return [
    "New NeyVora order",
    "",
    "Customer",
    `Name: ${order.name}`,
    `Phone: ${order.phone}`,
    `Email: ${order.email}`,
    "",
    "Ship to",
    order.address,
    `${order.city}, ${order.state} ${order.pincode}`,
    "",
    "Items",
    items,
    "",
    `Subtotal: ${formatPrice(order.subtotal)}`,
    `Shipping: ${shipping}`,
    `Total: ${formatPrice(order.total)}`,
    "",
    `Placed: ${placed}`,
  ].join("\n");
}

export function whatsappChatUrl(order: OrderDetails) {
  const number = ownerWhatsAppNumber();
  if (number.length < 10) return "";
  return `https://wa.me/${number}?text=${encodeURIComponent(formatOrderMessage(order))}`;
}

export async function sendWhatsAppToOwner(order: OrderDetails) {
  const token = process.env.WHATSAPP_ACCESS_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const to = ownerWhatsAppNumber();
  if (!token || !phoneNumberId || to.length < 10) return false;

  const res = await fetch(`https://graph.facebook.com/v21.0/${phoneNumberId}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to,
      type: "text",
      text: { body: formatOrderMessage(order), preview_url: false },
    }),
  });

  return res.ok;
}

export function parseOrder(body: unknown): OrderDetails | null {
  if (!body || typeof body !== "object") return null;
  const o = body as Record<string, unknown>;
  const items = Array.isArray(o.items) ? o.items : [];
  const cleanItems = items
    .map((item) => {
      if (!item || typeof item !== "object") return null;
      const i = item as Record<string, unknown>;
      const name = String(i.name ?? "").trim();
      const qty = Number(i.qty);
      const price = Number(i.price);
      if (!name || !Number.isFinite(qty) || qty < 1 || !Number.isFinite(price)) return null;
      return { name, qty, price };
    })
    .filter(Boolean) as OrderItem[];

  const order: OrderDetails = {
    name: String(o.name ?? "").trim(),
    phone: String(o.phone ?? "").replace(/\D/g, ""),
    email: String(o.email ?? "").trim(),
    address: String(o.address ?? "").trim(),
    city: String(o.city ?? "").trim(),
    state: String(o.state ?? "").trim(),
    pincode: String(o.pincode ?? "").trim(),
    items: cleanItems,
    subtotal: Number(o.subtotal),
    shipping: Number(o.shipping),
    total: Number(o.total),
  };

  if (
    !order.name ||
    order.phone.length < 10 ||
    !order.email ||
    !order.address ||
    !order.city ||
    !order.state ||
    order.pincode.length < 6 ||
    order.items.length === 0 ||
    !Number.isFinite(order.total)
  ) {
    return null;
  }

  return order;
}
