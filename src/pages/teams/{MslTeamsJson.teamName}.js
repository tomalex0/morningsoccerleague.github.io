import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "components/layout"
import SEO from "components/seo"
import MslTeamSeasonStats from "components/msl/team/team-season-stats"
import MslTeamStatsItem from "components/msl/team/team-stats-item"
import MslTeamImg from "components/msl/team/team-image"

import {
  MslPlayersJsonFragment,
  MslTeamsJsonFragment,
  MslSeasonsJsonFragment,
  MslSeasonsJsonStatsFragment,
  MslTeamStatsFragment,
} from "data/fragments"

function Team({ path, data }) {
  const { team } = data
  const seasonStats = team?.teamStats?.seasonStats
  const allSeasonStats = team?.teamStats?.allseasonStats

  return (
    <Layout>
      <SEO title={team.teamName} path={path} />
      <div className="lg:flex lg:items-center lg:justify-between px-5 mt-10">
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl flex items-center font-bold leading-7 text-dark-600 dark:text-dark-300  sm:text-3xl sm:truncate">
            <MslTeamImg
              team={team}
              className="block h-16 w-16 rounded-full sm:mx-0 sm:flex-shrink-0"
            />
            <span className="pl-2">{team.teamName}</span>
          </h1>
          <MslTeamStatsItem stats={allSeasonStats} />
        </div>
      </div>
      <div className="mx-5 mt-5 pb-5 overflow-hidden">
        <div className="py-5">
          <h3 className="text-lg leading-6 font-medium text-dark-900 dark:text-dark-300">
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
