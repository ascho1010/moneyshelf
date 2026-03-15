import { books } from "@/lib/data";
import BookCard from "@/components/BookCard";
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
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="text-xs uppercase tracking-widest text-accent mb-3">The Shelf</p>
        <h1 className="font-serif text-5xl font-black text-foreground mb-4">All Books</h1>
        <p className="text-muted-foreground max-w-lg">
          Every book on this shelf has been selected for the quality of its ideas. 
          Not hype, not bestseller lists — just books that genuinely change how you think about money.
        </p>
      </div>

      {/* Category filters — static display for now */}
      <div className="flex flex-wrap gap-2 mb-10">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book.slug} book={book} />
        ))}
      </div>
    </div>
  );
}
