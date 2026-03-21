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
    slug: "die-with-zero",
    title: "Die With Zero",
    author: "Bill Perkins",
    category: "Mindset",
    description:
      "A provocative counterargument to conventional retirement wisdom. Perkins argues that dying with money left over is a financial planning failure — the goal should be to maximize your life experiences while you still have the health and energy to enjoy them.",
    keyTakeaways: [
      "Dying with money unspent means you traded life energy for nothing",
      "Experiences create 'memory dividends' that pay out for the rest of your life",
      "Give money to your kids when they're young enough to use it — not after you're gone",
      "Health, wealth, and free time peak at different ages — plan accordingly",
      "The goal isn't to die with zero dollars, it's to die with zero regrets",
    ],
    amazonUrl: `https://www.amazon.com/Die-Zero-Getting-Your-Money/dp/0358099765?tag=${AFFILIATE_TAG}`,
    coverImage: "/books/die-with-zero.jpg",
    coverColor: "#1a2a3a",
    featured: false,
    rating: 4,
  },
  {
    slug: "your-money-or-your-life",
    title: "Your Money or Your Life",
    author: "Vicki Robin",
    category: "Mindset",
    description:
      "The book that started the FIRE movement, written in 1992 and still unmatched. Robin and Dominguez reframe money as life energy — every dollar you spend costs not just cash but hours of your finite time on earth. The most philosophically rigorous personal finance book ever written.",
    keyTakeaways: [
      "Money is life energy: every purchase costs a portion of your irreplaceable time",
      "The 'real hourly wage' is far lower than your salary once you account for work-related expenses",
      "Track every dollar — awareness alone changes spending behavior",
      "The fulfillment curve: more money brings more happiness, until it doesn't",
      "The crossover point: when investment income exceeds expenses, you are financially free",
    ],
    amazonUrl: `https://www.amazon.com/Your-Money-Life-Transforming-Relationship/dp/0143115766?tag=${AFFILIATE_TAG}`,
    coverImage: "/books/your-money-or-your-life.jpg",
    coverColor: "#2a1a3a",
    featured: false,
    rating: 5,
  },
  {
    slug: "just-keep-buying",
    title: "Just Keep Buying",
    author: "Nick Maggiulli",
    category: "Investing",
    description:
      "Data-driven answers to the questions most personal finance books argue about endlessly. Maggiulli — the analyst behind Of Dollars and Data — cuts through financial debate with research: when to save vs. invest, how much to save, whether to pay off debt or invest, and why the best strategy is usually the one you'll actually stick to.",
    keyTakeaways: [
      "For most people, investing more matters more than investing better",
      "Lump sum investing beats dollar-cost averaging roughly two-thirds of the time",
      "The hardest part of investing is doing nothing when everything feels wrong",
      "Lifestyle creep isn't always bad — it's okay to spend more as you earn more",
      "You can't save your way to wealth; at some point, income growth is the only lever",
    ],
    amazonUrl: `https://www.amazon.com/Just-Keep-Buying-Proven-wealthy/dp/0857199250?tag=${AFFILIATE_TAG}`,
    coverImage: "/books/just-keep-buying.jpg",
    coverColor: "#1a3a2a",
    featured: false,
    rating: 5,
  },
  {
    slug: "set-for-life",
    title: "Set for Life",
    author: "Scott Trench",
    category: "Real Estate",
    description:
      "A step-by-step blueprint for reaching financial independence in your 20s and 30s, built around house hacking — buying a small multifamily property, living in one unit, and renting the rest. BiggerPockets CEO Scott Trench maps the exact path from broke to financially free using real estate as the accelerant.",
    keyTakeaways: [
      "House hacking can eliminate your largest expense while building equity simultaneously",
      "The path to wealth starts with aggressively cutting expenses, then earning more, then investing",
      "Real estate investing doesn't require huge capital — it requires the right first property",
      "Financial freedom is easier to reach in your 20s and 30s than at any other time",
      "A paid-off or cash-flowing first property changes every financial decision that follows",
    ],
    amazonUrl: `https://www.amazon.com/Set-Life-Dominate-American-Building/dp/1947200461?tag=${AFFILIATE_TAG}`,
    coverImage: "/books/set-for-life.jpg",
    coverColor: "#3a1a1a",
    featured: false,
    rating: 4,
  },
  {
    slug: "broke-millennial",
    title: "Broke Millennial",
    author: "Erin Lowry",
    category: "Budgeting",
    description:
      "A no-judgment guide to getting your finances together for the first time. Erin Lowry meets young people exactly where they are — anxious, confused, and avoiding their bank account — and walks them through the basics without condescension. The best first personal finance book for anyone who finds money overwhelming.",
    keyTakeaways: [
      "Understanding your 'money story' — where your financial behaviors come from — is the first step",
      "You don't need to be perfect; you need to be consistent",
      "Automating your finances removes willpower from the equation",
      "Credit cards aren't the enemy — misunderstanding them is",
      "Start before you feel ready; waiting for the perfect moment is how people lose decades",
    ],
    amazonUrl: `https://www.amazon.com/Broke-Millennial-Scraping-Financial-Together/dp/0143130404?tag=${AFFILIATE_TAG}`,
    coverImage: "/books/broke-millennial.jpg",
    coverColor: "#2a2a3a",
    featured: false,
    rating: 4,
  },
  {
    slug: "random-walk-down-wall-street",
    title: "A Random Walk Down Wall Street",
    author: "Burton Malkiel",
    category: "Investing",
    description:
      "The academic foundation of passive investing, first published in 1973 and updated through the present day. Malkiel's central argument — that stock prices follow a random walk and cannot be consistently predicted — laid the intellectual groundwork for the index fund revolution before Vanguard even existed.",
    keyTakeaways: [
      "Stock prices incorporate all available information; consistently beating the market is near impossible",
      "Technical and fundamental analysis rarely outperform a simple buy-and-hold index strategy",
      "Diversification is the only free lunch in investing",
      "Time in the market is the most powerful variable; start as early as possible",
      "Most actively managed funds underperform their benchmark after fees over any long time horizon",
    ],
    amazonUrl: `https://www.amazon.com/Random-Walk-Down-Wall-Street/dp/0393358380?tag=${AFFILIATE_TAG}`,
    coverImage: "/books/random-walk-down-wall-street.jpg",
    coverColor: "#1a2a2a",
    featured: false,
    rating: 5,
  },
  {
    slug: "the-index-card",
    title: "The Index Card",
    author: "Helaine Olen & Harold Pollack",
    category: "Budgeting",
    description:
      "The entire personal finance system on one index card. When University of Chicago professor Harold Pollack scribbled his financial rules on a notecard during a podcast, it went viral — because everything you need to know actually fits. Olen and Pollack expanded it into a book, but the premise holds: this stuff is not complicated.",
    keyTakeaways: [
      "Max out your 401(k) and other tax-advantaged accounts before anything else",
      "Buy index funds; never buy actively managed funds",
      "Pay off your credit card in full every month, no exceptions",
      "Make your financial life automatic so it doesn't depend on willpower",
      "Ignore financial advice from anyone trying to sell you something",
    ],
    amazonUrl: `https://www.amazon.com/Index-Card-Personal-Finance-Complicated/dp/1591847680?tag=${AFFILIATE_TAG}`,
    coverImage: "/books/the-index-card.jpg",
    coverColor: "#3a3a1a",
    featured: false,
    rating: 4,
  },
  {
    slug: "intelligent-investor",
    title: "The Intelligent Investor",
    author: "Benjamin Graham",
    category: "Investing",
    description:
      "Warren Buffett calls this 'by far the best book on investing ever written.' Graham's framework for value investing — buying stocks at a discount to their intrinsic value and maintaining a margin of safety — has shaped more successful long-term investors than any other text in the history of markets. Dense, but foundational.",
    keyTakeaways: [
      "The market is a voting machine in the short run and a weighing machine in the long run",
      "Mr. Market is your servant, not your guide — exploit his irrationality, don't follow it",
      "Margin of safety: never pay full price; always leave room to be wrong",
      "Distinguish between investing and speculation — most people do the latter while thinking they do the former",
      "The investor's chief problem — and worst enemy — is likely to be themselves",
    ],
    amazonUrl: `https://www.amazon.com/Intelligent-Investor-Definitive-Investing-Essentials/dp/0060555661?tag=${AFFILIATE_TAG}`,
    coverImage: "/books/intelligent-investor.jpg",
    coverColor: "#2a1a1a",
    featured: false,
    rating: 5,
  },
  {
    slug: "get-good-with-money",
    title: "Get Good with Money",
    author: "Tiffany Aliche",
    category: "Budgeting",
    description:
      "The Budgetnista's 10-step plan to financial wholeness. Tiffany Aliche rebuilt her own finances after losing everything in the 2008 recession, then taught over a million women to do the same. Practical, warm, and deeply accessible — the best step-by-step action plan for anyone starting from zero.",
    keyTakeaways: [
      "Financial wholeness is the goal, not just wealth — peace of mind included",
      "Know your numbers: income, fixed expenses, savings rate, net worth",
      "Automate every bill and savings transfer; decision fatigue kills good intentions",
      "Build credit intentionally — it's a financial tool, not a report card",
      "Investing doesn't have to be complicated: start with your employer match and a target-date fund",
    ],
    amazonUrl: `https://www.amazon.com/Get-Good-Money-Financial-Wholeness/dp/1984881612?tag=${AFFILIATE_TAG}`,
    coverImage: "/books/get-good-with-money.jpg",
    coverColor: "#1a3a3a",
    featured: false,
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
  {
    slug: "fire-movement-numbers-behind-early-retirement",
    title: "The FIRE Movement: The Actual Math Behind Retiring Early",
    excerpt:
      "Retiring in your 30s sounds like fantasy. But for Kristy Shen and Bryce Leung, it was an engineering problem. Here's the math they used — and why it might be more achievable than you think.",
    publishedAt: "2026-03-14",
    readTime: 7,
    bookSlugs: ["quit-like-a-millionaire", "simple-path-to-wealth"],
    body: `
      <p>Kristy Shen grew up in poverty in rural China. By her mid-30s, she had retired with a seven-figure portfolio. Not because of a lucky startup, an inheritance, or a windfall. Because of math.</p>
      <p>Her book <em>Quit Like a Millionaire</em> strips the FIRE movement down to its actual mechanics. And what she finds is that financial independence isn't a personality type — it's a calculation.</p>
      <h2>The 4% Rule</h2>
      <p>The central concept behind FIRE is simple: if your annual spending is 4% or less of your invested portfolio, history suggests you'll never run out of money. A $40,000/year lifestyle requires a $1,000,000 portfolio. A $25,000/year lifestyle requires $625,000.</p>
      <p>This is the same math JL Collins lays out in <em>The Simple Path to Wealth</em>: get your expenses down, invest the gap in low-cost index funds, and wait. The timeline depends entirely on your savings rate — not your income.</p>
      <h2>The savings rate is everything</h2>
      <p>This is the part most people miss. Collins shows that at a 10% savings rate, it takes roughly 40 years to retire. At 50%, it takes 17. At 75%, less than 8. The income level barely matters. What matters is the gap between what comes in and what goes out.</p>
      <p>Shen and her husband used geographic arbitrage — moving to countries with lower costs of living — to accelerate their timeline and protect against sequence-of-returns risk (the danger of a market crash in your early retirement years).</p>
      <h2>The goal isn't to stop working</h2>
      <p>Both books make this point clearly. FIRE isn't about hammocks and daiquiris. It's about having the option. Work you choose is fundamentally different from work you're trapped in. That distinction — the freedom to say no — is worth engineering your entire financial life around.</p>
      <p>You don't have to retire at 35. But knowing you <em>could</em> changes every decision you make until then.</p>
    `,
  },
  {
    slug: "millionaires-dont-look-like-millionaires",
    title: "Millionaires Don't Look Like Millionaires",
    excerpt:
      "The people most likely to be millionaires drive used cars, live in average neighborhoods, and don't talk about money. The research is clear — and it turns everything you think about wealth upside down.",
    publishedAt: "2026-03-12",
    readTime: 6,
    bookSlugs: ["millionaire-next-door", "psychology-of-money"],
    body: `
      <p>Thomas Stanley spent years surveying actual millionaires. Not celebrities. Not tech founders. Real, self-made American millionaires. What he found in <em>The Millionaire Next Door</em> was almost universally surprising to everyone who read it.</p>
      <p>They lived in ordinary neighborhoods. They drove used cars. They wore modest watches. They were, for lack of a better phrase, boring on purpose.</p>
      <h2>The wealth illusion</h2>
      <p>Stanley introduced a useful distinction: PAWs (Prodigious Accumulators of Wealth) and UAWs (Under Accumulators of Wealth). UAWs often have high incomes and look wealthy. PAWs often have moderate incomes and look ordinary. The difference isn't earning — it's keeping.</p>
      <p>Morgan Housel captures this in <em>The Psychology of Money</em>: "Wealth is what you don't spend." The car on the street, the watch on the wrist — those are signals of spending, not saving. A truly wealthy person is invisible by design, because their net worth is locked in assets no one can see.</p>
      <h2>High income ≠ high net worth</h2>
      <p>Stanley found that many doctors, lawyers, and executives — high earners by any measure — were surprisingly poor relative to their income. "Big Hat, No Cattle" is how he described it. The pressure to signal status in high-income professions can consume the very income that should be building wealth.</p>
      <p>Meanwhile, the plumber who maxed out his 401(k) every year for 30 years and drove a 2009 Toyota quietly crossed $1.5 million without ever making it onto a Forbes list.</p>
      <h2>What this changes</h2>
      <p>Wealth is more achievable — and more hidden — than most people realize. You can't see it at the grocery store or in the parking lot. The game is being played off the field, in brokerage accounts and paid-off mortgages, by people who stopped caring what you think about their car a long time ago.</p>
    `,
  },
  {
    slug: "how-to-make-better-decisions-with-money",
    title: "Why Smart People Make Bad Financial Decisions — and How to Stop",
    excerpt:
      "A poker champion and a startup investor walk into a bar. What they have to say about decisions, uncertainty, and money is more useful than anything most finance books will teach you.",
    publishedAt: "2026-03-08",
    readTime: 7,
    bookSlugs: ["thinking-in-bets", "almanack-naval-ravikant"],
    body: `
      <p>Annie Duke won over $4 million playing poker. She'll tell you it wasn't because she was always right. It was because she got better at being wrong correctly.</p>
      <p>Her book <em>Thinking in Bets</em> starts with an uncomfortable truth: we judge decisions by their outcomes. If an investment pays off, we call it smart. If it doesn't, we call it dumb. But that logic is backwards. A bad decision can produce a good outcome. A great decision can produce a terrible one. Luck is real, and we systematically ignore it.</p>
      <h2>The "resulting" trap</h2>
      <p>Duke calls this "resulting" — evaluating the quality of a decision based on what happened rather than on the information available at the time. It's how investors chase last year's winners, why people sell at market bottoms (the decision "felt" bad because the outcome was bad), and why financial FOMO is so destructive.</p>
      <p>The fix is to think in probabilities. Instead of "should I buy this stock?", ask: "Given what I know, what's the range of outcomes and their likelihoods?" You're not trying to be certain. You're trying to be calibrated.</p>
      <h2>Naval's version of the same idea</h2>
      <p>Eric Jorgenson's <em>The Almanack of Naval Ravikant</em> approaches decision-making differently but lands in the same place. Naval talks about the compounding of judgment: "The most important skill you can have in any domain is the ability to make good decisions, because it will generate results forever. Almost everything else is rented."</p>
      <p>His framework: play long-term games with long-term people, avoid decisions made from fear or FOMO, and build specific knowledge — the kind no one can teach you, that you build through obsession and that the market will eventually pay you for.</p>
      <h2>The practical takeaway</h2>
      <p>Most financial mistakes aren't about strategy — they're about decision quality under pressure. Duke's advice: before making any major financial move, write down your reasoning. Not to record it, but to force clarity. The act of articulating a decision exposes assumptions you didn't know you were making.</p>
      <p>Then, when you review it later, judge the decision on the logic — not on what the market did next.</p>
    `,
  },
  {
    slug: "spending-is-a-skill-most-people-are-bad-at",
    title: "Spending Is a Skill. Most People Are Bad at It.",
    excerpt:
      "We spend decades learning how to earn money and almost no time learning how to spend it. Morgan Housel's follow-up to The Psychology of Money asks the question nobody wants to answer: what does money actually buy you?",
    publishedAt: "2026-03-01",
    readTime: 6,
    bookSlugs: ["art-of-spending-money", "wealth-ladder"],
    body: `
      <p>There's a strange gap in personal finance literature. Hundreds of books on how to save, invest, and accumulate. Almost none on what to actually do with the money once you have it.</p>
      <p>Morgan Housel fills that gap with <em>The Art of Spending Money</em>. His argument is direct: spending is a skill, and most people are terrible at it — not because they spend too much, but because they spend on the wrong things in the wrong way.</p>
      <h2>The hedonic treadmill is real</h2>
      <p>Housel points to decades of psychology research showing that after basic needs are met, more stuff produces diminishing returns to happiness. The vacation house that was exciting in year one is ordinary by year three. The car upgrade gives you a week of joy, then becomes background noise.</p>
      <p>What does hold its value? Experiences, relationships, time, and control over your schedule. These things depreciate slowly or not at all. The challenge is that they're harder to buy directly and don't signal wealth to others — which is precisely why most people underinvest in them.</p>
      <h2>Where you are in life changes the calculus</h2>
      <p>Nick Maggiulli's <em>The Wealth Ladder</em> adds a useful frame: what good spending looks like depends entirely on your financial stage. Early-career spenders should focus almost entirely on income growth — the ROI of a professional development course or networking dinner dwarfs any portfolio optimization at that point. Mid-career, the math shifts toward debt elimination and tax efficiency. Late-career, spending on time and experiences makes more sense than ever, because there's less of it left.</p>
      <p>Treating all financial stages identically is one of the most common and expensive mistakes people make.</p>
      <h2>The intentionality question</h2>
      <p>Housel's prescription is deceptively simple: spend extravagantly on the things that matter most to you. Cut without mercy on the things that don't. Most people do the opposite — they spend uniformly, diffusing their budget across subscriptions, upgrades, and social signals, then feel vaguely dissatisfied regardless of how much they have.</p>
      <p>The question isn't "can I afford this?" It's "does this actually make my life better?" Those are very different questions, and surprisingly few people ask the second one.</p>
    `,
  },
  {
    slug: "money-and-relationships-the-real-conversation",
    title: "Money and Relationships: The Conversation Nobody Wants to Have",
    excerpt:
      "Couples fight about money more than anything else. But according to Ramit Sethi, they're almost never actually fighting about money. Here's what's really going on — and how to fix it.",
    publishedAt: "2026-03-13",
    readTime: 6,
    bookSlugs: ["money-for-couples"],
    body: `
      <p>The number one source of relationship conflict in America isn't infidelity, or parenting, or how to spend the holidays. It's money. And yet most couples spend more time planning a vacation than they do building a shared financial life.</p>
      <p>Ramit Sethi's <em>Money for Couples</em> tackles this head-on — not with spreadsheets and budget templates, but with something harder: the psychology behind why money conversations blow up, and what it actually takes to get on the same page.</p>
      <h2>It's not about the money</h2>
      <p>Sethi's central insight is that money fights are almost never about money. They're about power, control, fear, and values. When one partner resents the other for spending $200 on something, the real argument is usually about autonomy, or security, or a deeper disagreement about what life is supposed to look like.</p>
      <p>The couples who handle money well aren't the ones with matching spreadsheets. They're the ones who've had the uncomfortable conversations about what they actually want — not just from their bank account, but from their life together.</p>
      <h2>Align on the vision first</h2>
      <p>Before you talk about budgets, Sethi says, you need to align on your "Rich Life" — the specific, concrete vision of what a good life looks like for both of you. Not in abstract terms like "financial security," but in real ones: Where do we want to live? How often do we want to travel? What do we want for our kids? What does retirement actually look like?</p>
      <p>Without that shared vision, every financial decision becomes a battle with no clear winning side. With it, the same decisions become obvious.</p>
      <h2>Automate the mechanics</h2>
      <p>Once the vision is in place, Sethi's advice is practical: build a system that runs without you. Automate savings, automate investments, automate bill pay. The less couples have to actively negotiate money on a weekly basis, the less they fight about it. A good financial system removes friction — and friction is what turns small disagreements into big ones.</p>
      <p>The goal isn't a perfect budget. It's a relationship where money is a tool you use together, not a wedge that drives you apart.</p>
    `,
  },
  {
    slug: "building-wealth-as-a-woman",
    title: "The Wealth Gap Is Real — Here's How to Close It Yourself",
    excerpt:
      "Women earn less, invest less, and retire with significantly less than men. Katie Gatti Tassin isn't interested in waiting for the system to fix itself. Rich Girl Nation is a manual for closing the gap on your own terms.",
    publishedAt: "2026-03-11",
    readTime: 6,
    bookSlugs: ["rich-girl-nation"],
    body: `
      <p>The gender wealth gap isn't a myth. Women in the US retire with roughly 30% less wealth than men, on average. The pay gap is real, but it's not the whole story. The bigger issue is the investing gap — women are far less likely to invest, invest later when they do, and hold more cash relative to equities. The compounding math over 30 years is brutal.</p>
      <p>Katie Gatti Tassin, creator of the Money with Katie podcast, wrote <em>Rich Girl Nation</em> as a direct response. Not as a lament, but as a manual.</p>
      <h2>The system wasn't built for you — invest anyway</h2>
      <p>Gatti Tassin is clear-eyed about the structural disadvantages: the pay gap, career interruptions, longer life expectancy requiring more retirement savings, and a financial industry historically designed to market to men. Understanding these forces matters. But understanding them isn't a strategy.</p>
      <p>The strategy is: invest early, invest aggressively, and don't wait for a partner, a windfall, or a perfect moment. Every year of delay in starting an investment account is a year of compounding lost forever. The math doesn't care about fairness — it just rewards whoever started first.</p>
      <h2>Tax-advantaged accounts are the most underused tool</h2>
      <p>One of the book's most practical sections is on maximizing tax-advantaged accounts — 401(k)s, IRAs, HSAs. These accounts don't just reduce your tax bill; they change the trajectory of your wealth. A woman who maxes her Roth IRA from age 25 to 65 will end up with meaningfully more than one who starts at 35, even if she contributes the same total amount.</p>
      <p>Gatti Tassin's point isn't that this is fair. It's that knowing it changes what you do this year.</p>
      <h2>Negotiate. Always.</h2>
      <p>Research consistently shows women negotiate salary less often than men, and are penalized socially when they do. Gatti Tassin's response: negotiate anyway. The financial penalty for not negotiating — especially early in a career when raises compound into every future raise — is far larger than the social discomfort of asking. Your future self is watching every negotiation you decline to have.</p>
    `,
  },
  {
    slug: "teaching-kids-about-money",
    title: "The Best Financial Education Starts at Home",
    excerpt:
      "Most kids learn nothing about money until they're adults making expensive mistakes. Ron Lieber has a better idea — and it starts with allowance, awkward conversations, and the word 'no.'",
    publishedAt: "2026-03-07",
    readTime: 5,
    bookSlugs: ["opposite-of-spoiled", "atomic-habits"],
    body: `
      <p>Most adults received zero financial education growing up. Not from school, not from parents, not from anywhere that counted. They learned by making expensive mistakes in their 20s — bad debt, no savings, no concept of compound interest. The cycle repeats itself because nobody breaks it.</p>
      <p>Ron Lieber, the NYT's personal finance columnist, wrote <em>The Opposite of Spoiled</em> as a practical guide for parents who want to do better. His argument is simple: kids who understand money make better adults with money. The earlier you start, the better.</p>
      <h2>Allowance as a teaching tool</h2>
      <p>Lieber recommends giving kids a small allowance — not as a reward for chores, but as a tool for learning. The distinction matters. When allowance is tied to chores, kids can opt out of both. When it's a fixed amount intended for practice, it becomes a low-stakes environment for real financial decisions.</p>
      <p>He suggests three jars: spend, save, give. Simple. But the conversations those jars start — "do I want this now or the bigger thing later?" — are exactly the conversations adults struggle to have with themselves.</p>
      <h2>Answer the hard questions honestly</h2>
      <p>Kids ask hard questions. How much do you make? Are we rich? Why can't we afford that? Most parents dodge these. Lieber argues that's a mistake. Honest, age-appropriate answers build financial literacy. Evasion builds either shame or entitlement — both expensive in adulthood.</p>
      <p>The goal isn't to burden kids with financial anxiety. It's to normalize money as something that gets talked about, thought about, and managed — not something mysterious and stressful that shows up as adult conflict later.</p>
      <h2>The habits are the point</h2>
      <p>James Clear's <em>Atomic Habits</em> makes a point that applies directly here: identity-based habits are more durable than outcome-based ones. A kid who thinks of themselves as "someone who saves" will make different decisions for decades than one who was just told to save for a few years. The habits you build in childhood aren't just about money — they're about who you become.</p>
      <p>The best financial gift you can give a child isn't a college fund. It's a framework for thinking about money before they ever need to think about it seriously.</p>
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
