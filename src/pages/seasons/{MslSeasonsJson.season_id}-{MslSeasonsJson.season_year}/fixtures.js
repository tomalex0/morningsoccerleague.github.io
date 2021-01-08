import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "components/layout"
import { groupBy, formatDateString } from "graphql/lib/utility"

import SEO from "components/seo"
import MslFixtureItem from "components/msl/fixture-item"
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
    .map(item => ({ ...item, sortdate: new Date(item.scheduled_date) }))
    .sort((a, b) => a.sortdate - b.sortdate)

  const fixtureGroup = groupBy(fixtures, "scheduled_date")

  return (
    <Layout>
      <SEO
        title={`Fixtures ${pageContext.season_id}-${pageContext.season_year}`}
        path={path}
      />
      <h1>
        Hi Fixtures {pageContext.season_id}-{pageContext.season_year}
      </h1>
      <div>
        {Object.keys(fixtureGroup).map(item => {
          console.log(item, "--343--")
          const dateval = formatDateString(`${item}`)
          return (
            <div className="board-row">
              <h1>{dateval}</h1>
              {fixtureGroup[item].map(fixture => {
                return <MslFixtureItem fixture={fixture} />
              })}
            </div>
          )
        })}
      </div>
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
