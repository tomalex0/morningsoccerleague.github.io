import { groupBy, getSum } from "../lib/utility.js"
import { getAllGameStatsByType, getReferees } from "./stats-by-type.js"
import { getTotalCautionType } from "./caution-stats.js"

function groupPlayers(data) {
  const playerGroup = groupBy(
    data.map(item => {
      item.player_id = item.player.player_id
      return item
    }),
    "player_id",
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

function getPlayerGoals(schedules, player_id) {
  const allData = getAllGameStatsByType(schedules, "goals")
  return allData.filter(item => !item.owngoal && item.player == player_id)
}

function getPlayerAssists(schedules, player_id) {
  const allData = getAllGameStatsByType(schedules, "goals")
  return allData.filter(item => item.assist == player_id)
}

function getPlayerCautions(schedules, player_id, caution_type) {
  const allData = getTotalCautionType(schedules, caution_type)
  return allData.filter(item => item.player == player_id)
}

function getPlayerMom(schedules, player_id) {
  const allData = getAllGameStatsByType(schedules, "mom")
  return allData.filter(item => item.player == player_id)
}

function getPlayerSaves(schedules, player_id) {
  const allData = getAllGameStatsByType(schedules, "keeper")
  return allData.filter(item => item.player == player_id)
}

function getPlayerReferees(schedules, player_id) {
  const allData = getReferees(schedules)
  return allData.filter(item => item.player == player_id)
}

export {
  grouByPlayerStats,
  grouByPlayerStatsSum,
  getPlayerGoals,
  getPlayerAssists,
  getPlayerCautions,
  getPlayerMom,
  getPlayerSaves,
  getPlayerReferees,
}
