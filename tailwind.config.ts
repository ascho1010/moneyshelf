import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // "Pocket Money" — sunny, tactile bookshop
        background: "#FFF8EE", // sunny cream page
        foreground: "#221D14", // near-black ink (text + bold borders)
        ink: "#221D14",
        card: "#FFFFFF",
        accent: "#2C4BE6", // electric blue — primary action
        orange: "#FF7A2F", // playful accent / underline
        yellow: "#FFC93E", // highlight
        mint: "#9BE8C0", // soft success
        border: "#221D14", // bold ink borders
        line: "#E4D8C2", // subtle hairline dividers
        muted: "#F3E7D3", // soft cream fill (hover / progress track)
        "muted-foreground": "#6E6350", // body secondary
        subtle: "#8A7C64", // captions / author lines
        sand: "#E9DCC4", // default sticker shadow
      },
      fontFamily: {
        display: ["'Bricolage Grotesque'", "system-ui", "sans-serif"],
        sans: ["'Schibsted Grotesk'", "system-ui", "sans-serif"],
        // keep `serif` alias so any stray reference maps to the display face
        serif: ["'Bricolage Grotesque'", "Georgia", "serif"],
      },
      boxShadow: {
        pop: "4px 4px 0 #221D14",
        "pop-lg": "7px 7px 0 #221D14",
        card: "5px 5px 0 #E9DCC4",
      },
      keyframes: {
        msRise: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        msWobble: {
          "0%,100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        rise: "msRise .6s ease both",
        wobble: "msWobble 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
