import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "components/layout"
import Image from "components/image"
import SEO from "components/seo"

import { Cautions } from "graphql/lib/enum"
import {
  getTotalPlayers,
  getTotalGoals,
  getTotalCautionType,
  getAllGameStatsByType,
} from "graphql/lib/helpers"

import {
  MslPlayersJsonFragment,
  MslTeamsJsonFragment,
  MslSeasonsJsonFragment,
} from "data/fragments"

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
        {seasons.nodes.map(season => {
          const totalGoals = getTotalGoals(season.schedules)
          const totalPlayers = getTotalPlayers(season.teams)
          const totalAssists = totalGoals.filter(item => item.assist)
          const totalOwnGoals = totalGoals.filter(item => item.owngoal)
          const totalFouls = getAllGameStatsByType(
            season.schedules,
            "fouls"
          ).reduce((a, b) => a + b, 0)
          const totalUniquePlayerGoals = [
            ...new Set(
              totalGoals
                .filter(item => !item.owngoal)
                .map(item => item.player.player_id)
            ),
          ]
          const totalYellowCards = getTotalCautionType(
            season.schedules,
            Cautions.YELLOW
          )
          const totalRedCards = getTotalCautionType(
            season.schedules,
            Cautions.RED
          )

          return (
            <li key={season.season_id}>
              <Link to={season.seasonPath}>
                {season.season_id}-{season.season_year}-
                {season.schedules.length} Game--{season.teams.length} Teams --{" "}
                {totalPlayers} Players -- {totalGoals.length}Goals --{" "}
                {totalAssists.length}
                Assists -- {totalOwnGoals.length}
                Owngoals -- {totalFouls}
                Total Fouls -- {totalUniquePlayerGoals.length}
                Unique Players Scored -- {totalYellowCards.length}
                Yellow Card -- {totalRedCards.length} Red Card --
                {season.mos.map(item => item.name).join(",")} Mos
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    seasons: allMslSeasonsJson(sort: { order: ASC, fields: season_id }) {
      nodes {
        ...MslSeasonsJsonFragment
        schedules {
          id
          gamestats {
            goals {
              minute
              owngoal
              player {
                ...MslPlayersJsonFragment
              }
              assist {
                ...MslPlayersJsonFragment
              }
            }
            fouls
            cautions {
              minute
              caution_id
            }
          }
        }
        mos {
          ...MslPlayersJsonFragment
          seasons {
            season_id
          }
        }
        teams {
          players {
            id
          }
        }
      }
    }
  }
`

export default SeasonsIndex
