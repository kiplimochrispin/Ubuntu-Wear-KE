export function CartPage() {
  return (
    <div className="container page-shell">
      <section className="page-hero">
        <span className="eyebrow">Cart & checkout</span>
        <h1>Review your order and choose a secure payment method.</h1>
      </section>
      <div className="two-column-grid">
        <article className="panel-card">
          <h2>Cart summary</h2>
          <p>2 items selected</p>
          <p>Subtotal: KES 18,300</p>
          <p>Delivery: KES 500</p>
          <p>Total: KES 18,800</p>
        </article>
        <article className="panel-card">
          <h2>Payment options</h2>
          <p>M-Pesa</p>
          <p>Credit / Debit Card</p>
          <p>PayPal</p>
          <button type="button" className="button button-accent">
            Secure Checkout
          </button>
        </article>
      </div>
    </div>
  );
}
