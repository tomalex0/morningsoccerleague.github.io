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

function Player({ data, path }) {
  const { player } = data
  return (
    <Layout>
      <SEO title={player.name} path={path} />
      <h1>
        Hi Player {player.name} - {player.player_id}
      </h1>
      <div>
        <span>
          {player.playerStats.allseasonStats.goals} Total Goals ---
          {player.playerStats.allseasonStats.assists} Total Assists
        </span>
      </div>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <ul>
        {player.playerStats.seasonStats.map(item => (
          <li key={item.season.season_id}>
            <Link to={item.season.seasonPath}>
              {item.season.season_id}-{item.season.season_year}
            </Link>
            {item.isOwner && (
              <span>---Owner</span>
            )}
            <span>---{item.goals} Goals</span>
            <span>
              ---{item.team.teamName} Team
            </span>
            <span>---{item.assists} Assist</span>
            {item.isMos && <span>---Mos</span>}
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    player: mslPlayersJson(id: { eq: $id }) {
      ...MslPlayersJsonFragment
      playerStats {
        ...MslPlayerStatsFragment
      }
    }
  }
`

export default Player
