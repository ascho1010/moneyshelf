// Pastel backing colors for category pills — always paired with ink text + a
// 2px ink border so mismatched book covers still read as one system.
export const CATEGORY_BG: Record<string, string> = {
  Investing: "#E4E9FF", // periwinkle
  Budgeting: "#D9F3E4", // mint
  Mindset: "#FFE1C7", // peach
  "Real Estate": "#FFF0C2", // butter
  Business: "#FFD9D0", // blush
};

export function categoryBg(category: string): string {
  return CATEGORY_BG[category] ?? "#F3E7D3";
}

// Soft tint used behind a framed cover, keyed to category for subtle variety.
export const CATEGORY_TINT: Record<string, string> = {
  Investing: "#EFF3FF",
  Budgeting: "#EAF8F0",
  Mindset: "#FFF3E2",
  "Real Estate": "#FFF7E0",
  Business: "#FFF0EC",
};

export function categoryTint(category: string): string {
  return CATEGORY_TINT[category] ?? "#F6EFE0";
}

// Rotating colored drop-shadows for the sticker cards, cycled by index.
export const POP_SHADOWS = ["#FFC93E", "#9BE8C0", "#FFB3A0", "#B7C4FF"];
export const TILTS = ["-0.5deg", "0.5deg", "-0.5deg", "0.5deg"];
