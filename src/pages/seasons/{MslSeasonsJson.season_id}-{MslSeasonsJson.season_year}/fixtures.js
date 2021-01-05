import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "components/layout"
import Image from "components/image"
import SEO from "components/seo"
import {
  MslPlayersJsonFragment,
  MslTeamsJsonFragment,
  MslSeasonsJsonFragment,
} from "data/fragments"

const FixturesIndexPage = props => {
  // console.log(props)
  const path = props.path
  const pageContext = props.pageContext
  const fixtures = props.data.season.schedules

  return (
    <Layout>
      <SEO
        title={`Fixtures ${pageContext.season_id}-${pageContext.season_year}`}
        path={path}
      />
      <h1>
        Hi Fixtures {pageContext.season_id}-{pageContext.season_year}
      </h1>
      <ul>
        {fixtures.map(fixture => (
          <li key={fixture.schedule_id}>
            {fixture.scheduled_date}-{fixture.schedule_id}
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    season: mslSeasonsJson(id: { eq: $id }) {
      ...MslSeasonsJsonStatsFragment
    }
  }
`

export default FixturesIndexPage
