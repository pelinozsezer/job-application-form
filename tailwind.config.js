/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Red Hat Display"'],
        text: ['"Red Hat Text"'],
      },
    },
  },
  plugins: [],
};
