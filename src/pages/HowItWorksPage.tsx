import { buyerSteps, sellerSteps } from '../data/siteData';

export function HowItWorksPage() {
  return (
    <div className="container page-shell">
      <section className="page-hero">
        <span className="eyebrow">How it works</span>
        <h1>Clear flows for both buyers and sellers.</h1>
      </section>
      <div className="two-column-grid">
        <article className="panel-card">
          <h2>For buyers</h2>
          {buyerSteps.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </article>
        <article className="panel-card">
          <h2>For sellers</h2>
          {sellerSteps.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </article>
      </div>
    </div>
  );
}
