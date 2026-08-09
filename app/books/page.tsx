import Link from "next/link";
import { books } from "@/lib/data";
import BookShelf from "@/components/BookShelf";
import { ACTIVE_CATEGORIES, booksInCategory } from "@/lib/categories";
import { categoryBg } from "@/lib/ui";
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

      {/* Real pages per topic — crawlable, and each targets its own query.
          The chips above filter in place; these are the linkable versions. */}
      <div className="border-t-2 border-line mt-16 pt-10">
        <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink mb-2">
          Browse by topic
        </h2>
        <p className="text-muted-foreground text-[15px] mb-5">
          Each topic has its own page with the full shelf for that subject.
        </p>
        <div className="flex flex-wrap gap-2.5">
          {ACTIVE_CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/books/category/${c.slug}`}
              className="pop inline-block text-[13px] font-bold px-4 py-2 rounded-full border-2 border-border text-ink"
              style={{ backgroundColor: categoryBg(c.name) }}
            >
              {c.name}{" "}
              <span className="opacity-55">{booksInCategory(c.name).length}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
