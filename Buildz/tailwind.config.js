/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "870px",
      // => @media (min-width: 870px) { ... }

      laptop: "1440px",
      // => @media (min-width: 1440px) { ... }
      mid: "1200px",
      // => @media (min-width: 1200px) { ... }
      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
