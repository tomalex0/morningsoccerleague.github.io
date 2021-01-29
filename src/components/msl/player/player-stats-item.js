import React from "react"
import MslTotalStatsItem from "components/msl/player/total-stats-item"

const MslPlayerStatsItem = ({ stats }) => {
  const allSeasonStats = stats
  return (
    <div className="mt-4 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 gap-4">
      <MslTotalStatsItem
        title={`Goals`}
        value={allSeasonStats.goals}
      ></MslTotalStatsItem>
      <MslTotalStatsItem
        title={`Mom`}
        value={allSeasonStats.mom}
      ></MslTotalStatsItem>
      <MslTotalStatsItem
        title={`Mos`}
        value={allSeasonStats.mos}
      ></MslTotalStatsItem>
      <MslTotalStatsItem
        title={`Assists`}
        value={allSeasonStats.assists}
      ></MslTotalStatsItem>
      <MslTotalStatsItem
        title={`Saves`}
        value={allSeasonStats.saves}
      ></MslTotalStatsItem>
      <MslTotalStatsItem
        title={`Referee`}
        value={allSeasonStats.referees}
      ></MslTotalStatsItem>
      <MslTotalStatsItem
        title={`Yellow Cards`}
        value={allSeasonStats.yellow_cards}
      ></MslTotalStatsItem>
      <MslTotalStatsItem
        title={`Red Cards`}
        value={allSeasonStats.red_cards}
      ></MslTotalStatsItem>
    </div>
  )
}

export default MslPlayerStatsItem
