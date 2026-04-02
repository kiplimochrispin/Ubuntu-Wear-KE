import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { categories, products } from '../data/siteData';

export function ShopPage() {
  const [searchParams] = useSearchParams();
  const [condition, setCondition] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [location, setLocation] = useState('All');
  const search = searchParams.get('search') ?? '';

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        !search ||
        `${product.name} ${product.description} ${product.brand} ${product.category}`
          .toLowerCase()
          .includes(search.toLowerCase());
      const matchesCondition = condition === 'All' || product.condition === condition;
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesLocation = location === 'All' || product.location === location;

      return matchesSearch && matchesCondition && matchesCategory && matchesLocation;
    });
  }, [condition, location, search, selectedCategory]);

  return (
    <div className="container page-shell">
      <section className="page-hero">
        <span className="eyebrow">Shop marketplace</span>
        <h1>Discover modern Kenyan fashion across curated categories.</h1>
        <p>
          Filter by price, size, color, brand, condition, category, and location to find pieces that match your fit and budget.
        </p>
      </section>

      <section className="filters-layout">
        <aside className="filters-panel">
          <h3>Filters</h3>
          <label>
            Condition
            <select value={condition} onChange={(event) => setCondition(event.target.value)}>
              <option>All</option>
              <option>New</option>
              <option>Used</option>
            </select>
          </label>
          <label>
            Category
            <select value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)}>
              <option>All</option>
              {categories.map((category) => (
                <option key={category.name}>{category.name}</option>
              ))}
            </select>
          </label>
          <label>
            Location
            <select value={location} onChange={(event) => setLocation(event.target.value)}>
              <option>All</option>
              {Array.from(new Set(products.map((product) => product.location))).map((city) => (
                <option key={city}>{city}</option>
              ))}
            </select>
          </label>
          <div className="filter-tags">
            {['Price: KES 2,000 - 15,000', 'Size range: S - XL', 'Color edits: Black, Gold, Emerald', 'Brand verified'].map(
              (tag) => (
                <span key={tag}>{tag}</span>
              ),
            )}
          </div>
        </aside>

        <div className="shop-results">
          <div className="results-header">
            <strong>{filteredProducts.length} styles found</strong>
            <span>Marketplace includes brand new and pre-owned attires.</span>
          </div>
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
