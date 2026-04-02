export function SellPage() {
  return (
    <div className="container page-shell">
      <section className="page-hero">
        <span className="eyebrow">Sell your clothes</span>
        <h1>Turn wardrobe pieces into income with a cleaner selling workflow.</h1>
        <p>Upload photos, set your price, describe the fit, and get your listing live in minutes.</p>
      </section>

      <section className="sell-form-layout">
        <form className="listing-form">
          <h2>Create a listing</h2>
          <label>
            Upload photos
            <input type="file" multiple />
          </label>
          <label>
            Listing title
            <input type="text" placeholder="e.g. Nairobi Gold Thread Blazer" />
          </label>
          <label>
            Description
            <textarea rows={5} placeholder="Describe the fabric, fit, styling, and condition." />
          </label>
          <div className="form-grid-two">
            <label>
              Price
              <input type="number" placeholder="KES" />
            </label>
            <label>
              Size
              <input type="text" placeholder="M / 42 / One Size" />
            </label>
          </div>
          <div className="form-grid-two">
            <label>
              Condition
              <select>
                <option>New</option>
                <option>Used</option>
              </select>
            </label>
            <label>
              Category
              <select>
                <option>Men's Wear</option>
                <option>Women's Wear</option>
                <option>Traditional / Kenyan Attires</option>
                <option>Streetwear</option>
                <option>Formal</option>
                <option>Accessories</option>
                <option>Footwear</option>
              </select>
            </label>
          </div>
          <button type="submit" className="button button-dark">
            Publish Listing
          </button>
        </form>

        <div className="side-panel">
          <h3>Seller benefits</h3>
          <div className="check-list">
            {['Easy listing', 'Secure payments', 'Wide reach', 'Performance analytics'].map((item) => (
              <div key={item} className="check-item">
                <strong>+</strong>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="mini-card">
            Feature your listing for premium visibility and attract faster buyers during flash-sale periods.
          </div>
        </div>
      </section>
    </div>
  );
}
