import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "components/layout"
import Image from "components/image"
import SEO from "components/seo"
import MslSeasonStatsItem from "components/msl/season-stats-item"

import { getSeasonStats } from "graphql/lib/helpers"

import {
  MslPlayersJsonFragment,
  MslTeamsJsonFragment,
  MslSeasonsJsonFragment,
} from "data/fragments"

function Season({ data, path }) {
  const { season } = data
  const seasonItem = getSeasonStats([season])[0]
  const title = `${season.season_id}-${season.season_year}`
  const seasonStats = seasonItem.seasonStats

  return (
    <Layout>
      <SEO title={title} path={path} />
      <h1>
        Hi Season {season.season_id}-{season.season_year}
      </h1>
      <ul>
        <MslSeasonStatsItem season={seasonItem} />
      </ul>
      <div>
        <h3>Man of Series</h3>
        <ul>
          {seasonItem.mos.map(stats => (
            <li key={stats.player_id}>
              <Link to={stats.playerPath}>{stats.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Man of the Match</h3>
        <ul>
          {seasonStats.moms.map(stats => (
            <li key={stats.player_id}>
              <Link to={stats.playerPath}>
                {stats.name} - {stats.count} - {stats.team.teamName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Goal Scorers</h3>
        <ul>
          {seasonStats.scorers.map(stats => (
            <li key={stats.player_id}>
              <Link to={stats.playerPath}>
                {stats.name} - {stats.count} - {stats.team.teamName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Goal Keeper Save</h3>
        <ul>
          {seasonStats.goalkeepers.map(stats => (
            <li key={stats.player_id}>
              <Link to={stats.playerPath}>
                {stats.name} - {stats.count} - {stats.team.teamName} -{" "}
                {stats.matches}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Yellow Card Holders</h3>
        <ul>
          {seasonStats.yellow_card_holders.map(stats => (
            <li key={stats.player_id}>
              <Link to={stats.playerPath}>
                {stats.name} - {stats.count} - {stats.team.teamName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Red Card Holders</h3>
        <ul>
          {seasonStats.red_card_holders.map(stats => (
            <li key={stats.player_id}>
              <Link to={stats.playerPath}>
                {stats.name} - {stats.count} - {stats.team.teamName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <div>
        <div>
          <Link to={season.fixturePath}>See Fixtures</Link>
        </div>
        <div>
          <Link to={season.statsPath}>See Stats</Link>
        </div>
        <div>
          <Link to={season.standingPath}>See Standings</Link>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    season: mslSeasonsJson(id: { eq: $id }) {
      ...MslSeasonsJsonFragment
      schedules {
        id
        gamestats {
          goals {
            minute
            owngoal
            player {
              ...MslPlayersJsonFragment
            }
            assist {
              ...MslPlayersJsonFragment
            }
          }
          team {
            ...MslTeamsJsonFragment
          }
          fouls
          cautions {
            minute
            caution_id
            player {
              ...MslPlayersJsonFragment
            }
          }
          mom {
            player {
              ...MslPlayersJsonFragment
            }
          }
          keeper {
            saves
            player {
              ...MslPlayersJsonFragment
            }
          }
        }
      }
      mos {
        ...MslPlayersJsonFragment
        seasons {
          ...MslSeasonsJsonFragment
        }
      }
      teams {
        players {
          ...MslPlayersJsonFragment
        }
      }
    }
  }
`

export default Season
