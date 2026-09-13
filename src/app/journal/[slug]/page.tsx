import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/data/journal";
import { IconArrow } from "@/components/Icons";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return { title: `${article.title} · NeyVora`, description: article.excerpt };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  return (
    <article className="article">
      <header>
        <p className="eyebrow">{article.eyebrow}</p>
        <h1 className="serif">{article.title}</h1>
        <span>
          {article.date} · {article.minutes}
        </span>
      </header>
      <div className="article-hero">
        <img src={article.image} alt={article.imageAlt} />
      </div>
      <div className="article-body">
        {article.body.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <Link className="btn" href="/shop">
          Shop the collection <IconArrow />
        </Link>
      </div>
    </article>
  );
}
