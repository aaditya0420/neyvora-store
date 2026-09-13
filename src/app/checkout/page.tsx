"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { FREE_SHIPPING, formatPrice } from "@/data/products";
import { useStore } from "@/context/StoreContext";
import { IconArrow } from "@/components/Icons";

export default function CheckoutPage() {
  const { cartProducts, subtotal, clearCart } = useStore();
  const [done, setDone] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const [autoSent, setAutoSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const shipping = subtotal >= FREE_SHIPPING || subtotal === 0 ? 0 : 79;
  const total = subtotal + shipping;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSending(true);

    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") ?? ""),
      phone: String(form.get("phone") ?? ""),
      email: String(form.get("email") ?? ""),
      address: String(form.get("address") ?? ""),
      city: String(form.get("city") ?? ""),
      state: String(form.get("state") ?? ""),
      pincode: String(form.get("pincode") ?? ""),
      items: cartProducts.map(({ product, qty }) => ({
        name: product.name,
        qty,
        price: product.price,
      })),
      subtotal,
      shipping,
      total,
    };

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not place the order.");

      setWhatsappUrl(data.whatsappUrl ?? "");
      setAutoSent(Boolean(data.sent));
      clearCart();
      setDone(true);

      if (!data.sent && data.whatsappUrl) {
        const opened = window.open(data.whatsappUrl, "_blank");
        if (!opened) window.location.href = data.whatsappUrl;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not place the order.");
    } finally {
      setSending(false);
    }
  }

  if (done) {
    return (
      <section className="checkout-page">
        <p className="eyebrow">The atelier</p>
        <h1 className="serif">{autoSent ? "Thank you. Your order is with us." : "One last step — send the order."}</h1>
        <p>
          {autoSent
            ? "NeyVora has received your order on WhatsApp. We will confirm shortly."
            : "WhatsApp should open with your order. Tap Send so the NeyVora atelier receives every detail."}
        </p>
        {!autoSent && whatsappUrl ? (
          <a className="btn" href={whatsappUrl} target="_blank" rel="noreferrer">
            Open WhatsApp <IconArrow />
          </a>
        ) : (
          <Link className="btn" href="/shop">
            Return to the collection <IconArrow />
          </Link>
        )}
      </section>
    );
  }

  if (cartProducts.length === 0) {
    return (
      <section className="checkout-page">
        <p className="eyebrow">Checkout</p>
        <h1 className="serif">Your bag is empty.</h1>
        <Link className="btn" href="/shop">
          Discover the collection <IconArrow />
        </Link>
      </section>
    );
  }

  return (
    <section className="checkout-layout">
      <div>
        <p className="eyebrow">Checkout</p>
        <h1 className="serif">A considered finish.</h1>
        <ul>
          {cartProducts.map(({ product, qty }) => (
            <li key={product.id}>
              <div className="checkout-thumb" style={{ background: product.background }}>
                <img src={product.images[0]} alt="" />
              </div>
              <div>
                <strong>{product.name}</strong>
                <span>
                  {qty} · {formatPrice(product.price * qty)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <aside className="checkout-summary">
        <div className="checkout-row">
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className="checkout-row">
          <span>Shipping</span>
          <span>{shipping === 0 ? "Complimentary" : formatPrice(shipping)}</span>
        </div>
        <div className="checkout-row">
          <strong>Total</strong>
          <strong>{formatPrice(total)}</strong>
        </div>
        <form onSubmit={onSubmit}>
          <label>
            Full name
            <input name="name" required autoComplete="name" />
          </label>
          <label>
            WhatsApp / phone
            <input name="phone" type="tel" required inputMode="tel" autoComplete="tel" placeholder="10-digit mobile" />
          </label>
          <label>
            Email
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <label>
            Address
            <input name="address" required autoComplete="street-address" />
          </label>
          <label>
            City
            <input name="city" required autoComplete="address-level2" />
          </label>
          <label>
            State
            <input name="state" required autoComplete="address-level1" />
          </label>
          <label>
            PIN code
            <input name="pincode" required inputMode="numeric" autoComplete="postal-code" />
          </label>
          {error ? <p className="checkout-error">{error}</p> : null}
          <p>Place order opens WhatsApp with every detail for the NeyVora atelier.</p>
          <button className="btn" type="submit" disabled={sending}>
            {sending ? "Sending…" : "Place order"} <IconArrow />
          </button>
        </form>
      </aside>
    </section>
  );
}
