export type Category = {
  name: string;
  description: string;
  image: string;
};

export type Product = {
  id: number;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  size: string;
  color: string;
  brand: string;
  condition: 'New' | 'Used';
  category: string;
  location: string;
  seller: string;
  description: string;
  image: string;
  gallery: string[];
  tags: string[];
};

export const colorPalette = [
  { name: 'Midnight Black', hex: '#111111' },
  { name: 'Rich Gold', hex: '#c8a24d' },
  { name: 'Ivory White', hex: '#f8f4eb' },
  { name: 'Emerald Pulse', hex: '#05876c' },
  { name: 'Coral Heat', hex: '#f26a4b' },
  { name: 'Stone Gray', hex: '#d6d1c4' },
];

export const ctaText = [
  'Shop Now',
  'Sell Your Attire',
  'Browse Flash Sale',
  'List an Item Today',
  'Get Style Tips',
  'Start Selling',
  'Secure Checkout',
];

export const categories: Category[] = [
  {
    name: "Men's Wear",
    description: 'Sharp staples, relaxed fits, and premium essentials for everyday dressing.',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: "Women's Wear",
    description: 'Statement silhouettes, polished sets, and elevated wardrobe heroes.',
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Traditional / Kenyan Attires',
    description: 'Contemporary pieces inspired by East African heritage and occasion dressing.',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Streetwear',
    description: 'Layered textures, oversized cuts, and trend-led drops.',
    image:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Formal',
    description: 'Tailored edits for office polish, events, and black-tie confidence.',
    image:
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Accessories',
    description: 'Curated finishing touches from bags to jewelry and sunglasses.',
    image:
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Footwear',
    description: 'Sneakers, heels, loafers, and crafted shoes for every mood.',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Nairobi Gold Thread Blazer',
    slug: 'nairobi-gold-thread-blazer',
    price: 12900,
    originalPrice: 15200,
    size: 'M',
    color: 'Black / Gold',
    brand: 'Ubuntu Atelier',
    condition: 'New',
    category: 'Formal',
    location: 'Nairobi',
    seller: 'Amani Studio',
    description:
      'A sharply tailored blazer with a satin lapel and subtle kitenge piping for night events, weddings, and power meetings.',
    image:
      'https://images.unsplash.com/photo-1592878849122-5f6c4d5086b1?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1592878849122-5f6c4d5086b1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
    ],
    tags: ['formal', 'party', 'blazer', 'new'],
  },
  {
    id: 2,
    name: 'Savannah Breeze Linen Dress',
    slug: 'savannah-breeze-linen-dress',
    price: 7800,
    originalPrice: 9300,
    size: 'S',
    color: 'Ivory',
    brand: 'Maua Muse',
    condition: 'New',
    category: "Women's Wear",
    location: 'Mombasa',
    seller: 'Maua Muse',
    description:
      'A soft linen midi dress with an easy drape, wide straps, and a resort-ready shape made for warm Kenyan afternoons.',
    image:
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
    ],
    tags: ['dress', 'linen', 'women', 'vacation'],
  },
  {
    id: 3,
    name: 'Kilimani Vintage Denim Jacket',
    slug: 'kilimani-vintage-denim-jacket',
    price: 4900,
    size: 'L',
    color: 'Blue',
    brand: 'Levi Revival',
    condition: 'Used',
    category: 'Streetwear',
    location: 'Kisumu',
    seller: 'Urban Reclaim',
    description:
      'A pre-loved oversized denim jacket with a clean fade, structured collar, and enough room for layered city styling.',
    image:
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80',
    ],
    tags: ['streetwear', 'jacket', 'vintage', 'used'],
  },
  {
    id: 4,
    name: 'Heritage Kitenge Power Set',
    slug: 'heritage-kitenge-power-set',
    price: 11500,
    size: 'M',
    color: 'Emerald / Coral',
    brand: 'Kijiji Luxe',
    condition: 'New',
    category: 'Traditional / Kenyan Attires',
    location: 'Nakuru',
    seller: 'Kijiji Luxe',
    description:
      'A matching two-piece kitenge set cut with modern structure, perfect for celebrations, brunch, and standout everyday wear.',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
    ],
    tags: ['traditional', 'kitenge', 'set', 'new'],
  },
  {
    id: 5,
    name: 'Rift Valley Leather Loafers',
    slug: 'rift-valley-leather-loafers',
    price: 8600,
    originalPrice: 9900,
    size: '42',
    color: 'Brown',
    brand: 'Kifaru Footwear',
    condition: 'New',
    category: 'Footwear',
    location: 'Eldoret',
    seller: 'Kifaru Footwear',
    description:
      'Hand-finished leather loafers with a cushioned interior and refined silhouette for office and occasion use.',
    image:
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80',
    ],
    tags: ['footwear', 'formal', 'loafers', 'new'],
  },
  {
    id: 6,
    name: 'Westlands Crossbody Statement Bag',
    slug: 'westlands-crossbody-statement-bag',
    price: 5400,
    size: 'One Size',
    color: 'Black',
    brand: 'Soko Edit',
    condition: 'Used',
    category: 'Accessories',
    location: 'Nairobi',
    seller: 'Closet Exchange',
    description:
      'A clean crossbody bag with gold hardware, compact storage, and a polished finish for day-to-night styling.',
    image:
      'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80',
    ],
    tags: ['bag', 'accessories', 'used', 'women'],
  },
];

