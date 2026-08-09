import { books, articles } from "@/lib/data";
import { ACTIVE_CATEGORIES } from "@/lib/categories";
import { SITE_URL } from "@/lib/site";
import type { MetadataRoute } from "next";

// Stable build-time timestamp. Using `new Date()` per entry made every page
// look freshly modified on every crawl, which trains Google to ignore lastmod.
const BUILD_DATE = new Date().toISOString();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: BUILD_DATE, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/books`, lastModified: BUILD_DATE, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/articles`, lastModified: BUILD_DATE, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/recommender`, lastModified: BUILD_DATE, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified: BUILD_DATE, changeFrequency: "monthly", priority: 0.5 },
  ];

  // Topic landing pages — high priority; these target the head terms.
  const categoryPages: MetadataRoute.Sitemap = ACTIVE_CATEGORIES.map((c) => ({
    url: `${SITE_URL}/books/category/${c.slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const bookPages: MetadataRoute.Sitemap = books.map((book) => ({
    url: `${SITE_URL}/books/${book.slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${SITE_URL}/articles/${article.slug}`,
    lastModified: article.publishedAt,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...categoryPages, ...bookPages, ...articlePages];
}
