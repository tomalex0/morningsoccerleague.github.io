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
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <ul>
        {player.seasons.map(season => (
          <li key={season.season_id}>
            <Link to={season.seasonPath}>
              {season.season_id}-{season.season_year}
            </Link>
            {season.playerInfo.isOwner && <span>---Owner</span>}
            <span>---{season.playerInfo.goals} Goals</span>
            <span>---{season.playerInfo.team.teamName}</span>
            {season.isMos && <span>---Mos</span>}
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
      seasons {
        ...MslSeasonsJsonFragment
        isMos
        playerInfo {
          team {
            ...MslTeamsJsonFragment
          }
          goals
          isOwner
        }
        schedules {
          gamestats {
            goals {
              player {
                player_id
              }
              owngoal
            }
          }
        }
      }
    }
  }
`

export default Player
