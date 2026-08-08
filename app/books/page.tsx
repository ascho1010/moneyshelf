import { books } from "@/lib/data";
import BookRecommendationLockup from "@/components/BookRecommendationLockup";
import { categoryBg } from "@/lib/ui";
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
      <div className="mb-10">
        <span className="inline-block bg-yellow border-2 border-border rounded-full text-xs font-bold uppercase tracking-wide px-3 py-1.5 mb-4">
          The shelf
        </span>
        <h1 className="font-display text-5xl md:text-6xl font-extrabold tracking-tight text-ink mb-4 text-balance">
          All the books
        </h1>
        <p className="text-muted-foreground text-[17px] leading-relaxed max-w-lg">
          Every book on this shelf earned its spot on the quality of its ideas.
          Not hype, not bestseller lists — just books that genuinely change how
          you think about money.
        </p>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2.5 mb-14">
        {categories.map((cat) => (
          <span
            key={cat}
            className="text-[13px] font-bold px-4 py-2 rounded-full border-2 border-border cursor-default"
            style={{ backgroundColor: cat === "All" ? "#221D14" : categoryBg(cat), color: cat === "All" ? "#FFF8EE" : "#221D14" }}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Book list */}
      <div className="flex flex-col gap-14">
        {books.map((book) => (
          <div
            key={book.slug}
            className="bg-card border-2 border-border rounded-[24px] p-7 md:p-9 shadow-card"
          >
            <BookRecommendationLockup book={book} />
          </div>
        ))}
      </div>
    </div>
  );
}
