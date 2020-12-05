const PostResolver = require("./resolvers/post")
const MslResolver = require("./resolvers/msl")
const TestResolver = require("./resolvers/test")

module.exports = ({ createResolvers }) => {
  const resolvers = {
    ...PostResolver,
    ...MslResolver,
    ...TestResolver,
  }
  createResolvers(resolvers)
}
