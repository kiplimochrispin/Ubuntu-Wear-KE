type LegalPageProps = {
  type: 'privacy' | 'terms';
};

export function LegalPage({ type }: LegalPageProps) {
  const copy =
    type === 'privacy'
      ? {
          title: 'Privacy Policy',
          body: 'We collect the minimum profile, order, and listing data needed to operate the marketplace, communicate with users, and support secure checkout and order fulfillment.',
        }
      : {
          title: 'Terms & Conditions',
          body: 'All listings must accurately represent item condition, ownership, and pricing. Buyers and sellers are expected to follow marketplace policies for secure transactions and respectful conduct.',
        };

  return (
    <div className="container page-shell prose-page">
      <span className="eyebrow">Legal</span>
      <h1>{copy.title}</h1>
      <p>{copy.body}</p>
      <p>This demo site includes policy content placeholders designed to be replaced with final legal copy before launch.</p>
    </div>
  );
}
