import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="page-section shell">
      <div className="page-hero"><span>Contact</span><h1>Discuss inventory, quotations or a supply partnership.</h1><p>Email is the primary contact route during the pilot phase.</p></div>
      <div className="contact-layout">
        <div className="contact-card"><span>Direct contact</span><h2>info@celaris.nl</h2><p>For buyer requests, seller introductions, documentation and logistics questions.</p><a className="button button-light" href="mailto:info@celaris.nl">Send email</a></div>
        <form name="contact-form" method="POST" data-netlify="true" action="/contact?sent=true" className="contact-form">
          <input type="hidden" name="form-name" value="contact-form" />
          <label>Name *<input required name="name" /></label>
          <label>Company<input name="company" /></label>
          <label>Email *<input required type="email" name="email" /></label>
          <label>Message *<textarea required rows={7} name="message" /></label>
          <button type="submit" className="button button-primary">Send message</button>
        </form>
      </div>
    </section>
  );
}
