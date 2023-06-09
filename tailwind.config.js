/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkgrey: "#6e6e6e",
        lightgrey: "#ebebeb",
        bggrey: "#f7f7f7",
        blue: "#3e5b9d",
        brandred: "#e82e00",
        brandorange: "#e78f09",
        green: "#8bba0a",
      },
    },
  },
  plugins: [],
};
