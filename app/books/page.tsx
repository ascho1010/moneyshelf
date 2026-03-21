import { books } from "@/lib/data";
import BookRecommendationLockup from "@/components/BookRecommendationLockup";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Personal Finance Books — MoneyShelf",
  description:
    "A curated shelf of the best personal finance books — on investing, budgeting, mindset, and building wealth. Every book selected for the quality of its ideas.",
  openGraph: {
    title: "Best Personal Finance Books — MoneyShelf",
    description:
      "A curated shelf of the best personal finance books — on investing, budgeting, mindset, and building wealth.",
    url: "https://moneyshelf.xyz/books",
    siteName: "MoneyShelf",
    type: "website",
  },
  alternates: { canonical: "https://moneyshelf.xyz/books" },
};

const categories = ["All", "Investing", "Budgeting", "Mindset", "Real Estate", "Business"];

export default function BooksPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-12">
        <p className="text-xs uppercase tracking-widest text-accent mb-3">The Shelf</p>
        <h1 className="font-serif text-5xl font-black text-foreground mb-4">All Books</h1>
        <p className="text-muted-foreground max-w-lg">
          Every book on this shelf has been selected for the quality of its ideas.
          Not hype, not bestseller lists — just books that genuinely change how you think about money.
        </p>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-16">
        {categories.map((cat) => (
          <span
            key={cat}
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors cursor-default ${
              cat === "All"
                ? "border-accent text-accent"
                : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
            }`}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Book list */}
      <div className="divide-y divide-border">
        {books.map((book) => (
          <div key={book.slug} className="py-16 first:pt-0">
            {/* Category + number label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs uppercase tracking-widest text-accent">
                {book.category}
              </span>
              {book.featured && (
                <span className="text-xs px-2 py-0.5 rounded-full border border-accent/40 text-accent">
                  Featured
                </span>
              )}
              <div className="flex items-center gap-0.5 ml-auto">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`text-xs ${i < book.rating ? "text-accent" : "text-border"}`}>
                    ★
                  </span>
                ))}
              </div>
            </div>

            <BookRecommendationLockup book={book} />
          </div>
        ))}
      </div>
    </div>
  );
}
