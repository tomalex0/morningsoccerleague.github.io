import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "components/layout"
import Image from "components/image"
import SEO from "components/seo"
import MslSeasonStatsItem from "components/msl/season-stats-item"

import { getSeasonStats } from "graphql/lib/helpers"

import {
  MslPlayersJsonFragment,
  MslTeamsJsonFragment,
  MslSeasonsJsonFragment,
  MslSeasonsJsonStatsFragment,
} from "data/fragments"

const SeasonsIndex = ({ data, path }) => {
  const { seasons } = data
  const seasonList = getSeasonStats(seasons.nodes)
  // console.log(seasonList)
  return (
    <Layout>
      <SEO title="Seasons" path={path} />
      <h1>Hi Seasons</h1>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <ul>
        {seasonList.map(season => {
          return <MslSeasonStatsItem season={season} key={season.season_id} />
        })}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    seasons: allMslSeasonsJson(sort: { order: ASC, fields: season_id }) {
      nodes {
        ...MslSeasonsJsonStatsFragment
      }
    }
  }
`

export default SeasonsIndex
