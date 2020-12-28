const { groupBy, getSum } = require("../lib/utility")
const { getAllGameStatsByType } = require("./stats-by-type")
const { getTotalCautionType } = require("./caution-stats")

function groupPlayers(data) {
  const playerGroup = groupBy(
    data.map(item => {
      item.player_id = item.player.player_id
      return item
    }),
    "player_id"
  )
  return playerGroup
}

function sortPlayers(data) {
  return data.sort(function (a, b) {
    return b.count - a.count || a.name.localeCompare(b.name)
  })
}

function grouByPlayerStats(data) {
  const playerGroup = groupPlayers(data)
  const sortedData = Object.keys(playerGroup).map(function (k) {
    return {
      ...playerGroup[k][0].player,
      count: playerGroup[k].length,
      team: playerGroup[k][0].team,
      value: playerGroup[k],
    }
  })

  return sortPlayers(sortedData)
}

exports.grouByPlayerStats = grouByPlayerStats

function grouByPlayerStatsSum(data, key) {
  const playerGroup = groupPlayers(data)
  const sortedData = Object.keys(playerGroup).map(function (k) {
    return {
      ...playerGroup[k][0].player,
      count: getSum(playerGroup[k], key),
      matches: playerGroup[k].length,
      team: playerGroup[k][0].team,
      value: playerGroup[k],
    }
  })

  return sortPlayers(sortedData)
}

exports.grouByPlayerStatsSum = grouByPlayerStatsSum

function getPlayerGoals(schedules, player_id) {
  const allData = getAllGameStatsByType(schedules, "goals")
  return allData.filter(item => !item.owngoal && item.player == player_id)
}
exports.getPlayerGoals = getPlayerGoals

function getPlayerAssists(schedules, player_id) {
  const allData = getAllGameStatsByType(schedules, "goals")
  return allData.filter(item => item.assist == player_id)
}
exports.getPlayerAssists = getPlayerAssists

function getPlayerCautions(schedules, player_id, caution_type) {
  const allData = getTotalCautionType(schedules, caution_type)
  return allData.filter(item => item.player == player_id)
}
exports.getPlayerCautions = getPlayerCautions

function getPlayerMom(schedules, player_id) {
  const allData = getAllGameStatsByType(schedules, "mom")
  return allData.filter(item => item.player == player_id)
}
exports.getPlayerMom = getPlayerMom

function getPlayerSaves(schedules, player_id) {
  const allData = getAllGameStatsByType(schedules, "keeper")
  return allData.filter(item => item.player == player_id)
}
exports.getPlayerSaves = getPlayerSaves
