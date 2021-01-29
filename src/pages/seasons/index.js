import React from "react"
import { graphql } from "gatsby"

import Layout from "components/layout"
import SEO from "components/seo"
import MslSeasonStatsItem from "components/msl/season/season-stats-item"

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
  return (
    <Layout>
      <SEO title="Seasons" path={path} />
      <div>
        {seasonList.map(season => {
          return (
            <div className="mt-10" key={season.season_id}>
              <MslSeasonStatsItem season={season} />
            </div>
          )
        })}
      </div>
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
