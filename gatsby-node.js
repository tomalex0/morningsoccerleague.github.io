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
    type  MslSeasonsJsonTeams implements Node {
      owners: [ MslPlayersJson] @link(by: "player_id")
      players: [ MslPlayersJson] @link(by: "player_id")
      team:  MslTeamsJson @link(by: "team_id")
    }
    
    type  MslTeamsJson implements Node {
      seasons: [ MslSeasonsJson] @link(by: "team.team_id", from: "team_id")
    }
    
    type  MslSeasonsJson implements Node {
      mos: [ MslPlayersJson] @link(by: "player_id")
    }    
  `
  createTypes(typeDefs)
}

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    PlayersJson: {
      seasons: {
        type: [" MslSeasonsJson"],
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
            type: " MslSeasonsJson",
            firstOnly: false,
          })
        },
      },
      owners: {
        type: [" MslSeasonsJsonTeams"],
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
            type: " MslSeasonsJsonTeams",
            firstOnly: false,
          })
        },
      },
      players: {
        type: [" MslSeasonsJsonTeams"],
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
            type: " MslSeasonsJsonTeams",
            firstOnly: false,
          })
        },
      },
    },
  }

  createResolvers(resolvers)
}
