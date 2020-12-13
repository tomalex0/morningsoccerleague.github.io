import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "components/layout"
import Image from "components/image"
import SEO from "components/seo"

import {
  MslPlayersJsonFragment,
  MslTeamsJsonFragment,
  MslSeasonsJsonFragment,
  MslPlayerStatsFragment,
} from "data/fragments"

const PlayersIndex = ({ data, path }) => {
  const { players } = data
  return (
    <Layout>
      <SEO title="Players" path={path} />
      <h1>Hi Players</h1>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <ul>
        {players.nodes.map(player => (
          <li key={player.name}>
            <Link to={player.teamPath}>
              {player.player_id} - {player.name}
            </Link>
            <span>
              {player.playerStats.allseasonStats.goals} Total Goals ---
              {player.playerStats.allseasonStats.assists} Total Assists---
              {player.playerStats.allseasonStats.mos} Total Mos---
              {player.playerStats.allseasonStats.yellow_cards} Total Yellow --
              {player.playerStats.allseasonStats.red_cards} Total Red --
            </span>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    players: allMslPlayersJson(
      sort: { fields: name, order: ASC } # filter: { player_id: { in: [1, 45, 54, 2] } }
    ) {
      nodes {
        ...MslPlayersJsonFragment
        playerStats {
          ...MslPlayerStatsFragment
        }
        seasons {
          season_year
          season_id
        }
      }
    }
  }
`

export default PlayersIndex
