"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { IconAccount, IconBag, IconHeart, IconMenu, IconSearch } from "./Icons";
import { useStore } from "@/context/StoreContext";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/shop", label: "Collection" },
  { href: "/story", label: "Our Story" },
  { href: "/journal", label: "Journal" },
];

function pathMatches(pathname: string, href: string) {
  const path = href.split("#")[0] || "/";
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(`${path}/`);
}

export function Header() {
  const pathname = usePathname();
  const { open, cartCount, wishCount } = useStore();
  const [solid, setSolid] = useState(pathname !== "/");
  const [chosenLabel, setChosenLabel] = useState<string | null>(null);

  useEffect(() => {
    if (pathname !== "/") {
      setSolid(true);
      return;
    }
    const onScroll = () => setSolid(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <header className={`header${solid ? " header-solid" : ""}`}>
      <div className="header-inner">
        <button className="menu-btn" aria-label="Open menu" onClick={() => open("menu")}>
          <IconMenu />
        </button>
        <nav className="nav" aria-label="Primary">
          {links.map((l) => {
            const matches = pathMatches(pathname, l.href);
            const samePath = links.filter((x) => pathMatches(pathname, x.href));
            const preferred = samePath.some((x) => x.label === chosenLabel)
              ? chosenLabel
              : samePath[0]?.label;
            const active = matches && preferred === l.label;
            return (
              <Link
                key={l.label}
                href={l.href}
                className={`nav-link${active ? " nav-link-active" : ""}`}
                onClick={() => setChosenLabel(l.label)}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        <div className="brand">
          <Logo />
        </div>
        <div className="actions">
          <button aria-label="Search" onClick={() => open("search")}>
            <IconSearch />
          </button>
          <button className="desktop-only" aria-label="Account" onClick={() => open("account")}>
            <IconAccount />
          </button>
          <button className="desktop-only" aria-label="Wishlist" onClick={() => open("wishlist")}>
            <IconHeart />
            {wishCount > 0 ? <span className="count">{wishCount}</span> : null}
          </button>
          <button aria-label="Shopping bag" onClick={() => open("cart")}>
            <IconBag />
            {cartCount > 0 ? <span className="count">{cartCount}</span> : null}
          </button>
        </div>
      </div>
    </header>
  );
}
