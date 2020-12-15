import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "components/layout"
import Image from "components/image"
import SEO from "components/seo"
import MslPlayerStatsItem from "components/msl/player-stats-item"

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
          <MslPlayerStatsItem player={player} key={player.player_id} />
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
