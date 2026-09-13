"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { FREE_SHIPPING, getProduct, type Product } from "@/data/products";

type UI = {
  search: boolean;
  cart: boolean;
  wishlist: boolean;
  menu: boolean;
  account: boolean;
};

type CartItem = { slug: string; qty: number };

type Store = {
  ui: UI;
  open: (key: keyof UI) => void;
  close: (key: keyof UI) => void;
  set: (key: keyof UI, v: boolean) => void;
  cart: CartItem[];
  wishlist: string[];
  addToCart: (slug: string, qty?: number) => void;
  setQty: (slug: string, qty: number) => void;
  removeFromCart: (slug: string) => void;
  toggleWish: (slug: string) => void;
  clearCart: () => void;
  cartCount: number;
  wishCount: number;
  cartProducts: { product: Product; qty: number }[];
  wishProducts: Product[];
  subtotal: number;
  shippingProgress: number;
};

const StoreContext = createContext<Store | null>(null);

const emptyUI: UI = { search: false, cart: false, wishlist: false, menu: false, account: false };

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [ui, setUi] = useState<UI>(emptyUI);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const c = localStorage.getItem("neyvora-cart");
      const w = localStorage.getItem("neyvora-wish");
      if (c) setCart(JSON.parse(c));
      if (w) setWishlist(JSON.parse(w));
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem("neyvora-cart", JSON.stringify(cart));
    localStorage.setItem("neyvora-wish", JSON.stringify(wishlist));
  }, [cart, wishlist, ready]);

  const value = useMemo<Store>(() => {
    const cartProducts = cart
      .map((i) => {
        const product = getProduct(i.slug);
        return product ? { product, qty: i.qty } : null;
      })
      .filter(Boolean) as { product: Product; qty: number }[];
    const wishProducts = wishlist.map(getProduct).filter(Boolean) as Product[];
    const subtotal = cartProducts.reduce((s, i) => s + i.product.price * i.qty, 0);
    return {
      ui,
      open: (key) => setUi((u) => ({ ...emptyUI, [key]: true })),
      close: (key) => setUi((u) => ({ ...u, [key]: false })),
      set: (key, v) => setUi((u) => ({ ...u, [key]: v })),
      cart,
      wishlist,
      addToCart: (slug, qty = 1) => {
        setCart((prev) => {
          const found = prev.find((i) => i.slug === slug);
          if (found) return prev.map((i) => (i.slug === slug ? { ...i, qty: i.qty + qty } : i));
          return [...prev, { slug, qty }];
        });
        setUi({ ...emptyUI, cart: true });
      },
      setQty: (slug, qty) => setCart((prev) => prev.map((i) => (i.slug === slug ? { ...i, qty: Math.max(1, qty) } : i))),
      removeFromCart: (slug) => setCart((prev) => prev.filter((i) => i.slug !== slug)),
      toggleWish: (slug) => setWishlist((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug])),
      clearCart: () => setCart([]),
      cartCount: cart.reduce((s, i) => s + i.qty, 0),
      wishCount: wishlist.length,
      cartProducts,
      wishProducts,
      subtotal,
      shippingProgress: Math.min(100, (subtotal / FREE_SHIPPING) * 100),
    };
  }, [ui, cart, wishlist]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
}
