import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { categories, ctaText, flashSales, pageStructure, products, testimonials, whySell } from '../data/siteData';

export function HomePage() {
  return (
    <div>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Kenyan fashion marketplace</span>
            <h1>Buy and sell standout attires with modern African confidence.</h1>
            <p>
              Ubuntu Wear KE connects style lovers to curated fashion across formalwear, streetwear, traditional looks,
              casual edits, footwear, and accessories.
            </p>
            <div className="hero-actions">
              <Link to="/shop" className="button button-accent">
                {ctaText[0]}
              </Link>
              <Link to="/sell" className="button button-light">
                {ctaText[1]}
              </Link>
            </div>
            <div className="metric-row">
              <div>
                <strong>10K+</strong>
                <span>Style pieces listed</span>
              </div>
              <div>
                <strong>4.9/5</strong>
                <span>Buyer satisfaction</span>
              </div>
              <div>
                <strong>Secure</strong>
                <span>M-Pesa and card-ready checkout</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-stack">
              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80"
                alt="Fashion model in elegant attire"
              />
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80"
                alt="Model in smart menswear"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Trending collections</span>
            <h2>Seasonal edits built for bold wardrobes.</h2>
          </div>
          <div className="category-grid">
            {categories.map((category) => (
              <article key={category.name} className="category-card">
                <img src={category.image} alt={category.name} />
                <div>
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <span className="eyebrow">Flash sales</span>
              <h2>Limited offers moving fast.</h2>
            </div>
            <Link to="/shop" className="inline-link">
              Browse Deals
            </Link>
          </div>
          <div className="flash-grid">
            {flashSales.map((sale) => (
              <article key={sale} className="flash-card">
                <span>Limited Offer</span>
                <h3>{sale}</h3>
                <button type="button" className="button button-dark">
                  Browse Flash Sale
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <span className="eyebrow">Featured marketplace picks</span>
              <h2>New and pre-loved finds worth tapping now.</h2>
            </div>
            <Link to="/shop" className="inline-link">
              See all products
            </Link>
          </div>
          <div className="product-grid">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-highlight">
        <div className="container sell-grid">
          <div>
            <span className="eyebrow">Why sell with us?</span>
            <h2>Listing fashion should feel easy, secure, and profitable.</h2>
            <div className="check-list">
              {whySell.map((item) => (
                <div key={item} className="check-item">
                  <strong>+</strong>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <Link to="/sell" className="button button-dark">
              Start Selling
            </Link>
          </div>
          <div className="card-stack">
            {pageStructure.slice(0, 4).map((item) => (
              <article key={item} className="mini-card">
                {item}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Testimonials</span>
            <h2>Trusted by buyers and sellers across Kenya.</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="testimonial-card">
                <p>"{testimonial.quote}"</p>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
