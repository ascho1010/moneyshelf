"use client";

import { useState } from "react";

interface ShareRowProps {
  /** Absolute URL to share. */
  url: string;
  /** Text used as the tweet body / Reddit post title. */
  text: string;
}

export default function ShareRow({ url, text }: ShareRowProps) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(text);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked (insecure context, permissions) — fall back
      // to the native share sheet where it exists.
      if (navigator.share) {
        try {
          await navigator.share({ url, text });
        } catch {
          /* user dismissed */
        }
      }
    }
  }

  const btn =
    "pop inline-flex items-center gap-2 border-2 border-border rounded-[12px] font-bold text-[13.5px] px-4 py-2.5 bg-card text-ink";

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button onClick={handleCopy} className={btn} aria-live="polite">
        {copied ? "Copied!" : "Copy link"}
      </button>

      <a
        className={btn}
        href={`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Share on X
      </a>

      <a
        className={btn}
        href={`https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedText}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Share on Reddit
      </a>
    </div>
  );
}
