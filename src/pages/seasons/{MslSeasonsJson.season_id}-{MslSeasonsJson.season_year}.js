import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "components/layout"
import Image from "components/image"
import SEO from "components/seo"

import {
  MslPlayersJsonFragment,
  MslTeamsJsonFragment,
  MslSeasonsJsonFragment,
} from "data/fragments"

function Season({ data, path }) {
  const { season } = data
  const title = `${season.season_id}-${season.season_year}`
  return (
    <Layout>
      <SEO title={title} path={path} />
      <h1>
        Hi Season {season.season_id}-{season.season_year}
      </h1>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <div>
        <div>
          <Link to={season.fixturePath}>See Fixtures</Link>
        </div>
        <div>
          <Link to={season.statsPath}>See Stats</Link>
        </div>
        <div>
          <Link to={season.standingPath}>See Standings</Link>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    season: mslSeasonsJson(id: { eq: $id }) {
      ...MslSeasonsJsonFragment
    }
  }
`

export default Season
