import { blogPosts } from '../data/siteData';

export function BlogPage() {
  return (
    <div className="container page-shell">
      <section className="page-hero">
        <span className="eyebrow">Blog / fashion tips</span>
        <h1>Style advice that helps people buy smarter and sell better.</h1>
      </section>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <article key={post.title} className="panel-card">
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <button type="button" className="button button-light">
              Read Article
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
