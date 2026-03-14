import Link from "next/link";
import Image from "next/image";
import { Book } from "@/lib/data";

interface BookCardProps {
  book: Book;
  variant?: "default" | "compact";
}

const categoryColors: Record<string, string> = {
  Investing: "bg-blue-900/40 text-blue-300",
  Budgeting: "bg-green-900/40 text-green-300",
  Mindset: "bg-purple-900/40 text-purple-300",
  "Real Estate": "bg-orange-900/40 text-orange-300",
  Business: "bg-red-900/40 text-red-300",
};

export default function BookCard({ book, variant = "default" }: BookCardProps) {
  const categoryClass = categoryColors[book.category] ?? "bg-muted text-muted-foreground";

  if (variant === "compact") {
    return (
      <Link href={`/books/${book.slug}`} className="flex items-center gap-3 group">
        <div className="w-10 h-14 rounded flex-shrink-0 overflow-hidden relative" style={{ backgroundColor: book.coverColor }}>
          <Image src={book.coverImage} alt={book.title} fill className="object-cover" sizes="40px" />
        </div>
        <div>
          <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors line-clamp-1">
            {book.title}
          </p>
          <p className="text-xs text-muted-foreground">{book.author}</p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/books/${book.slug}`}
      className="group flex gap-5 bg-card border border-border rounded-lg overflow-hidden hover:border-accent/40 transition-colors p-4"
    >
      {/* Portrait cover — left */}
      <div
        className="flex-shrink-0 w-24 relative rounded overflow-hidden"
        style={{ backgroundColor: book.coverColor, aspectRatio: "2/3" }}
      >
        <Image
          src={book.coverImage}
          alt={book.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="96px"
        />
      </div>

      {/* Text — right */}
      <div className="flex flex-col justify-between py-1 min-w-0">
        <div>
          <span className={`inline-block text-xs px-2 py-0.5 rounded-full mb-2 ${categoryClass}`}>
            {book.category}
          </span>
          <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-accent transition-colors leading-tight mb-1">
            {book.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-2">{book.author}</p>
          <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">{book.description}</p>
        </div>
        <div className="flex items-center gap-1 mt-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={`text-xs ${i < book.rating ? "text-accent" : "text-muted"}`}>★</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
