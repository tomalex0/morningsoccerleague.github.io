import { getSeasonStats } from "../models/season-stats.js"
import { getSeasonTeams } from "../models/season-teams.js"
import {
  getPlayerGoals,
  getPlayerAssists,
  getPlayerCautions,
  getPlayerMom,
  getPlayerSaves,
  getPlayerReferees,
} from "../models/player-stats.js"

import {
  getTeamGoals,
  getTeamAssists,
  getTeamCautions,
  getTeamMom,
  getTeamSaves,
} from "../models/team-stats.js"

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

export {
  getFile,
  getCurrentSeason,
  getPlayerGoals,
  getPlayerAssists,
  getPlayerCautions,
  getPlayerMom,
  getPlayerSaves,
  getSeasonStats,
  getSeasonTeams,
  getTeamGoals,
  getTeamAssists,
  getTeamCautions,
  getTeamMom,
  getTeamSaves,
  getPlayerReferees,
}
