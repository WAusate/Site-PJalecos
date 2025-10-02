/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "var(--brand-primary, #74B3A4)",
          secondary: "var(--brand-secondary, #2E2E2E)",
          background: "var(--brand-background, #FFFFFF)",
          complementary: "var(--brand-complementary, #E0E0E0)",
          accent: "var(--brand-accent, #4C8C82)",
        },
      },
    },
  },
  plugins: [],
};
