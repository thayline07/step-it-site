module.exports = {
  prefix: "tw-",
  important: false,
  content: [
    "./index.html",
    "./*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./css/**/*.css",
    "./*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3c9e68",
        secondary: "#1f86e0",
      },
    },
  },
  plugins: [],
};
