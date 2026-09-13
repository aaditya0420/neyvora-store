export const metadata = { title: "FAQs · NeyVora" };

const faqs = [
  ["Are NeyVora products suitable for all skin and hair types?", "Yes. The collection is composed for daily use across types, with gentle, considered formulas."],
  ["When will I receive complimentary shipping?", "On every order above ₹499."],
  ["Are the formulas paraben-free?", "Glow Up Face Cream is paraben-free. The Hair Growth Vitalizer is formulated without sulphates and parabens."],
  ["How do I begin a ritual?", "Cleanse with Ubtan Face Wash, follow with Glow Up Face Cream, and nourish the scalp with Hair Growth Vitalizer."],
];

export default function FaqsPage() {
  return (
    <>
      <header className="page-intro">
        <p className="eyebrow">Help</p>
        <h1 className="serif">Frequently asked</h1>
        <div className="page-intro-copy">
          <p>A few notes on rituals, shipping and the collection.</p>
        </div>
      </header>
      <section className="legal-list">
        {faqs.map(([q, a]) => (
          <article key={q}>
            <h2>{q}</h2>
            <p>{a}</p>
          </article>
        ))}
      </section>
    </>
  );
}
