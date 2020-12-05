import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data, path }) => (
  <Layout>
    <SEO title="Teams" path={path} />
    <h1>Hi Teams</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

// export const query = graphql`
//   query MyQuery($seasonId: Int! = 3) {
//     allMslSeasonsJson(filter: { season_id: { eq: $seasonId } }) {
//       nodes {
//         season_id
//         season
//         teams {
//           owners {
//             name
//             player_id
//           }
//           players {
//             player_id
//             name
//           }
//           team {
//             team_id
//             teamName
//             teamCls
//           }
//         }
//         mos {
//           player_id
//           name
//         }
//       }
//     }
//   }
// `

export default IndexPage
