import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "components/layout"
import SEO from "components/seo"
import MslSeasonStatsItem from "components/msl/season-stats-item"
import MslStandings from "components/msl/stats-standings"
import MslStatsFouls from "components/msl/stats-fouls"
import MslStatsPlayers from "components/msl/stats-players"
import MslTeamMembers from "components/msl/team-members"

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
      <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-2 px-5 mt-5">
        <div>
          <MslStandings standings={seasonStats.team_standing_stats} />
        </div>
        <div>
          <MslStatsFouls fouls={seasonStats.team_foul_stats} />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 px-5 mt-5 ">
        <div>
          {seasonItem.mos.length > 0 && (
            <div className="mb-5">
              <MslStatsPlayers
                data={seasonItem.mos}
                playerColTitle={`Man of Series`}
              />
            </div>
          )}
          {seasonStats.moms.length > 0 && (
            <div>
              <MslStatsPlayers
                data={seasonStats.moms}
                playerColTitle={`Man of the Match`}
              />
            </div>
          )}
        </div>
        <div>
          {seasonStats.red_card_holders.length > 0 && (
            <div className="mb-5">
              <MslStatsPlayers
                data={seasonStats.red_card_holders}
                playerColTitle={`Red Card`}
              />
            </div>
          )}
          {seasonStats.yellow_card_holders.length > 0 && (
            <div>
              <MslStatsPlayers
                data={seasonStats.yellow_card_holders}
                playerColTitle={`Yellow Card`}
              />
            </div>
          )}
        </div>
        <div>
          {seasonStats.goalkeepers.length > 0 && (
            <div className="mb-4">
              <MslStatsPlayers
                data={seasonStats.goalkeepers}
                playerColTitle={`Goal Keepers`}
              />
            </div>
          )}
          <div>
            <MslStatsPlayers
              data={seasonStats.scorers}
              playerColTitle={`Goal Scorers`}
            />
          </div>
        </div>
      </div>
      <div className="mt-10 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {teams.map(stats => (
            <div>
              <MslTeamMembers data={stats} />
            </div>
          ))}
        </div>
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

export default Season
