import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "components/layout"
import Image from "components/image"
import SEO from "components/seo"

import {
  MslPlayersJsonFragment,
  MslTeamsJsonFragment,
  MslSeasonsJsonFragment,
  MslSeasonsJsonStatsFragment,
} from "data/fragments"

function Team({ path, data }) {
  const { team } = data
  // console.log(team,'--54---')
  return (
    <Layout>
      <SEO title={team.teamName} path={path} />
      <h1>
        Hi Team {team.teamName} - {team.team_id}
      </h1>
      <div>
        <h3>Seasons Played</h3>
        <ul>
          {team.seasons.map(stats => (
            <li key={stats.season_id}>
              <Link to={stats.seasonPath}>
                {stats.season_id} - {stats.season_year}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    team: mslTeamsJson(id: { eq: $id }) {
      ...MslTeamsJsonFragment
      seasons {
        ...MslSeasonsJsonStatsFragment
      }
    }
  }
`

export default Team
