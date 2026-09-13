export const metadata = {
  title: "Ingredients · NeyVora",
  description: "Botanical extracts, nourishing oils and gentle actives.",
};

const notes = [
  ["Botanical extracts", "Cucumber soothes and hydrates. Amla fortifies the scalp. Turmeric brightens with a gentle hand. Each extract is chosen for what it has always done well."],
  ["Nourishing oils", "Vitamin E protects. Kumkumadi, a classical oil of saffron and botanicals, restores the look of radiance without weight."],
  ["Gentle actives", "Twenty-one herbs in the Hair Growth Vitalizer. A paraben-free cream. A face wash for all skin types. Nothing is added for spectacle."],
];

export default function IngredientsPage() {
  return (
    <>
      <header className="page-intro">
        <p className="eyebrow">Inspired by nature</p>
        <h1 className="serif">Every ritual begins with a thoughtful approach.</h1>
        <div className="page-intro-copy">
          <p>We look to plants with a long memory for skin and hair, then refine them for the everyday.</p>
        </div>
      </header>
      <section className="legal-stack">
        {notes.map(([t, c]) => (
          <article key={t}>
            <h2>{t}</h2>
            <p>{c}</p>
          </article>
        ))}
      </section>
    </>
  );
}
