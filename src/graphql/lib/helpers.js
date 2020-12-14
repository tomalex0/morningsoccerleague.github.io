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

// findInNested(12, [], 'players')
// [{
//  	"players": [1, 2, 3]
//  }, {
//  	"players": [12, 13]
//  }]

function findInNested(searchData, arr, parentProp, accum = [], parentArr) {
  arr.forEach(f => {
    if (f[parentProp]) {
      findInNested(searchData, f[parentProp], parentProp, accum, f)
    }
    if (f == searchData) {
      accum.push(parentArr)
    }
  })
  return accum
}

exports.findInNested = findInNested

function getAllGameStatsByType(schedules, key) {
  const allStats = schedules
    .map(item => item.gamestats)
    .flat()
    .map(item => item[key])
    .flat()
    .filter(item => item !== undefined)
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
  console.log(allStats, "--aslas")
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

function getTotalChildArr(itemArr, prop) {
  let sum = 0
  itemArr.map(item => {
    sum += item[prop].length
  })
  return sum
}

exports.getTotalChildArr = getTotalChildArr

function getTotalPlayers(teams) {
  const sum = getTotalChildArr(teams, "players")
  return sum
}

exports.getTotalPlayers = getTotalPlayers

function getPlayerTotalGoals(schedules, player_id) {
  // TODO: More null check
  const allStats = getTotalGoals(schedules)
    .flat()
    .filter(item => item.player.player_id == player_id)
  return allStats
}

function getMosDetails(mos, season_id) {
  // const mosSeason = mos.seasons.find(item => item.season_id == season_id)
  console.log(mos.flat(), "--dfdf----")
  // const mosArr = mos.map(item => {
  //   const teamName = item.seasons.find(item => item.season_id == season_id)
  //     .playerInfo.team.teamName
  //   return `${item.name} - ${teamName}`
  // })
  return []
}

exports.getMosDetails = getMosDetails

const groupBy = function (xs, key) {
  return xs.reduce(function (rv, x) {
    ;(rv[x[key]] = rv[x[key]] || []).push(x)
    return rv
  }, {})
}
exports.groupBy = groupBy

function getSum(data, key) {
  return data.reduce(function (sum, item) {
    return sum + item[key]
  }, 0)
}
exports.getSum = getSum
