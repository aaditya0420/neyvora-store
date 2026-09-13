import Link from "next/link";
import { articles } from "@/data/journal";

export const metadata = {
  title: "Journal · NeyVora",
  description: "Rituals, ingredients and thoughtful beauty notes from NeyVora.",
};

export default function JournalPage() {
  return (
    <>
      <header className="page-intro">
        <p className="eyebrow">Journal</p>
        <h1 className="serif">Beauty worth returning to.</h1>
        <div className="page-intro-copy">
          <p>Notes on rituals, botanicals and a quieter kind of glow.</p>
        </div>
      </header>
      <section className="journal-list">
        {articles.map((a) => (
          <article key={a.slug}>
            <Link className="journal-media" href={`/journal/${a.slug}`}>
              <img src={a.image} alt={a.imageAlt} loading="lazy" decoding="async" />
            </Link>
            <div>
              <p className="eyebrow">{a.eyebrow}</p>
              <h2 className="serif">
                <Link href={`/journal/${a.slug}`}>{a.title}</Link>
              </h2>
              <p>{a.excerpt}</p>
              <span>
                {a.date} · {a.minutes}
              </span>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
