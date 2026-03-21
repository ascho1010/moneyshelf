"use client";

import Image from "next/image";
import Link from "next/link";
import { ScoredBook } from "@/lib/recommender";

interface BookRecommendationLockupProps {
  book: ScoredBook;
  onReset?: () => void;
}

export default function BookRecommendationLockup({
  book,
  onReset,
}: BookRecommendationLockupProps) {
  return (
    <div>
      {/* Label */}
      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
        Your top match
      </p>

      {/* Lockup */}
      <section className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        {/* ── Left column: text ──────────────────────────────────── */}
        <div className="flex-1 max-w-[560px]">
          {/* Match reason badges */}
          {book.matchReasons.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {book.matchReasons.map((reason) => (
                <span
                  key={reason}
                  className="text-xs px-2.5 py-1 rounded-full border border-accent/40 text-accent"
                >
                  {reason}
                </span>
              ))}
            </div>
          )}

          <h2 className="font-serif italic text-3xl md:text-4xl text-foreground leading-tight">
            {book.title}
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            by{" "}
            <Link
              href={`/books/${book.slug}`}
              className="text-foreground underline underline-offset-2 hover:text-accent transition-colors"
            >
              {book.author}
            </Link>
          </p>

          <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
            {book.description}
          </p>

          {/* Key takeaways */}
          {book.keyTakeaways?.length > 0 && (
            <ul className="mt-6 space-y-2">
              {book.keyTakeaways.slice(0, 3).map((takeaway) => (
                <li key={takeaway} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-accent mt-0.5 shrink-0">★</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* ── Right column: cover + CTA ───────────────────────────── */}
        <div className="flex flex-col items-start gap-4 shrink-0">
          <div
            className="w-full md:w-[420px] rounded overflow-hidden shadow-2xl"
            style={{ backgroundColor: book.coverColor }}
          >
            <Image
              src={book.coverImage}
              alt={`${book.title} cover`}
              width={420}
              height={630}
              className="w-full md:w-[420px] object-cover"
              priority
            />
          </div>

          <a
            href={book.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-accent/50 text-accent text-sm font-medium hover:bg-accent/10 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Add to Bookshelf
          </a>
        </div>
      </section>

      {/* Try again */}
      {onReset && (
        <div className="mt-10">
          <button
            onClick={onReset}
            className="text-sm text-muted-foreground underline underline-offset-2 hover:text-foreground transition-colors"
          >
            ← Try again
          </button>
        </div>
      )}
    </div>
  );
}
