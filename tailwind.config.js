/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "max-sm": { max: "640px" },
        "max-md": { max: "902px" },
        "max-lg": { max: "1024px" },
        "max-xl": { max: "1280px" },
      },
    },
  },
  plugins: [],
};
