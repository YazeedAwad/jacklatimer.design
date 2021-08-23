module.exports = {
  purge: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    maxWidth: {
      "10xl": "90%",
      "11xl": "92%",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
