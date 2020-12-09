import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "components/layout"
import Image from "components/image"
import SEO from "components/seo"
import {
  MslPlayersJsonFragment,
  MslTeamsJsonFragment,
  MslSeasonsJsonFragment,
} from "data/fragments"

function getTotalPlayers(teams) {
  let sum = 0
  teams.map(item => {
    sum += item.players.length
  })
  return sum
}

function getTotalGoals(schedules) {
  const allStats = schedules.map(item => item.gamestats).flat()
  let sum = 0
  allStats.map(item => {
    sum += item.goals.length
  })
  return sum
}

// function getTotalCautionType(schedules) {
//   const allStats = schedules.map(item => item.cautions).flat()
//   let sum = 0
//   allStats.map(item => {
//     if(item.caution_id)
//     sum += item.goals.length
//   })
//   return sum
// }

const SeasonsIndex = ({ data, path }) => {
  const { seasons } = data
  console.log(seasons)
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
            <Link to={season.seasonPath}>
              {season.season_id}-{season.season_year}-{season.schedules.length}{" "}
              Game--{season.teams.length} Teams --{" "}
              {getTotalPlayers(season.teams)} Players{" "}
              {getTotalGoals(season.schedules)}Goals - Yellow Card - Red Card
            </Link>
          </li>
        ))}
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
            }
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
