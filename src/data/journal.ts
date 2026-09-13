export type Article = {
  slug: string;
  title: string;
  eyebrow: string;
  excerpt: string;
  date: string;
  minutes: string;
  image: string;
  imageAlt: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "the-morning-ritual",
    title: "The art of the morning ritual",
    eyebrow: "Journal",
    excerpt: "How a few unhurried minutes — warm water, light hands, considered formulas — can change the tenor of a day.",
    date: "March 2026",
    minutes: "4 min",
    image: "/images/lifestyle/ritual-hands.png",
    imageAlt: "The art of the morning ritual",
    body: [
      "Luxury, in the NeyVora atelier, is not a performance. It is the decision to begin slowly.",
      "A morning ritual need not be long. It asks only for attention: lukewarm water, a gentle cleanse, a cream pressed rather than rubbed, a moment at the scalp. The skin remembers what the day forgets.",
      "We believe formulas should recede so that feeling can come forward — hydration without weight, glow without glaze, strength without strain.",
    ],
  },
  {
    slug: "ingredients-worth-knowing",
    title: "Ingredients worth knowing",
    eyebrow: "Botanical notes",
    excerpt: "Amla, rosemary, cucumber, turmeric, saffron — a quieter vocabulary of beauty, chosen for what they do, not what they announce.",
    date: "February 2026",
    minutes: "5 min",
    image: "/images/lifestyle/botanical-still.png",
    imageAlt: "Ingredients worth knowing",
    body: [
      "Every NeyVora ritual begins with a thoughtful approach to beauty. We look to botanicals that have been trusted for generations, then refine them for everyday use.",
      "Cucumber and vitamin E for moisture and calm. Turmeric and kumkumadi for brightness. Twenty-one herbs, including amla and rosemary, for the scalp.",
      "Nothing is added for spectacle. What remains is intention.",
    ],
  },
  {
    slug: "a-quieter-kind-of-glow",
    title: "A quieter kind of glow",
    eyebrow: "Philosophy",
    excerpt: "Radiance is not a finish. It is the look of skin that has been cared for, consistently, without noise.",
    date: "January 2026",
    minutes: "3 min",
    image: "/images/lifestyle/glow-still.png",
    imageAlt: "A quieter kind of glow",
    body: [
      "There is a glow that comes from light on a marble vanity, and another that comes from skin that has been nourished.",
      "NeyVora is devoted to the second. Our Glow Up Face Cream is a daily companion — lightweight, hydrating, and designed to let your natural radiance speak.",
      "Beauty, rooted in nature. Beauty, without the noise.",
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
