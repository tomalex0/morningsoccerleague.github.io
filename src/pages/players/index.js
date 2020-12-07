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

const PlayersIndex = ({ data, path }) => {
  const { players } = data
  return (
    <Layout>
      <SEO title="Players" path={path} />
      <h1>Hi Players</h1>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <ul>
        {players.nodes.map(player => (
          <li key={player.name}>
            <Link to={player.teamPath}>{player.name}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    players: allMslPlayersJson {
      nodes {
        ...MslPlayersJsonFragment
      }
    }
  }
`

export default PlayersIndex
