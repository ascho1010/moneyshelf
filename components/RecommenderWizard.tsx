"use client";

import { useState } from "react";
import { RecommenderInputs } from "@/lib/recommender";

const STEPS: {
  key: keyof RecommenderInputs;
  question: string;
  options: { label: string; value: string }[];
}[] = [
  {
    key: "primaryGoal",
    question: "What's your primary financial goal right now?",
    options: [
      { label: "Get out of debt", value: "debt" },
      { label: "Build a budget that sticks", value: "budgeting" },
      { label: "Start or improve my investing", value: "investing" },
      { label: "Plan for retirement", value: "retirement" },
      { label: "Reach financial independence", value: "financial-independence" },
      { label: "Fix my money mindset", value: "mindset" },
    ],
  },
  {
    key: "experienceLevel",
    question: "How would you describe your financial knowledge?",
    options: [
      { label: "I'm just getting started", value: "beginner" },
      { label: "I know the basics", value: "intermediate" },
      { label: "I want advanced strategies", value: "advanced" },
    ],
  },
  {
    key: "learningStyle",
    question: "How do you prefer to learn?",
    options: [
      { label: "Give me a step-by-step action plan", value: "actionable" },
      { label: "Tell me a story I can learn from", value: "narrative" },
      { label: "Show me the research and data", value: "data-driven" },
    ],
  },
  {
    key: "readingTime",
    question: "How much time do you have to read?",
    options: [
      { label: "A few hours — keep it short", value: "short" },
      { label: "A weekend — medium length is fine", value: "medium" },
      { label: "I'll read the whole thing", value: "long" },
    ],
  },
];

interface RecommenderWizardProps {
  onComplete: (inputs: RecommenderInputs) => void;
}

export default function RecommenderWizard({ onComplete }: RecommenderWizardProps) {
  const [step, setStep] = useState(0);
  const [inputs, setInputs] = useState<Partial<RecommenderInputs>>({});

  const current = STEPS[step];

  function handleSelect(value: string) {
    const next = { ...inputs, [current.key]: value } as Partial<RecommenderInputs>;
    setInputs(next);
    if (step < STEPS.length - 1) {
      setStep(step + 1);
    } else {
      onComplete(next as RecommenderInputs);
    }
  }

  return (
    <div className="space-y-8">
      {/* Progress bar */}
      <div className="flex gap-1.5">
        {STEPS.map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
              i <= step ? "bg-accent" : "bg-muted"
            }`}
          />
        ))}
      </div>

      <p className="text-xs uppercase tracking-widest text-muted-foreground">
        Question {step + 1} of {STEPS.length}
      </p>

      <h2 className="font-serif text-2xl md:text-3xl text-foreground leading-snug">
        {current.question}
      </h2>

      <div className="flex flex-col gap-3">
        {current.options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => handleSelect(opt.value)}
            className="text-left px-5 py-3.5 rounded border border-border text-sm text-foreground hover:border-accent/60 hover:text-accent transition-colors"
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
