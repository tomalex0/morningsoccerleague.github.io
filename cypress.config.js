/* eslint-disable @typescript-eslint/no-var-requires */
const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    //baseUrl: "http://localhost:8000", // Set if most tests visit a single domain
    specPattern: "cypress/integration/**/*.spec.js", // Points to the existing integration folder
    supportFile: "cypress/support/e2e.js", // Updated to reflect rename
    excludeSpecPattern: "examples/*",
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/results/e2e",
      reportFilename: "e2e",
      overwrite: false,
      html: false,
      json: true,
    },
    env: {
      appUrl: "https://tomalex0.github.io/morningsoccerleague.github.io",
    },
    setupNodeEvents(on, config) {
      require("@cypress/code-coverage/task")(on, config)
      // implement other node event listeners here
      return config
    },
  },
  // Component testing can be configured here if needed in the future
  // component: {
  //   devServer: {
  //     framework: "react",
  //     bundler: "webpack",
  //   },
  // },
})
