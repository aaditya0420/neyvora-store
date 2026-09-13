"use client";

import { useState } from "react";
import Link from "next/link";
import { formatPrice, type Product } from "@/data/products";
import { IconArrow } from "./Icons";

export function ProductCard({ product }: { product: Product }) {
  const [hoverSrc, setHoverSrc] = useState<string | null>(null);
  const href = `/product/${product.slug}`;

  return (
    <article className="card" onMouseEnter={() => setHoverSrc(product.hoverImage)}>
      <Link className="card-media" href={href} prefetch>
        <span className="card-frame" style={{ background: product.background }}>
          <img className="card-primary" src={product.images[0]} alt={product.name} decoding="async" />
          {hoverSrc ? <img className="card-hover" src={hoverSrc} alt="" decoding="async" /> : null}
        </span>
      </Link>
      <div className="card-info">
        <p className="card-cat">{product.category}</p>
        <h3>
          <Link href={href} prefetch>
            {product.name}
          </Link>
        </h3>
        <p className="card-short">{product.shortDescription}</p>
        <p className="card-price">{formatPrice(product.price)}</p>
        <Link className="card-cta" href={href} prefetch>
          View product <IconArrow size={14} />
        </Link>
      </div>
    </article>
  );
}

export function ProductGrid({
  items,
  variant = "home",
  heading,
  compact,
  eyebrow = "The collection",
  title = "Rituals for every day.",
}: {
  items: Product[];
  variant?: "home" | "shop";
  heading?: boolean;
  compact?: boolean;
  eyebrow?: string;
  title?: string;
}) {
  return (
    <section className={`grid-section${compact ? " grid-compact" : ""}`} id={variant === "home" ? "collection" : undefined}>
      {heading !== false && variant === "home" ? (
        <div className="grid-head">
          <p className="eyebrow reveal">{eyebrow}</p>
          <h2 className="serif reveal">{title}</h2>
        </div>
      ) : heading ? (
        <div className="grid-head">
          <p className="eyebrow reveal">{eyebrow}</p>
          <h2 className="serif reveal">{title}</h2>
        </div>
      ) : null}
      <div className={`product-grid grid-${variant}`}>
        {items.map((p) => (
          <div key={p.id} className="reveal">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
