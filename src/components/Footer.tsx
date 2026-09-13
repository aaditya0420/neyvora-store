import Link from "next/link";
import { Logo } from "./Logo";

const columns = [
  {
    title: "Shop",
    links: [
      { href: "/shop", label: "All Products" },
      { href: "/shop?category=hair-care", label: "Hair Care" },
      { href: "/shop?category=skin-care", label: "Skin Care" },
    ],
  },
  {
    title: "Discover",
    links: [
      { href: "/story", label: "Our Story" },
      // { href: "/ingredients", label: "Ingredients" },
      { href: "/journal", label: "Journal" },
    ],
  },
  {
    title: "Help",
    links: [
      { href: "/contact", label: "Contact" },
      // { href: "/shipping", label: "Shipping" },
      // { href: "/returns", label: "Returns" },
      { href: "/faqs", label: "FAQs" },
    ],
  },
  // {
  //   title: "Social",
  //   links: [
  //     { href: "https://instagram.com", label: "Instagram" },
  //     { href: "https://facebook.com", label: "Facebook" },
  //   ],
  // },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Logo size="lg" inverted tagline />
          <p>Beauty, rooted in nature.</p>
        </div>
        <div className="footer-cols">
          {columns.map((col) => (
            <div key={col.title}>
              <h3>{col.title}</h3>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 NeyVora</p>
        {/* <div>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div> */}
      </div>
    </footer>
  );
}
