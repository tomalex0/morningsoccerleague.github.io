const { MslImgKey } = require("../lib/enum")
const {
  getFile,
  getPlayerGoals,
  groupBy,
  getPlayerAssists,
} = require("../lib/helpers")

module.exports = {
  MslTeamsJson: {
    seasons: {
      type: ["MslSeasonsJson"],
      resolve(source, args, context, info) {
        return context.nodeModel.runQuery({
          query: {
            filter: {
              teams: {
                elemMatch: { team: { team_id: { eq: source.team_id } } },
              },
            },
          },
          type: "MslSeasonsJson",
          firstOnly: false,
        })
      },
    },
    image: {
      type: "File",
      resolve(source, args, context, info) {
        const imgPath = `${MslImgKey.TEAM}/${source.team_id}.png`
        const record = getFile(context, imgPath)
        return record
      },
    },
  },
  MslPlayersJson: {
    image: {
      type: "File",
      resolve(source, args, context, info) {
        const imgPath = `${MslImgKey.PLAYER}/${source.player_id}.png`
        const record = getFile(context, imgPath)
        return record
      },
    },
    playerStats: {
      async resolve(source, args, context, info) {
        const data = await context.nodeModel.runQuery({
          query: {
            filter: {
              teams: {
                elemMatch: {
                  players: {
                    elemMatch: { player_id: { eq: source.player_id } },
                  },
                },
              },
            },
          },
          type: "MslSeasonsJson",
          firstOnly: false,
        })
        const schedule_data = await context.nodeModel.runQuery({
          query: {},
          type: "MslSchedulesJson",
          firstOnly: false,
        })
        const scheduleBySeason = groupBy(schedule_data, "season")

        const playerId = source.player_id
        const seasonStats = data.map(item => {
          const playerTeam = item.teams.find(item =>
            item.players.includes(playerId)
          )
          const playerOwner = item.teams.filter(item =>
            item.owners.includes(playerId)
          )
          const playerMos = item.mos.includes(playerId)
          const schedules = scheduleBySeason[item.season]
          const playerGoals = getPlayerGoals(schedules, playerId)
          const playerAssists = getPlayerAssists(schedules, playerId)
          return {
            team: playerTeam ? playerTeam.team : null,
            isOwner: playerOwner.length > 0,
            isMos: playerMos,
            goals: playerGoals.length,
            assists: playerAssists.length,
            season_id: item.season,
            season: item.season,
          }
        })
        const totalGoals = seasonStats.reduce(function (sum, item) {
          return sum + item.goals
        }, 0)
        const totalAssists = seasonStats.reduce(function (sum, item) {
          return sum + item.assists
        }, 0)

        return {
          allseasonStats: {
            goals: totalGoals,
            assists: totalAssists,
          },
          seasonStats: seasonStats,
        }
      },
    },
    seasons: {
      type: ["MslSeasonsJson"],
      async resolve(source, args, context, info) {
        const data = await context.nodeModel.runQuery({
          query: {
            filter: {
              teams: {
                elemMatch: {
                  players: {
                    elemMatch: { player_id: { eq: source.player_id } },
                  },
                },
              },
            },
          },
          type: "MslSeasonsJson",
          firstOnly: false,
        })

        return data
      },
    },
    mos: {
      type: ["MslSeasonsJson"],
      async resolve(source, args, context, info) {
        const data = await context.nodeModel.runQuery({
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
        return data
      },
    },
  },
  MslSchedulesJson: {
    stats: {
      resolve(source, args, context, info) {
        return source.gamestats.find(item => item.team_type == args.stats_type)
      },
    },
  },
  MslSeasonsJson: {
    // Depends on Player ID
    isMos: {
      resolve(source, args, context, info) {
        var isMos = false
        if (source.player_id) {
          isMos = source.mos.includes(source.player_id)
        }
        return isMos
      },
    },
    schedules: {
      type: ["MslSchedulesJson"],
      resolve(source, args, context, info) {
        return context.nodeModel.runQuery({
          query: {
            filter: {
              season: {
                season_id: { eq: source.season_id },
              },
            },
          },
          type: "MslSchedulesJson",
          firstOnly: false,
        })
      },
    },
  },
}
