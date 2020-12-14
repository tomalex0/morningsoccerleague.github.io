import { Link } from "gatsby"
import React from "react"

const MslSeasonStatsItem = ({ season }) => {
  return (
    <li>
      <Link to={season.seasonPath}>
        {season.season_id}-{season.season_year}-{season.seasonStats.games}{" "}
        Game--{season.seasonStats.teams} Teams -- {season.seasonStats.players}{" "}
        Players -- {season.seasonStats.goals}Goals --{" "}
        {season.seasonStats.assists}
        Assists -- {season.seasonStats.owngoals}
        Owngoals -- {season.seasonStats.fouls}
        Total Fouls -- {season.seasonStats.unique_players_goals}
        Unique Players Scored -- {season.seasonStats.yellow_cards}
        Yellow Card -- {season.seasonStats.red_cards} Red Card --
        {season.mos.map(item => item.name).join(",")} Mos
      </Link>
    </li>
  )
}

export default MslSeasonStatsItem
