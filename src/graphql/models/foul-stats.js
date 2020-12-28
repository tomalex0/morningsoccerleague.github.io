const { groupBy, predicate, getSum } = require("../lib/utility")

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

exports.getTeamSeasonFoulStats = getTeamSeasonFoulStats
