import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "components/layout"
import SEO from "components/seo"
import {
  MslPlayersJsonFragment,
  MslTeamsJsonFragment,
  MslSchedulesJsonGamestatsFragment,
  MslSeasonsJsonFragment,
} from "data/fragments"

const IndexPage = ({ path, data }) => {
  return (
    <Layout>
      <SEO title="Schedule" path={path} />
      <h1>Hi Schedule</h1>
    </Layout>
  )
}

export const query = graphql`
  query($seasonId: Int! = 3) {
    allMslSchedulesJson(filter: { season: { season_id: { eq: $seasonId } } }) {
      nodes {
        scheduled_time
        scheduled_date
        schedule_id
        started_time
        end_time
        completed
        season {
          ...MslSeasonsJsonFragment
        }
        homestats: stats(stats_type: home) {
          ...MslSchedulesJsonGamestatsFragment
        }
        awaystats: stats(stats_type: away) {
          ...MslSchedulesJsonGamestatsFragment
        }
        referees {
          player {
            ...MslPlayersJsonFragment
          }
          team {
            ...MslTeamsJsonFragment
          }
        }
      }
    }
  }
`

export default IndexPage
