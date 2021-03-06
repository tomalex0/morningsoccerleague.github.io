const { MslImgKey, Cautions, SCHEMA_TYPE_NAME } = require("../lib/enum")
const {
  getFile,
  getPlayerGoals,
  getPlayerAssists,
  getPlayerCautions,
  getPlayerMom,
  getPlayerSaves,
  getTeamGoals,
  getTeamAssists,
  getTeamCautions,
  getTeamMom,
  getTeamSaves,
  getPlayerReferees,
} = require("../lib/helpers")

const { groupBy, getSum } = require("../lib/utility")
const { getTeamStandings } = require("../models/team-season-stats")

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
        const imgPath = `${MslImgKey.TEAM}/svg/${source.team_id}.svg`
        const record = getFile(context, imgPath)
        return record
      },
    },
    teamStats: {
      async resolve(source, args, context, info) {
        // console.log(source,'---df---')
        const teamId = source.team_id
        const data = await context.nodeModel.runQuery({
          query: {
            filter: {
              teams: { elemMatch: { team: { team_id: { eq: teamId } } } },
            },
          },
          type: "MslSeasonsJson",
          firstOnly: false,
        })
        // Get All Schedules
        const schedule_data = await context.nodeModel.runQuery({
          query: {
            filter: {
              gamestats: { elemMatch: { team: { team_id: { eq: teamId } } } },
            },
          },
          type: "MslSchedulesJson",
          firstOnly: false,
        })
        const scheduleBySeason = groupBy(schedule_data, "season")

        // New Data List based on season
        const seasonStats = data.map(item => {
          let newItem = {}
          const schedules = scheduleBySeason[item.season]
          const teamList = item.teams.map(teamitem => teamitem.team)
          const gamestats = schedules
            .filter(item => item.completed)
            .map(item => item.gamestats)
            .flat()
            .filter(item => item.team == teamId)
          const teamStandings = getTeamStandings(schedules, teamList)
          // console.log(teamStandings,'--343---', teamId)
          const teamGoals = getTeamGoals(schedules, teamId)
          const teamAssists = getTeamAssists(schedules, teamId)
          const teamSaves = getTeamSaves(schedules, teamId)
          const teamMom = getTeamMom(schedules, teamId)
          const currTeamObj = item.teams.find(item => item.team == teamId)
          const mosPlayers = currTeamObj.players.filter(player =>
            item.mos.includes(player)
          )

          const teamYellowCards = getTeamCautions(
            schedules,
            teamId,
            Cautions.YELLOW
          )
          const teamRedCards = getTeamCautions(schedules, teamId, Cautions.RED)
          newItem = { ...teamStandings[teamId] }
          newItem.season = item.season
          newItem.season_id = item.season
          newItem.goals = teamGoals.length
          newItem.assists = teamAssists.length
          newItem.team = currTeamObj.team
          newItem.players = currTeamObj.players.length
          newItem.players_list = currTeamObj.players
          newItem.mos = mosPlayers.length
          newItem.saves = teamSaves.length
          newItem.mom = teamMom.length
          newItem.yellow_cards = teamYellowCards.length
          newItem.red_cards = teamRedCards.length
          newItem.matches = gamestats.length

          return newItem
        })
        // console.log(JSON.stringify(seasonStats), "---seasonStats---")
        const totalPlayerList = [
          ...new Set(seasonStats.map(item => item.players_list).flat()),
        ]
        const totalGoals = getSum(seasonStats, "goals")
        const totalAssists = getSum(seasonStats, "assists")
        const totalYellow = getSum(seasonStats, "yellow_cards")
        const totalRed = getSum(seasonStats, "red_cards")
        const totalMom = getSum(seasonStats, "mom")
        const totalSaves = getSum(seasonStats, "saves")
        const totalMos = getSum(seasonStats, "mos")
        const totalMatches = getSum(seasonStats, "matches")
        const totalPlayed = getSum(seasonStats, "played")
        const totalWon = getSum(seasonStats, "won")
        const totalLost = getSum(seasonStats, "lost")
        const totalDraw = getSum(seasonStats, "draw")
        const totalGoalAllowed = getSum(seasonStats, "goal_allowed")
        const totalGoalScored = getSum(seasonStats, "goal_scored")
        // console.log(totalPlayerList,'--totalPlayerList-----')
        const allseasonStats = {
          goals: totalGoals,
          assists: totalAssists,
          mom: totalMom,
          mos: totalMos,
          saves: totalSaves,
          yellow_cards: totalYellow,
          players: totalPlayerList.length,
          red_cards: totalRed,
          matches: totalMatches,
          won: totalWon,
          played: totalPlayed,
          lost: totalLost,
          draw: totalDraw,
          goal_allowed: totalGoalAllowed,
          goal_scored: totalGoalScored,
        }

        return {
          allseasonStats: allseasonStats,
          seasonStats: seasonStats,
        }
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
    // isOwner: {
    //   resolve(source, args, context, info) {
    //     // TODO: Find better approach by getting season info from parent context
    //     const ancestor = {} //getCurrentSeason(context)
    //     let status = null
    //     if (ancestor.season) {
    //       status = !!ancestor.teams.find(item =>
    //         item.owners.includes(source.player_id)
    //       )
    //     }
    //     // console.log(ancestor,'--sdfd--',nodeId)
    //     return status
    //   },
    // },
    // isMos: {
    //   resolve(source, args, context, info) {
    //     // TODO: Find better approach by getting season info from parent context
    //     const ancestor = {} //getCurrentSeason(context)
    //     let status = null
    //     if (ancestor.season) {
    //       status = ancestor.mos.includes(source.player_id)
    //     }
    //     return status
    //   },
    // },
    playerStats: {
      async resolve(source, args, context, info) {
        const playerId = source.player_id

        // Get all Season
        const data = await context.nodeModel.runQuery({
          query: {
            filter: {
              teams: {
                elemMatch: {
                  players: {
                    elemMatch: { player_id: { eq: playerId } },
                  },
                },
              },
            },
          },
          type: "MslSeasonsJson",
          firstOnly: false,
        })

        // Get All Schedules
        const schedule_data = await context.nodeModel.runQuery({
          query: {},
          type: "MslSchedulesJson",
          firstOnly: false,
        })

        const scheduleBySeason = groupBy(schedule_data, "season")

        // New Data List based on season
        const seasonStats = data.map(item => {
          const playerTeam = item.teams.find(item =>
            item.players.includes(playerId)
          )
          const playerOwner = item.teams.filter(item =>
            item.owners.includes(playerId)
          )

          const playerMos = item.mos.includes(playerId)
          const schedules = scheduleBySeason[item.season]

          const playerReferees = getPlayerReferees(schedules, playerId)
          // console.log(JSON.stringify(playerReferees),'---referees---')
          const playerGoals = getPlayerGoals(schedules, playerId)
          const playerAssists = getPlayerAssists(schedules, playerId)
          const playerMom = getPlayerMom(schedules, playerId)
          const playerSaves = getPlayerSaves(schedules, playerId)
          const playerSavesCount = getSum(playerSaves, "saves")

          const playerYellowCards = getPlayerCautions(
            schedules,
            playerId,
            Cautions.YELLOW
          )
          const playerRedCards = getPlayerCautions(
            schedules,
            playerId,
            Cautions.RED
          )
          return {
            team: playerTeam ? playerTeam.team : null,
            isOwner: playerOwner.length > 0,
            isMos: playerMos,
            goals: playerGoals.length,
            assists: playerAssists.length,
            saves: playerSavesCount,
            mom: playerMom.length,
            yellow_cards: playerYellowCards.length,
            red_cards: playerRedCards.length,
            season_id: item.season,
            season: item.season,
            referees: playerReferees.length,
          }
        })
        const totalGoals = getSum(seasonStats, "goals")
        const totalAssists = getSum(seasonStats, "assists")
        const totalYellow = getSum(seasonStats, "yellow_cards")
        const totalRed = getSum(seasonStats, "red_cards")
        const totalMom = getSum(seasonStats, "mom")
        const totalSaves = getSum(seasonStats, "saves")
        const totalReferees = getSum(seasonStats, "referees")
        const totalMos = seasonStats.filter(item => item.isMos == true)

        const allseasonStats = {
          goals: totalGoals,
          assists: totalAssists,
          mom: totalMom,
          mos: totalMos.length,
          saves: totalSaves,
          yellow_cards: totalYellow,
          red_cards: totalRed,
          referees: totalReferees,
        }
        return {
          allseasonStats,
          seasonStats,
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
        // console.log(source, "---dfd---")
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
    scheduled_time: {
      resolve(source, args, context, info) {
        return source.scheduled_time || "6:20 AM"
      },
    },
  },
  MslSeasonsJson: {
    moslist: {
      type: ["MslMosListItem"],
      resolve(source, args, context, info) {
        const moslist = source.mos
        const teams = source.teams
        const mos = moslist.map(item => {
          var team = teams.find(teamitem => teamitem.players.includes(item))
          return { player: item, team: team.team }
        })
        return mos
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
