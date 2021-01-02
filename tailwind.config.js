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
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
