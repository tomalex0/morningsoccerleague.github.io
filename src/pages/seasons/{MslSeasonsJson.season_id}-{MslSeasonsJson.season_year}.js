import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "components/layout"
import SEO from "components/seo"
import MslSeasonStatsItem from "components/msl/season/season-stats-item"
import MslStandings from "components/msl/season/stats-standings"
import MslStatsFouls from "components/msl/season/stats-fouls"
import MslStatsPlayers from "components/msl/season/stats-players"
import MslStatsMos from "components/msl/season/stats-mos"
import MslTeamMembers from "components/msl/team/team-members"

import { getSeasonStats, getSeasonTeams } from "graphql/lib/helpers"
import { predicate } from "graphql/lib/utility"

import {
  MslPlayersJsonFragment,
  MslTeamsJsonFragment,
  MslSeasonsJsonFragment,
  MslSeasonsJsonStatsFragment,
} from "data/fragments"

function Season({ data, path }) {
  const { season } = data
  const seasonItem = getSeasonStats([season])[0]
  const title = `Season ${season.season_id} (${season.season_year})`
  const seasonStats = seasonItem.seasonStats
  const teams = getSeasonTeams(seasonItem)
  return (
    <Layout>
      <SEO title={title} path={path} />
      <div className="mt-10">
        <MslSeasonStatsItem season={seasonItem} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4 px-5 mt-5">
        <section>
          <h2 className="text-lg leading-6 font-medium text-dark-900 dark:text-dark-300 mb-3">
            Standings
          </h2>
          <MslStandings standings={seasonStats.team_standing_stats} />
        </section>
        <section>
          <h2 className="text-lg leading-6 font-medium text-dark-900 dark:text-dark-300 mb-3">
            Fouls
          </h2>
          <MslStatsFouls fouls={seasonStats.team_foul_stats} />
        </section>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 px-5 mt-5 ">
        <div>
          {seasonItem.moslist.length > 0 && (
            <section className="mb-5">
              <h2 className="text-lg leading-6 font-medium text-dark-900 dark:text-dark-300 mb-3">
                Man of Series
              </h2>
              <MslStatsMos
                data={seasonItem.moslist}
                playerColTitle={`Man of Series`}
              />
            </section>
          )}
          {seasonStats.moms.length > 0 && (
            <section>
              <h2 className="text-lg leading-6 font-medium text-dark-900 dark:text-dark-300 mb-3">
                Man of Matches
              </h2>
              <MslStatsPlayers
                data={seasonStats.moms}
                playerColTitle={`Man of the Match`}
              />
            </section>
          )}
        </div>
        <div>
          {seasonStats.red_card_holders.length > 0 && (
            <section className="mb-5">
              <h2 className="text-lg leading-6 font-medium text-dark-900 dark:text-dark-300 mb-3">
                Red Cards
              </h2>
              <MslStatsPlayers
                data={seasonStats.red_card_holders}
                playerColTitle={`Red Card`}
              />
            </section>
          )}
          {seasonStats.yellow_card_holders.length > 0 && (
            <section>
              <h2 className="text-lg leading-6 font-medium text-dark-900 dark:text-dark-300 mb-3">
                Yellow Cards
              </h2>
              <MslStatsPlayers
                data={seasonStats.yellow_card_holders}
                playerColTitle={`Yellow Card`}
              />
            </section>
          )}
        </div>
        <div>
          {seasonStats.goalkeepers.length > 0 && (
            <section className="mb-4">
              <h2 className="text-lg leading-6 font-medium text-dark-900 dark:text-dark-300 mb-3">
                Goal Keepers
              </h2>
              <MslStatsPlayers
                data={seasonStats.goalkeepers}
                playerColTitle={`Goal Keepers`}
              />
            </section>
          )}
          <section>
            <h2 className="text-lg leading-6 font-medium text-dark-900 dark:text-dark-300 mb-3">
              Goal Scorers
            </h2>
            <MslStatsPlayers
              data={seasonStats.scorers}
              playerColTitle={`Goal Scorers`}
            />
          </section>
        </div>
      </div>
      <section className="mt-10 px-5">
        <h2 className="text-lg leading-6 font-medium text-dark-900 dark:text-dark-300 mb-3">
          Teams
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {teams.map(stats => (
            <div>
              <MslTeamMembers data={stats} />
            </div>
          ))}
        </div>
      </section>
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

export default Season
