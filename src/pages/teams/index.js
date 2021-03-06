import React from "react"
import { graphql } from "gatsby"

import Layout from "components/layout"
import SEO from "components/seo"
import MslTeamListItem from "components/msl/team/team-list-item"
import {
  MslPlayersJsonFragment,
  MslTeamsJsonFragment,
  MslSeasonsJsonFragment,
  MslTeamStatsFragment,
} from "data/fragments"

const TeamsIndex = ({ data, path }) => {
  const { teams } = data
  return (
    <Layout>
      <SEO title="Teams" path={path} />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-10 px-5">
        {teams.nodes.map(team => (
          <MslTeamListItem team={team} key={team.team_id} />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    teams: allMslTeamsJson(sort: { fields: teamName, order: ASC }) {
      nodes {
        ...MslTeamsJsonFragment
        teamStats {
          ...MslTeamStatsFragment
        }
      }
    }
  }
`

export default TeamsIndex
