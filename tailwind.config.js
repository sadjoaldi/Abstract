/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue_gray: "#dadbf1",
        links_color: "#4C5FD5",
        requestColor: "#191a1b",
        borderHover: ["hover", "focus"],
      },

      fontFamily: {
        america: ["America", "sans-serif"],
      },
    },
  },
  plugins: [],
};