export const testimonials = [
  {
    name: 'Sharon M.',
    role: 'Buyer, Nairobi',
    quote: 'Ubuntu Wear KE feels premium and local at the same time. I found a wedding look in one evening and the checkout flow felt effortless.',
  },
  {
    name: 'Ian K.',
    role: 'Seller, Kisumu',
    quote: 'Listing pre-loved streetwear took minutes. The dashboard made it easy to track orders and earnings without guessing.',
  },
  {
    name: 'Njeri W.',
    role: 'Buyer & Seller, Mombasa',
    quote: 'I love the mix of designer-style pieces and affordable resale finds. It actually feels curated instead of cluttered.',
  },
];

export const flashSales = [
  'Weekend Drop: Up to 35% off formal edits',
  'Streetwear Steals: Buy 2, save KES 1,500',
  'Traditional Luxe: Free featured placement for sellers today',
];

export const whySell = [
  'Easy listing flow with guided photo uploads',
  'Secure payment placeholders for M-Pesa, cards, and PayPal',
  'Wide reach across Kenyan style shoppers',
  'Seller analytics for views, orders, and conversion',
];

export const buyerSteps = [
  'Search by style, brand, size, and location with instant suggestions.',
  'Save favorites to your wishlist and compare new versus pre-loved options.',
  'Checkout securely and track your order from payment to delivery.',
];

export const sellerSteps = [
  'Create a seller profile and upload attire photos from multiple angles.',
  'Set title, category, size, condition, and price in one clean form.',
  'Manage listings, orders, earnings, and performance from one dashboard.',
];

export const faqItems = [
  {
    question: 'Can I sell pre-loved clothes?',
    answer: 'Yes. Ubuntu Wear KE supports both brand-new and gently used attire, as long as listings accurately describe the condition.',
  },
  {
    question: 'Which payment methods are supported?',
    answer: 'The interface includes secure checkout placeholders for M-Pesa, card payments, and PayPal.',
  },
  {
    question: 'How do buyers know the sizing?',
    answer: 'Every product page includes a size chart, fit notes, and condition details to reduce sizing surprises.',
  },
  {
    question: 'Is the marketplace mobile-friendly?',
    answer: 'Yes. The layout is mobile-first and adapts cleanly for phones, tablets, and desktops.',
  },
];

export const blogPosts = [
  {
    title: 'How to Mix Streetwear with Kenyan Heritage Prints',
    excerpt: 'A practical guide to balancing bold prints, oversized layers, and clean accessories without overstyling the look.',
  },
  {
    title: '5 Formalwear Moves That Instantly Elevate Your Wardrobe',
    excerpt: 'From loafers to tailoring, these upgrades give work and event outfits a sharper finish.',
  },
  {
    title: 'Selling Pre-Loved Fashion Online Without Looking Amateur',
    excerpt: 'Use better lighting, pricing discipline, and honest condition notes to sell faster and build trust.',
  },
];

export const sellerStats = [
  { label: 'Active listings', value: '48' },
  { label: 'Orders this month', value: '19' },
  { label: 'Monthly earnings', value: 'KES 124K' },
  { label: 'Conversion rate', value: '6.8%' },
];

export const pageStructure = [
  'Homepage: hero, trending collections, category tiles, flash sales carousel, testimonials, why sell with us, recommendations, newsletter.',
  'Shop / Marketplace: filters, autocomplete search, product grid, resale and new condition tags, featured deals.',
  'Product Detail: gallery, price, size chart, condition, seller info, buy now, add to cart, recommendations, reviews.',
  'Sell Your Clothes: listing form, seller benefits, fee summary, photo upload placeholders.',
  'Seller Dashboard: listings, orders, earnings, analytics, performance cards.',
  'User Account: profile overview, saved items, recent orders, account settings.',
  'Cart / Checkout: cart summary, payment method placeholders, shipping timeline, order tracking.',
  'About Us, How It Works, Blog, Contact, FAQ, Privacy Policy, Terms.',
];
