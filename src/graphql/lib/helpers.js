const { getTotalCautionType } = require("../models/caution-stats")
const { getAllGameStatsByType } = require("../models/stats-by-type")
const { getSeasonStats } = require("../models/season-stats")
const { getSeasonTeams } = require("../models/season-teams")
const {
  getPlayerGoals,
  getPlayerAssists,
  getPlayerCautions,
  getPlayerMom,
  getPlayerSaves,
} = require("../models/player-stats")
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

function getCurrentSeason(context) {
  // If queried in context of season
  const rootNodes = context.nodeModel.nodeModel._trackedRootNodes
  const seasons = context.nodeModel.getAllNodes({ type: `MslSeasonsJson` })
  const seasonIdArr = seasons.map(item => item.id)
  const nodeArr = [...rootNodes]
  const currSeasonId = nodeArr.find(item => seasonIdArr.includes(item))
  const season = context.nodeModel.getNodeById({
    id: currSeasonId,
  })
  return season
}

exports.getCurrentSeason = getCurrentSeason

exports.getPlayerGoals = getPlayerGoals

exports.getPlayerAssists = getPlayerAssists

exports.getPlayerCautions = getPlayerCautions

exports.getPlayerMom = getPlayerMom

exports.getPlayerSaves = getPlayerSaves

exports.getSeasonStats = getSeasonStats

exports.getSeasonTeams = getSeasonTeams
