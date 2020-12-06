import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { MslPlayersJsonFragment, MslTeamsJsonFragment } from "../data/fragments"

const IndexPage = ({ data, path }) => (
  <Layout>
    <SEO title="Teams" path={path} />
    <h1>Hi Teams</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </div>
  </Layout>
)

export const query = graphql`
  query($seasonId: Int! = 3) {
    allMslSeasonsJson(filter: { season_id: { eq: $seasonId } }) {
      nodes {
        season_id
        season
        teams {
          owners {
            ...MslPlayersJsonFragment
          }
          players {
            ...MslPlayersJsonFragment
          }
          team {
            ...MslTeamsJsonFragment
          }
        }
        mos {
          ...MslPlayersJsonFragment
        }
      }
    }
  }
`

export default IndexPage
