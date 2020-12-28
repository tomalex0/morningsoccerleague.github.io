import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "components/layout"
import Image from "components/image"
import SEO from "components/seo"
import MslSeasonStatsItem from "components/msl/season-stats-item"

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

  const title = `${season.season_id}-${season.season_year}`
  const seasonStats = seasonItem.seasonStats
  const teams = getSeasonTeams(seasonItem)
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
        <table>
          <thead>
            <tr>
              <th width="5%">POS</th>
              <th width="55%">TEAMS</th>
              <th width="5%">P</th>
              <th width="5%">W</th>
              <th width="5%">D</th>
              <th width="5%">L</th>
              <th width="5%">GF</th>
              <th width="5%">GA</th>
              <th width="5%">GD</th>
              <th width="5%">PTS</th>
            </tr>
          </thead>
          <tbody>
            {seasonStats.team_standing_stats.map((stats, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{stats.team.teamName}</td>
                <td>{stats.played}</td>
                <td>{stats.won}</td>
                <td>{stats.draw}</td>
                <td>{stats.lost}</td>
                <td>{stats.goal_scored}</td>
                <td>{stats.goal_allowed}</td>
                <td>{stats.goal_diff}</td>
                <td>{stats.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th width="55%">TEAMS</th>
              <th width="5%">#Fouls</th>
              <th width="5%">#Matches</th>
              <th width="5%">AVG</th>
            </tr>
          </thead>
          <tbody>
            {seasonStats.team_foul_stats.map((stats, index) => (
              <tr>
                <td>{stats.team.teamName}</td>
                <td>{stats.fouls}</td>
                <td>{stats.matches}</td>
                <td>{stats.foulAvg}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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

      <div>
        <h3>Teams</h3>
        <ul>
          {teams.map(stats => (
            <li key={stats.team.team_id}>
              <Link to={stats.team.teamPath}>{stats.team.teamName}</Link>
              <ul>
                {stats.players.map(player => (
                  <li>
                    {player.name} {player.isOwner == 1 ? "- Owner" : ""}{" "}
                    {player.isMos == 1 ? " - Mos" : ""}
                  </li>
                ))}
              </ul>
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
      ...MslSeasonsJsonStatsFragment
    }
  }
`

export default Season
