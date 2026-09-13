import { notFound } from "next/navigation";
import { getProduct, products, relatedProducts } from "@/data/products";
import { ProductDetail } from "@/components/ProductDetail";
import { ProductGrid } from "@/components/ProductCard";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return { title: `${product.name} · NeyVora`, description: product.description };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  return (
    <>
      <ProductDetail product={product} />
      <section className="pedit">
        <div className="pedit-intro">
          <p className="eyebrow reveal">The ritual</p>
          <h2 className="serif reveal">{product.shortDescription}</h2>
          <p className="reveal">{product.description}</p>
        </div>
        <div className="pedit-split">
          <div className="pedit-media">
            <img src={product.hoverImage} alt={`${product.name} ritual`} loading="lazy" decoding="async" />
          </div>
          <div className="pedit-panel">
            <p className="eyebrow">Key features</p>
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
          </div>
        </div>
        <div className="pedit-grid">
          <div>
            <p className="eyebrow">Ingredients</p>
            <h2 className="serif">What belongs.</h2>
            <div className="ing-list">
              {product.ingredientNotes.map((n) => (
                <article key={n.name}>
                  <h3>{n.name}</h3>
                  <p>{n.copy}</p>
                </article>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow">How to use</p>
            <h2 className="serif">A quieter method.</h2>
            <ol className="steps">
              {product.steps.map((s, i) => (
                <li key={s}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <p>{s}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <ProductGrid
        items={relatedProducts(product.slug)}
        variant="shop"
        heading
        compact
        eyebrow="Continue the ritual"
        title="You may also love."
      />
    </>
  );
}
