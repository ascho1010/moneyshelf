"use client";

import Image from "next/image";
import Link from "next/link";
import { Book } from "@/lib/data";
import { categoryBg, categoryTint } from "@/lib/ui";
import AffiliateLink from "./AffiliateLink";

interface BookRecommendationLockupProps {
  book: Book & { matchReasons?: string[] };
  label?: string;
  onReset?: () => void;
}

export default function BookRecommendationLockup({
  book,
  label,
  onReset,
}: BookRecommendationLockupProps) {
  return (
    <div>
      {label && (
        <p className="inline-block bg-yellow border-2 border-border rounded-full text-xs font-bold uppercase tracking-wide px-3 py-1.5 mb-6">
          {label}
        </p>
      )}

      <section className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        {/* ── Left: text ── */}
        <div className="flex-1 max-w-[560px]">
          <div className="flex flex-wrap gap-2 mb-5">
            <span
              className="inline-block border-2 border-border rounded-full text-[11px] font-bold px-2.5 py-1"
              style={{ backgroundColor: categoryBg(book.category) }}
            >
              {book.category}
            </span>
            {book.matchReasons?.map((reason) => (
              <span
                key={reason}
                className="inline-block bg-mint border-2 border-border rounded-full text-[11px] font-bold px-2.5 py-1"
              >
                {reason}
              </span>
            ))}
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight text-ink leading-tight">
            {book.title}
          </h2>

          <p className="mt-2 text-sm text-subtle">
            by{" "}
            <Link
              href={`/books/${book.slug}`}
              className="font-semibold text-ink underline decoration-orange decoration-2 underline-offset-2 hover:text-accent transition-colors"
            >
              {book.author}
            </Link>
          </p>

          <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
            {book.description}
          </p>

          {book.keyTakeaways?.length > 0 && (
            <ul className="mt-6 space-y-2.5">
              {book.keyTakeaways.slice(0, 3).map((takeaway) => (
                <li key={takeaway} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span className="text-orange mt-0.5 shrink-0">★</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* ── Right: cover + CTA ── */}
        <div className="flex flex-col items-stretch gap-4 shrink-0 w-full md:w-[300px]">
          <div
            className="border-2 border-border rounded-[18px] p-5 flex justify-center"
            style={{ backgroundColor: categoryTint(book.category) }}
          >
            <div
              className="w-[180px] rounded-[12px] overflow-hidden border-2 border-border shadow-pop"
              style={{ backgroundColor: book.coverColor, aspectRatio: "2 / 3" }}
            >
              <Image
                src={book.coverImage}
                alt={`${book.title} cover`}
                width={360}
                height={540}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          <AffiliateLink
            href={book.amazonUrl}
            bookSlug={book.slug}
            bookTitle={book.title}
            placement="lockup"
            className="pop block text-center bg-accent text-background font-bold text-sm px-5 py-3.5 rounded-[12px] border-2 border-border"
          >
            Get it on Amazon ↗
          </AffiliateLink>
          <p className="text-xs text-subtle text-center">
            Affiliate link — we earn a small commission at no cost to you.
          </p>
        </div>
      </section>

      {onReset && (
        <div className="mt-10">
          <button
            onClick={onReset}
            className="text-sm font-semibold text-ink underline decoration-orange decoration-2 underline-offset-2 hover:text-accent transition-colors"
          >
            ← Try again
          </button>
        </div>
      )}
    </div>
  );
}
