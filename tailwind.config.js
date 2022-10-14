/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      screens: {
        sm: "250px",
        md: "620px",
        lg: "850px",
        xl: "1150px",
      },
    },
  },
  plugins: [],
};
