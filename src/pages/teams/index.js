import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "components/layout"
import SEO from "components/seo"
import {
  MslPlayersJsonFragment,
  MslTeamsJsonFragment,
  MslSeasonsJsonFragment,
} from "data/fragments"

const TeamsIndex = ({ data, path }) => {
  const { teams } = data
  return (
    <Layout>
      <SEO title="Teams" path={path} />
      <h1>Hi Teams</h1>
      <ul>
        {teams.nodes.map(team => (
          <li key={team.teamName}>
            <Link to={team.teamPath}>
              {team.teamName} - {team.team_id}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    teams: allMslTeamsJson(sort: { fields: teamName, order: ASC }) {
      nodes {
        ...MslTeamsJsonFragment
      }
    }
  }
`

export default TeamsIndex
