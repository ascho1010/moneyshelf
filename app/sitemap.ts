import { books, articles } from "@/lib/data";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://moneyshelf.xyz";
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/books`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/articles`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];

  const bookPages: MetadataRoute.Sitemap = books.map((book) => ({
    url: `${base}/books/${book.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${base}/articles/${article.slug}`,
    lastModified: article.publishedAt,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...bookPages, ...articlePages];
}
