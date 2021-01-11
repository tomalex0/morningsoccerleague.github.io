import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "components/layout"
import { groupBy, formatDateString } from "graphql/lib/utility"

import SEO from "components/seo"
import MslFixtureItem from "components/msl/fixture-item"
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
              const dateval = formatDateString(`${item}`)
              return (
                <li key={item}>
                  <article>
                    <div className="grid md:grid-cols-7 xl:grid-cols-7 items-start relative rounded-xl p-3 sm:p-5 xl:p-6 overflow-hidden">
                      <time
                        dateTime="2020-11-18T17:45:00.000Z"
                        className="md:col-start-1 md:col-span-2 row-start-1 md:row-end-3 flex items-center font-medium mb-1 md:mb-0"
                      >
                        <svg
                          viewBox="0 0 12 12"
                          className="w-3 h-3 mr-6 overflow-visible text-indigo-700 dark:text-indigo-400"
                        >
                          <circle cx={6} cy={6} r={6} fill="currentColor" />
                          <circle
                            cx={6}
                            cy={6}
                            r={11}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                          />
                          {index > 0 && (
                            <path
                              d="M 6 -6 V -30"
                              fill="none"
                              stroke-width="2"
                              stroke="currentColor"
                              className="text-gray-400 dark:text-gray-400"
                            ></path>
                          )}
                          {fixtureGroupArr.length > index + 1 && (
                            <path
                              d="M 6 18 V 500"
                              fill="none"
                              strokeWidth={2}
                              stroke="currentColor"
                              className="text-gray-400 dark:text-gray-400"
                            />
                          )}
                        </svg>
                        <div className="text-gray-800 dark:text-gray-300">
                          {dateval}
                        </div>
                      </time>
                      <div className="col-span-7 ml-5 mt-2">
                        {fixtureGroup[item].map((fixture, index) => {
                          return (
                            <MslFixtureItem
                              fixture={fixture}
                              index={index + 1}
                              key={fixture.schedule_id}
                            />
                          )
                        })}
                      </div>
                    </div>
                  </article>
                </li>
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
