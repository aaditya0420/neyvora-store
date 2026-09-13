import Link from "next/link";

export default function NotFound() {
  return (
    <section style={{ padding: "6rem var(--pad) 8rem", maxWidth: 720 }}>
      <p className="eyebrow">404</p>
      <h1 className="serif" style={{ fontSize: "clamp(2.8rem, 6vw, 4.6rem)", fontWeight: 400, margin: "0.8rem 0 1.2rem" }}>
        This page has wandered.
      </h1>
      <p style={{ fontWeight: 300, marginBottom: "1.8rem" }}>Return to the collection, or begin again at the atelier.</p>
      <Link href="/" className="btn">
        Back to NeyVora
      </Link>
    </section>
  );
}
