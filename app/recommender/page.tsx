"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { books } from "@/lib/data";
import { scoreBooks, RecommenderInputs } from "@/lib/recommender";
import RecommenderWizard from "@/components/RecommenderWizard";

type Phase = "wizard" | "no-match";

export default function RecommenderPage() {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>("wizard");

  function handleComplete(inputs: RecommenderInputs) {
    const scored = scoreBooks(inputs, books);
    if (scored.length === 0) {
      setPhase("no-match");
      return;
    }
    // Send the result to its own URL so it can be linked and shared.
    router.push(`/recommender/result/${scored[0].slug}`);
  }

  function handleReset() {
    setPhase("wizard");
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 md:py-20">
      <div className="mb-12">
        <span className="inline-flex items-center gap-1.5 bg-orange text-ink border-2 border-border rounded-full text-xs font-bold uppercase tracking-wide px-3 py-1.5 mb-4">
          <span aria-hidden="true">📖</span> Book matchmaker
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-ink mb-3 text-balance">
          Find your book
        </h1>
        <p className="text-muted-foreground text-[17px] leading-relaxed">
          Answer 4 quick questions and we&apos;ll match you to the right personal
          finance book.
        </p>
      </div>

      {phase === "wizard" && (
        <div className="bg-card border-2 border-border rounded-[24px] p-7 md:p-9 shadow-card">
          <RecommenderWizard onComplete={handleComplete} />
        </div>
      )}

      {phase === "no-match" && (
        <div className="bg-card border-2 border-border rounded-[24px] p-9 shadow-card space-y-4">
          <p className="text-muted-foreground text-[15px]">
            We couldn&apos;t find a strong match — try adjusting your answers.
          </p>
          <button
            onClick={handleReset}
            className="text-sm font-bold text-ink underline decoration-orange decoration-2 underline-offset-2 hover:text-accent transition-colors"
          >
            ← Start over
          </button>
        </div>
      )}
    </main>
  );
}
