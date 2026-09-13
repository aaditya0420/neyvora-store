export type Feature = { title: string; copy: string };
export type IngredientNote = { name: string; copy: string };

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  price: number;
  compareAt: number | null;
  rating: number;
  reviewCount: number;
  volume: string;
  subtitle: string;
  shortDescription: string;
  description: string;
  eyebrow: string;
  images: string[];
  hoverImage: string;
  background: string;
  benefits: string[];
  features: Feature[];
  ingredientNotes: IngredientNote[];
  steps: string[];
  howToUse: string;
  ingredients: string;
  details: string;
  inStock: boolean;
  featured: boolean;
  newest: boolean;
  tags: string[];
};

export const FREE_SHIPPING = 499;

export const products: Product[] = [
  {
    id: "hair-growth-vitalizer",
    slug: "neyvora-hair-growth-vitalizer",
    name: "Neyvora Hair Growth Vitalizer",
    category: "Hair Care",
    categorySlug: "hair-care",
    price: 319,
    compareAt: null,
    rating: 4.8,
    reviewCount: 146,
    volume: "100 ml",
    subtitle: "With 21 Natural Herbs · Net Vol. 100 ml",
    shortDescription: "Nourish. Strengthen. Revitalize.",
    description:
      "Meticulously formulated with 21 of Ayurveda’s most potent hair-care herbs, this vitalizer delivers concentrated nourishment to the scalp — targeting hair fall at its source and creating the conditions for stronger, fuller, longer hair.",
    eyebrow: "Hair Care",
    images: ["/images/products/hair-vitalizer.png", "/images/lifestyle/hair-botanical.png"],
    hoverImage: "/images/lifestyle/hair-botanical.png",
    background: "#EFE8D8",
    benefits: ["21 herbs, one powerful formula", "Strengthens from follicle to tip", "For all hair types"],
    features: [
      { title: "21 herbs, one powerful formula", copy: "Meticulously formulated with 21 of Ayurveda’s most potent hair-care herbs, this vitalizer delivers concentrated nourishment directly to the scalp, targeting hair fall at its root cause." },
      { title: "Clinically proven hair strengthening", copy: "Fortifies each strand from follicle to tip, dramatically reducing breakage, split ends and thinning — while building visible thickness and body over time." },
      { title: "Accelerates hair growth", copy: "Stimulates blood microcirculation in the scalp, awakening dormant follicles and creating the ideal conditions for faster, longer and healthier hair growth." },
      { title: "Deep scalp cleansing & repair", copy: "Dissolves scalp build-up, excess sebum and impurities that choke follicles, restoring a clean, balanced scalp environment where hair can truly thrive." },
      { title: "Universal — all hair types", copy: "Whether fine or thick, straight or curly, oily or dry scalp — this vitalizer adapts to your hair’s unique needs and delivers results for every hair type." },
      { title: "Cruelty-free & chemical-free", copy: "Pure Ayurvedic goodness with no harmful additives. Tested with care, never on animals." },
    ],
    ingredientNotes: [
      { name: "Amla (Indian Gooseberry)", copy: "A cornerstone of Ayurvedic hair care, Amla is exceptionally rich in Vitamin C and antioxidants that strengthen hair follicles from within, help prevent premature greying, and give hair a natural, lustrous shine." },
      { name: "Bhringraj", copy: "Rightfully called the “King of Herbs” for hair, Bhringraj penetrates the scalp to stimulate new follicle activity, dramatically reduce hair fall, and support the growth of thick, long, healthy hair." },
      { name: "Rosemary", copy: "A clinically backed herb for scalp health, Rosemary improves blood flow to the follicles, revives inactive hair roots, and builds visible hair density and fullness with consistent use." },
      { name: "Neem", copy: "Nature’s most powerful scalp purifier, Neem eliminates dandruff-causing fungi, controls excess oil, soothes scalp irritation, and creates a clean foundation for unobstructed hair growth." },
      { name: "17 additional herbs", copy: "A synergistic blend of 17 more Ayurvedic botanicals — including Brahmi, Hibiscus, Fenugreek and more — that collectively nourish, repair and energize the scalp for sustained, long-term hair vitality." },
    ],
    steps: [
      "Section hair to fully expose the scalp.",
      "Apply the vitalizer directly onto the scalp using the precision nozzle tip.",
      "Massage in firm, circular motions with fingertips for 3–5 minutes to activate blood flow.",
      "Leave on for a minimum of 30 minutes — or overnight for deeper penetration.",
      "Wash out with a mild shampoo. For best results, use consistently 2–3 times per week.",
    ],
    howToUse: "Section the hair, apply directly to the scalp, and massage for 3–5 minutes. Leave for at least 30 minutes, or overnight. Rinse with a mild shampoo, two to three times each week.",
    ingredients: "Amla, Bhringraj, Rosemary, Neem, and a synergistic blend of 17 additional Ayurvedic botanicals including Brahmi, Hibiscus and Fenugreek.",
    details: "Net vol. 100 ml. Suitable for all hair types. Cruelty-free. Chemical-free. Use 2–3 times per week.",
    inStock: true,
    featured: true,
    newest: false,
    tags: ["hair", "growth", "herbs", "amla", "rosemary", "bhringraj", "neem"],
  },
  {
    id: "glow-up-face-cream",
    slug: "neyvora-glow-up-face-cream",
    name: "Neyvora Skin Glow — Glow Up Face Cream",
    category: "Skin Care",
    categorySlug: "skin-care",
    price: 319,
    compareAt: null,
    rating: 4.9,
    reviewCount: 212,
    volume: "50 g",
    subtitle: "Net Wt. 50 g · Paraben-Free",
    shortDescription: "Hydrate. Illuminate. Smooth.",
    description:
      "Powered by cucumber extract and vitamin E, this face cream works within the skin to wash away dullness and bring forward a luminous, healthy glow — with deep hydration that lasts all day.",
    eyebrow: "The Glow Ritual",
    images: ["/images/products/glow-cream.png", "/images/lifestyle/glow-still.png"],
    hoverImage: "/images/lifestyle/glow-still.png",
    background: "#E7EDE8",
    benefits: ["Restores natural radiance", "24-hour deep hydration", "Paraben-free daily care"],
    features: [
      { title: "Restores natural radiance", copy: "Powered by cucumber extract and vitamin E, this face cream works deep within the skin to wash away dullness and bring forward a luminous, healthy glow that lasts all day." },
      { title: "24-hour deep hydration", copy: "The rich yet lightweight formula seals in moisture from the first application, leaving skin soft, plump and nourished around the clock." },
      { title: "Visibly smooths fine lines", copy: "Nature’s finest ingredients work in harmony to soften fine lines, improve skin elasticity, and reveal a smoother, more youthful complexion with continued use." },
      { title: "Firms & strengthens skin", copy: "Reinforces the skin’s natural protective barrier, helping it stay firm, resilient and shielded from daily environmental aggressors such as pollution and UV exposure." },
      { title: "100% paraben-free", copy: "A clean, conscious formula free from harsh chemicals, making it safe and gentle for all skin types, including sensitive skin." },
    ],
    ingredientNotes: [
      { name: "Cucumber extract", copy: "Packed with natural cooling and hydrating properties, cucumber extract soothes irritated skin, reduces puffiness, and delivers deep cellular hydration for a refreshed, calm complexion." },
      { name: "Vitamin E", copy: "A gold-standard antioxidant in skincare, vitamin E shields skin from free radical damage, accelerates cell repair, and intensely nourishes for a softer, healthier skin feel." },
      { name: "Moisturizing base", copy: "A carefully crafted blend that forms a protective layer on the skin’s surface, preventing moisture loss and keeping skin supple and smooth all day long." },
    ],
    steps: [
      "Begin with a clean, freshly washed face — pat dry gently.",
      "Scoop a small amount of cream using your fingertips.",
      "Dot onto forehead, cheeks, nose and chin, then blend evenly using upward circular strokes.",
      "Apply every morning and night as the final step in your skincare ritual.",
      "In the morning, layer sunscreen on top for complete protection and a lasting glow.",
    ],
    howToUse: "On a clean face, warm a small amount between the fingertips. Blend in upward circles over face and neck, morning and evening. Follow with sunscreen by day.",
    ingredients: "Cucumber extract and vitamin E in a paraben-free moisturizing base, designed to nourish, protect, firm and smooth.",
    details: "Net wt. 50 g. For all skin types, including sensitive. 100% paraben-free.",
    inStock: true,
    featured: true,
    newest: true,
    tags: ["glow", "skincare", "cucumber", "vitamin e", "face cream"],
  },
  {
    id: "ubtan-face-wash",
    slug: "neyvora-ubtan-face-wash",
    name: "Neyvora Ubtan Face Wash",
    category: "Skin Care",
    categorySlug: "skin-care",
    price: 219,
    compareAt: null,
    rating: 4.7,
    reviewCount: 98,
    volume: "100 ml",
    subtitle: "With Turmeric & Kumkumadi · For All Skin Types",
    shortDescription: "Exfoliate. Brighten. Restore.",
    description:
      "Born from the ancient Indian Ubtan ritual, this face wash harnesses turmeric, saffron and kumkumadi to cleanse, brighten and refine — a gentle daily transformation for every skin type.",
    eyebrow: "Skin Care",
    images: ["/images/products/ubtan-face-wash.png", "/images/lifestyle/botanical-still.png"],
    hoverImage: "/images/lifestyle/botanical-still.png",
    background: "#F3E6D4",
    benefits: ["The ancient art of Ubtan", "Brightens with turmeric & saffron", "Gentle for all skin types"],
    features: [
      { title: "Rooted in Ayurvedic tradition", copy: "Born from the ancient Indian Ubtan ritual passed down through generations, this face wash harnesses the collective power of turmeric, saffron and kumkumadi to cleanse, brighten and transform skin." },
      { title: "Brightens dull skin", copy: "Haldi (turmeric) — Ayurveda’s golden ingredient — visibly brightens the complexion, fades dark spots, and evens out skin tone from the very first wash." },
      { title: "The power of Kumkumadi", copy: "Enriched with the sacred Kumkumadi formulation, this face wash goes beyond cleansing to restore the skin’s inner radiance and refine surface texture." },
      { title: "Exfoliates, unclogs & detoxifies", copy: "The natural Ubtan base gently removes dead skin cells and deep-seated impurities, leaving pores clean and skin visibly smoother and more even-toned." },
      { title: "Saffron-enriched glow", copy: "Kesar’s antioxidant-rich profile fights pollution damage, brightens stubborn pigmentation, and adds a warm, natural luminosity to the complexion." },
      { title: "Safe for all skin types", copy: "Sulphate-free, paraben-free and dermatologically gentle — suitable even for daily use on sensitive skin." },
    ],
    ingredientNotes: [
      { name: "Turmeric (Haldi)", copy: "Revered for thousands of years in Ayurvedic beauty, Haldi is a natural brightener, anti-inflammatory and blemish-fighter that brings a visible clarity and glow to the complexion." },
      { name: "Kumkumadi", copy: "This ancient Ayurvedic formulation — a blend of saffron, sandalwood and precious botanicals — is renowned for restoring skin radiance, evening skin tone and refining texture with every use." },
      { name: "Saffron (Kesar)", copy: "One of the world’s most precious natural ingredients, Kesar brightens dark patches, evens pigmentation, and floods skin with antioxidants that protect against daily damage." },
      { name: "Ubtan base", copy: "The traditional grain and herb base at the heart of this formula provides gentle physical exfoliation, thorough deep cleansing, and leaves skin naturally soft and smooth after every wash." },
    ],
    steps: [
      "Splash lukewarm water onto the face to open pores.",
      "Squeeze a coin-sized amount onto the palm and work into a rich lather.",
      "Massage onto face and neck in gentle circular motions for 60–90 seconds.",
      "Rinse off completely with cool water and pat dry.",
      "Follow with Neyvora Skin Glow Face Cream for a complete glow ritual. Use morning and evening.",
    ],
    howToUse: "Work a coin-sized amount into a lather. Massage face and neck for 60–90 seconds, rinse with cool water, and follow with Glow Up Face Cream. Morning and evening.",
    ingredients: "Turmeric (Haldi), Kumkumadi, Saffron (Kesar) and a traditional Ubtan base. Sulphate-free and paraben-free.",
    details: "Net vol. 100 ml. For all skin types, including sensitive. Sulphate-free. Paraben-free. For daily morning and evening use.",
    inStock: true,
    featured: true,
    newest: true,
    tags: ["face wash", "ubtan", "turmeric", "saffron", "kumkumadi", "glow"],
  },
  {
    id: "daily-ritual-set",
    slug: "neyvora-daily-ritual-set",
    name: "The Daily Ritual Set",
    category: "Ritual Set",
    categorySlug: "ritual-set",
    price: 799,
    compareAt: 857,
    rating: 5,
    reviewCount: 64,
    volume: "Set of three",
    subtitle: "Cleanse. Glow. Nourish. · Three essentials",
    shortDescription: "Cleanse. Glow. Nourish.",
    description:
      "The complete NeyVora ritual: Ubtan Face Wash, Glow Up Face Cream and Hair Growth Vitalizer — gathered as a quieter way to begin and end the day.",
    eyebrow: "The Collection",
    images: ["/images/lifestyle/hero-campaign.png", "/images/products/ubtan-face-wash.png", "/images/products/glow-cream.png", "/images/products/hair-vitalizer.png"],
    hoverImage: "/images/lifestyle/atelier-wide.png",
    background: "#E7DFD2",
    benefits: [
      "A complete morning and evening ritual",
      "Hair, skin and glow — in one composition",
      "Thoughtfully gathered, beautifully given",
    ],
    features: [
      { title: "Ubtan Face Wash", copy: "Cleanse and brighten with turmeric, saffron and kumkumadi — the first gesture of the ritual." },
      { title: "Glow Up Face Cream", copy: "Seal in moisture and radiance with cucumber and vitamin E, morning and night." },
      { title: "Hair Growth Vitalizer", copy: "Nourish the scalp with 21 herbs. Leave on, then rinse — two to three times each week." },
    ],
    ingredientNotes: [
      { name: "The complete composition", copy: "Includes Neyvora Ubtan Face Wash, Glow Up Face Cream and Hair Growth Vitalizer. See each ritual for its full botanical notes." },
    ],
    steps: [
      "Begin with Ubtan Face Wash on a damp face.",
      "Follow with Glow Up Face Cream, pressed over face and neck.",
      "Apply Hair Growth Vitalizer to the scalp two to three times each week.",
      "Repeat the skin ritual each evening.",
    ],
    howToUse: "Cleanse, glow, then nourish. Repeat the skin ritual morning and night; use the vitalizer two to three times each week.",
    ingredients: "Includes Neyvora Ubtan Face Wash, Glow Up Face Cream and Hair Growth Vitalizer.",
    details: "Set of three. Complimentary shipping included.",
    inStock: true,
    featured: false,
    newest: true,
    tags: ["set", "ritual", "gift", "collection"],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function featuredProducts() {
  return products.filter((p) => p.featured);
}

export function relatedProducts(slug: string) {
  return products.filter((p) => p.slug !== slug).slice(0, 3);
}

export function searchProducts(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return products.filter((p) =>
    [p.name, p.category, p.shortDescription, p.description, ...p.tags].join(" ").toLowerCase().includes(q)
  );
}

export function formatPrice(n: number) {
  return `₹${n}`;
}

export function getShopProducts(category = "all", sort = "featured") {
  const list = products.filter((p) => (category === "all" ? true : p.categorySlug === category));
  if (sort === "price-asc") return [...list].sort((a, b) => a.price - b.price);
  if (sort === "price-desc") return [...list].sort((a, b) => b.price - a.price);
  if (sort === "newest") return [...list].sort((a, b) => Number(b.newest) - Number(a.newest));
  return [...list].sort((a, b) => Number(b.featured) - Number(a.featured));
}
