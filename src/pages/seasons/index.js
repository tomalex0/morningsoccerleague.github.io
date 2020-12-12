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
  getMosDetails,
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
        {seasons.nodes.map(season => (
          <li key={season.season_id}>
            <Link to={season.seasonPath}>
              {season.season_id}-{season.season_year}-{season.schedules.length}{" "}
              Game--{season.teams.length} Teams --{" "}
              {getTotalPlayers(season.teams)} Players --{" "}
              {getTotalGoals(season.schedules).length}Goals --{" "}
              {getTotalCautionType(season.schedules, Cautions.YELLOW).length}
              Yellow Card --{" "}
              {getTotalCautionType(season.schedules, Cautions.RED).length} Red
              Card --
              {/*{getMosDetails(season.mos, season.season_id).join(",")}{" "}*/}
              {/*Mos -{" "}*/}
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
