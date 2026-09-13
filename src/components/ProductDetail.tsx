"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { formatPrice, type Product } from "@/data/products";
import { useStore } from "@/context/StoreContext";
import { IconArrow, IconHeart, IconMinus, IconPlus, Stars } from "./Icons";

export function ProductDetail({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);
  const [img, setImg] = useState(0);
  const [open, setOpen] = useState("The ritual");
  const { addToCart, toggleWish, wishlist } = useStore();
  const router = useRouter();
  const wished = wishlist.includes(product.slug);

  const accordions = [
    {
      title: "The ritual",
      content: (
        <div className="notes">
          {product.features.map((f, i) => (
            <article key={f.title}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{f.title}</h3>
                <p>{f.copy}</p>
              </div>
            </article>
          ))}
        </div>
      ),
    },
    {
      title: "How to use",
      content: (
        <ol className="steps">
          {product.steps.map((s, i) => (
            <li key={s}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <p>{s}</p>
            </li>
          ))}
        </ol>
      ),
    },
    {
      title: "Ingredients",
      content: (
        <div className="ing-list">
          {product.ingredientNotes.map((n) => (
            <article key={n.name}>
              <h3>{n.name}</h3>
              <p>{n.copy}</p>
            </article>
          ))}
        </div>
      ),
    },
    { title: "Details", content: <p>{product.details}</p> },
    { title: "Shipping & returns", content: <p>Complimentary shipping on orders above ₹499. Easy returns within 7 days of delivery for unopened products.</p> },
  ];

  return (
    <section className="pdp">
      <div className="pdp-gallery">
        <div className="pdp-main" style={{ background: product.background }}>
          <img className={img === 0 ? "pdp-contain" : "pdp-cover"} src={product.images[img]} alt={product.name} decoding="async" fetchPriority="high" />
        </div>
        <div className="pdp-thumbs">
          {product.images.map((src, i) => (
            <button
              key={src}
              className={i === img ? "pdp-current" : ""}
              aria-label={`View image ${i + 1}`}
              style={{ background: product.background }}
              onClick={() => setImg(i)}
            >
              <img src={src} alt="" />
            </button>
          ))}
        </div>
      </div>
      <div className="pdp-info">
        <p className="eyebrow">{product.eyebrow}</p>
        <h1 className="serif">{product.name}</h1>
        <p className="pdp-sub">{product.subtitle}</p>
        <div className="pdp-rating">
          <Stars />
          <span>
            {product.rating} / 5 · {product.reviewCount} reviews
          </span>
        </div>
        <p className="pdp-price">
          {formatPrice(product.price)}
          {product.compareAt ? <s>{formatPrice(product.compareAt)}</s> : null}
        </p>
        <p className="pdp-desc">{product.description}</p>
        <ul className="pdp-benefits">
          {product.benefits.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <div className="pdp-actions">
          <div className="qty" aria-label="Quantity">
            <button aria-label="Decrease" onClick={() => setQty((q) => Math.max(1, q - 1))}>
              <IconMinus />
            </button>
            <span>{qty}</span>
            <button aria-label="Increase" onClick={() => setQty((q) => q + 1)}>
              <IconPlus />
            </button>
          </div>
          <button className="btn" onClick={() => addToCart(product.slug, qty)}>
            Add to bag <IconArrow />
          </button>
        </div>
        <div className="pdp-secondary">
          <button
            className="btn-outline"
            onClick={() => {
              addToCart(product.slug, qty);
              router.push("/checkout");
            }}
          >
            Buy now
          </button>
          <button className={`pdp-wish${wished ? " pdp-on" : ""}`} onClick={() => toggleWish(product.slug)}>
            <IconHeart filled={wished} />
            Wishlist
          </button>
        </div>
        <p className="pdp-ship">Complimentary shipping above ₹499</p>
        <div>
          {accordions.map((a) => (
            <div key={a.title} className="acc-item">
              <button aria-expanded={open === a.title} onClick={() => setOpen(open === a.title ? "" : a.title)}>
                <span>{a.title}</span>
                <i className={open === a.title ? "acc-open" : ""} />
              </button>
              <div className={`acc-panel${open === a.title ? " acc-show" : ""}`}>
                <div>{a.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
