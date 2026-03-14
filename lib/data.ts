export interface Book {
  slug: string;
  title: string;
  author: string;
  category: string;
  description: string;
  keyTakeaways: string[];
  amazonUrl: string;
  coverImage: string; // path relative to /public
  coverColor: string; // fallback color
  featured: boolean;
  rating: number;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: number;
  bookSlugs: string[];
  body: string; // HTML string for now
}

export const AFFILIATE_TAG = "moneyshelf0e-20";

export const books: Book[] = [
  {
    slug: "psychology-of-money",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "Mindset",
    description:
      "Timeless lessons on wealth, greed, and happiness. Morgan Housel explores how our relationship with money is shaped by our emotions, biases, and personal history — not spreadsheets.",
    keyTakeaways: [
      "Wealth is what you don't spend — it's invisible by nature",
      "Reasonable > rational when it comes to financial decisions",
      "Saving is the gap between your ego and your income",
      "Long tails drive most outcomes — a few decisions matter enormously",
      "Getting rich and staying rich are completely different skills",
    ],
    amazonUrl: `https://www.amazon.com/Psychology-Money-Timeless-lessons-happiness/dp/0857197681?tag=${AFFILIATE_TAG}`,
    coverImage: "/books/psychology-of-money.jpg",
    coverColor: "#1a3a2a",
    featured: true,
    rating: 5,
  },
  {
    slug: "i-will-teach-you-to-be-rich",
    title: "I Will Teach You to Be Rich",
    author: "Ramit Sethi",
    category: "Budgeting",
    description:
      "A no-BS, 6-week program for young people to get their finances in order. Ramit Sethi cuts through the noise to deliver actionable advice on banking, saving, investing, and spending guilt-free.",
    keyTakeaways: [
      "Automate your finances so you never have to think about it",
      "Spend extravagantly on what you love, cut ruthlessly on what you don't",
      "Open the right accounts — most people don't even have that",
      "Negotiate everything: salary, bills, fees",
      "Invest early and consistently — time is your biggest advantage",
    ],
    amazonUrl: `https://www.amazon.com/Will-Teach-You-Rich-Second/dp/1523505745?tag=${AFFILIATE_TAG}`,
    coverImage: "/books/i-will-teach-you-to-be-rich.jpg",
    coverColor: "#2a1a3a",
    featured: true,
    rating: 5,
  },
  {
    slug: "millionaire-next-door",
    title: "The Millionaire Next Door",
    author: "Thomas J. Stanley",
    category: "Mindset",
    description:
      "The surprising truth about America's wealthy. Based on research of actual millionaires, Stanley reveals they live below their means, drive used cars, and accumulate wealth quietly.",
    keyTakeaways: [
      "Most millionaires don't look like millionaires",
      "Living below your means is the foundation of wealth",
      "High income ≠ high net worth",
      "First-generation wealth builders outperform inheritors",
      "Time spent planning finances correlates strongly with wealth",
    ],
    amazonUrl: `https://www.amazon.com/Millionaire-Next-Door-Surprising-Americas/dp/1589795474?tag=${AFFILIATE_TAG}`,
    coverImage: "/books/millionaire-next-door.jpg",
    coverColor: "#3a2a1a",
    featured: true,
    rating: 4,
  },
  {
    slug: "little-book-common-sense-investing",
    title: "The Little Book of Common Sense Investing",
    author: "John C. Bogle",
    category: "Investing",
    description:
      "The founder of Vanguard makes the definitive case for index fund investing. Simple, boring, and devastatingly effective — the only strategy most investors will ever need.",
    keyTakeaways: [
      "Index funds beat most actively managed funds over time",
      "Costs are the enemy of returns — minimize fees relentlessly",
      "Don't try to beat the market; own the market",
      "Time in the market beats timing the market",
      "Keep it simple: diversify broadly and hold forever",
    ],
    amazonUrl: `https://www.amazon.com/Little-Book-Common-Sense-Investing/dp/1119404509?tag=${AFFILIATE_TAG}`,
    coverImage: "/books/little-book-common-sense-investing.jpg",
    coverColor: "#1a2a3a",
    featured: false,
    rating: 5,
  },
];

