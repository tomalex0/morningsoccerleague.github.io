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

import { groupBy } from "../../../graphql/lib/helpers"

function Player({ data, path }) {
  const { player } = data

  const seasonGrouped = groupBy(player.playerStats.seasonStats, "season_id")
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
        {player.seasons.map(season => (
          <li key={season.season_id}>
            <Link to={season.seasonPath}>
              {season.season_id}-{season.season_year}
            </Link>
            {seasonGrouped[season.season_id][0].isOwner && (
              <span>---Owner</span>
            )}
            <span>---{seasonGrouped[season.season_id][0].goals} Goals</span>
            <span>
              ---{seasonGrouped[season.season_id][0].team.teamName} Team
            </span>
            <span>---{seasonGrouped[season.season_id][0].assists} Assist</span>
            {/*<span>---{season.playerInfo.team.teamName}</span>*/}
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
      playerStats {
        ...MslPlayerStatsFragment
      }
      seasons {
        ...MslSeasonsJsonFragment
        season_id
        isMos

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
