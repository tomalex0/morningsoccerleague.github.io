import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "components/layout"
import Image from "components/image"
import SEO from "components/seo"

const { Cautions } = require("../../../graphql/lib/enum")

import {
  MslPlayersJsonFragment,
  MslTeamsJsonFragment,
  MslSeasonsJsonFragment,
} from "data/fragments"

function getTotalChildArr(itemArr, prop) {
  let sum = 0
  itemArr.map(item => {
    sum += item[prop].length
  })
  return sum
}

function getTotalPlayers(teams) {
  const sum = getTotalChildArr(teams, "players")
  return sum
}

function getTotalGoals(schedules) {
  const allStats = schedules
    .map(item => item.gamestats)
    .flat()
    .map(item => item.goals)
    .flat()
  return allStats.length
}

function getTotalCautionType(schedules, cautionType = 1) {
  const allStats = schedules
    .map(item => item.gamestats)
    .flat()
    .map(item => item.cautions)
    .flat()
    .filter(item => item && item.caution_id == cautionType)
  return allStats.length
}
function getMosDetails(mos, season_id) {
  const mosArr = mos.map(item => {
    const teamName = item.seasons.find(item => item.season_id == season_id)
      .teamInfo.team.teamName
    return `${item.name} - ${teamName}`
  })
  return mosArr
}

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
              {getTotalPlayers(season.teams)} Players --{" "}
              {getTotalGoals(season.schedules)}Goals --{" "}
              {getTotalCautionType(season.schedules, Cautions.YELLOW)}Yellow
              Card -- {getTotalCautionType(season.schedules, Cautions.RED)} Red
              Card -- {getMosDetails(season.mos, season.season_id).join(",")}{" "}
              Mos -{" "}
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
            cautions {
              minute
              caution_id
            }
          }
        }
        mos {
          name
          seasons {
            isMos
            season_id
            teamInfo {
              team {
                ...MslTeamsJsonFragment
              }
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
