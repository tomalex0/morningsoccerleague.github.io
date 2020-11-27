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
      tags: [TagsJson] @link(by: "tagname")
    }

    type AuthorJson implements Node {
      posts: [PostJson] @link(by: "author.username", from: "username")
    }
  `
  createTypes(typeDefs)
}

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    TagsJson: {
      posts: {
        type: ["PostJson"],
        resolve(source, args, context, info) {
          return context.nodeModel.runQuery({
            query: {
              filter: {
                tags: {
                  elemMatch: {
                    tagname: {
                      eq: source.tagname,
                    },
                  },
                },
              },
            },
            type: "PostJson",
            firstOnly: false,
          })
        },
      },
    },
  }

  createResolvers(resolvers)
}
