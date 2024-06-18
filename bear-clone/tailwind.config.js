/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        root: "11rem 15rem 1fr",
      },
    },
  },
  plugins: [],
};
