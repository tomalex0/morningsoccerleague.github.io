const { DEFUAULT_SCORES } = require("../lib/enum")
const { predicate, getDefaultScore } = require("../lib/utility")

function getTeamSeasonStats(schedules, teams) {
  var teamObj = {}
  // Set default object for each team
  teams.forEach(item => {
    teamObj[item.team.team_id] = getDefaultScore()
    teamObj[item.team.team_id].team = item.team
  })
  schedules.forEach(itemobj => {
    const home = itemobj.home
    const away = itemobj.away
    const homeTeamId = home?.team?.team_id
    const awayTeamId = away?.team?.team_id

    // if game is completed
    if (itemobj.completed) {
      teamObj[homeTeamId].played += 1
      teamObj[awayTeamId].played += 1

      if (home.goals.length == away.goals.length) {
        teamObj[homeTeamId].draw += 1
        teamObj[awayTeamId].draw += 1
      } else if (home.goals.length > away.goals.length) {
        teamObj[homeTeamId].won += 1
        teamObj[awayTeamId].lost += 1
      } else if (away.goals.length > home.goals.length) {
        teamObj[awayTeamId].won += 1
        teamObj[homeTeamId].lost += 1
      }
      teamObj[homeTeamId].goal_allowed += away.goals.length
      teamObj[awayTeamId].goal_allowed += home.goals.length

      teamObj[homeTeamId].goal_scored += home.goals.length
      teamObj[awayTeamId].goal_scored += away.goals.length
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

exports.getTeamSeasonStats = getTeamSeasonStats

function getTeamStandings(schedules, teams) {
  var teamObj = {}
  teams.forEach(item => {
    teamObj[item] = getDefaultScore()
  })
  schedules.forEach(itemobj => {
    const home = itemobj.gamestats.find(
      gameitem => gameitem.team_type == "home"
    )
    const away = itemobj.gamestats.find(
      gameitem => gameitem.team_type == "away"
    )
    const homeTeamId = home?.team
    const awayTeamId = away?.team

    // if game is completed
    if (itemobj.completed) {
      teamObj[homeTeamId].played += 1
      teamObj[awayTeamId].played += 1

      if (home.goals.length == away.goals.length) {
        teamObj[homeTeamId].draw += 1
        teamObj[awayTeamId].draw += 1
      } else if (home.goals.length > away.goals.length) {
        teamObj[homeTeamId].won += 1
        teamObj[awayTeamId].lost += 1
      } else if (away.goals.length > home.goals.length) {
        teamObj[awayTeamId].won += 1
        teamObj[homeTeamId].lost += 1
      }
      teamObj[homeTeamId].goal_allowed += away.goals.length
      teamObj[awayTeamId].goal_allowed += home.goals.length

      teamObj[homeTeamId].goal_scored += home.goals.length
      teamObj[awayTeamId].goal_scored += away.goals.length
    }
  })
  return teamObj
}

exports.getTeamStandings = getTeamStandings
