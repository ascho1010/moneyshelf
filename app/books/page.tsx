import { books } from "@/lib/data";
import BookShelf from "@/components/BookShelf";
import { DEFAULT_OG_IMAGE } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Personal Finance Books",
  description:
    "A curated shelf of the best personal finance books — on investing, budgeting, mindset, and building wealth. Every book selected for the quality of its ideas.",
  openGraph: {
    title: "Best Personal Finance Books",
    description:
      "A curated shelf of the best personal finance books — on investing, budgeting, mindset, and building wealth.",
    url: "/books",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  alternates: { canonical: "/books" },
};

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

      {/* Category filters + book list */}
      <BookShelf books={books} />
    </div>
  );
}
