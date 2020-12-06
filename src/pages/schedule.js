import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {
  MslPlayersJsonFragment,
  MslTeamsJsonFragment,
  MslSchedulesJsonGamestatsFragment,
} from "../data/fragments"

const IndexPage = ({ path, data }) => {
  return (
    <Layout>
      <SEO title="Schedule" path={path} />
      <h1>Hi Schedule</h1>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <div>
        <pre>{JSON.stringify(data, null, 4)}</pre>
      </div>
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
