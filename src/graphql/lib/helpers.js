const { Cautions } = require("./enum")
/**
 * Generic Function to get file info based on relative path
 * @param context
 * @param path
 * @returns {*}
 */
function getFile(context, path) {
  const data = context.nodeModel.getAllNodes({ type: `File` })
  const record = data.find(item => item.relativePath == path)
  return record
}
exports.getFile = getFile

/**
 * Generic
 * @param itemArr
 * @param prop
 * @returns {number}
 */
function getTotalChildArr(itemArr, prop) {
  let sum = 0
  itemArr.map(item => {
    sum += item[prop].length
  })
  return sum
}

exports.getTotalChildArr = getTotalChildArr

/**
 * Generic
 * @param xs
 * @param key
 * @returns {*}
 */
const groupBy = function (xs, key) {
  return xs.reduce(function (rv, x) {
    ;(rv[x[key]] = rv[x[key]] || []).push(x)
    return rv
  }, {})
}
exports.groupBy = groupBy

/**
 * Generic
 * @param data
 * @param key
 * @returns {*}
 */
function getSum(data, key) {
  return data.reduce(function (sum, item) {
    return sum + item[key]
  }, 0)
}
exports.getSum = getSum

/**
 * Generic
 * @returns {function(*, *): *}
 */
function predicate() {
  var fields = [],
    n_fields = arguments.length,
    field,
    name,
    reverse,
    cmp

  var default_cmp = function (a, b) {
      if (a === b) return 0
      return a < b ? -1 : 1
    },
    getCmpFunc = function (primer, reverse) {
      var dfc = default_cmp,
        // closer in scope
        cmp = default_cmp
      if (primer) {
        cmp = function (a, b) {
          return dfc(primer(a), primer(b))
        }
      }
      if (reverse) {
        return function (a, b) {
          return -1 * cmp(a, b)
        }
      }
      return cmp
    }

  // preprocess sorting options
  for (var i = 0; i < n_fields; i++) {
    field = arguments[i]
    if (typeof field === "string") {
      name = field
      cmp = default_cmp
    } else {
      name = field.name
      cmp = getCmpFunc(field.primer, field.reverse)
    }
    fields.push({
      name: name,
      cmp: cmp,
    })
  }

  // final comparison function
  return function (A, B) {
    var a, b, name, result
    for (var i = 0; i < n_fields; i++) {
      result = 0
      field = fields[i]
      name = field.name

      result = field.cmp(A[name], B[name])
      if (result !== 0) break
    }
    return result
  }
}

exports.predicate = predicate

function getAllGameStatsByType(schedules, key) {
  const allStats = schedules
    .map(item => item.gamestats)
    .flat()
    .map(item =>
      item[key] && Array.isArray(item[key])
        ? item[key].map(childitem => {
            childitem.team = item.team
            return childitem
          })
        : item[key]
    )
    .flat()
    .filter(item => item)
  return allStats
}

exports.getAllGameStatsByType = getAllGameStatsByType

function getTotalCautionType(schedules, cautionType = 1) {
  const allStats = getAllGameStatsByType(schedules, "cautions").filter(
    item => item && item.caution_id == cautionType
  )
  return allStats
}
exports.getTotalCautionType = getTotalCautionType

function getTotalGoals(schedules) {
  const allStats = getAllGameStatsByType(schedules, "goals")
  return allStats
}
exports.getTotalGoals = getTotalGoals

function getTotalMom(schedules) {
  const allStats = getAllGameStatsByType(schedules, "mom")
  return allStats
}
exports.getTotalMom = getTotalMom

function getTotalSaves(schedules) {
  const allStats = getAllGameStatsByType(schedules, "keeper")
  return allStats
}
exports.getTotalMom = getTotalMom

function getPlayerGoals(schedules, player_id) {
  const allData = getTotalGoals(schedules)
  return allData.filter(item => !item.owngoal && item.player == player_id)
}
exports.getPlayerGoals = getPlayerGoals

function getPlayerAssists(schedules, player_id) {
  const allData = getTotalGoals(schedules)
  return allData.filter(item => item.assist == player_id)
}
exports.getPlayerAssists = getPlayerAssists

function getPlayerCautions(schedules, player_id, caution_type) {
  const allData = getTotalCautionType(schedules, caution_type)
  return allData.filter(item => item.player == player_id)
}
exports.getPlayerCautions = getPlayerCautions

function getPlayerMom(schedules, player_id) {
  const allData = getTotalMom(schedules)
  return allData.filter(item => item.player == player_id)
}
exports.getPlayerMom = getPlayerMom

