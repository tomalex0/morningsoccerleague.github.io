import React from "react"
import MslTotalStatsItem from "components/msl/player/total-stats-item"

const MslTeamStatsItem = ({
  stats,
  cssName = "mt-4 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 gap-4",
}) => {
  const allSeasonStats = stats
  return (
    <div className={`${cssName}`}>
      <MslTotalStatsItem
        title={`Played`}
        value={allSeasonStats.matches}
      ></MslTotalStatsItem>
      <MslTotalStatsItem
        title={`Won`}
        value={allSeasonStats.won}
      ></MslTotalStatsItem>
      <MslTotalStatsItem
        title={`Drawn`}
        value={allSeasonStats.draw}
      ></MslTotalStatsItem>
      <MslTotalStatsItem
        title={`Lost`}
        value={allSeasonStats.lost}
      ></MslTotalStatsItem>
      <MslTotalStatsItem
        title={`For`}
        value={allSeasonStats.goals}
      ></MslTotalStatsItem>
      <MslTotalStatsItem
        title={`Against`}
        value={allSeasonStats.goal_allowed}
      ></MslTotalStatsItem>
      <MslTotalStatsItem
        title={`Players`}
        value={allSeasonStats.players}
      ></MslTotalStatsItem>
      <MslTotalStatsItem
        title={`Mos`}
        value={allSeasonStats.mos}
      ></MslTotalStatsItem>
      <MslTotalStatsItem
        title={`Mom`}
        value={allSeasonStats.mom}
      ></MslTotalStatsItem>
      <MslTotalStatsItem
        title={`Assists`}
        value={allSeasonStats.assists}
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

export default MslTeamStatsItem
