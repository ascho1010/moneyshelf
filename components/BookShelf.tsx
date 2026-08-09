"use client";

import { useMemo, useState } from "react";
import { Book } from "@/lib/data";
import { categoryBg } from "@/lib/ui";
import BookRecommendationLockup from "./BookRecommendationLockup";

const ALL = "All";
const FAVORITES = "Editor favorites";

export default function BookShelf({ books }: { books: Book[] }) {
  const [active, setActive] = useState<string>(ALL);

  // Derive filters from the data rather than hardcoding, so a chip can never
  // appear with zero books behind it.
  const filters = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const b of books) counts[b.category] = (counts[b.category] ?? 0) + 1;
    const favCount = books.filter((b) => b.editorFavorite).length;

    return [
      { name: ALL, count: books.length },
      ...(favCount > 0 ? [{ name: FAVORITES, count: favCount }] : []),
      ...Object.entries(counts)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .map(([name, count]) => ({ name, count })),
    ];
  }, [books]);

  const visible = useMemo(() => {
    if (active === ALL) return books;
    // Editor favorites cut across categories, so it filters on the flag.
    if (active === FAVORITES) return books.filter((b) => b.editorFavorite);
    return books.filter((b) => b.category === active);
  }, [books, active]);

  return (
    <>
      <div className="flex flex-wrap gap-2.5 mb-12" role="group" aria-label="Filter books">
        {filters.map((f) => {
          const isActive = f.name === active;
          const bg = isActive
            ? "#221D14"
            : f.name === ALL
            ? "#FFFFFF"
            : f.name === FAVORITES
            ? "#FFC93E"
            : categoryBg(f.name);
          return (
            <button
              key={f.name}
              type="button"
              onClick={() => setActive(f.name)}
              aria-pressed={isActive}
              className={`pop text-[13px] font-bold px-4 py-2 rounded-full border-2 border-border transition-colors ${
                isActive ? "text-background" : "text-ink"
              }`}
              style={{ backgroundColor: bg }}
            >
              {f.name === FAVORITES && <span aria-hidden="true">★ </span>}
              {f.name} <span className={isActive ? "opacity-70" : "opacity-55"}>{f.count}</span>
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "book" : "books"}
        {active === ALL ? "" : ` in ${active}`}
      </p>

      <div className="flex flex-col gap-14">
        {visible.map((book) => (
          <div
            key={book.slug}
            className="bg-card border-2 border-border rounded-[24px] p-7 md:p-9 shadow-card"
          >
            <BookRecommendationLockup book={book} />
          </div>
        ))}
      </div>
    </>
  );
}
