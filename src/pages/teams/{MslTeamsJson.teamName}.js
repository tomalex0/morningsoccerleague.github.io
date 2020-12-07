import React from "react"
import { graphql } from "gatsby"

import Layout from "components/layout"
import Image from "components/image"
import SEO from "components/seo"

import {
  MslPlayersJsonFragment,
  MslTeamsJsonFragment,
  MslSeasonsJsonFragment,
} from "data/fragments"

function Team({ path, data }) {
  const { team } = data

  return (
    <Layout>
      <SEO title={team.teamName} path={path} />
      <h1>Hi Team {team.teamName}</h1>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    team: mslTeamsJson(id: { eq: $id }) {
      ...MslTeamsJsonFragment
    }
  }
`

export default Team
