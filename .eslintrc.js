module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  env: {
    browser: true,
    node: true,
    es2020: true,
    jest: true, // Keep global Jest for non-Cypress test-like files if any, or for general setup
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "react", "jsx-a11y", "cypress", "prettier"],
  extends: [
    "react-app", // Includes Jest environment and rules by default
    "react-app/jest",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:cypress/recommended", // Should set up Cypress env and rules
    "plugin:prettier/recommended",
  ],
  rules: {
    "prettier/prettier": ["error"],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: [
        "cypress/**/*.js",
        "cypress/**/*.ts",
        "cypress/**/*.jsx",
        "cypress/**/*.tsx",
      ], // More inclusive glob
      env: {
        "cypress/globals": true, // Enable Cypress specific globals
        jest: false, // Disable Jest environment for Cypress files
      },
      rules: {
        "jest/valid-expect": "off",
        // Potentially add other Jest rules to turn off if they conflict:
        // "jest/expect-expect": "off",
        // etc.
      },
    },
  ],
}
