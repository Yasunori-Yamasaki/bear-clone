/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        root: "11rem 0 1fr",
        noteList: "15rem 1fr",
      },
    },
  },
  plugins: [],
};
