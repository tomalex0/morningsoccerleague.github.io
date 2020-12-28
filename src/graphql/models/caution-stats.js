const { getAllGameStatsByType } = require("./stats-by-type")

function getTotalCautionType(schedules, cautionType = 1) {
  const allStats = getAllGameStatsByType(schedules, "cautions").filter(
    item => item && item.caution_id == cautionType
  )
  return allStats
}
exports.getTotalCautionType = getTotalCautionType
