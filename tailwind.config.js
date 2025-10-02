/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#74B3A4",
          secondary: "#2E2E2E",
          background: "#FFFFFF",
          complementary: "#E0E0E0",
          accent: "#4C8C82",
        },
      },
    },
  },
  plugins: [],
}
