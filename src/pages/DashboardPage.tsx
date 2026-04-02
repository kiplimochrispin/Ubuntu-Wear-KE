import { sellerStats } from '../data/siteData';

export function DashboardPage() {
  return (
    <div className="container page-shell">
      <section className="page-hero">
        <span className="eyebrow">Seller dashboard</span>
        <h1>Manage listings, orders, earnings, and analytics in one place.</h1>
      </section>
      <div className="stats-grid">
        {sellerStats.map((item) => (
          <article key={item.label} className="stat-card">
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </article>
        ))}
      </div>
      <section className="dashboard-grid">
        <article className="panel-card">
          <h2>My Listings</h2>
          <p>48 active items across formalwear, streetwear, and accessories.</p>
        </article>
        <article className="panel-card">
          <h2>Orders</h2>
          <p>7 awaiting dispatch, 9 in transit, 3 delivered today.</p>
        </article>
        <article className="panel-card">
          <h2>Earnings</h2>
          <p>Weekly payout scheduled to your preferred settlement method.</p>
        </article>
        <article className="panel-card">
          <h2>Analytics</h2>
          <p>Top traffic sources: Instagram, direct search, homepage recommendations.</p>
        </article>
      </section>
    </div>
  );
}
