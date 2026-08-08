import type { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { Book } from "@/lib/data";
import { categoryBg, categoryTint, POP_SHADOWS, TILTS } from "@/lib/ui";

interface BookCardProps {
  book: Book;
  variant?: "default" | "compact";
  index?: number;
}

export default function BookCard({ book, variant = "default", index = 0 }: BookCardProps) {
  if (variant === "compact") {
    return (
      <Link href={`/books/${book.slug}`} className="flex items-center gap-3 group">
        <div
          className="w-10 h-14 rounded-md flex-shrink-0 overflow-hidden relative border-2 border-border"
          style={{ backgroundColor: book.coverColor }}
        >
          <Image src={book.coverImage} alt={book.title} fill className="object-cover" sizes="40px" />
        </div>
        <div>
          <p className="text-sm font-bold text-ink group-hover:text-accent transition-colors line-clamp-1">
            {book.title}
          </p>
          <p className="text-xs text-subtle">{book.author}</p>
        </div>
      </Link>
    );
  }

  const pop = POP_SHADOWS[index % POP_SHADOWS.length];
  const tilt = TILTS[index % TILTS.length];

  return (
    <article
      className="card-pop bg-card border-2 border-border rounded-[20px] p-5 flex flex-col"
      style={{ "--pop": pop, "--tilt": tilt } as CSSProperties}
    >
      {/* Framed cover */}
      <Link
        href={`/books/${book.slug}`}
        className="flex justify-center border-2 border-border rounded-[14px] py-5 mb-4"
        style={{ backgroundColor: categoryTint(book.category) }}
      >
        <div
          className="relative w-[88px] h-[132px] rounded-[12px] overflow-hidden border-2 border-border"
          style={{ backgroundColor: book.coverColor }}
        >
          <Image src={book.coverImage} alt={book.title} fill className="object-cover" sizes="88px" />
        </div>
      </Link>

      <span
        className="self-start inline-block border-2 border-border rounded-full text-[10.5px] font-bold px-2.5 py-1 mb-2.5"
        style={{ backgroundColor: categoryBg(book.category) }}
      >
        {book.category}
      </span>

      <Link href={`/books/${book.slug}`}>
        <h3 className="font-display text-lg font-extrabold tracking-tight text-ink leading-tight mb-0.5 hover:text-accent transition-colors">
          {book.title}
        </h3>
      </Link>
      <p className="text-[13px] text-subtle mb-2.5">{book.author}</p>
      <p className="text-[13.5px] leading-relaxed text-muted-foreground mb-4 line-clamp-3">
        {book.description}
      </p>

      <a
        href={book.amazonUrl}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="mt-auto block text-center bg-ink text-background font-bold text-[13.5px] py-3 rounded-[12px] transition-colors hover:bg-accent"
      >
        Get it on Amazon ↗
      </a>
    </article>
  );
}
