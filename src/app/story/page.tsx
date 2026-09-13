import Link from "next/link";
import { IconArrow } from "@/components/Icons";

export const metadata = {
  title: "Our Story · NeyVora",
  description: "NeyVora is a premium beauty house of thoughtful rituals, rooted in nature.",
};

export default function StoryPage() {
  return (
    <>
      <header className="page-intro">
        <p className="eyebrow">Our story</p>
        <h1 className="serif">A quieter house of beauty.</h1>
        <div className="page-intro-copy">
          <p>NeyVora began with a simple conviction: luxury is not excess. It is intention — in the ingredients we choose, the rituals we keep, and the way a formula feels on the skin.</p>
        </div>
      </header>
      <section className="story-feature">
        <div className="story-media">
          <img src="/images/lifestyle/atelier-wide.png" alt="The NeyVora atelier in morning light" loading="lazy" decoding="async" />
        </div>
      </section>
      <section className="story-essay">
        <p className="eyebrow">The atelier</p>
        <h2 className="serif">Beauty, rooted in nature.</h2>
        <div className="story-cols">
          <p>We look to botanicals that have been trusted for generations — amla and rosemary for the scalp, cucumber and vitamin E for radiance, turmeric, saffron and kumkumadi for a gentle cleanse — then refine them for everyday use.</p>
          <p>The NeyVora collection is small by design. Hair Growth Vitalizer. Glow Up Face Cream. Ubtan Face Wash. Together they form a complete ritual: nourish, illuminate, restore.</p>
        </div>
        <Link className="btn" href="/shop">
          Discover the collection <IconArrow />
        </Link>
      </section>
    </>
  );
}
