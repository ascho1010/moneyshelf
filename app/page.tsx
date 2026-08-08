import Link from "next/link";
import Image from "next/image";
import { books, articles, getBooksForArticle } from "@/lib/data";
import BookCard from "@/components/BookCard";
import ArticleCard from "@/components/ArticleCard";

export default function HomePage() {
  const featuredBooks = books.filter((b) => b.featured);
  const heroBooks = featuredBooks.slice(0, 3);
  const gridBooks = featuredBooks.slice(0, 3);
  const featuredArticle = articles[0];
  const featuredArticleBook = getBooksForArticle(featuredArticle)[0];
  const moreArticles = articles.slice(1, 3);
  const tilts = ["-4deg", "0deg", "4deg"];

  return (
    <div>
      {/* ── Hero ── */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-14 md:pt-20 md:pb-16">
        <div className="grid md:grid-cols-[1fr_0.9fr] gap-10 md:gap-12 items-center">
          <div>
            <div className="animate-rise inline-flex items-center gap-1.5 bg-[#FFE1C7] border-2 border-border rounded-full font-bold text-[12.5px] px-4 py-1.5 mb-6 -rotate-2">
              <span aria-hidden="true">📖</span> Every book, actually read
            </div>
            <h1 className="animate-rise font-display text-5xl md:text-[68px] font-extrabold tracking-tight text-ink leading-[1] mb-5 text-balance" style={{ animationDelay: ".08s" }}>
              The books that build{" "}
              <span className="relative inline-block text-accent">
                wealth
                <svg viewBox="0 0 200 14" aria-hidden="true" className="absolute left-0 -bottom-2 w-full h-3.5">
                  <path d="M4 10 Q60 2 100 8 T196 6" fill="none" stroke="#FF7A2F" strokeWidth="5" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="animate-rise text-[17px] leading-relaxed text-muted-foreground max-w-[44ch] mb-8" style={{ animationDelay: ".16s" }}>
              Money advice from your smartest friend — the one who read all the
              books so you only have to read the good ones.
            </p>
            <div className="animate-rise flex flex-wrap gap-3.5" style={{ animationDelay: ".24s" }}>
              <Link href="/books" className="pop bg-accent text-background font-bold text-[15px] px-7 py-4 rounded-[14px] border-2 border-border">
                Browse the Shelf
              </Link>
              <Link href="/articles" className="pop bg-card text-ink font-bold text-[15px] px-7 py-4 rounded-[14px] border-2 border-border">
                Read Articles
              </Link>
            </div>
          </div>

          {/* Hero covers */}
          <div className="animate-rise flex justify-center gap-4 md:gap-5 items-end" style={{ animationDelay: ".2s" }}>
            {heroBooks.map((book, i) => (
              <div
                key={book.slug}
                className="relative"
                style={{ transform: `rotate(${tilts[i]})` }}
              >
                <Link
                  href={`/books/${book.slug}`}
                  className="lift block w-[112px] md:w-[132px] border-2 border-border rounded-[14px] overflow-hidden"
                  style={{ backgroundColor: book.coverColor, aspectRatio: "2 / 3" }}
                >
                  <Image src={book.coverImage} alt={book.title} width={264} height={396} className="w-full h-full object-cover" priority />
                </Link>
                {i === 1 && (
                  <div className="animate-wobble absolute -top-4 -right-3 bg-orange text-ink border-2 border-border rounded-full font-bold text-[11px] px-3 py-1.5 whitespace-nowrap">
                    start here!
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fresh off the shelf ── */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-7">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink">
            Fresh off the shelf
          </h2>
          <Link href="/books" className="text-sm font-bold text-accent border-b-2 border-accent pb-0.5 hover:text-orange hover:border-orange transition-colors">
            See the whole shelf →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gridBooks.map((book, i) => (
            <BookCard key={book.slug} book={book} index={i} />
          ))}
        </div>
      </section>

      {/* ── From the blog ── */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink mb-7">
          From the blog
        </h2>

        {/* Featured article — blue banner */}
        <Link
          href={`/articles/${featuredArticle.slug}`}
          className="pop group grid grid-cols-[auto_1fr_auto] gap-6 md:gap-8 items-center bg-accent border-2 border-border rounded-[20px] p-6 md:p-8 mb-6"
        >
          {featuredArticleBook && (
            <div
              className="hidden sm:block w-[76px] h-[114px] border-2 border-border rounded-[12px] overflow-hidden"
              style={{ backgroundColor: featuredArticleBook.coverColor, transform: "rotate(-4deg)" }}
            >
              <Image src={featuredArticleBook.coverImage} alt={featuredArticleBook.title} width={152} height={228} className="w-full h-full object-cover" />
            </div>
          )}
          <div className="text-background">
            <span className="inline-block bg-yellow text-ink border-2 border-border rounded-full font-bold text-[10.5px] px-2.5 py-1 mb-3">
              New essay · {featuredArticle.readTime} min
            </span>
            <div className="font-display text-2xl md:text-[27px] font-extrabold tracking-tight leading-tight mb-2 text-balance">
              {featuredArticle.title}
            </div>
            <p className="text-sm leading-relaxed opacity-90 max-w-[60ch]">
              {featuredArticle.excerpt}
            </p>
          </div>
          <div className="flex-none bg-background text-ink border-2 border-border rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center font-extrabold text-lg">
            →
          </div>
        </Link>

        {/* More articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {moreArticles.map((article, i) => (
            <ArticleCard key={article.slug} article={article} index={i} />
          ))}
        </div>
      </section>

      {/* ── The rule ── */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-ink text-background border-2 border-border rounded-[24px] p-10 md:p-14 text-center">
          <span className="inline-block bg-yellow text-ink border-2 border-border rounded-full font-bold text-[11px] uppercase tracking-wide px-3 py-1.5 mb-5">
            The rule
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-4 text-balance">
            Every article. Every recommendation.
            <br className="hidden md:block" />
            <span className="text-yellow"> Backed by a real book.</span>
          </h2>
          <p className="text-background/80 max-w-md mx-auto leading-relaxed">
            We don&apos;t publish generic finance tips. Every piece of advice we
            share is anchored in a book you can read, buy, and keep building from.
          </p>
          <Link href="/recommender" className="pop inline-block mt-8 bg-accent text-background font-bold text-[15px] px-7 py-4 rounded-[14px] border-2 border-border">
            Find my book →
          </Link>
        </div>
      </section>
    </div>
  );
}
