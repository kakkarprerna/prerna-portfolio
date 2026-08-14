import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#12142A",
        "ink-soft": "#3A3D52",
        "ink-muted": "#63677A",
        paper: "#FFFFFF",
        "paper-subtle": "#F7F8FB",
        "paper-line": "#E3E5EC",
        indigo: "#4F46E5",
        "indigo-tint": "#EEEDFD",
        teal: "#0D9488",
        "teal-tint": "#E3F5F2",
      },
      fontFamily: {
        display: ["var(--font-geist-sans)"],
        body: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      maxWidth: {
        wrap: "72rem",
      },
    },
  },
  plugins: [],
};
export default config;
