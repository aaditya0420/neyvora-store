export const metadata = { title: "Privacy · NeyVora" };

export default function PrivacyPage() {
  return (
    <>
      <header className="page-intro">
        <p className="eyebrow">Legal</p>
        <h1 className="serif">Privacy</h1>
        <div className="page-intro-copy">
          <p>NeyVora treats your details with the same care we give our formulas.</p>
        </div>
      </header>
      <section className="legal-body">
        <p>This storefront is a frontend experience. Information entered in forms is not sent to a server and is used only to demonstrate the ritual of the site.</p>
        <p>Bag and wishlist preferences may be stored in your browser so your visit can continue quietly.</p>
      </section>
    </>
  );
}
