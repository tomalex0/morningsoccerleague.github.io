const PostResolver = require("./resolvers/post")
const MslResolver = require("./resolvers/msl")

module.exports = ({ createResolvers }) => {
  const resolvers = {
    ...PostResolver,
    ...MslResolver,
  }
  createResolvers(resolvers)
}
