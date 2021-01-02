const IS_GITHUB = process.env.GITHUB_ACTIONS === true
console.log(IS_GITHUB, "-IS_GITHUB-", process.env.GITHUB_ACTIONS)
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
