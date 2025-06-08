import { getAllGameStatsByType } from "./stats-by-type.js"
import { getTotalCautionType } from "./caution-stats.js"

function getTeamGoals(schedules, teamId) {
  const allData = getAllGameStatsByType(schedules, "goals")
  return allData.filter(item => !item.owngoal && item.team == teamId)
}

function getTeamAssists(schedules, teamId) {
  const allData = getAllGameStatsByType(schedules, "goals")
  return allData.filter(item => item.assist && item.team == teamId)
}

function getTeamCautions(schedules, teamId, caution_type) {
  const allData = getTotalCautionType(schedules, caution_type)
  return allData.filter(item => item.team == teamId)
}

function getTeamMom(schedules, teamId) {
  const allData = getAllGameStatsByType(schedules, "mom")
  return allData.filter(item => item.team == teamId)
}

function getTeamSaves(schedules, teamId) {
  const allData = getAllGameStatsByType(schedules, "keeper")
  return allData.filter(item => item.team == teamId)
}

export {
  getTeamGoals,
  getTeamAssists,
  getTeamCautions,
  getTeamMom,
  getTeamSaves,
}
