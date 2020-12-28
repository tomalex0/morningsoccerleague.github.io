const { groupBy } = require("../lib/utility")

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
