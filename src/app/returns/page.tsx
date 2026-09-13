export const metadata = { title: "Returns · NeyVora" };

export default function ReturnsPage() {
  return (
    <>
      <header className="page-intro">
        <p className="eyebrow">Help</p>
        <h1 className="serif">Returns</h1>
        <div className="page-intro-copy">
          <p>Unopened products may be returned within 7 days of delivery.</p>
        </div>
      </header>
      <section className="legal-body">
        <p>Please write to hello@neyvora.com with your order details.</p>
        <p>Opened or used products cannot be accepted, for the care of every client.</p>
        <p>Refunds are issued to the original method of payment once the return is received.</p>
      </section>
    </>
  );
}
