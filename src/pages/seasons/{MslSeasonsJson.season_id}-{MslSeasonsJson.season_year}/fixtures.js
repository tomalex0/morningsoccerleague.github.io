import React, { useState } from "react"
import { Link, graphql } from "gatsby"

import Layout from "components/layout"
import { groupBy } from "graphql/lib/utility"

import SEO from "components/seo"
import MslFixtureGroup from "components/msl/schedule/fixture-group"
import {
  MslPlayersJsonFragment,
  MslTeamsJsonFragment,
  MslSeasonsJsonFragment,
} from "data/fragments"

const FixturesIndexPage = props => {
  const path = props.path
  // const pageContext = props.pageContext
  const seasonData = props.data.season
  const fixtures = props.data.season.schedules
    .map(item => ({
      ...item,
      sortdate: new Date(`${item.scheduled_date} ${item.scheduled_time}`),
    }))
    .sort((a, b) => a.sortdate - b.sortdate)
    .map((item, index) => ({ ...item, pos: index + 1 }))
  // TODO: sort based on game start time
  const fixtureGroup = groupBy(fixtures, "scheduled_date")
  const fixtureGroupArr = Object.keys(fixtureGroup)

  const [isOpen, setIsOpen] = useState({ val: true })
  return (
    <Layout>
      <SEO
        title={`Fixtures ${seasonData.season_id}-${seasonData.season_year}`}
        path={path}
      />
      <div>
        <section className="p-3 mx-2 my-4">
          <h1 className="text-2xl font-bold leading-7 sm:text-3xl sm:truncate text-dark-600 dark:text-dark-300">
            <Link
              to={seasonData.seasonPath}
              className="text-dark-600 dark:text-dark-300 hover:text-light-800 dark:hover:text-dark-100"
            >
              Season {seasonData.season_id} ({seasonData.season_year}) &rarr;
            </Link>
            <span className="block mt-2">Fixtures</span>
          </h1>

          <div className="flex my-2 space-x-2">
            <div className="flex-grow text-dark-600 dark:text-dark-300 text-left items-center content-center py-3">
              {fixtures.length} Games{" "}
            </div>
            <div className="flex-shrink w-12">
              <button
                aria-label="Expand"
                onClick={() => {
                  setIsOpen({ val: true })
                }}
                className="bg-light-800 dark:bg-dark-800 p-2 shadow-md rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-8 h-8 overflow-visible text-light-50 dark:text-light-50"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-shrink w-12">
              <button
                aria-label="Collapse"
                onClick={() => {
                  setIsOpen({ val: false })
                }}
                className="bg-light-800 dark:bg-dark-800 p-2 shadow-md rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-8 h-8 overflow-visible text-light-50 dark:text-light-50"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <ul className="bg-dark_alt dark:bg-dark-800 shadow-md rounded-lg p-2 sm:p-5 xl:p-6">
            {fixtureGroupArr.map((item, index) => {
              return (
                <MslFixtureGroup
                  item={item}
                  index={index}
                  openState={isOpen}
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
