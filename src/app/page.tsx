import Link from "next/link";
import { featuredProducts, formatPrice } from "@/data/products";
import { ProductGrid } from "@/components/ProductCard";
import { IconArrow, Stars } from "@/components/Icons";
import { Newsletter } from "@/components/Newsletter";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow reveal">The NeyVora ritual</p>
          <h1 className="serif reveal">
            Beauty,<em> rooted in nature.</em>
          </h1>
          <p className="hero-lead reveal">Thoughtfully crafted rituals designed to nourish your skin and reveal its natural radiance.</p>
          <div className="hero-actions reveal">
            <Link className="btn" href="/shop">
              Discover the collection <IconArrow />
            </Link>
            <Link className="btn-ghost" href="/story">
              Our story
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image">
            <img src="/images/lifestyle/hero-campaign.png" alt="A woman applying NeyVora cream in warm morning light" fetchPriority="high" decoding="async" />
          </div>
          <p className="hero-caption">The Glow Ritual · 2026</p>
        </div>
      </section>

      <section className="editorial">
        <p className="eyebrow reveal">The art of everyday beauty</p>
        <h2 className="serif reveal">
          Luxury is not excess.<em> It is intention.</em>
        </h2>
        <p className="editorial-copy reveal">NeyVora brings thoughtful ingredients, refined rituals and everyday beauty together in a quieter way.</p>
      </section>

      <ProductGrid items={featuredProducts()} variant="home" />

      <section className="feature">
        <div className="feature-media">
          <img src="/images/lifestyle/glow-still.png" alt="Cucumber, linen and marble — the Glow Up ritual" loading="lazy" decoding="async" />
        </div>
        <div className="feature-copy">
          <p className="eyebrow reveal">The glow ritual</p>
          <h2 className="serif reveal">Let your natural glow speak.</h2>
          <p className="feature-lead reveal">
            Powered by cucumber extract and vitamin E, this face cream works within the skin to wash away dullness and bring forward a luminous, healthy glow — with deep hydration that lasts all day.
          </p>
          <ul className="reveal">
            <li>Restores natural radiance</li>
            <li>24-hour deep hydration</li>
            <li>Paraben-free daily care</li>
          </ul>
          <div className="reveal">
            <p className="feature-price">{formatPrice(319)}</p>
            <Link className="btn" href="/product/neyvora-glow-up-face-cream">
              Discover the ritual <IconArrow />
            </Link>
          </div>
        </div>
      </section>

      <section className="composition">
        <div className="comp-large">
          <img src="/images/lifestyle/atelier-wide.png" alt="A sunlit NeyVora atelier bathroom" loading="lazy" decoding="async" />
          <span className="comp-overlay">The beauty of simplicity</span>
        </div>
        <div className="comp-stack">
          <div className="comp-small">
            <img src="/images/lifestyle/ritual-hands.png" alt="Hands pressing cream into the skin" loading="lazy" decoding="async" />
          </div>
          <div className="comp-small">
            <img src="/images/lifestyle/vanity-mirror.png" alt="A quiet vanity with linen and botanicals" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      <section className="philosophy">
        <div className="phil-head">
          <p className="eyebrow reveal">Our philosophy</p>
          <h2 className="serif reveal">Beauty, without the noise.</h2>
        </div>
        <ol className="phil-list">
          {[
            ["01", "Thoughtful formulas", "Each composition is edited until only what the skin and scalp need remains."],
            ["02", "Nature inspired", "Botanicals chosen for their quiet intelligence — amla, cucumber, turmeric, rosemary."],
            ["03", "Gentle rituals", "Beauty that belongs in the everyday: unhurried, sensorial, easy to keep."],
            ["04", "Timeless beauty", "A look that does not shout. Radiance that feels like it was always yours."],
          ].map(([n, t, c]) => (
            <li key={n} className="reveal">
              <span>{n}</span>
              <div>
                <h3>{t}</h3>
                <p>{c}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="ingredient">
        <div className="ing-media">
          <img src="/images/lifestyle/botanical-still.png" alt="Turmeric, saffron and botanicals arranged on linen" loading="lazy" decoding="async" />
        </div>
        <div className="ing-copy">
          <p className="eyebrow reveal">Inspired by nature</p>
          <h2 className="serif reveal">Every NeyVora ritual begins with a thoughtful approach to beauty.</h2>
          <div className="ing-notes">
            {[
              ["Botanical extracts", "Cucumber, amla and turmeric — plants with a long memory for skin and hair."],
              ["Nourishing oils", "Vitamin E and kumkumadi, chosen to soften, protect and restore radiance."],
              ["Gentle actives", "Formulas that work quietly. No spectacle. Only what belongs."],
            ].map(([t, c]) => (
              <article key={t} className="reveal">
                <h3>{t}</h3>
                <p>{c}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials">
        <p className="eyebrow reveal">What they say</p>
        <blockquote className="test-lead reveal">“Beautifully simple, wonderfully gentle.”</blockquote>
        <div className="test-grid">
          {[
            ["Beautifully simple, wonderfully gentle.", "Ananya R.", "Mumbai · Glow Up Face Cream"],
            ["The Ubtan wash feels like a quiet ceremony — warm, precise, never harsh.", "Meera S.", "Bengaluru · Ubtan Face Wash"],
            ["I reach for the vitalizer every evening. My hair looks fuller, my ritual slower.", "Kavya M.", "Delhi · Hair Growth Vitalizer"],
          ].map(([q, n, m]) => (
            <article key={n} className="reveal">
              <Stars />
              <p>“{q}”</p>
              <footer>
                <strong>{n}</strong>
                <span>{m}</span>
              </footer>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery">
        <div className="gallery-head">
          <div>
            <p className="eyebrow reveal">@NeyVora</p>
            <h2 className="serif reveal">Lived-in beauty.</h2>
          </div>
          <Link className="link-arrow reveal" href="/shop">
            Shop the look <IconArrow />
          </Link>
        </div>
        <div className="gallery-grid">
          {[
            ["gal-tall", "/images/lifestyle/hero-campaign.png", "Editorial portrait of the NeyVora glow ritual"],
            ["gal-mid", "/images/lifestyle/hair-botanical.png", "Rosemary, amla and oil for hair care"],
            ["gal-product", "/images/products/ubtan-face-wash.png", "NeyVora Ubtan Face Wash"],
            ["gal-square", "/images/lifestyle/vanity-mirror.png", "Atelier vanity with linen and eucalyptus"],
            ["gal-wide", "/images/lifestyle/ritual-hands.png", "The daily cream ritual"],
          ].map(([cls, src, alt]) => (
            <div key={alt} className={`${cls} reveal`}>
              <figure className="gal-figure">
                <img src={src} alt={alt} loading="lazy" decoding="async" />
                <figcaption>
                  <span>@neyvora</span>
                  <span>Shop the look →</span>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </section>

      <Newsletter />
    </>
  );
}
