import { books, articles, getBook } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export default function BookPage({ params }: { params: { slug: string } }) {
  const book = getBook(params.slug);
  if (!book) notFound();

  // Articles that reference this book
  const relatedArticles = articles.filter((a) => a.bookSlugs.includes(book.slug));

  const categoryColors: Record<string, string> = {
    Investing: "bg-blue-900/40 text-blue-300",
    Budgeting: "bg-green-900/40 text-green-300",
    Mindset: "bg-purple-900/40 text-purple-300",
    "Real Estate": "bg-orange-900/40 text-orange-300",
    Business: "bg-red-900/40 text-red-300",
  };
  const categoryClass = categoryColors[book.category] ?? "bg-muted text-muted-foreground";

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <Link href="/books" className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 inline-block">
        ← Back to Books
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-4">
        {/* Book cover */}
        <div className="md:col-span-1">
          <div
            className="w-full aspect-[2/3] rounded-lg flex items-center justify-center text-6xl mb-6"
            style={{ backgroundColor: book.coverColor }}
          >
            📖
          </div>
          <a
            href={book.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-accent text-background font-semibold text-sm text-center px-6 py-3.5 rounded hover:bg-accent/90 transition-colors mb-3"
          >
            Get this book on Amazon →
          </a>
          <p className="text-xs text-muted-foreground text-center">
            Affiliate link — we earn a small commission at no cost to you.
          </p>
          <div className="flex items-center justify-center gap-1 mt-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={`text-sm ${i < book.rating ? "text-accent" : "text-muted"}`}>★</span>
            ))}
          </div>
        </div>

        {/* Book info */}
        <div className="md:col-span-2">
          <span className={`inline-block text-xs px-2 py-0.5 rounded-full mb-4 ${categoryClass}`}>
            {book.category}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-black text-foreground leading-tight mb-2">
            {book.title}
          </h1>
          <p className="text-lg text-muted-foreground mb-8">by {book.author}</p>

          <p className="text-foreground/80 leading-relaxed text-base mb-10">{book.description}</p>

          <div className="border-t border-border pt-8 mb-10">
            <h2 className="font-serif text-xl font-bold text-foreground mb-5">Key Takeaways</h2>
            <ul className="flex flex-col gap-3">
              {book.keyTakeaways.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-accent mt-0.5 flex-shrink-0">→</span>
                  <span className="text-foreground/80 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {relatedArticles.length > 0 && (
            <div className="border-t border-border pt-8">
              <h2 className="font-serif text-xl font-bold text-foreground mb-5">Articles About This Book</h2>
              <div className="flex flex-col gap-3">
                {relatedArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/articles/${article.slug}`}
                    className="group block border border-border rounded-lg p-4 hover:border-accent/40 transition-colors"
                  >
                    <p className="text-xs text-muted-foreground mb-1">{article.readTime} min read</p>
                    <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors leading-snug">
                      {article.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
