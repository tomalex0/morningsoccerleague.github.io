import { Link } from "gatsby"
import React from "react"

const MslPlayerStatsItem = ({ player }) => {
  return (
    <li key={player.name}>
      <Link to={player.playerPath}>
        {player.player_id} - {player.name}
      </Link>
      <span>
              {player.playerStats.allseasonStats.goals} Total Goals ---
        {player.playerStats.allseasonStats.assists} Total Assists---
        {player.playerStats.allseasonStats.mos} Total Mos---
        {player.playerStats.allseasonStats.yellow_cards} Total Yellow --
        {player.playerStats.allseasonStats.red_cards} Total Red --
        {player.playerStats.allseasonStats.mom} Total Mom --
        {player.playerStats.allseasonStats.saves} Total Saves --
            </span>
    </li>
  )
}

export default MslPlayerStatsItem
