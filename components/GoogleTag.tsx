import Script from "next/script";
import { GADS_ID } from "@/lib/gtag";

/**
 * Google tag (gtag.js) for Google Ads conversion measurement.
 *
 * Uses next/script with the default afterInteractive strategy rather than a
 * raw <script> in <head> — Next injects it correctly on every route,
 * including client-side navigations, without blocking first paint.
 */
export default function GoogleTag() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GADS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-tag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GADS_ID}');
        `}
      </Script>
    </>
  );
}
