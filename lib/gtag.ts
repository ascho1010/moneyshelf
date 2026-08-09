// Google Ads tag configuration.
//
// The Ads ID is not a secret — it ships in the client HTML by design.
export const GADS_ID = "AW-18379100962";

/**
 * Conversion label for the "Amazon click-out" conversion action.
 *
 * Google Ads gives you this only after you create the conversion action
 * (Goals → Conversions → New conversion action → Website). It looks like
 * `AbC-D_efG-h12_34-567`, and the full send_to value is `AW-…/<label>`.
 *
 * Set NEXT_PUBLIC_GADS_CONVERSION_LABEL in Vercel to switch conversion
 * reporting on. Until then we still record a normal event, so nothing breaks
 * and the analytics side works regardless.
 */
export const GADS_CONVERSION_LABEL =
  process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL ?? "";

type GtagArgs = Record<string, unknown>;

declare global {
  interface Window {
    gtag?: (command: string, targetOrName: string, params?: GtagArgs) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Fired when someone clicks through to Amazon. This is the closest thing an
 * Amazon affiliate can measure: Amazon never reports back which click became
 * a sale, so the click-out is the conversion signal we optimize against.
 */
export function trackAffiliateClick(params: {
  bookSlug: string;
  bookTitle: string;
  /** Where the click happened, e.g. "book-detail", "article-sidebar". */
  placement: string;
}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  // Always record the event — useful for analytics even with no ad campaign.
  window.gtag("event", "affiliate_click", {
    book_slug: params.bookSlug,
    book_title: params.bookTitle,
    placement: params.placement,
  });

  // Only report a Google Ads conversion once the label is configured.
  if (GADS_CONVERSION_LABEL) {
    window.gtag("event", "conversion", {
      send_to: `${GADS_ID}/${GADS_CONVERSION_LABEL}`,
    });
  }
}
