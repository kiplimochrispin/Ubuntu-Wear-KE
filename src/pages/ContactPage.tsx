export function ContactPage() {
  return (
    <div className="container page-shell">
      <section className="page-hero">
        <span className="eyebrow">Contact us</span>
        <h1>Reach the team for support, seller onboarding, or brand partnerships.</h1>
      </section>
      <div className="two-column-grid">
        <article className="panel-card">
          <h2>Contact details</h2>
          <p>Email: hello@ubuntuwearke.co.ke</p>
          <p>Phone: +254 700 123 456</p>
          <p>Instagram: @ubuntuwearke</p>
        </article>
        <form className="panel-card contact-form">
          <h2>Send a message</h2>
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Email address" />
          <textarea rows={5} placeholder="Tell us what you need." />
          <button type="submit" className="button button-dark">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
