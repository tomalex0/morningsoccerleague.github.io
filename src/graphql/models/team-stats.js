const { getAllGameStatsByType } = require("./stats-by-type")
const { getTotalCautionType } = require("./caution-stats")

function getTeamGoals(schedules, teamId) {
  const allData = getAllGameStatsByType(schedules, "goals")
  return allData.filter(item => !item.owngoal && item.team == teamId)
}
exports.getTeamGoals = getTeamGoals

function getTeamAssists(schedules, teamId) {
  const allData = getAllGameStatsByType(schedules, "goals")
  return allData.filter(item => item.assist && item.team == teamId)
}
exports.getTeamAssists = getTeamAssists

function getTeamCautions(schedules, teamId, caution_type) {
  const allData = getTotalCautionType(schedules, caution_type)
  return allData.filter(item => item.team == teamId)
}
exports.getTeamCautions = getTeamCautions

function getTeamMom(schedules, teamId) {
  const allData = getAllGameStatsByType(schedules, "mom")
  return allData.filter(item => item.team == teamId)
}
exports.getTeamMom = getTeamMom

function getTeamSaves(schedules, teamId) {
  const allData = getAllGameStatsByType(schedules, "keeper")
  return allData.filter(item => item.team == teamId)
}
exports.getTeamSaves = getTeamSaves
