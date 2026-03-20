import Link from "next/link";
import Image from "next/image";
import { Book } from "@/lib/data";

interface BookListItemProps {
  book: Book;
  index: number;
}

const categoryColors: Record<string, string> = {
  Investing: "bg-blue-900/40 text-blue-300",
  Budgeting: "bg-green-900/40 text-green-300",
  Mindset: "bg-purple-900/40 text-purple-300",
  "Real Estate": "bg-orange-900/40 text-orange-300",
  Business: "bg-red-900/40 text-red-300",
};

export default function BookListItem({ book, index }: BookListItemProps) {
  const categoryClass = categoryColors[book.category] ?? "bg-muted text-muted-foreground";
  const num = String(index).padStart(2, "0");

  return (
    <article className="flex flex-col sm:flex-row gap-4 py-10 border-b border-border last:border-0 group">
      {/* Left: number + text content */}
      <div className="flex-1 min-w-0">
        {/* Number */}
        <span className="font-serif text-6xl font-black text-accent leading-none block mb-4 select-none">
          {num}
        </span>

        {/* Category badge */}
        <span className={`inline-block text-xs px-2 py-0.5 rounded-full mb-3 ${categoryClass}`}>
          {book.category}
        </span>

        {/* Title */}
        <Link href={`/books/${book.slug}`}>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground group-hover:text-accent transition-colors leading-tight mb-1">
            {book.title}
          </h2>
        </Link>

        {/* Author */}
        <p className="text-sm text-muted-foreground mb-4">by {book.author}</p>

        {/* Description */}
        <p className="text-base text-muted-foreground leading-relaxed mb-5 max-w-prose">
          {book.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={`text-sm ${i < book.rating ? "text-accent" : "text-border"}`}>
              ★
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-3 flex-wrap">
          <a
            href={book.amazonUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 bg-accent text-background text-sm font-semibold px-4 py-2 rounded hover:bg-accent/90 transition-colors"
          >
            Buy on Amazon →
          </a>
          <Link
            href={`/books/${book.slug}`}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            Read more
          </Link>
        </div>
      </div>

      {/* Right: tall book cover */}
      <div className="flex-shrink-0 sm:self-start">
        <Link href={`/books/${book.slug}`}>
          <div
            className="relative rounded overflow-hidden"
            style={{
              width: "clamp(90px, 12vw, 120px)",
              aspectRatio: "2/3",
              backgroundColor: book.coverColor,
            }}
          >
            <Image
              src={book.coverImage}
              alt={book.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 90px, 120px"
            />
          </div>
        </Link>
      </div>
    </article>
  );
}
