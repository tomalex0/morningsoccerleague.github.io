/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type PostJson implements Node {
      author: AuthorJson @link(by: "username")
    }

    type AuthorJson implements Node {
      posts: [PostJson] @link(by: "author.username", from: "username")
    }
  `
  createTypes(typeDefs)
}
