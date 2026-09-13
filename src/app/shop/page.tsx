import { getShopProducts } from "@/data/products";
import { ProductGrid } from "@/components/ProductCard";
import { ShopToolbar } from "@/components/ShopCatalog";

export const metadata = {
  title: "The Collection · NeyVora",
  description: "Thoughtful essentials for your everyday NeyVora ritual.",
};

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; sort?: string }>;
}) {
  const { category = "all", sort = "featured" } = await searchParams;
  const items = getShopProducts(category, sort);

  return (
    <>
      <header className="page-intro">
        <p className="eyebrow">The collection</p>
        <h1 className="serif">Thoughtful essentials for your everyday ritual.</h1>
        <div className="page-intro-copy">
          <p>Hair, skin and glow — a considered edit of rituals designed to be lived with, not performed.</p>
        </div>
      </header>
      <ShopToolbar category={category} sort={sort} />
      <p className="shop-count">{items.length} rituals</p>
      <ProductGrid items={items} variant="shop" heading={false} />
    </>
  );
}
