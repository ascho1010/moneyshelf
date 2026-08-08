import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { books, getBook } from "@/lib/data";
import { categoryBg, categoryTint } from "@/lib/ui";
import { absoluteUrl, pageTitle } from "@/lib/site";
import ShareRow from "@/components/ShareRow";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const book = getBook(params.slug);
  if (!book) return {};

  const title = `My money book match: ${book.title}`;
  const description = `${book.title} by ${book.author} — matched by the MoneyShelf book quiz. Take the 4-question quiz to find yours.`;
  const path = `/recommender/result/${book.slug}`;

  return {
    title: pageTitle(title),
    description,
    // Deliberately not indexed: these are share targets, and their content
    // overlaps /books/[slug]. Social crawlers still read OG tags fine.
    robots: { index: false, follow: true },
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default function RecommenderResultPage({
  params,
}: {
  params: { slug: string };
}) {
  const book = getBook(params.slug);
  if (!book) notFound();

  const shareUrl = absoluteUrl(`/recommender/result/${book.slug}`);
  const shareText = `My personal finance book match is "${book.title}" by ${book.author}. What's yours?`;

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 md:py-20">
      <span className="inline-flex items-center gap-1.5 bg-orange text-ink border-2 border-border rounded-full text-xs font-bold uppercase tracking-wide px-3 py-1.5 mb-5">
        <span aria-hidden="true">📖</span> Your match
      </span>

      <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-ink leading-tight mb-8 text-balance">
        You should read{" "}
        <span className="relative inline-block text-accent">
          {book.title}
          <svg viewBox="0 0 200 14" aria-hidden="true" className="absolute left-0 -bottom-2 w-full h-3.5">
            <path d="M4 10 Q60 2 100 8 T196 6" fill="none" stroke="#FF7A2F" strokeWidth="5" strokeLinecap="round" />
          </svg>
        </span>
      </h1>

      {/* Book card */}
      <div className="bg-card border-2 border-border rounded-[24px] p-7 md:p-9 shadow-card mb-8">
        <div className="flex flex-col sm:flex-row gap-7">
          <div
            className="shrink-0 self-start border-2 border-border rounded-[18px] p-4"
            style={{ backgroundColor: categoryTint(book.category) }}
          >
            <div
              className="w-[132px] rounded-[12px] overflow-hidden border-2 border-border shadow-pop"
              style={{ backgroundColor: book.coverColor, aspectRatio: "2 / 3" }}
            >
              <Image
                src={book.coverImage}
                alt={`${book.title} book cover`}
                width={264}
                height={396}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          <div className="min-w-0">
            <span
              className="inline-block border-2 border-border rounded-full text-[11px] font-bold px-2.5 py-1 mb-3"
              style={{ backgroundColor: categoryBg(book.category) }}
            >
              {book.category}
            </span>
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink leading-tight mb-1">
              {book.title}
            </h2>
            <p className="text-sm text-subtle mb-4">by {book.author}</p>
            <p className="text-[15px] leading-relaxed text-muted-foreground mb-5">
              {book.description}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={book.amazonUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="pop inline-block bg-accent text-background font-bold text-sm px-5 py-3 rounded-[12px] border-2 border-border"
              >
                Get it on Amazon ↗
              </a>
              <Link
                href={`/books/${book.slug}`}
                className="pop inline-block bg-card text-ink font-bold text-sm px-5 py-3 rounded-[12px] border-2 border-border"
              >
                Read our take
              </Link>
            </div>
            <p className="text-xs text-subtle mt-3">
              Affiliate link — we earn a small commission at no cost to you.
            </p>
          </div>
        </div>
      </div>

      {/* Share */}
      <div className="bg-muted border-2 border-border rounded-[20px] p-6 md:p-7 mb-8">
        <h2 className="font-display text-xl font-extrabold tracking-tight text-ink mb-1.5">
          Share your match
        </h2>
        <p className="text-sm text-muted-foreground mb-5">
          Know someone stuck on where to start with money? Send them this.
        </p>
        <ShareRow url={shareUrl} text={shareText} />
      </div>

      {/* Loop back into the quiz — this is what converts a shared link */}
      <div className="text-center border-t-2 border-line pt-9">
        <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink mb-2 text-balance">
          Not your situation?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Answer 4 quick questions and get the book that fits where you actually
          are with money.
        </p>
        <div className="flex flex-wrap gap-3.5 justify-center">
          <Link
            href="/recommender"
            className="pop inline-block bg-accent text-background font-bold text-[15px] px-7 py-4 rounded-[14px] border-2 border-border"
          >
            Take the quiz →
          </Link>
          <Link
            href="/books"
            className="pop inline-block bg-card text-ink font-bold text-[15px] px-7 py-4 rounded-[14px] border-2 border-border"
          >
            Browse the Shelf
          </Link>
        </div>
      </div>
    </main>
  );
}
