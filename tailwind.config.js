/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif"
        ],
        mono: ["monospace"],
      },
      colors: {
        accent: {
          50: "#eff6ff",
          100: "#dbeafe",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
        },
        themeBg: "var(--bg-primary)",
        themeCard: "var(--bg-secondary)",
        themeCardHover: "var(--bg-tertiary)",
        themeText: "var(--text-primary)",
        themeTextMuted: "var(--text-muted)",
        themeTextSecondary: "var(--text-secondary)",
        themeBorder: "var(--border)",
        themeBorderLight: "var(--border-light)",
        themeAccent: "var(--accent)",
        themeAccentHover: "var(--accent-hover)",
        themeAccentText: "var(--accent-text)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        typing: "typing 3s steps(30) infinite",
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
