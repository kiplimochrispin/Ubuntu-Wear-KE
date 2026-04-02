export function AccountPage() {
  return (
    <div className="container page-shell">
      <section className="page-hero">
        <span className="eyebrow">Buyer & seller profiles</span>
        <h1>Track account activity, saved styles, and recent orders.</h1>
      </section>
      <div className="dashboard-grid">
        <article className="panel-card">
          <h2>Profile</h2>
          <p>Manage buyer details, seller bio, shipping addresses, and payout settings.</p>
        </article>
        <article className="panel-card">
          <h2>Wishlist</h2>
          <p>12 saved items across footwear, formalwear, and accessories.</p>
        </article>
        <article className="panel-card">
          <h2>Orders</h2>
          <p>Order #UW-20341 is in transit. Order #UW-20317 was delivered yesterday.</p>
        </article>
      </div>
    </div>
  );
}
