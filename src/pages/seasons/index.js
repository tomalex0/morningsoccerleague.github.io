import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"
import {
  MslPlayersJsonFragment,
  MslTeamsJsonFragment,
  MslSeasonsJsonFragment,
} from "../../data/fragments"

const SeasonsIndex = ({ data, path }) => {
  const { seasons } = data
  return (
    <Layout>
      <SEO title="Seasons" path={path} />
      <h1>Hi Seasons</h1>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <ul>
        {seasons.nodes.map(season => (
          <li key={season.season_id}>
            <Link to={season.seasonPath}>{season.season_id}-{season.season_year}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    seasons: allMslSeasonsJson (sort: {order: ASC, fields: season_id}) {
      nodes {
        ...MslSeasonsJsonFragment
      }
    }
  }
`

export default SeasonsIndex
