const { resolve } = require("path")
module.exports = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [resolve(__dirname, "src"), "node_modules"],
    },
  })
}