function getPlayerSaves(schedules, player_id) {
  const allData = getTotalSaves(schedules)
  return allData.filter(item => item.player == player_id)
}
exports.getPlayerSaves = getPlayerSaves

function getTotalPlayers(teams) {
  const sum = getTotalChildArr(teams, "players")
  return sum
}

exports.getTotalPlayers = getTotalPlayers

function getGoalScorers(totalValidGoals) {
  const playersScored = groupBy(
    totalValidGoals.map(item => {
      item.player_id = item.player.player_id
      return item
    }),
    "player_id"
  )
  const playersScoredSort = Object.keys(playersScored)
    .map(function (k) {
      return {
        ...playersScored[k][0].player,
        goals: playersScored[k].length,
        team: playersScored[k][0].team,
        value: playersScored[k],
      }
    })
    .sort(function (a, b) {
      return b.goals - a.goals || a.name.localeCompare(b.name)
    })

  return playersScoredSort
}

exports.getGoalScorers = getGoalScorers

function grouByPlayerStats(data) {
  const playerGroup = groupBy(
    data.map(item => {
      item.player_id = item.player.player_id
      return item
    }),
    "player_id"
  )
  const sortedData = Object.keys(playerGroup)
    .map(function (k) {
      return {
        ...playerGroup[k][0].player,
        count: playerGroup[k].length,
        team: playerGroup[k][0].team,
        value: playerGroup[k],
      }
    })
    .sort(function (a, b) {
      return b.count - a.count || a.name.localeCompare(b.name)
    })

  return sortedData
}

exports.grouByPlayerStats = grouByPlayerStats

function grouByPlayerStatsSum(data, key) {
  const playerGroup = groupBy(
    data.map(item => {
      item.player_id = item.player.player_id
      return item
    }),
    "player_id"
  )
  const sortedData = Object.keys(playerGroup)
    .map(function (k) {
      return {
        ...playerGroup[k][0].player,
        count: getSum(playerGroup[k], key),
        matches: playerGroup[k].length,
        team: playerGroup[k][0].team,
        value: playerGroup[k],
      }
    })
    .sort(function (a, b) {
      return b.count - a.count || a.name.localeCompare(b.name)
    })

  return sortedData
}

exports.grouByPlayerStatsSum = grouByPlayerStatsSum

function getDefaultScore() {
  var defaultScore = {
    played: 0,
    won: 0,
    lost: 0,
    draw: 0,
    goal_allowed: 0,
    goal_scored: 0,
  }

  return defaultScore
}

function getTeamSeasonStats(schedules) {
  var teamObj = {}
  schedules.forEach(itemobj => {
    const home = itemobj.home
    const away = itemobj.away
    if (home.goals && away.goals && itemobj.completed) {
      if (teamObj[home.team.team_id]) {
        teamObj[home.team.team_id].played =
          teamObj[home.team.team_id].played + 1
      } else {
        teamObj[home.team.team_id] = getDefaultScore()
        teamObj[home.team.team_id].team = home.team
        teamObj[home.team.team_id].played = 1
      }
      if (teamObj[away.team.team_id]) {
        teamObj[away.team.team_id].played =
          teamObj[away.team.team_id].played + 1
      } else {
        teamObj[away.team.team_id] = getDefaultScore()
        teamObj[away.team.team_id].team = away.team
        teamObj[away.team.team_id].played = 1
      }

      if (home.goals.length == away.goals.length) {
        teamObj[home.team.team_id].draw =
          (teamObj[home.team.team_id].draw || 0) + 1
        teamObj[away.team.team_id].draw =
          (teamObj[away.team.team_id].draw || 0) + 1
      } else if (home.goals.length > away.goals.length) {
        teamObj[home.team.team_id].won =
          (teamObj[home.team.team_id].won || 0) + 1
        teamObj[away.team.team_id].lost =
          (teamObj[away.team.team_id].lost || 0) + 1
      } else if (away.goals.length > home.goals.length) {
        teamObj[away.team.team_id].won =
          (teamObj[away.team.team_id].won || 0) + 1
        teamObj[home.team.team_id].lost =
          (teamObj[home.team.team_id].lost || 0) + 1
      }
      teamObj[home.team.team_id].goal_allowed =
        teamObj[home.team.team_id].goal_allowed + away.goals.length
      teamObj[away.team.team_id].goal_allowed =
        teamObj[away.team.team_id].goal_allowed + home.goals.length

      teamObj[home.team.team_id].goal_scored =
        teamObj[home.team.team_id].goal_scored + home.goals.length
      teamObj[away.team.team_id].goal_scored =
        teamObj[away.team.team_id].goal_scored + away.goals.length
    } else {
      if (!teamObj[home.team.team_id]) {
        teamObj[home.team.team_id] = getDefaultScore()
      }
      if (!teamObj[away.team.team_id]) {
        teamObj[away.team.team_id] = getDefaultScore()
      }
    }
  })
  teamObj = Object.values(teamObj)
  teamObj = teamObj.map(itemobj => {
    itemobj.goal_diff = itemobj.goal_scored - itemobj.goal_allowed
    itemobj.points = itemobj.draw * 1 + itemobj.won * 3
    return itemobj
  })
  teamObj.sort(
    predicate(
      {
        name: "points",
        reverse: true,
      },
      {
        name: "goal_diff",
        reverse: true,
      },
      {
        name: "goal_scored",
        reverse: true,
      },
      {
        name: "teamName",
        reverse: false,
      }
    )
  )
  return Object.values(teamObj)
}

