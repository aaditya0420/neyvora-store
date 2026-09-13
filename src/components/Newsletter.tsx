"use client";

import { useState } from "react";
import { IconArrow } from "./Icons";

export function Newsletter() {
  const [done, setDone] = useState(false);
  return (
    <section className="newsletter">
      <p className="eyebrow reveal">The NeyVora journal</p>
      <h2 className="serif reveal">Beauty worth returning to.</h2>
      <p className="news-copy reveal">Discover rituals, ingredients, new collections and thoughtful beauty notes.</p>
      <div className="reveal">
        {done ? (
          <p className="news-thanks">Welcome to the journal.</p>
        ) : (
          <form
            className="news-form"
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
          >
            <label>
              <span className="visually-hidden">Email</span>
              <input type="email" required placeholder="Email address" />
            </label>
            <button type="submit">
              Join the journal <IconArrow />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
