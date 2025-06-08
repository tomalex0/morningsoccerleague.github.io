import { getAllGameStatsByType } from "./stats-by-type.js"

function getTotalCautionType(schedules, cautionType = 1) {
  const allStats = getAllGameStatsByType(schedules, "cautions").filter(
    item => item && item.caution_id == cautionType,
  )
  return allStats
}

export { getTotalCautionType }
