"use client";

import Link from "next/link";
import { useState } from "react";
import { FREE_SHIPPING, formatPrice, searchProducts } from "@/data/products";
import { useStore } from "@/context/StoreContext";
import { IconArrow, IconClose, IconMinus, IconPlus, IconSearch } from "./Icons";
import { Logo } from "./Logo";

export function Overlays() {
  return (
    <>
      <SearchOverlay />
      <CartDrawer />
      <WishlistDrawer />
      <MobileMenu />
      <AccountOverlay />
    </>
  );
}

function SearchOverlay() {
  const { ui, close } = useStore();
  const [q, setQ] = useState("");
  if (!ui.search) return null;
  const results = searchProducts(q);
  return (
    <div className="search-overlay">
      <button className="search-close" onClick={() => close("search")} aria-label="Close">
        <IconClose />
      </button>
      <div className="search-inner">
        <p className="eyebrow">Search</p>
        <h2 className="serif">Find a ritual.</h2>
        <div className="search-field">
          <IconSearch />
          <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search products, botanicals…" />
        </div>
        <div className="search-popular">
          <span>Popular</span>
          {["Hair", "Glow", "Ubtan", "Ritual"].map((t) => (
            <button key={t} onClick={() => setQ(t)}>
              {t}
            </button>
          ))}
        </div>
        <div className="search-results">
          {q && results.length === 0 ? <p className="search-empty">Nothing matched that search.</p> : null}
          {results.map((p) => (
            <Link key={p.id} href={`/product/${p.slug}`} className="search-result" onClick={() => close("search")}>
              <span className="search-thumb" style={{ background: p.background }}>
                <img src={p.images[0]} alt="" />
              </span>
              <span>
                <small>{p.category}</small>
                <strong>{p.name}</strong>
              </span>
              <em>{formatPrice(p.price)}</em>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function CartDrawer() {
  const { ui, close, cartProducts, setQty, removeFromCart, subtotal, shippingProgress } = useStore();
  if (!ui.cart) return null;
  const remain = Math.max(0, FREE_SHIPPING - subtotal);
  return (
    <>
      <div className="drawer-backdrop" onClick={() => close("cart")} />
      <aside className="drawer">
        <div className="drawer-head">
          <h2>Your bag</h2>
          <button onClick={() => close("cart")} aria-label="Close">
            <IconClose />
          </button>
        </div>
        <div className="drawer-progress">
          <p>
            {remain === 0
              ? "Complimentary shipping unlocked."
              : `Add ${formatPrice(remain)} more for complimentary shipping.`}
          </p>
          <span className="progress-bar">
            <span style={{ width: `${shippingProgress}%` }} />
          </span>
        </div>
        <div className="drawer-items">
          {cartProducts.length === 0 ? (
            <div className="drawer-empty">
              <p>Your bag is waiting for a ritual.</p>
              <Link href="/shop" className="btn" onClick={() => close("cart")}>
                Discover the collection <IconArrow />
              </Link>
            </div>
          ) : (
            cartProducts.map(({ product, qty }) => (
              <div key={product.id} className="drawer-item">
                <div className="drawer-thumb" style={{ background: product.background }}>
                  <img src={product.images[0]} alt="" />
                </div>
                <div>
                  <p className="drawer-cat">{product.category}</p>
                  <h3>{product.name}</h3>
                  <p className="drawer-price">{formatPrice(product.price)}</p>
                  <div className="drawer-row">
                    <div className="qty" aria-label="Quantity">
                      <button aria-label="Decrease" onClick={() => setQty(product.slug, qty - 1)}>
                        <IconMinus />
                      </button>
                      <span>{qty}</span>
                      <button aria-label="Increase" onClick={() => setQty(product.slug, qty + 1)}>
                        <IconPlus />
                      </button>
                    </div>
                    <button className="drawer-remove" onClick={() => removeFromCart(product.slug)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {cartProducts.length > 0 ? (
          <div className="drawer-foot">
            <div className="drawer-sub">
              <span>Subtotal</span>
              <strong>{formatPrice(subtotal)}</strong>
            </div>
            <p className="drawer-note">Shipping calculated at checkout. Complimentary above ₹499.</p>
            <Link href="/checkout" className="btn" onClick={() => close("cart")}>
              Checkout <IconArrow />
            </Link>
          </div>
        ) : null}
      </aside>
    </>
  );
}

function WishlistDrawer() {
  const { ui, close, wishProducts, toggleWish, addToCart } = useStore();
  if (!ui.wishlist) return null;
  return (
    <>
      <div className="drawer-backdrop" onClick={() => close("wishlist")} />
      <aside className="drawer">
        <div className="drawer-head">
          <h2>Wishlist</h2>
          <button onClick={() => close("wishlist")} aria-label="Close">
            <IconClose />
          </button>
        </div>
        <div className="drawer-items">
          {wishProducts.length === 0 ? (
            <div className="drawer-empty">
              <p>Save rituals you wish to return to.</p>
            </div>
          ) : (
            wishProducts.map((product) => (
              <div key={product.id} className="drawer-item">
                <div className="drawer-thumb" style={{ background: product.background }}>
                  <img src={product.images[0]} alt="" />
                </div>
                <div>
                  <p className="drawer-cat">{product.category}</p>
                  <h3>{product.name}</h3>
                  <p className="drawer-price">{formatPrice(product.price)}</p>
                  <div className="drawer-row">
                    <button className="drawer-remove" onClick={() => addToCart(product.slug)}>
                      Add to bag
                    </button>
                    <button className="drawer-remove" onClick={() => toggleWish(product.slug)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </aside>
    </>
  );
}

function MobileMenu() {
  const { ui, close, open } = useStore();
  if (!ui.menu) return null;
  return (
    <div className="mobile-menu">
      <div className="mobile-top">
        <Logo />
        <button onClick={() => close("menu")} aria-label="Close">
          <IconClose />
        </button>
      </div>
      <nav>
        {[
          ["/shop", "Shop"],
          ["/shop", "Collection"],
          ["/story", "Our Story"],
          ["/journal", "Journal"],
        ].map(([href, label]) => (
          <Link key={label} href={href} onClick={() => close("menu")}>
            {label}
          </Link>
        ))}
      </nav>
      <div className="mobile-utils">
        <button onClick={() => open("search")}>Search</button>
        <button onClick={() => open("account")}>Account</button>
        <button onClick={() => open("wishlist")}>Wishlist</button>
        <button onClick={() => open("cart")}>Bag</button>
      </div>
    </div>
  );
}

function AccountOverlay() {
  const { ui, close } = useStore();
  const [done, setDone] = useState(false);
  if (!ui.account) return null;
  return (
    <div className="account-overlay">
      <button className="account-close" onClick={() => close("account")} aria-label="Close">
        <IconClose />
      </button>
      <div className="account-card">
        <p className="eyebrow">Atelier account</p>
        <h2 className="serif">A quieter welcome.</h2>
        {done ? (
          <p>Thank you. We will keep your ritual notes here.</p>
        ) : (
          <>
            <p>Sign in to keep your bag and wishlist across visits. This is a frontend demonstration — nothing is sent to a server.</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
            >
              <input type="email" required placeholder="Email address" />
              <button className="btn" type="submit">
                Continue <IconArrow />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
