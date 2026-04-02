import { Link } from 'react-router-dom';
import type { Product } from '../data/siteData';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} className="product-image" />
        <span className="product-badge">{product.condition}</span>
      </div>
      <div className="product-card-body">
        <div className="product-card-topline">
          <span>{product.category}</span>
          <span>{product.location}</span>
        </div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-card-meta">
          <div>
            <strong>KES {product.price.toLocaleString()}</strong>
            {product.originalPrice ? <span>KES {product.originalPrice.toLocaleString()}</span> : null}
          </div>
          <span>{product.size}</span>
        </div>
        <div className="product-card-actions">
          <Link to={`/product/${product.slug}`} className="button button-dark">
            Buy Now
          </Link>
          <button className="button button-light" type="button">
            Add to Wishlist
          </button>
        </div>
      </div>
    </article>
  );
}
