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
    slug: "simple-path-to-wealth",
    title: "The Simple Path to Wealth",
    author: "JL Collins",
    category: "Investing",
    description:
      "The clearest, most no-nonsense roadmap to financial independence ever written. Collins distills decades of investing wisdom into one simple truth: own index funds, avoid debt, and let time do the work.",
    keyTakeaways: [
      "F-you money is the foundation of a free life",
      "Index funds beat almost every other investment strategy",
      "Avoid debt like the illness it is",
      "The stock market is a wealth-building machine — if you leave it alone",
      "Financial independence is simpler than the financial industry wants you to believe",
    ],
    amazonUrl: `https://www.amazon.com/Simple-Path-Wealth-financial-independence/dp/1533667926?tag=${AFFILIATE_TAG}`,
    coverImage: "/books/simple-path-to-wealth.jpg",
    coverColor: "#1a2a1a",
    featured: false,
    rating: 5,
  },
  {
    slug: "wealth-ladder",
    title: "The Wealth Ladder",
    author: "Nick Maggiulli",
    category: "Investing",
    description:
      "A data-driven guide to building wealth at every stage of life. Maggiulli maps out the specific strategies that actually move the needle depending on where you are financially — not one-size-fits-all advice.",
    keyTakeaways: [
      "Different financial stages require different strategies",
      "Data beats intuition in personal finance decisions",
      "Early career: focus on income growth over optimization",
      "Mid-career: eliminate high-cost debt aggressively",
      "Late career: shift from accumulation to preservation",
    ],
    amazonUrl: `https://www.amazon.com/Wealth-Ladder-Proven-Strategies-Financial/dp/0593854039?tag=${AFFILIATE_TAG}`,
    coverImage: "/books/wealth-ladder.jpg",
    coverColor: "#2a1a2a",
    featured: false,
    rating: 4,
  },
  {
    slug: "art-of-spending-money",
    title: "The Art of Spending Money",
    author: "Morgan Housel",
    category: "Mindset",
    description:
      "Most personal finance books tell you how to save. Housel asks a harder question: how do you spend in a way that actually makes you happy? A follow-up to The Psychology of Money that's equally sharp.",
    keyTakeaways: [
      "Spending is a skill — most people are bad at it",
      "Experiences compound; things depreciate",
      "The goal isn't to spend less — it's to spend on what matters",
      "Guilt-free spending requires intentionality, not deprivation",
      "Your relationship with money shapes every purchase you make",
    ],
    amazonUrl: `https://www.amazon.com/Art-Spending-Money-Simple-Choices/dp/0593716620?tag=${AFFILIATE_TAG}`,
    coverImage: "/books/art-of-spending-money.jpg",
    coverColor: "#2a2a1a",
    featured: false,
    rating: 4,
  },
  {
    slug: "quit-like-a-millionaire",
    title: "Quit Like a Millionaire",
    author: "Kristy Shen & Bryce Leung",
    category: "Investing",
    description:
      "How two engineers retired in their early 30s — without a trust fund, inheritance, or lucky startup exit. A practical, math-first guide to FIRE (Financial Independence, Retire Early) that actually shows the numbers.",
    keyTakeaways: [
      "Early retirement is a math problem, not a lifestyle fantasy",
      "The 4% rule: withdraw 4% of your portfolio annually to never run out",
      "Geographic arbitrage can dramatically accelerate your timeline",
      "Flexibility in spending protects against sequence-of-returns risk",
      "The point isn't to stop working — it's to stop having to work",
    ],
    amazonUrl: `https://www.amazon.com/Quit-Like-Millionaire-Gimmicks-Required/dp/0525538240?tag=${AFFILIATE_TAG}`,
    coverImage: "/books/quit-like-a-millionaire.jpg",
    coverColor: "#1a1a3a",
    featured: false,
    rating: 5,
  },
  {
    slug: "money-for-couples",
    title: "Money for Couples",
    author: "Ramit Sethi",
    category: "Budgeting",
    description:
      "The New York Times bestseller that tackles the #1 relationship stressor. Sethi's 10-step program helps couples align on money — not just spreadsheets, but the psychology, power dynamics, and conversations behind them.",
    keyTakeaways: [
      "Money fights are rarely about money — they're about values and power",
      "Align on your Rich Life vision before optimizing tactics",
      "Automate shared finances so you fight less and build more",
      "Have the hard conversations early; silence is expensive",
      "A couples' financial system requires maintenance, not just setup",
    ],
    amazonUrl: `https://www.amazon.com/Money-Couples-Stress-Fights-Together/dp/1523523689?tag=${AFFILIATE_TAG}`,
    coverImage: "/books/money-for-couples.jpg",
    coverColor: "#3a1a2a",
    featured: false,
    rating: 4,
  },
  {
    slug: "rich-girl-nation",
    title: "Rich Girl Nation",
    author: "Katie Gatti Tassin",
    category: "Investing",
    description:
      "From the creator of Money with Katie, a leveled-up finance guide for women navigating a system that wasn't designed for them. Practical, sharp, and unapologetically direct about the wealth gaps that matter.",
    keyTakeaways: [
      "The gender wealth gap is structural — understanding it is the first step",
      "Investing aggressively early is the single biggest lever for women",
      "Don't wait for a partner to start building wealth",
      "Tax-advantaged accounts are the most underused tool for wealth building",
      "Negotiating compensation is non-negotiable",
    ],
    amazonUrl: `https://www.amazon.com/Rich-Girl-Nation-Financial-Futures/dp/0593718860?tag=${AFFILIATE_TAG}`,
    coverImage: "/books/rich-girl-nation.jpg",
    coverColor: "#1a3a3a",
    featured: false,
    rating: 4,
  },
  {
    slug: "opposite-of-spoiled",
    title: "The Opposite of Spoiled",
    author: "Ron Lieber",
    category: "Budgeting",
    description:
      "How to raise kids who are smart, generous, and grounded about money. Lieber, the NYT's 'Your Money' columnist, gives parents a framework for talking about money openly — without creating entitled or anxious kids.",
    keyTakeaways: [
      "Kids who understand money make better adults with money",
      "Allowance is a teaching tool, not a reward",
      "Answer your kids' money questions honestly — including about your own finances",
      "Generosity is a financial skill that can be taught",
      "The word 'no' teaches as much as the word 'yes'",
    ],
    amazonUrl: `https://www.amazon.com/Opposite-Spoiled-Raising-Grounded-Generous/dp/0062247018?tag=${AFFILIATE_TAG}`,
    coverImage: "/books/opposite-of-spoiled.jpg",
    coverColor: "#2a3a1a",
    featured: false,
    rating: 4,
  },
  {
    slug: "almanack-naval-ravikant",
    title: "The Almanack of Naval Ravikant",
    author: "Eric Jorgenson",
    category: "Mindset",
    description:
      "A curated collection of Naval Ravikant's wisdom on wealth and happiness. Not a finance book in the traditional sense — a philosophy of building leverage, making clear decisions, and defining wealth on your own terms.",
    keyTakeaways: [
      "Seek wealth, not money — wealth is assets that earn while you sleep",
      "Specific knowledge can't be taught; it's built through obsession",
      "Play long-term games with long-term people",
      "Judgment compounds more than effort",
      "Financial freedom is freedom from fear, not just want",
    ],
    amazonUrl: `https://www.amazon.com/Almanack-Naval-Ravikant-Wealth-Happiness/dp/1544514174?tag=${AFFILIATE_TAG}`,
    coverImage: "/books/almanack-naval-ravikant.jpg",
    coverColor: "#1a2a3a",
    featured: false,
    rating: 5,
  },
  {
    slug: "thinking-in-bets",
    title: "Thinking in Bets",
    author: "Annie Duke",
    category: "Mindset",
    description:
      "A former World Series of Poker champion explains why smart people make bad decisions — and how to think probabilistically instead. Directly applicable to investing, financial planning, and any high-stakes decision.",
    keyTakeaways: [
      "Separate decision quality from outcome quality — they're not the same",
      "Resulting: judging a decision by its outcome is a cognitive trap",
      "Think in probabilities, not certainties",
      "Seek out people who will tell you you're wrong",
      "Premortem: imagine failure before it happens to make better decisions",
    ],
    amazonUrl: `https://www.amazon.com/Thinking-Bets-Making-Smarter-Decisions/dp/0525533540?tag=${AFFILIATE_TAG}`,
    coverImage: "/books/thinking-in-bets.jpg",
    coverColor: "#3a2a2a",
    featured: false,
    rating: 4,
  },
  {
    slug: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    category: "Mindset",
    description:
      "The definitive guide to building habits that stick. While not a finance book, the framework applies directly to saving, investing, and spending — the financial behaviors that compound over a lifetime.",
    keyTakeaways: [
      "Small habits compound into remarkable results over time",
      "Identity-based habits are more durable than outcome-based ones",
      "Make good habits obvious, attractive, easy, and satisfying",
      "You don't rise to your goals — you fall to your systems",
      "The 1% rule: tiny improvements daily beat dramatic one-time changes",
    ],
    amazonUrl: `https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299?tag=${AFFILIATE_TAG}`,
    coverImage: "/books/atomic-habits.jpg",
    coverColor: "#1a3a2a",
    featured: false,
    rating: 5,
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
