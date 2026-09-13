"use client";

import { useRouter, usePathname } from "next/navigation";

export function ShopToolbar({ category, sort }: { category: string; sort: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const set = (key: "category" | "sort", value: string) => {
    const next = new URLSearchParams();
    const nextCategory = key === "category" ? value : category;
    const nextSort = key === "sort" ? value : sort;
    if (nextCategory !== "all") next.set("category", nextCategory);
    if (nextSort !== "featured") next.set("sort", nextSort);
    const query = next.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  return (
    <div className="shop-bar">
      <div className="shop-group">
        <span>Filter</span>
        <select value={category} onChange={(e) => set("category", e.target.value)}>
          <option value="all">All rituals</option>
          <option value="hair-care">Hair Care</option>
          <option value="skin-care">Skin Care</option>
          <option value="ritual-set">Ritual Set</option>
        </select>
      </div>
      <label className="shop-sort">
        Sort
        <select value={sort} onChange={(e) => set("sort", e.target.value)}>
          <option value="featured">Featured</option>
          <option value="newest">Newest</option>
          <option value="price-asc">Price · Low to high</option>
          <option value="price-desc">Price · High to low</option>
        </select>
      </label>
    </div>
  );
}
