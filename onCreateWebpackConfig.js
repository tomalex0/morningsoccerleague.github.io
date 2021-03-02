const { resolve } = require("path-browserify")
module.exports = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        fs: false
      },
      alias: {
        path: require.resolve("path-browserify")
      },
      modules: [resolve(__dirname, "src"), "node_modules"],
    },
  })
}
