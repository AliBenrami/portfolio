/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      animation: {
        shake: "shake 1s infinite",
      },
      keyframes: {
        shake: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(10px)" },
        },
      },
    },
  },
  plugins: [],
};
