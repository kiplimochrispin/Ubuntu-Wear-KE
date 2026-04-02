import { faqItems } from '../data/siteData';

export function FAQPage() {
  return (
    <div className="container page-shell">
      <section className="page-hero">
        <span className="eyebrow">FAQ</span>
        <h1>Answers to common marketplace questions.</h1>
      </section>
      <div className="faq-list">
        {faqItems.map((item) => (
          <article key={item.question} className="panel-card">
            <h2>{item.question}</h2>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
