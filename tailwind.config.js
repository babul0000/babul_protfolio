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
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        themeBg: "var(--bg-primary)",
        themeCard: "var(--card-bg)",
        themeCardBorder: "var(--card-border)",
        themeCardHover: "var(--bg-tertiary)",
        themeText: "var(--text-primary)",
        themeTextSecondary: "var(--text-secondary)",
        themeTextMuted: "var(--text-muted)",
        themeBorder: "var(--border)",
        themeBorderDashed: "var(--border-dashed)",
        themeBorderLight: "var(--border-light)",
        themeAccent: "var(--accent)",
        themeAccentHover: "var(--accent-hover)",
        themeAccentText: "var(--accent-text)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
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
      },
    },
  },
  plugins: [],
};
