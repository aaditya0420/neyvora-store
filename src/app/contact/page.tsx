"use client";

import { useState } from "react";

export default function ContactPage() {
  const [done, setDone] = useState(false);
  return (
    <>
      <header className="page-intro">
        <p className="eyebrow">Help</p>
        <h1 className="serif">We would be glad to hear from you.</h1>
        <div className="page-intro-copy">
          <p>For orders, rituals and atelier notes, write to us. A member of the NeyVora house will reply with care.</p>
        </div>
      </header>
      <section className="contact-wrap">
        <div className="contact-meta">
          <p>
            <strong>Email</strong>hello@neyvora.com
          </p>
          <p>
            <strong>Hours</strong>Monday – Saturday · 10:00 – 18:00 IST
          </p>
        </div>
        {done ? (
          <p className="contact-thanks">Thank you. We have received your note.</p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
          >
            <label>
              Name
              <input required />
            </label>
            <label>
              Email
              <input type="email" required />
            </label>
            <label>
              Message
              <textarea rows={5} required />
            </label>
            <button className="btn" type="submit">
              Send message
            </button>
          </form>
        )}
      </section>
    </>
  );
}
