export const metadata = { title: "Shipping · NeyVora" };

export default function ShippingPage() {
  return (
    <>
      <header className="page-intro">
        <p className="eyebrow">Help</p>
        <h1 className="serif">Shipping</h1>
        <div className="page-intro-copy">
          <p>Complimentary shipping on all orders above ₹499, across India.</p>
        </div>
      </header>
      <section className="legal-body">
        <p>Orders are typically dispatched within 2–3 working days.</p>
        <p>Delivery estimates are shared at dispatch. A tracking note will follow.</p>
        <p>For assistance, write to hello@neyvora.com.</p>
      </section>
    </>
  );
}
