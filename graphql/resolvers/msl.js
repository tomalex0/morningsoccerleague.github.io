module.exports = {
  MslPlayersJson: {
    mos: {
      type: ["MslSeasonsJson"],
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
          type: "MslSeasonsJson",
          firstOnly: false,
        })
      },
    },
    owners: {
      type: ["MslSeasonsJsonTeams"],
      resolve(source, args, context, info) {
        return context.nodeModel.runQuery({
          query: {
            filter: {
              teams: {
                elemMatch: {
                  owners: {
                    elemMatch: {
                      player_id: {
                        eq: source.player_id,
                      },
                    },
                  },
                },
              },
            },
          },
          type: "MslSeasonsJsonTeams",
          firstOnly: false,
        })
      },
    },
    players: {
      type: ["MslSeasonsJsonTeams"],
      resolve(source, args, context, info) {
        return context.nodeModel.runQuery({
          query: {
            filter: {
              teams: {
                elemMatch: {
                  players: {
                    elemMatch: {
                      player_id: {
                        eq: source.player_id,
                      },
                    },
                  },
                },
              },
            },
          },
          type: "MslSeasonsJsonTeams",
          firstOnly: false,
        })
      },
    },
  },
}
