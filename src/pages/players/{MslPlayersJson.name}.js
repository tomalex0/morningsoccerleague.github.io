import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "components/layout"
import SEO from "components/seo"
import MslPlayerStatsItem from "components/msl/player-stats-item"

import {
  MslPlayersJsonFragment,
  MslTeamsJsonFragment,
  MslSeasonsJsonFragment,
  MslPlayerStatsFragment
} from "data/fragments"

function Player({ data, path }) {
  const { player } = data
  return (
    <Layout>
      <SEO title={player.name} path={path} />
      <h1>
        Hi Player {player.name} - {player.player_id}
      </h1>
      <div>
        <MslPlayerStatsItem player={player} />
      </div>
      <ul>
        {player.playerStats.seasonStats.map(item => (
          <li key={item.season.season_id}>
            <Link to={item.season.seasonPath}>
              {item.season.season_id}-{item.season.season_year}
            </Link>
            {item.isOwner && <span>---Owner</span>}
            <span>---{item.goals} Goals</span>
            <span>---{item.team.teamName} Team</span>
            <span>---{item.assists} Assist</span>
            <span>---{item.yellow_cards} Yellow</span>
            <span>---{item.red_cards} Red</span>
            <span>---{item.mom} Mom</span>
            <span>---{item.saves} Saves</span>
            {item.isMos && <span>---Mos</span>}
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    player: mslPlayersJson(id: { eq: $id }) {
      ...MslPlayersJsonFragment
      playerStats {
        ...MslPlayerStatsFragment
      }
    }
  }
`

export default Player
