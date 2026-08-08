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
      <div className="flex gap-2">
        {STEPS.map((_, i) => (
          <div
            key={i}
            className={`h-2.5 flex-1 rounded-full border-2 border-border transition-colors duration-300 ${
              i <= step ? "bg-accent" : "bg-muted"
            }`}
          />
        ))}
      </div>

      <p className="inline-block bg-yellow border-2 border-border rounded-full text-xs font-bold uppercase tracking-wide px-3 py-1.5">
        Question {step + 1} of {STEPS.length}
      </p>

      <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-ink leading-snug text-balance">
        {current.question}
      </h2>

      <div className="flex flex-col gap-3">
        {current.options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => handleSelect(opt.value)}
            className="pop text-left px-5 py-3.5 rounded-[14px] border-2 border-border bg-card text-[15px] font-semibold text-ink hover:bg-muted transition-colors"
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
