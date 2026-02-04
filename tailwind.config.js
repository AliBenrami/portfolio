/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Text",
          "SF Pro Icons",
          "Inter",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        apple: {
          bg: "#FFFFFF",
          "bg-alt": "#F5F5F7",
          text: "#1D1D1F",
          "text-secondary": "#86868B",
          accent: "#1D1D1F",
          "accent-hover": "#000000",
          border: "#D2D2D7",
        },
      },
      boxShadow: {
        apple: "0 4px 12px rgba(0, 0, 0, 0.08)",
        "apple-lg": "0 8px 24px rgba(0, 0, 0, 0.12)",
      },
      borderRadius: {
        apple: "12px",
        "apple-lg": "18px",
      },
      animation: {
        fadeInUp: "fadeInUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
