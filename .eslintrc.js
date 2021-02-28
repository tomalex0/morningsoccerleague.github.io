module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    "react-app",
    "plugin:prettier/recommended",
    "plugin:cypress/recommended",
  ],
  rules: {
    "@typescript-eslint/no-redeclare": "off",
    "prettier/prettier": ["error"],
  },
}
