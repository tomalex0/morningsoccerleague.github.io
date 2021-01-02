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
  const { fixtures } = props.data
  const path = props.path
  const pageContext = props.pageContext

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
        {fixtures.nodes.map(fixture => (
          <li key={fixture.schedule_id}>
            {fixture.scheduled_date}-{fixture.schedule_id}
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query($season_id: Int) {
    fixtures: allMslSchedulesJson(
      filter: { season: { season_id: { eq: $season_id } } }
      sort: { fields: schedule_id, order: ASC }
    ) {
      nodes {
        scheduled_time
        scheduled_date
        schedule_id
        completed
        end_time
        season {
          ...MslSeasonsJsonFragment
        }
      }
    }
  }
`

export default FixturesIndexPage
