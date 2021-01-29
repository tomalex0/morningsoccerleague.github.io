import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import MslAllStatsItem from "components/msl/stats/all-stats-item"

import {
  getAllGameStatsByType,
  getReferees,
} from "graphql/models/stats-by-type"
import { Cautions } from "graphql/lib/enum"
import {
  MslSchedulesJsonGamestatsFragment,
  MslSchedulesJsonRefereesFragment,
} from "data/fragments"

const MslAllStats = () => {
  const data = useStaticQuery(graphql`
    query {
      players: allMslPlayersJson {
        nodes {
          name
          player_id
        }
      }
      teams: allMslTeamsJson {
        nodes {
          team_id
          teamName
        }
      }
      seasons: allMslSeasonsJson {
        nodes {
          season
        }
      }
      matches: allMslSchedulesJson(filter: { completed: { eq: true } }) {
        nodes {
          schedule_id
          completed
          referees {
            ...MslSchedulesJsonRefereesFragment
          }
          gamestats {
            ...MslSchedulesJsonGamestatsFragment
          }
        }
      }
    }
  `)

  const totalSeasons = data.seasons.nodes.length
  const totalMatches = data.matches.nodes.length
  const totalPlayers = data.players.nodes.length
  const totalTeams = data.teams.nodes.length
  const schedules = data.matches.nodes
  const allRefs = getReferees(schedules)
  const totalRefs = [
    ...new Set(
      allRefs.map(item => item?.player?.player_id).filter(item => item)
    ),
  ].length
  const allGoals = getAllGameStatsByType(schedules, "goals")
  const totalGoals = allGoals.length
  const ownGoals = allGoals.filter(item => item.owngoal)
  const totalOwnGoals = ownGoals.length
  const totalAssists = allGoals.filter(item => item.assist).length
  const fouls = getAllGameStatsByType(schedules, "fouls")
  const totalFouls = fouls.reduce((a, b) => a + b, 0)
  const yellowCards = getAllGameStatsByType(schedules, "cautions").filter(
    item => item?.caution?.caution_id == Cautions.YELLOW
  )
  const totalYellowCards = yellowCards.length
  const redCards = getAllGameStatsByType(schedules, "cautions").filter(
    item => item?.caution?.caution_id == Cautions.RED
  )
  const totalRedCards = redCards.length
  const scoredPlayers = allGoals.map(item => item?.player?.player_id)
  const totalScoredPlayers = [...new Set(scoredPlayers)].length

  return (
    <div className="pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-dark-700 dark:text-dark-300 sm:text-4xl">
            All Time Stats
          </h2>
        </div>
        <div className="mt-10">
          <div className="space-y-0 grid grid-cols-2 gap-y-4 sm:gap-x-3 sm:gap-y-4 sm:grid sm:grid-cols-2 md:grid md:grid-cols-4 md:gap-x-6 md:gap-y-6">
            <MslAllStatsItem
              title="Seasons"
              value={totalSeasons}
            ></MslAllStatsItem>
            <MslAllStatsItem
              title="Games"
              value={totalMatches}
            ></MslAllStatsItem>
            <MslAllStatsItem title="Teams" value={totalTeams}></MslAllStatsItem>
            <MslAllStatsItem
              title="Players"
              value={totalPlayers}
            ></MslAllStatsItem>
            <MslAllStatsItem title="Goals" value={totalGoals}></MslAllStatsItem>
            <MslAllStatsItem title="Fouls" value={totalFouls}></MslAllStatsItem>
            <MslAllStatsItem
              title="Assists"
              value={totalAssists}
            ></MslAllStatsItem>
            <MslAllStatsItem
              title="Players Scored"
              value={totalScoredPlayers}
            ></MslAllStatsItem>
            <MslAllStatsItem
              title="Referees"
              value={totalRefs}
            ></MslAllStatsItem>
            <MslAllStatsItem
              title="Yellow Cards"
              value={totalYellowCards}
            ></MslAllStatsItem>
            <MslAllStatsItem
              title="Red Cards"
              value={totalRedCards}
            ></MslAllStatsItem>
            <MslAllStatsItem
              title="Own Goals"
              value={totalOwnGoals}
            ></MslAllStatsItem>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MslAllStats
