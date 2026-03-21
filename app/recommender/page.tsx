"use client";

import { useState } from "react";
import { books } from "@/lib/data";
import {
  scoreBooks,
  RecommenderInputs,
  ScoredBook,
} from "@/lib/recommender";
import RecommenderWizard from "@/components/RecommenderWizard";
import BookRecommendationLockup from "@/components/BookRecommendationLockup";

type Phase = "wizard" | "result" | "no-match";

export default function RecommenderPage() {
  const [phase, setPhase] = useState<Phase>("wizard");
  const [result, setResult] = useState<ScoredBook | null>(null);

  function handleComplete(inputs: RecommenderInputs) {
    const scored = scoreBooks(inputs, books);
    if (scored.length === 0) {
      setPhase("no-match");
    } else {
      setResult(scored[0]);
      setPhase("result");
    }
  }

  function handleReset() {
    setResult(null);
    setPhase("wizard");
  }

  return (
    <main className="mx-auto max-w-3xl px-5 py-16 md:py-24">
      <div className="mb-12">
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-3">
          Find Your Book
        </h1>
        <p className="text-muted-foreground text-base">
          Answer 4 quick questions and we'll match you to the right personal
          finance book.
        </p>
      </div>

      {phase === "wizard" && (
        <RecommenderWizard onComplete={handleComplete} />
      )}

      {phase === "result" && result && (
        <BookRecommendationLockup book={result} onReset={handleReset} />
      )}

      {phase === "no-match" && (
        <div className="py-16 space-y-4">
          <p className="text-muted-foreground">
            We couldn't find a strong match — try adjusting your answers.
          </p>
          <button
            onClick={handleReset}
            className="text-sm text-accent underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            Start over
          </button>
        </div>
      )}
    </main>
  );
}
