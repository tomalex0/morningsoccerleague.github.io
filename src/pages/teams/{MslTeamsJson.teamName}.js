import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "components/layout"
import SEO from "components/seo"
import MslTeamSeasonStats from "components/msl/team-season-stats"
import MslTeamStatsItem from "components/msl/team-stats-item"
import {
  MslPlayersJsonFragment,
  MslTeamsJsonFragment,
  MslSeasonsJsonFragment,
  MslSeasonsJsonStatsFragment,
} from "data/fragments"

function Team({ path, data }) {
  const { team } = data
  const seasonStats = team?.teamStats?.seasonStats
  const allSeasonStats = team?.teamStats?.allseasonStats

  return (
    <Layout>
      <SEO title={team.teamName} path={path} />
      <div className="lg:flex lg:items-center lg:justify-between px-5 mt-5">
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl font-bold leading-7 text-gray-600 dark:text-gray-300  sm:text-3xl sm:truncate">
            Team {team.teamName}
          </h1>
          <MslTeamStatsItem stats={allSeasonStats} />
        </div>
      </div>
      <div className="px-5 mx-5 mt-5 pb-5 bg-white shadow overflow-hidden sm:rounded-lg ">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Seasons
          </h3>
        </div>
        <MslTeamSeasonStats seasons={seasonStats} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    team: mslTeamsJson(id: { eq: $id }) {
      ...MslTeamsJsonFragment
      teamStats {
        ...MslTeamStatsFragment
      }
      seasons {
        ...MslSeasonsJsonStatsFragment
      }
    }
  }
`

export default Team
