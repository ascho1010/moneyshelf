import { articles } from "@/lib/data";
import ArticleCard from "@/components/ArticleCard";

export default function ArticlesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="text-xs uppercase tracking-widest text-accent mb-3">Editorial</p>
        <h1 className="font-serif text-5xl font-black text-foreground mb-4">Articles</h1>
        <p className="text-muted-foreground max-w-lg">
          Every article is anchored in a real book. We don&apos;t publish generic tips — 
          we publish ideas that come from books worth reading.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
