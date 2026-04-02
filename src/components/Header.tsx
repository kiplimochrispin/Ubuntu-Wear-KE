import { FormEvent, useMemo, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { products } from '../data/siteData';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';

type HeaderProps = {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
};

export function Header({ theme, onToggleTheme }: HeaderProps) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const suggestions = useMemo(() => {
    if (!query.trim()) {
      return [];
    }

    return products
      .filter((product) => `${product.name} ${product.category} ${product.tags.join(' ')}`.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 5);
  }, [query]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/shop?search=${encodeURIComponent(query)}`);
    setQuery('');
  };

  return (
    <header className="site-header">
      <div className="container header-shell">
        <Link to="/" className="brand-link">
          <Logo />
        </Link>

        <form className="search-shell" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search attires, brands, categories..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label="Search products"
          />
          <button type="submit">Search</button>
          {suggestions.length > 0 ? (
            <div className="search-suggestions">
              {suggestions.map((product) => (
                <Link key={product.id} to={`/product/${product.slug}`} onClick={() => setQuery('')}>
                  <span>{product.name}</span>
                  <small>{product.category}</small>
                </Link>
              ))}
            </div>
          ) : null}
        </form>

        <nav className="main-nav" aria-label="Main navigation">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/sell">Sell</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className="header-actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <Link to="/account" className="button button-light">
            Account
          </Link>
          <Link to="/cart" className="button button-dark">
            Cart
          </Link>
        </div>
      </div>
    </header>
  );
}
