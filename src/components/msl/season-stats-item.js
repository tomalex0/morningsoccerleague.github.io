import { Link } from "gatsby"
import React from "react"
import MslTotalStatsItem from "components/msl/total-stats-item"

const MslSeasonStatsItem = ({ season }) => {
  return (
    <div className="lg:flex lg:items-center lg:justify-between px-5">
      <div className="flex-1 min-w-0">
        <h1 className="text-2xl font-bold leading-7 text-gray-600 dark:text-gray-300  sm:text-3xl sm:truncate">
          <Link to={season.seasonPath}>
            Season {season.season_id} ({season.season_year}) &rarr;
          </Link>
        </h1>
        <div className="mt-4">
          <Link
            to={season.fixturePath}
            className="text-base font-medium  text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 "
          >
            Fixtures &rarr;
          </Link>
        </div>
        <div className="mt-3 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-4">
          <MslTotalStatsItem
            title={`Games`}
            value={season.seasonStats.games}
          ></MslTotalStatsItem>
          <MslTotalStatsItem
            title={`Teams`}
            value={season.seasonStats.teams}
          ></MslTotalStatsItem>
          <MslTotalStatsItem
            title={`Players`}
            value={season.seasonStats.players}
          ></MslTotalStatsItem>
          <MslTotalStatsItem
            title={`Goals`}
            value={season.seasonStats.goals}
          ></MslTotalStatsItem>
          <MslTotalStatsItem
            title={`Fouls`}
            value={season.seasonStats.fouls}
          ></MslTotalStatsItem>
          <MslTotalStatsItem
            title={`Own Goals`}
            value={season.seasonStats.owngoals}
          ></MslTotalStatsItem>
          <MslTotalStatsItem
            title={`Assists`}
            value={season.seasonStats.assists}
          ></MslTotalStatsItem>
          <MslTotalStatsItem
            title={`Players Scored`}
            value={season.seasonStats.unique_players_goals}
          ></MslTotalStatsItem>
          <MslTotalStatsItem
            title={`Yellow Cards`}
            value={season.seasonStats.yellow_cards}
          ></MslTotalStatsItem>
          <MslTotalStatsItem
            title={`Red Cards`}
            value={season.seasonStats.red_cards}
          ></MslTotalStatsItem>
        </div>
      </div>
    </div>
  )
}

export default MslSeasonStatsItem
