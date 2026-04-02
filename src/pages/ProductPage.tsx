import { Link, useParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/siteData';

export function ProductPage() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug) ?? products[0];
  const recommendations = products.filter((item) => item.slug !== product.slug).slice(0, 3);

  return (
    <div className="container page-shell">
      <section className="product-detail-grid">
        <div>
          <img src={product.gallery[0]} alt={product.name} className="hero-product-image" />
          <div className="gallery-row">
            {product.gallery.map((image) => (
              <img key={image} src={image} alt={product.name} />
            ))}
          </div>
        </div>
        <div className="product-info-panel">
          <span className="eyebrow">{product.category}</span>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <div className="price-row">
            <strong>KES {product.price.toLocaleString()}</strong>
            {product.originalPrice ? <span>KES {product.originalPrice.toLocaleString()}</span> : null}
          </div>
          <div className="detail-grid">
            <div>
              <strong>Brand</strong>
              <span>{product.brand}</span>
            </div>
            <div>
              <strong>Condition</strong>
              <span>{product.condition}</span>
            </div>
            <div>
              <strong>Size</strong>
              <span>{product.size}</span>
            </div>
            <div>
              <strong>Color</strong>
              <span>{product.color}</span>
            </div>
            <div>
              <strong>Location</strong>
              <span>{product.location}</span>
            </div>
            <div>
              <strong>Seller</strong>
              <span>{product.seller}</span>
            </div>
          </div>
          <div className="size-chart">
            <h3>Size chart</h3>
            <p>XS: 32-34 | S: 36-38 | M: 40-42 | L: 44-46 | XL: 48-50</p>
          </div>
          <div className="product-actions">
            <button type="button" className="button button-accent">
              Buy Now
            </button>
            <button type="button" className="button button-light">
              Add to Cart
            </button>
          </div>
          <div className="checkout-note">
            <p>Checkout placeholders: M-Pesa, Visa / Mastercard, PayPal.</p>
            <p>Order tracking: packed, in transit, delivered.</p>
          </div>
        </div>
      </section>

      <section className="section compact-section">
        <div className="section-heading split-heading">
          <div>
            <span className="eyebrow">You may also like</span>
            <h2>Recommended styles in the same mood.</h2>
          </div>
          <Link to="/shop" className="inline-link">
            Back to Shop
          </Link>
        </div>
        <div className="product-grid">
          {recommendations.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
