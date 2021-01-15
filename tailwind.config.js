const colors = require("tailwindcss/colors")

module.exports = {
  purge: {
    enabled: process.env.GITHUB_ACTIONS,
    content: [
      "./src/**/*.tsx",
      "./src/**/*.ts",
      "./src/**/*.js",
      "./src/**/*.html",
    ],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      green: colors.green,
      red: colors.red,
      yellow: colors.yellow,
      light: colors.yellow,
      light_alt: colors.red,
      dark: colors.gray,
      dark_alt: colors.white,
    },
  },
  variants: {
    extend: {
      opacity: ["dark"],
      display: ["dark"],
      fill: ["dark"],
    },
  },
  plugins: [],
}
