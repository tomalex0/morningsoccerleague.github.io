import React from "react"
import { graphql } from "gatsby"

import Layout from "components/layout"
import SEO from "components/seo"
import MslPlayerStatsItem from "components/msl/player/player-stats-item"
import MslPlayerSeasonStats from "components/msl/player/player-season-stats"

import {
  MslPlayersJsonFragment,
  MslTeamsJsonFragment,
  MslSeasonsJsonFragment,
  MslPlayerStatsFragment,
} from "data/fragments"

function Player({ data, path }) {
  const { player } = data
  const seasonStats = player?.playerStats?.seasonStats
  const allSeasonStats = player?.playerStats?.allseasonStats
  return (
    <Layout>
      <SEO title={player.name} path={path} />
      <div className="lg:flex lg:items-center lg:justify-between px-5 mt-5">
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl font-bold leading-7 text-dark-600 dark:text-dark-300  sm:text-3xl sm:truncate">
            {player.name}
          </h1>
          <MslPlayerStatsItem stats={allSeasonStats} />
        </div>
      </div>
      <div className="mx-5 mt-5 pb-5 overflow-hidden">
        <div className="py-5">
          <h2 className="text-lg leading-6 font-medium text-dark-900 dark:text-dark-300">
            Seasons
          </h2>
        </div>
        <MslPlayerSeasonStats seasons={seasonStats} />
      </div>
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
