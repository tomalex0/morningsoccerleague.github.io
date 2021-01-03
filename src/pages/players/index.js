import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "components/layout"
import SEO from "components/seo"
import MslPlayerStatsItem from "components/msl/player-stats-item"
import MslPlayerItem from "components/msl/player-item"

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
      <div className="mt-5 px-5 divide-y divide-gray-300">
        {players.nodes.map(player => (
          <div className="mb-7">
            <MslPlayerItem
              player={player}
              fontSize="text-md md:text-lg"
              imageWidth="w-20"
              imageHeight="w-20"
              showImage={true}
            />
            <MslPlayerStatsItem stats={player?.playerStats?.allseasonStats} />
          </div>
        ))}
      </div>
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
          ...MslSeasonsJsonFragment
        }
      }
    }
  }
`

export default PlayersIndex
