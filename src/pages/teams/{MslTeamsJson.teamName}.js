import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "components/layout"
import SEO from "components/seo"

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
      <h1>
        Hi Team {team.teamName} - {team.team_id}
      </h1>
      <div>
        Total Games, {allSeasonStats.goals}-Total Goals, {allSeasonStats.mos}
        -Total Mos, {allSeasonStats.yellow_cards}-Total Yellow,{" "}
        {allSeasonStats.red_cards}-Total Red, {allSeasonStats.mom}-Total Mom,
        {allSeasonStats.players} - Unique Total Players
      </div>
      <div>
        <h3>Seasons Played</h3>
        <ul>
          {seasonStats.map(stats => (
            <li key={stats.season.season_id}>
              <Link to={stats.season.seasonPath}>
                {stats.season.season_id} - {stats.season.season_year}
              </Link>
              Total Games, {stats.goals}-Total Goals, {stats.mos}-Total Mos,{" "}
              {stats.yellow_cards}-Total Yellow, {stats.red_cards}-Total Red,
              {stats.mom}-Total Mom, {stats.players}-Total Players, {stats.mom}
              -Total Mom
            </li>
          ))}
        </ul>
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
