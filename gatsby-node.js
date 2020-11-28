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

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const typeDefs = `
    type SeasonsJsonTeams implements Node {
      owners: [PlayersJson] @link(by: "player_id")
      players: [PlayersJson] @link(by: "player_id")
      team: TeamsJson @link(by: "team_id")
    }
    
    type TeamsJson implements Node {
      seasons: [SeasonsJson] @link(by: "team.team_id", from: "team_id")
    }
    
    type SeasonsJson implements Node {
      mos: [PlayersJson] @link(by: "player_id")
    }    
  `
  createTypes(typeDefs)
}

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    PlayersJson: {
      seasons: {
        type: ["SeasonsJson"],
        resolve(source, args, context, info) {
          return context.nodeModel.runQuery({
            query: {
              filter: {
                mos: {
                  elemMatch: {
                    player_id: {
                      eq: source.player_id,
                    },
                  },
                },
              },
            },
            type: "SeasonsJson",
            firstOnly: false,
          })
        },
      },
      owners: {
        type: ["SeasonsJsonTeams"],
        resolve(source, args, context, info) {
          return context.nodeModel.runQuery({
            query: {
              filter: {
                mos: {
                  elemMatch: {
                    player_id: {
                      eq: source.player_id,
                    },
                  },
                },
              },
            },
            type: "SeasonsJsonTeams",
            firstOnly: false,
          })
        },
      },
      players: {
        type: ["SeasonsJsonTeams"],
        resolve(source, args, context, info) {
          return context.nodeModel.runQuery({
            query: {
              filter: {
                mos: {
                  elemMatch: {
                    player_id: {
                      eq: source.player_id,
                    },
                  },
                },
              },
            },
            type: "SeasonsJsonTeams",
            firstOnly: false,
          })
        },
      },
    },
  }

  createResolvers(resolvers)
}