function getTeamSeasonFoulStats(schedules) {
  const teamList = schedules
    .map(item => item.gamestats)
    .flat()
    .map(item => {
      item.team_id = item.team.team_id
      return item
    })
  const groupTeam = groupBy(teamList, "team_id")
  const teamListArr = Object.values(groupTeam)
  const mappedData = teamListArr.map(item => {
    const newitem = {}
    const teamItem = item[0].team
    const totalFouls = getSum(item, "fouls")
    const matches = item.length
    newitem.team = teamItem
    newitem.teamName = teamItem.teamName
    newitem.fouls = totalFouls
    newitem.foulAvg = (totalFouls / matches).toFixed(2)
    newitem.matches = matches
    newitem.items = item
    return newitem
  })
  mappedData.sort(
    predicate(
      {
        name: "fouls",
        reverse: false,
      },
      {
        name: "teamName",
        reverse: false,
      }
    )
  )
  return mappedData
}

function getSeasonStats(seasons) {
  const seasonArr = seasons.map(season => {
    const totalGoals = getAllGameStatsByType(season.schedules, "goals")
    const totalMom = getAllGameStatsByType(season.schedules, "mom")
    const totalPlayers = getTotalPlayers(season.teams)
    const totalAssists = totalGoals.filter(item => item.assist)
    const totalOwnGoals = totalGoals.filter(item => item.owngoal)
    const totalValidGoals = totalGoals.filter(item => !item.owngoal)
    const totalFouls = getAllGameStatsByType(season.schedules, "fouls")

    const totalSaves = getAllGameStatsByType(season.schedules, "keeper")
    // console.log(season.schedules, "---season.schedules--")

    const momPlayers = grouByPlayerStats(totalMom)

    const playersSaves = grouByPlayerStatsSum(totalSaves, "saves")

    const totalUniquePlayerGoals = [
      ...new Set(totalValidGoals.map(item => item.player.player_id)),
    ]
    const totalYellowCards = getTotalCautionType(
      season.schedules,
      Cautions.YELLOW
    )
    const teamStandingStats = getTeamSeasonStats(season.schedules)
    const teamFoulStats = getTeamSeasonFoulStats(season.schedules)

    const totalFoulsCount = totalFouls.reduce((a, b) => a + b, 0)
    const totalRedCards = getTotalCautionType(season.schedules, Cautions.RED)
    const playerYellowCards = grouByPlayerStats(totalYellowCards)
    const playerRedCards = grouByPlayerStats(totalRedCards)

    const playersScoredSort = grouByPlayerStats(totalValidGoals)
    season.seasonStats = {
      games: season.schedules.length,
      teams: season.teams.length,
      goals: totalGoals.length,
      assists: totalAssists.length,
      players: totalPlayers,
      owngoals: totalOwnGoals.length,
      yellow_cards: totalYellowCards.length,
      red_cards: totalRedCards.length,
      unique_players_goals: totalUniquePlayerGoals.length,
      unique_players_goals_list: totalUniquePlayerGoals,
      fouls: totalFoulsCount,
      scorers: playersScoredSort,
      moms: momPlayers,
      goalkeepers: playersSaves,
      yellow_card_holders: playerYellowCards,
      red_card_holders: playerRedCards,
      team_standing_stats: teamStandingStats,
      team_foul_stats: teamFoulStats,
    }
    return season
  })
  return seasonArr
}

exports.getSeasonStats = getSeasonStats
