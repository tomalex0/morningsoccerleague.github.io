const IS_GITHUB = process.env.CI === true
module.exports = {
  purge: {
    enabled: IS_GITHUB,
    content: [
      "./src/**/*.tsx",
      "./src/**/*.ts",
      "./src/**/*.js",
      "./src/**/*.html",
    ],
  },
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
