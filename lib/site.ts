// Single source of truth for the canonical origin.
//
// Vercel currently 307-redirects the apex (moneyshelf.xyz) to www, so www is
// canonical. If you ever flip the primary domain in Vercel, change this one
// constant — sitemap, robots, canonicals, OG tags and JSON-LD all derive from it.
export const SITE_URL = "https://www.moneyshelf.xyz";

export const SITE_NAME = "MoneyShelf";
export const SITE_TAGLINE = "The books that build wealth";
export const SITE_DESCRIPTION =
  "Curated personal finance and FIRE book recommendations with honest editorial. Every article is anchored to a real book.";

/** Build an absolute URL from a site-relative path. */
export function absoluteUrl(path = "/"): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Site-wide social card. A page that declares its own `openGraph` block
 * replaces the parent's entirely, so pages must re-declare `images` to keep
 * the generated card from app/opengraph-image.tsx.
 */
export const DEFAULT_OG_IMAGE = "/opengraph-image";

/** Google truncates around 60 chars; drop the site suffix when it won't fit. */
export function pageTitle(title: string): string | { absolute: string } {
  return `${title} — ${SITE_NAME}`.length <= 60 ? title : { absolute: title };
}

/**
 * Google truncates title tags around 60 characters. Prefer the richer
 * "Title by Author" form, but fall back to just the title when that would
 * overflow once the site suffix is appended.
 */
export function bookPageTitle(title: string, author: string): string {
  const withAuthor = `${title} by ${author}`;
  return `${withAuthor} — ${SITE_NAME}`.length <= 60 ? withAuthor : title;
}
