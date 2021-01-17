function getAllGameStatsByType(schedules, key) {
  const allStats = schedules
    .map(item => item.gamestats)
    .flat()
    .map(item =>
      item[key] && Array.isArray(item[key])
        ? item[key].map(childitem => {
            childitem.team = item.team
            return childitem
          })
        : item[key]
    )
    .flat()
    .filter(item => item)
  return allStats
}

exports.getAllGameStatsByType = getAllGameStatsByType

function getReferees(schedules) {
  const allData = schedules.map(item => item.referees).flat()
  return allData
}
exports.getReferees = getReferees
