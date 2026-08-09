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
  /**
   * Hand-picked standouts. Cuts across categories — an editor favorite can be
   * any category — so it's a separate flag rather than a category value, and
   * distinct from `featured`, which drives the home page.
   */
  editorFavorite?: boolean;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: number;
  bookSlugs: string[];
  body: string; // HTML string for now
  /**
   * Draft articles are scaffolding: they keep their slug, metadata and book
   * links, but stay out of listings, the sitemap, and search results until
   * the editorial is written. Still reachable by URL so you can preview.
   */
  draft?: boolean;
  /** Working note for the author — never rendered. */
  targetKeyword?: string;
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
    editorFavorite: true,
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
    amazonUrl: `https://www.amazon.com/Quit-Like-Millionaire-Gimmicks-Required/dp/0525538690?tag=${AFFILIATE_TAG}`,
    coverImage: "/books/quit-like-a-millionaire.jpg",
    coverColor: "#1a1a3a",
    featured: false,
    rating: 5,
    editorFavorite: true,
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
    amazonUrl: `https://www.amazon.com/Almanack-Naval-Ravikant-Wealth-Happiness/dp/1544514212?tag=${AFFILIATE_TAG}`,
    coverImage: "/books/almanack-naval-ravikant.jpg",
    coverColor: "#E9E9E9",
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
    amazonUrl: `https://www.amazon.com/Thinking-Bets-Making-Smarter-Decisions/dp/0735216355?tag=${AFFILIATE_TAG}`,
    coverImage: "/books/thinking-in-bets.jpg",
    coverColor: "#E8481C",
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
    editorFavorite: true,
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
    amazonUrl: `https://www.amazon.com/Set-Life-All-Out-Approach-Financial/dp/1947200801?tag=${AFFILIATE_TAG}`,
    coverImage: "/books/set-for-life.jpg",
    coverColor: "#4A86D8",
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
  {
    slug: "financial-freedom",
    title: "Financial Freedom",
    author: "Grant Sabatier",
    category: "Investing",
    description:
      "Sabatier went from $2.26 in his bank account to $1 million in five years. Unlike most FIRE books, this one is weighted toward the income side — side hustles, salary negotiation, and building earning power — rather than squeezing the last dollar out of a budget.",
    keyTakeaways: [
      "There are only so many expenses to cut, but income is uncapped",
      "Calculate your real hourly rate — it changes how you value purchases",
      "Front-load saving aggressively; the early years do the heavy lifting",
      "Side income compounds faster than frugality alone",
      "Money buys freedom and time, not things — optimize for the former",
    ],
    amazonUrl: `https://www.amazon.com/Financial-Freedom-Proven-Money-Whenever/dp/0525540881?tag=${AFFILIATE_TAG}`,
    coverImage: "/books/financial-freedom.jpg",
    coverColor: "#1E7FC4",
    featured: false,
    rating: 4,
  },
  {
    slug: "playing-with-fire",
    title: "Playing with FIRE",
    author: "Scott Rieckens",
    category: "Mindset",
    description:
      "One family's real, messy attempt at financial independence — told as a story rather than a system. Rieckens documents the arguments, the trade-offs, and the lifestyle changes that FIRE actually demands, which most books gloss over.",
    keyTakeaways: [
      "FIRE is a relationship decision as much as a financial one",
      "The big three — housing, transport, food — decide your savings rate",
      "Lifestyle inflation is the quiet enemy of independence",
      "Geographic arbitrage can reset your entire timeline",
      "Define what you're retiring *to*, not just what you're escaping",
    ],
    amazonUrl: `https://www.amazon.com/Playing-FIRE-Financial-Independence-Retire/dp/1608685802?tag=${AFFILIATE_TAG}`,
    coverImage: "/books/playing-with-fire.jpg",
    coverColor: "#E8763A",
    featured: false,
    rating: 4,
  },
  {
    slug: "book-on-rental-property-investing",
    title: "The Book on Rental Property Investing",
    author: "Brandon Turner",
    category: "Real Estate",
    description:
      "The BiggerPockets playbook for buy-and-hold real estate. Turner walks through deal analysis, financing, tenant screening, and the arithmetic of cash flow — the practical detail most real estate books skip in favor of motivation.",
    keyTakeaways: [
      "Cash flow, not appreciation, is what makes a rental safe",
      "You make your money when you buy — analysis beats optimism",
      "Run the numbers on vacancy, capex, and repairs before you bid",
      "Financing structure matters as much as the property itself",
      "Screening tenants well prevents most landlord horror stories",
    ],
    amazonUrl: `https://www.amazon.com/Book-Rental-Property-Investing-Intelligent/dp/099071179X?tag=${AFFILIATE_TAG}`,
    coverImage: "/books/book-on-rental-property-investing.jpg",
    coverColor: "#3B7FA6",
    featured: false,
    rating: 4,
  },
  {
    slug: "bogleheads-guide-to-investing",
    title: "The Bogleheads' Guide to Investing",
    author: "Mel Lindauer, Taylor Larimore & Michael LeBoeuf",
    category: "Investing",
    description:
      "The community handbook built around Jack Bogle's principles: keep costs low, keep it simple, stay the course. Broader than Bogle's own books — it covers asset allocation, tax efficiency, and account placement in practical detail.",
    keyTakeaways: [
      "A simple three-fund portfolio beats most complex strategies",
      "Asset location matters — put the right assets in the right accounts",
      "Costs and taxes are the two things you can actually control",
      "Rebalance on a schedule, not on a hunch",
      "Staying the course through downturns is the whole game",
    ],
    amazonUrl: `https://www.amazon.com/Bogleheads-Guide-Investing-Mel-Lindauer/dp/1118921283?tag=${AFFILIATE_TAG}`,
    coverImage: "/books/bogleheads-guide-to-investing.jpg",
    coverColor: "#D8B23A",
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
  {
    slug: "best-books-for-fire",
    title: "The Best Books for FIRE, Ranked by Where You Are on the Path",
    excerpt:
      "Financial independence isn't one journey — it's four or five different problems depending on where you're standing. Here's which book solves the one in front of you.",
    publishedAt: "2026-08-07",
    readTime: 8,
    bookSlugs: [
      "simple-path-to-wealth",
      "your-money-or-your-life",
      "financial-freedom",
      "playing-with-fire",
      "quit-like-a-millionaire",
      "set-for-life",
    ],
    body: `
      <p>Almost every "best FIRE books" list is a ranking, which is the wrong shape for the problem. Financial independence isn't one challenge — it's a sequence of them. The book that changes your life in year one is nearly useless in year six, and the book with the math you eventually need will bore you to death before you're ready for it.</p>
      <p>So here's the shelf organized by stage instead. Find the sentence that describes where you actually are, and read that book next.</p>
      <h2>Stage 1: You don't believe it's possible yet</h2>
      <p>Most people encounter FIRE as an internet abstraction — a stranger claiming they retired at 34 — and quietly file it under "must have had help." The books that matter here aren't tactical. Their job is to make the idea feel real.</p>
      <p><em>Your Money or Your Life</em> is the origin text, and its central move is a reframe: money is life energy. You trade hours of your finite life for dollars, which means every purchase has a price measured in hours, not currency. Once you've calculated your real hourly wage — after commuting, after the clothes, after the decompression time — the arithmetic of spending changes permanently.</p>
      <p><em>Playing with FIRE</em> does the opposite job, and does it well. Scott Rieckens documents his own family's attempt in real time: the arguments with his wife, the Coronado lifestyle they gave up, the parts that didn't work. It's the least theoretical book on this list, and it's the one to hand someone who thinks FIRE requires a software salary and no children.</p>
      <h2>Stage 2: You believe it, but the mechanics are fuzzy</h2>
      <p>You're convinced. You don't know what to actually buy.</p>
      <p><em>The Simple Path to Wealth</em> is the answer, and it's not close. JL Collins wrote it as a series of letters to his daughter, which forced a clarity most finance writing never achieves. The thesis fits in a sentence: avoid debt, spend less than you earn, invest the difference in low-cost broad-market index funds, and don't touch it.</p>
      <p>What makes the book work isn't the strategy — that part is genuinely simple. It's that Collins spends most of his pages on the psychology of <em>not deviating</em>, because that's where people actually fail.</p>
      <h2>Stage 3: Your savings rate has hit a ceiling</h2>
      <p>This is the stage where most people stall, and it's the one the FIRE canon historically underserved. You've cut what there is to cut. Your savings rate has plateaued. Optimizing further means arguing with yourself about groceries.</p>
      <p>Grant Sabatier's <em>Financial Freedom</em> is the pivot. His argument is that expenses have a floor — you can only cut to zero — while income has no ceiling, so past a certain point the entire optimization should shift to earning. The book covers side income, salary negotiation, and building skills that compound, and it's noticeably more useful than another chapter on frugality.</p>
      <h2>Stage 4: You want the actual math</h2>
      <p>Eventually the question stops being "how do I save more" and becomes "how do I know when I can stop, and what happens if the market cooperates badly?"</p>
      <p><em>Quit Like a Millionaire</em> is the most numerate book on the shelf. Kristy Shen and Bryce Leung are engineers, and it shows — they work through withdrawal rates, sequence-of-returns risk, and the specific mechanisms they used to survive a downturn without selling at the bottom. If you want the FIRE math with its assumptions visible rather than hidden, this is it.</p>
      <h2>Stage 5: You want to accelerate with property</h2>
      <p>Index funds are the default path, not the only one. If you're drawn to real estate, two books do the practical work.</p>
      <p><em>Set for Life</em> by Scott Trench is about the first phase — house hacking, aggressive savings, and turning a normal salary into a launchpad. <em>The Book on Rental Property Investing</em> by Brandon Turner is the operational manual: deal analysis, financing, screening tenants, and the unglamorous arithmetic of cash flow that decides whether a rental is an asset or a second job.</p>
      <h2>If you only read one</h2>
      <p>Read <em>The Simple Path to Wealth</em>. It's the shortest distance between not knowing what to do and doing something correct, and the strategy it describes is the one most people should follow regardless of which stage they're in.</p>
      <p>The rest of this list is optimization. Optimization only matters once you've started.</p>
    `,
  },
  {
    slug: "coast-fire-barista-lean-fat-explained",
    title: "Coast FIRE, Barista FIRE, Lean, Fat: Which One Are You Actually Chasing?",
    excerpt:
      "The FIRE community has splintered into half a dozen variants, and people routinely pursue the wrong one for years. Here's what each actually means — and the math that separates them.",
    publishedAt: "2026-08-07",
    readTime: 7,
    bookSlugs: ["playing-with-fire", "quit-like-a-millionaire", "your-money-or-your-life"],
    body: `
      <p>The FIRE variants get talked about like personality types, which is why so many people chase the wrong one. They aren't lifestyles. They're different target numbers, and confusing them can cost you years — either working longer than you needed to, or quitting on a number that was never going to hold.</p>
      <h2>The one number underneath all of them</h2>
      <p>Every variant is a modification of a single calculation: your annual spending multiplied by 25.</p>
      <p>That multiplier is the inverse of a 4% withdrawal rate. Spend $40,000 a year, and the base target is $1 million. Spend $80,000, and it's $2 million. Notice which side of that equation you control most directly — your spending sets your target, and it does so with a 25× multiplier attached. A $500/month expense you eliminate permanently is $150,000 you never have to accumulate.</p>
      <p>Every label below is just a different answer to "what counts as my annual spending, and am I funding all of it?"</p>
      <h2>Lean FIRE</h2>
      <p>A deliberately small target, built on a low spending number — often under $40,000 a year for a household. The appeal is speed: a smaller number arrives years sooner.</p>
      <p>The failure mode is margin. A lean number assumes your expenses stay lean, and it leaves little slack for a health event, a family obligation, or a decade of poor returns arriving early. Lean FIRE works best for people who genuinely prefer a simple life, not for those treating frugality as a temporary sprint.</p>
      <h2>Fat FIRE</h2>
      <p>The opposite: financial independence without lifestyle compromise, typically built on six-figure annual spending and a target north of $2.5 million.</p>
      <p>The failure mode here is that the target moves. Because Fat FIRE is defined by maintaining a lifestyle rather than by a fixed number, lifestyle inflation quietly raises the goalpost — and it's remarkably easy to spend a decade earning well and never actually arriving.</p>
      <h2>Coast FIRE</h2>
      <p>The most misunderstood variant, and the most useful for people in their twenties and thirties.</p>
      <p>Coast FIRE means you've invested enough that compounding alone will carry you to your full number by traditional retirement age — without another dollar contributed. You haven't stopped working. You've stopped <em>saving</em>. Your job now only needs to cover current expenses.</p>
      <p>The power is in the timing. Money invested at 28 has decades to compound; money invested at 48 does not. Hitting Coast FIRE early buys something more immediately valuable than early retirement: the freedom to take the lower-paying job, go part-time, or leave the career that's grinding you down — without derailing the plan.</p>
      <h2>Barista FIRE</h2>
      <p>A hybrid. You've saved enough that a modest part-time income covers the gap, so your portfolio isn't carrying the full load yet.</p>
      <p>The name comes from a very American concern: health insurance. For workers in the US, employer coverage is often the binding constraint on leaving a job, and part-time roles that include benefits solve a problem that has nothing to do with the portfolio. Readers outside the US can generally ignore this variant's original logic, though the structure — partial income, partial withdrawal — still applies.</p>
      <h2>Which one you're actually chasing</h2>
      <p>Three questions usually settle it. What is your real annual spending, honestly measured rather than estimated? Would you rather arrive sooner with less margin, or later with more? And are you optimizing for never working again, or for not needing <em>this particular job</em>?</p>
      <p>That last question is the one people get wrong most often. A lot of what looks like a desire to retire early is a desire to stop doing one specific thing — and Coast FIRE solves that years before full FIRE does.</p>
      <p>Scott Rieckens' <em>Playing with FIRE</em> is good on the lifestyle trade-offs these choices actually require, and <em>Quit Like a Millionaire</em> is the better read if you want to pressure-test the numbers behind whichever variant you land on.</p>
    `,
  },
  {
    slug: "books-like-the-psychology-of-money",
    title: "Books Like The Psychology of Money: What to Read Next",
    excerpt:
      "Housel's book works because it treats money as behavior, not math. If that's what you loved, here's what actually scratches the same itch — and what only looks like it will.",
    publishedAt: "2026-08-07",
    readTime: 7,
    bookSlugs: [
      "psychology-of-money",
      "thinking-in-bets",
      "millionaire-next-door",
      "atomic-habits",
      "die-with-zero",
      "art-of-spending-money",
    ],
    body: `
      <p>Before recommending anything, it's worth naming why <em>The Psychology of Money</em> worked, because "books like it" means different things depending on which part got you.</p>
      <p>Morgan Housel's book succeeded on three counts: short self-contained chapters, arguments carried by stories rather than formulas, and a central claim that doing well with money has more to do with behavior than intelligence. Different follow-ups deliver different pieces of that.</p>
      <h2>If you loved the storytelling</h2>
      <p><em>The Millionaire Next Door</em> is the closest match in spirit. Thomas Stanley's research found that the people who actually accumulate wealth in America mostly look nothing like the cultural image of wealth — they drive used cars, live in ordinary neighborhoods, and are frequently outspent by neighbors earning far less.</p>
      <p>Like Housel, Stanley is really writing about behavior. The difference is that his conclusions come from survey data rather than parables, which makes the same argument land with more evidential weight.</p>
      <h2>If you loved the chapters on luck and risk</h2>
      <p>Housel's best chapter argues that outcomes are shaped by forces you didn't control, and that judging decisions by their results is a trap. Annie Duke's <em>Thinking in Bets</em> is an entire book on that idea.</p>
      <p>Duke was a professional poker player, and her core concept — "resulting," the error of grading a decision by whether it happened to work out — is directly applicable to investing. A good decision can lose money. A terrible one can make you rich. Most people learn the wrong lesson from both, and then repeat it.</p>
      <h2>If you want to change behavior, not just understand it</h2>
      <p>This is the honest gap in Housel's book: it's a superb diagnosis with relatively little prescription. You finish it understanding why you behave badly with money, and without a mechanism for behaving differently.</p>
      <p><em>Atomic Habits</em> is that mechanism. James Clear isn't writing about money, but the machinery transfers cleanly — automate the saving, make the good behavior the default, and build an identity ("I'm someone who invests every month") rather than relying on willpower. Read as a pair, Housel explains the problem and Clear supplies the fix.</p>
      <h2>If the chapter on "enough" hit hardest</h2>
      <p>For a lot of readers the most uncomfortable idea in the book is that the goalposts move — that people who could stop, don't.</p>
      <p>Bill Perkins' <em>Die With Zero</em> pushes that thought considerably further, arguing that dying with a large unspent balance represents a failure of planning: unconverted life experience. It's a genuine counterweight to accumulation-focused finance writing, and it'll irritate you productively.</p>
      <p>Housel's own follow-up, <em>The Art of Spending Money</em>, covers similar territory from the other direction — treating spending as a skill most people never develop.</p>
      <h2>What not to read next</h2>
      <p>Housel readers are often pointed toward the motivational end of the finance shelf — the mindset-and-mentors genre, with <em>Rich Dad Poor Dad</em> as the usual gateway. It's a reasonable-looking recommendation and generally a disappointing one.</p>
      <p>Those books are parables written to inspire action, and their specifics are frequently contested or unfalsifiable. Housel's appeal is the opposite: careful, evidence-anchored, and comfortable admitting uncertainty. Readers who go looking for more of that and land in the motivational aisle usually bounce off, then conclude they don't like finance books — when in fact they liked one particular kind.</p>
      <p>If you want more Housel, stay with writers who show their evidence.</p>
    `,
  },
  {
    slug: "simple-path-vs-bogleheads-guide",
    title: "The Simple Path to Wealth vs. The Bogleheads' Guide: Which Should You Read First?",
    excerpt:
      "Both preach low-cost index investing. They are not interchangeable, and reading the wrong one first is why plenty of people bounce off index investing entirely.",
    publishedAt: "2026-08-07",
    readTime: 6,
    bookSlugs: [
      "simple-path-to-wealth",
      "bogleheads-guide-to-investing",
      "little-book-common-sense-investing",
    ],
    body: `
      <p>These two books agree on almost everything that matters: costs destroy returns, active management underperforms, broad diversification wins, and the hardest part is sitting still. They are still very different books, and the order you read them in matters more than most people expect.</p>
      <h2>The short answer</h2>
      <p>If you have not started investing yet, read <em>The Simple Path to Wealth</em> first. If you are already invested and your questions have become logistical — which account, which allocation, what about taxes — start with <em>The Bogleheads' Guide to Investing</em>.</p>
      <h2>What The Simple Path to Wealth does better</h2>
      <p>It gets people to act. JL Collins wrote it as letters to his daughter, and that framing does real work: it's warm, opinionated, and written by one person with a clear point of view. You finish it knowing exactly what to do on Monday morning.</p>
      <p>It's also unusually good on the emotional side of investing — what a crash feels like, and why the correct response is almost always to do nothing. Collins' "F-you money" framing has stuck around for a reason: it connects investing to something people actually want, which is optionality.</p>
      <p>The trade-off is scope. It's a book about one strategy, told persuasively. That's a feature at the start and a limitation later.</p>
      <h2>What The Bogleheads' Guide does better</h2>
      <p>Breadth and durability as reference material. Written by long-time members of the Bogleheads community, it covers the territory Collins deliberately skips: asset allocation across account types, tax efficiency, where to hold which assets, insurance, and estate basics.</p>
      <p>It reads more like a well-organized manual than a narrative, which makes it less compelling on a first read and considerably more useful on the fifth. It's the one you'll still be pulling off the shelf in five years to check something.</p>
      <h2>Where they actually disagree</h2>
      <p>Two differences are worth knowing before you pick a side.</p>
      <p>The first is portfolio complexity. Collins is a strong advocate for radical simplicity — a total US stock market fund does the job during accumulation, with bonds added later. The Bogleheads material is more conventionally diversified, generally treating international exposure as a standard component rather than an optional one. Collins argues large US companies already earn substantially abroad; the Bogleheads position is that this isn't the same as owning foreign markets directly. Both positions are defensible and the gap between outcomes is smaller than the volume of the argument suggests.</p>
      <p>The second is tone toward the reader. Collins tells you what to do. The Bogleheads' Guide lays out options and trade-offs. Which you prefer says more about how you like to be taught than about which is correct.</p>
      <h2>Read them in this order</h2>
      <p>Collins first, for conviction and a plan you'll actually execute. The Bogleheads' Guide second, once you have money invested and real questions about optimization. If you want the original argument in its most compressed form, Bogle's own <em>The Little Book of Common Sense Investing</em> sits underneath both and can be read in an afternoon.</p>
      <p>What you should not do is read all three before investing anything. The most expensive mistake in this entire category isn't picking the wrong book — it's spending a year reading instead of starting.</p>
    `,
  },
  {
    slug: "four-percent-rule-stress-tested",
    title: "The 4% Rule, Stress-Tested: What the Research Actually Says",
    excerpt:
      "The most quoted number in FIRE comes from a 1994 paper about a specific portfolio over a specific period. Here's what that research actually concluded — and where the rule starts to break.",
    publishedAt: "2026-08-07",
    readTime: 9,
    bookSlugs: ["quit-like-a-millionaire", "your-money-or-your-life", "just-keep-buying"],
    body: `
      <p>The 4% rule is the most repeated number in financial independence and one of the least read. It has become shorthand for "the amount you can safely withdraw forever," which is not what the underlying research claimed, and not a claim its authors would have made.</p>
      <p>It's worth knowing what the studies actually tested, because the gap between the finding and the folklore is where people get hurt.</p>
      <h2>Where the number came from</h2>
      <p>In 1994, financial adviser William Bengen published an analysis in the <em>Journal of Financial Planning</em> asking a narrow question: looking at US market history, what is the highest starting withdrawal rate that would have survived every 30-year retirement window, including the worst ones?</p>
      <p>His answer was roughly 4%. Withdraw 4% of the portfolio in year one, adjust that dollar amount for inflation each year afterward, hold a substantial stock allocation, and no historical 30-year period would have exhausted the money.</p>
      <p>A few years later, three professors at Trinity University ran a related study across various stock-and-bond mixes and time horizons, reporting success rates rather than a single safe maximum. Stock-heavy portfolios at a 4% withdrawal rate came through the great majority of 30-year periods intact. That paper is where the "Trinity Study" shorthand comes from.</p>
      <h2>What it never claimed</h2>
      <p>Four things, all of which get lost in translation.</p>
      <p>It was never a guarantee. It was a backtest — a description of what would have survived history, not a promise about the future. "No 30-year period failed" and "no 30-year period can fail" are very different statements.</p>
      <p>It was built on <strong>30 years</strong>. That's a conventional retirement at 65. Someone retiring at 40 is planning for a horizon roughly twice as long, and the failure rate climbs meaningfully as the horizon extends. The single most common misuse of the 4% rule is applying a 30-year finding to a 50-year problem.</p>
      <p>It used US market data. The twentieth-century United States was among the best-performing markets in the world, and building a rule on the winner's history embeds an optimistic assumption that's easy to miss.</p>
      <p>And it assumed rigid behavior — the same inflation-adjusted withdrawal every year regardless of what markets did. Almost nobody actually behaves that way, which cuts both ways: it makes the test conservative, but it also means the number doesn't describe how real retirees spend.</p>
      <h2>Sequence-of-returns risk</h2>
      <p>This is the mechanism that makes withdrawal rates dangerous, and it's the part worth genuinely understanding.</p>
      <p>Two retirees can experience identical average returns over thirty years and end up in completely different places, purely because of the <em>order</em> those returns arrived in. A bad decade at the start is far more damaging than a bad decade at the end.</p>
      <p>The reason is that withdrawals during a downturn force you to sell more shares to raise the same amount of cash, permanently shrinking the base that has to recover. The portfolio can be structurally crippled before the market turns around. The same crash arriving in year 25, after decades of compounding, is often survivable.</p>
      <p>Averages hide this completely, which is why "the market returns about 10% a year" is such a misleading way to plan.</p>
      <h2>What breaks it for early retirees</h2>
      <p>Long horizons, as covered. Fees, which come directly off the top — a 1% advisory fee against a 4% withdrawal is a quarter of your income. Sequence risk in the first decade. And rigidity: a plan with no capacity to spend less in a bad year is a plan with no shock absorber.</p>
      <p>Kristy Shen and Bryce Leung deal with this directly in <em>Quit Like a Millionaire</em>, and their contribution is practical rather than theoretical. They hold a cash cushion to fund living expenses during downturns without selling depressed assets, and they tilt toward income-producing holdings so more of the withdrawal comes from yield rather than from sales. Both are attempts to defuse sequence risk rather than pretend it away.</p>
      <h2>What to use instead</h2>
      <p>Treat 4% as a planning heuristic for setting a target, not as an operating instruction for withdrawals.</p>
      <p>For the target, it's genuinely useful: annual spending × 25 gives you a number to aim at. For the withdrawal phase, variable approaches hold up better — taking somewhat less after a bad year, somewhat more after a good one, or using guardrails that adjust spending when the portfolio drifts outside a set band.</p>
      <p>Flexibility is doing the heavy lifting in every one of these. The ability to cut spending 10% in a bad year improves outcomes more than almost any portfolio adjustment, which is also the argument for not building your plan on a spending floor you can't go beneath.</p>
      <h2>So is it safe?</h2>
      <p>For a 30-year retirement with a stock-heavy portfolio and low fees, 4% has strong historical support and remains a reasonable starting point.</p>
      <p>For a 50-year early retirement, treat it as an upper bound rather than a target. Many people planning for that horizon work from something closer to 3.25–3.5%, keep a cash buffer for the first decade, and — most importantly — retain the flexibility to earn or spend differently if the first five years go badly.</p>
      <p>The rule isn't wrong. It's just far narrower than the way it gets quoted, and the distance between those two things is measured in years of someone's life.</p>
    `,
  },
];

// ─────────────────────────────────────────────────────────────────────────
// Scaffolded drafts. Structure, metadata, book links and target keywords are
// set; the prose is yours to write. Flip `draft: false` to publish — that
// alone adds it to the listing, the sitemap, and search results.
//
// Each <p class="draft-note"> is an author prompt, not copy. Replace them.
// ─────────────────────────────────────────────────────────────────────────
export const draftArticles: Article[] = [];

export function getBook(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug);
}

/**
 * Published + drafts. Use this only for slug lookup and static generation, so
 * drafts are previewable by URL. Listings and the sitemap read `articles`,
 * which stays published-only.
 */
export const allArticles: Article[] = [...articles, ...draftArticles];

export function getArticle(slug: string): Article | undefined {
  return allArticles.find((a) => a.slug === slug);
}

export function getBooksForArticle(article: Article): Book[] {
  return article.bookSlugs.map((s) => getBook(s)).filter(Boolean) as Book[];
}

