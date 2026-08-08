import type { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { Article, getBooksForArticle } from "@/lib/data";
import { POP_SHADOWS, TILTS } from "@/lib/ui";

interface ArticleCardProps {
  article: Article;
  index?: number;
}

export default function ArticleCard({ article, index = 0 }: ArticleCardProps) {
  const books = getBooksForArticle(article);
  const pop = POP_SHADOWS[index % POP_SHADOWS.length];
  const tilt = TILTS[index % TILTS.length];

  return (
    <Link
      href={`/articles/${article.slug}`}
      className="card-pop group flex flex-col bg-card border-2 border-border rounded-[20px] p-6"
      style={{ "--pop": pop, "--tilt": tilt } as CSSProperties}
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="inline-block bg-yellow border-2 border-border rounded-full text-[10.5px] font-bold px-2.5 py-1">
          {article.readTime} min read
        </span>
      </div>

      <h3 className="font-display text-xl font-extrabold tracking-tight text-ink group-hover:text-accent transition-colors leading-tight mb-3">
        {article.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-5">{article.excerpt}</p>

      {books.length > 0 && (
        <div className="mt-auto flex items-center gap-3 pt-4 border-t-2 border-line">
          <div className="flex -space-x-2">
            {books.slice(0, 3).map((book) => (
              <div
                key={book.slug}
                className="w-8 h-11 rounded-md overflow-hidden border-2 border-border relative"
                style={{ backgroundColor: book.coverColor }}
              >
                <Image src={book.coverImage} alt={book.title} fill className="object-cover" sizes="32px" />
              </div>
            ))}
          </div>
          <span className="text-[13px] font-semibold text-subtle">
            {books.length === 1
              ? books[0].title
              : `${books.length} books referenced`}
          </span>
        </div>
      )}
    </Link>
  );
}
