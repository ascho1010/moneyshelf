import Link from "next/link";
import { Article, getBooksForArticle } from "@/lib/data";
import BookCard from "./BookCard";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const books = getBooksForArticle(article);
  const date = new Date(article.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group block bg-card border border-border rounded-lg p-6 hover:border-accent/40 transition-colors"
    >
      <div className="flex items-center gap-3 mb-4 text-xs text-muted-foreground">
        <span>{date}</span>
        <span>·</span>
        <span>{article.readTime} min read</span>
      </div>
      <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-accent transition-colors leading-tight mb-3">
        {article.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-5">{article.excerpt}</p>
      {books.length > 0 && (
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Referenced Books</p>
          <div className="flex flex-col gap-2">
            {books.map((book) => (
              <BookCard key={book.slug} book={book} variant="compact" />
            ))}
          </div>
        </div>
      )}
    </Link>
  );
}
