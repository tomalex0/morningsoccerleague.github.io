import React, { useState } from "react"
import { Link, graphql } from "gatsby"

import Layout from "components/layout"
import { groupBy, formatDateString } from "graphql/lib/utility"

import SEO from "components/seo"
import MslFixtureGroup from "components/msl/schedule/fixture-group"
import {
  MslPlayersJsonFragment,
  MslTeamsJsonFragment,
  MslSeasonsJsonFragment,
} from "data/fragments"

const FixturesIndexPage = props => {
  const path = props.path
  const pageContext = props.pageContext
  const seasonData = props.data.season
  const fixtures = props.data.season.schedules
    .map(item => ({ ...item, sortdate: new Date(item.scheduled_date) }))
    .sort((a, b) => a.sortdate - b.sortdate)
    .map((item, index) => ({ ...item, pos: index + 1 }))
  // TODO: sort based on game start time
  const fixtureGroup = groupBy(fixtures, "scheduled_date")
  const fixtureGroupArr = Object.keys(fixtureGroup)

  return (
    <Layout>
      <SEO
        title={`Fixtures ${seasonData.season_id}-${seasonData.season_year}`}
        path={path}
      />
      <div>
        <section className="p-3 mx-2 md:mx-12 my-4">
          <h1 className="text-2xl font-bold leading-7 text-gray-600 dark:text-gray-300  sm:text-3xl sm:truncate mb-4">
            Season {seasonData.season_id} ({seasonData.season_year}) Fixtures
          </h1>

          <div className="my-2 text-gray-600 dark:text-gray-300 text-left">
            Total Games {fixtures.length}
          </div>

          <ul className="bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-2 sm:p-5 xl:p-6">
            {fixtureGroupArr.map((item, index) => {
              return (
                <MslFixtureGroup
                  item={item}
                  index={index}
                  fixtureGroupArr={fixtureGroupArr}
                  fixtureGroup={fixtureGroup}
                />
              )
            })}
          </ul>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    season: mslSeasonsJson(id: { eq: $id }) {
      ...MslSeasonsJsonStatsFragment
    }
  }
`

export default FixturesIndexPage