export const articles: Article[] = [
  {
    slug: "why-saving-rate-matters-more-than-returns",
    title: "Why Your Savings Rate Matters More Than Your Investment Returns",
    excerpt:
      "Most people obsess over picking the right stocks. But the single biggest lever on your wealth isn't your returns — it's the gap between what you earn and what you spend.",
    publishedAt: "2026-03-10",
    readTime: 6,
    bookSlugs: ["psychology-of-money", "i-will-teach-you-to-be-rich"],
    body: `
      <p>Morgan Housel puts it plainly in <em>The Psychology of Money</em>: "Wealth is the nice cars not purchased. The diamonds not bought. The watches not worn, the clothes forgone and the first-class upgrade declined. Wealth is financial assets that haven't yet been converted into the stuff you see."</p>
      <p>We're conditioned to think investing is the path to wealth. Pick the right fund, find the right stock, optimize your portfolio allocation. But for most people, the return on investment barely moves the needle compared to one deceptively simple variable: your savings rate.</p>
      <h2>The math is brutal</h2>
      <p>A person who earns $80,000 and saves 30% will accumulate more wealth than someone earning $150,000 who saves 5% — given enough time. The first person is building a machine. The second is running a treadmill.</p>
      <p>Ramit Sethi's <em>I Will Teach You to Be Rich</em> frames it differently: automate your savings first, then live on the rest. Not the other way around. Most people save what's left after spending. Flip it.</p>
      <h2>What this means practically</h2>
      <p>You don't need to optimize for 0.3% better returns. You need to find a way to save more. That might mean negotiating a raise, cutting one large expense, or just setting up an automatic transfer the day after payday.</p>
      <p>The compounding effect of a higher savings rate, sustained over decades, dwarfs almost any investment strategy advantage.</p>
    `,
  },
  {
    slug: "index-funds-boring-path-to-wealth",
    title: "Index Funds: The Boring Path That Actually Works",
    excerpt:
      "John Bogle built Vanguard on a radical idea: don't try to beat the market, just own it. Decades later, the data is overwhelming. Here's why most investors should stop trying to be clever.",
    publishedAt: "2026-03-05",
    readTime: 5,
    bookSlugs: [
      "little-book-common-sense-investing",
      "psychology-of-money",
    ],
    body: `
      <p>John Bogle's core argument in <em>The Little Book of Common Sense Investing</em> is almost offensive in its simplicity: buy a broad index fund, keep costs low, and never sell. That's it. That's the whole strategy.</p>
      <p>And yet, this "boring" approach has consistently outperformed the vast majority of actively managed funds over any meaningful time horizon. Why? Costs. The average actively managed fund charges 1-2% annually. That sounds small. It isn't.</p>
      <h2>What fees actually cost you</h2>
      <p>On a $100,000 portfolio growing at 7% annually, the difference between 0.05% and 1.5% in fees is roughly $200,000 over 30 years. Not on returns — just on fees. You're paying someone else to probably underperform the market.</p>
      <p>Morgan Housel adds another layer in <em>The Psychology of Money</em>: our tendency to equate activity with results leads us to overtrade, chase performance, and sell at exactly the wrong time. Index funds remove that temptation by design.</p>
      <h2>The discipline it requires</h2>
      <p>The hard part isn't the strategy. The hard part is sitting still during a crash, watching your balance fall 30%, and doing nothing. That's where most investors destroy their own returns. Index funds don't eliminate volatility — they just make the right behavior (holding) easier to execute.</p>
    `,
  },
];

export function getBook(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug);
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getBooksForArticle(article: Article): Book[] {
  return article.bookSlugs.map((s) => getBook(s)).filter(Boolean) as Book[];
}
