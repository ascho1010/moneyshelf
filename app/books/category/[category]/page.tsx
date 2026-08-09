import Link from "next/link";
import { notFound } from "next/navigation";
import BookRecommendationLockup from "@/components/BookRecommendationLockup";
import {
  ACTIVE_CATEGORIES,
  booksInCategory,
  getCategory,
} from "@/lib/categories";
import { categoryBg } from "@/lib/ui";
import { SITE_URL, SITE_NAME, absoluteUrl, DEFAULT_OG_IMAGE } from "@/lib/site";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return ACTIVE_CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {
  const cat = getCategory(params.category);
  if (!cat) return {};

  const path = `/books/category/${cat.slug}`;
  return {
    title: cat.title,
    description: cat.description,
    alternates: { canonical: path },
    openGraph: {
      title: cat.title,
      description: cat.description,
      url: path,
      type: "website",
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const cat = getCategory(params.category);
  if (!cat) notFound();

  const list = booksInCategory(cat.name);
  if (list.length === 0) notFound();

  const pageUrl = absoluteUrl(`/books/category/${cat.slug}`);
  const others = ACTIVE_CATEGORIES.filter((c) => c.slug !== cat.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#collection`,
        name: cat.h1,
        description: cat.description,
        url: pageUrl,
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: list.length,
          itemListElement: list.map((b, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: absoluteUrl(`/books/${b.slug}`),
            name: b.title,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Books", item: absoluteUrl("/books") },
          { "@type": "ListItem", position: 3, name: cat.name, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link
        href="/books"
        className="inline-block text-sm font-bold text-ink underline decoration-orange decoration-2 underline-offset-4 hover:text-accent transition-colors mb-8"
      >
        ← All books
      </Link>

      <div className="mb-10">
        <span
          className="inline-block border-2 border-border rounded-full text-xs font-bold uppercase tracking-wide px-3 py-1.5 mb-4"
          style={{ backgroundColor: categoryBg(cat.name) }}
        >
          {cat.name} · {list.length} book{list.length === 1 ? "" : "s"}
        </span>
        <h1 className="font-display text-5xl md:text-6xl font-extrabold tracking-tight text-ink mb-4 text-balance">
          {cat.h1}
        </h1>
        <p className="text-muted-foreground text-[17px] leading-relaxed max-w-2xl">
          {cat.intro}
        </p>
      </div>

      <div className="flex flex-col gap-14 mb-16">
        {list.map((book) => (
          <div
            key={book.slug}
            className="bg-card border-2 border-border rounded-[24px] p-7 md:p-9 shadow-card"
          >
            <BookRecommendationLockup book={book} />
          </div>
        ))}
      </div>

      {/* Cross-links keep every category reachable in one hop */}
      <div className="border-t-2 border-line pt-10">
        <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink mb-5">
          Browse another topic
        </h2>
        <div className="flex flex-wrap gap-2.5">
          {others.map((c) => (
            <Link
              key={c.slug}
              href={`/books/category/${c.slug}`}
              className="pop inline-block text-[13px] font-bold px-4 py-2 rounded-full border-2 border-border text-ink"
              style={{ backgroundColor: categoryBg(c.name) }}
            >
              {c.name}{" "}
              <span className="opacity-55">{booksInCategory(c.name).length}</span>
            </Link>
          ))}
          <Link
            href="/recommender"
            className="pop inline-block text-[13px] font-bold px-4 py-2 rounded-full border-2 border-border bg-accent text-background"
          >
            Find my book →
          </Link>
        </div>
      </div>
    </div>
  );
}
