import Link from "next/link";
import { books, articles } from "@/lib/data";
import BookCard from "@/components/BookCard";
import ArticleCard from "@/components/ArticleCard";

export default function HomePage() {
  const featuredBooks = books.filter((b) => b.featured);
  const recentArticles = articles.slice(0, 2);

  return (
    <div>
      {/* Hero */}
      <section className="px-6 pt-24 pb-20 max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-accent mb-6">Personal Finance · Books · Wealth</p>
          <h1 className="font-serif text-6xl md:text-7xl font-black text-foreground leading-[1.05] mb-6">
            The books<br />
            <span className="italic text-accent">that build</span><br />
            wealth.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg">
            Every recommendation is grounded in a real book. No fluff, no generic advice — 
            just the ideas that actually change how people think about money.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/books"
              className="inline-block bg-accent text-background font-semibold text-sm px-6 py-3 rounded hover:bg-accent/90 transition-colors"
            >
              Browse the Shelf
            </Link>
            <Link
              href="/articles"
              className="inline-block text-foreground text-sm font-medium border border-border px-6 py-3 rounded hover:border-foreground/40 transition-colors"
            >
              Read Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Featured Books */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-accent mb-2">The Shelf</p>
            <h2 className="font-serif text-3xl font-bold text-foreground">Featured Books</h2>
          </div>
          <Link href="/books" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredBooks.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Recent Articles */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-accent mb-2">Editorial</p>
            <h2 className="font-serif text-3xl font-bold text-foreground">Recent Articles</h2>
          </div>
          <Link href="/articles" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recentArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-6 py-20 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-12 text-center">
            <p className="text-xs uppercase tracking-widest text-accent mb-4">The Rule</p>
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              Every article. Every recommendation.<br />
              <span className="italic">Backed by a real book.</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              We don&apos;t publish generic finance tips. Every piece of advice we share is anchored in 
              a book you can read, buy, and keep building from.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
