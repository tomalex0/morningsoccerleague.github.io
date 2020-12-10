const { MslImgKey } = require("../lib/enum")
const { getFile, findInNested } = require("../lib/helpers")

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
        if (source.player_id) {
          // Add player_id to each season, so that player_id will available at MslSeasonsJson
          data.map(item => {
            item.player_id = source.player_id
          })
        }

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
    teamInfo: {
      resolve(source, args, context, info) {
        const teams = source.teams
        const playerId = source.player_id
        //console.log(JSON.stringify(teams),'---df-')
        const playerTeam = teams.find(item => item.players.includes(playerId))
        // const playerTeam = findInNested(playerId, teams, "players")
        // const playerOwner = findInNested(playerId, teams, "owners")
        const playerOwner = teams.filter(item => item.owners.includes(playerId))
        // console.log(playerTeam,'--playerTeam---playerOwner--',playerOwner)
        return {
          team: playerTeam.team,
          isOwner: playerOwner.length > 0,
        }
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
