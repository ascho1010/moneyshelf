"use client";

import { trackAffiliateClick } from "@/lib/gtag";

interface AffiliateLinkProps {
  href: string;
  bookSlug: string;
  bookTitle: string;
  /** Where on the site the click happened, e.g. "book-detail". */
  placement: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * Amazon click-out link that reports the click to Google Ads / analytics.
 *
 * Links open in a new tab, so the current page is never unloaded and the
 * beacon always has time to send — no need to delay navigation on a callback.
 */
export default function AffiliateLink({
  href,
  bookSlug,
  bookTitle,
  placement,
  className,
  children,
}: AffiliateLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={className}
      onClick={() => trackAffiliateClick({ bookSlug, bookTitle, placement })}
    >
      {children}
    </a>
  );
}
