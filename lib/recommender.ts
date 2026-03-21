import { Book } from "./data";

export interface RecommenderInputs {
  primaryGoal: string;
  experienceLevel: "beginner" | "intermediate" | "advanced";
  learningStyle: "actionable" | "narrative" | "data-driven";
  readingTime: "short" | "medium" | "long";
}

export interface ScoredBook extends Book {
  score: number;
  matchReasons: string[];
}

// Map goals → primary and secondary categories
const goalCategoryMap: Record<string, { primary: string[]; secondary: string[] }> = {
  debt:                   { primary: ["Budgeting"],  secondary: ["Mindset"] },
  budgeting:              { primary: ["Budgeting"],  secondary: ["Mindset"] },
  investing:              { primary: ["Investing"],  secondary: [] },
  retirement:             { primary: ["Investing"],  secondary: ["Mindset"] },
  "financial-independence": { primary: ["Investing"], secondary: ["Mindset"] },
  mindset:                { primary: ["Mindset"],    secondary: ["Investing"] },
};

// Difficulty per slug
const slugDifficulty: Record<string, "beginner" | "intermediate" | "advanced"> = {
  "psychology-of-money":               "beginner",
  "i-will-teach-you-to-be-rich":       "beginner",
  "atomic-habits":                     "beginner",
  "little-book-common-sense-investing":"beginner",
  "millionaire-next-door":             "intermediate",
  "simple-path-to-wealth":             "intermediate",
  "money-for-couples":                 "intermediate",
  "art-of-spending-money":             "intermediate",
  "opposite-of-spoiled":               "intermediate",
  "wealth-ladder":                     "advanced",
  "quit-like-a-millionaire":           "advanced",
  "rich-girl-nation":                  "advanced",
  "almanack-naval-ravikant":           "advanced",
  "thinking-in-bets":                  "advanced",
};

// Learning style per slug
const slugLearningStyle: Record<string, Array<"actionable" | "narrative" | "data-driven">> = {
  "psychology-of-money":               ["narrative"],
  "i-will-teach-you-to-be-rich":       ["actionable"],
  "atomic-habits":                     ["actionable"],
  "little-book-common-sense-investing":["actionable", "data-driven"],
  "millionaire-next-door":             ["narrative", "data-driven"],
  "simple-path-to-wealth":             ["actionable"],
  "money-for-couples":                 ["actionable"],
  "art-of-spending-money":             ["narrative"],
  "opposite-of-spoiled":               ["actionable"],
  "wealth-ladder":                     ["data-driven"],
  "quit-like-a-millionaire":           ["narrative", "data-driven"],
  "rich-girl-nation":                  ["actionable"],
  "almanack-naval-ravikant":           ["narrative"],
  "thinking-in-bets":                  ["data-driven"],
};

// Read time per slug
const slugReadTime: Record<string, "short" | "medium" | "long"> = {
  "little-book-common-sense-investing":"short",
  "almanack-naval-ravikant":           "short",
  "art-of-spending-money":             "short",
  "psychology-of-money":               "medium",
  "i-will-teach-you-to-be-rich":       "medium",
  "atomic-habits":                     "medium",
  "thinking-in-bets":                  "medium",
  "opposite-of-spoiled":               "medium",
  "millionaire-next-door":             "long",
  "simple-path-to-wealth":             "long",
  "quit-like-a-millionaire":           "long",
  "wealth-ladder":                     "long",
  "money-for-couples":                 "long",
  "rich-girl-nation":                  "long",
};

export function scoreBooks(inputs: RecommenderInputs, books: Book[]): ScoredBook[] {
  const categories = goalCategoryMap[inputs.primaryGoal] ?? {
    primary: [],
    secondary: [],
  };

  return books
    .map((book): ScoredBook => {
      let score = 0;
      const matchReasons: string[] = [];

      // Goal / category match
      if (categories.primary.includes(book.category)) {
        score += 40;
        matchReasons.push(`Matches your ${inputs.primaryGoal.replace("-", " ")} goal`);
      } else if (categories.secondary.includes(book.category)) {
        score += 20;
        matchReasons.push(`Relevant to ${inputs.primaryGoal.replace("-", " ")}`);
      }

      // Experience level
      const difficulty = slugDifficulty[book.slug];
      if (difficulty === inputs.experienceLevel) {
        score += 30;
        matchReasons.push(
          inputs.experienceLevel === "beginner"
            ? "Perfect starting point"
            : inputs.experienceLevel === "intermediate"
            ? "Matches your experience level"
            : "Advanced strategies"
        );
      } else if (
        (inputs.experienceLevel === "intermediate" && difficulty === "beginner") ||
        (inputs.experienceLevel === "advanced" && difficulty === "intermediate")
      ) {
        score += 10;
      }

      // Learning style
      const styles = slugLearningStyle[book.slug] ?? [];
      if (styles.includes(inputs.learningStyle)) {
        score += 20;
        matchReasons.push(
          inputs.learningStyle === "actionable"
            ? "Step-by-step action plan"
            : inputs.learningStyle === "narrative"
            ? "Story-driven format"
            : "Research-backed"
        );
      }

      // Reading time
      const readTime = slugReadTime[book.slug];
      if (readTime === inputs.readingTime) {
        score += 10;
        matchReasons.push(
          inputs.readingTime === "short"
            ? "Quick read"
            : inputs.readingTime === "medium"
            ? "Weekend read"
            : "Comprehensive"
        );
      }

      return { ...book, score, matchReasons };
    })
    .filter((b) => b.score >= 20)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
}
