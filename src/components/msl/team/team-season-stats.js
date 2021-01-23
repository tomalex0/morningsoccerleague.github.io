import { Link } from "gatsby"
import React from "react"
import MslTableDataCell from "components/msl/table/table-data-cell"
import MslTableHeaderCell from "components/msl/table/table-header-cell"
import MslTable from "components/msl/table/table"

const MslTeamSeasonStats = ({ seasons }) => {
  seasons.sort((a, b) => a?.season?.season_id - b?.season?.season_id)
  return (
    <MslTable>
      <>
        <tr>
          <MslTableHeaderCell>Season</MslTableHeaderCell>
          <MslTableHeaderCell>#Played</MslTableHeaderCell>
          <MslTableHeaderCell>#Won</MslTableHeaderCell>
          <MslTableHeaderCell>#Drawn</MslTableHeaderCell>
          <MslTableHeaderCell>#Lost</MslTableHeaderCell>
          <MslTableHeaderCell>#For</MslTableHeaderCell>
          <MslTableHeaderCell>#Against</MslTableHeaderCell>
          <MslTableHeaderCell>#Players</MslTableHeaderCell>
          <MslTableHeaderCell>#Mos</MslTableHeaderCell>
          <MslTableHeaderCell>#Mom</MslTableHeaderCell>
          <MslTableHeaderCell>#Assists</MslTableHeaderCell>
          <MslTableHeaderCell> #Yellow Cards</MslTableHeaderCell>
          <MslTableHeaderCell> #Red Cards</MslTableHeaderCell>
        </tr>
      </>
      <>
        {seasons.map((stats, index) => (
          <tr>
            <MslTableDataCell>
              <Link to={stats.season.seasonPath}>
                {stats.season.season} - {stats.season.season_year}
              </Link>
            </MslTableDataCell>
            <MslTableDataCell>{stats.matches}</MslTableDataCell>
            <MslTableDataCell>{stats.won}</MslTableDataCell>
            <MslTableDataCell>{stats.draw}</MslTableDataCell>
            <MslTableDataCell>{stats.lost}</MslTableDataCell>
            <MslTableDataCell>{stats.goals}</MslTableDataCell>
            <MslTableDataCell>{stats.goal_allowed}</MslTableDataCell>
            <MslTableDataCell>{stats.players}</MslTableDataCell>
            <MslTableDataCell>{stats.mos}</MslTableDataCell>
            <MslTableDataCell>{stats.mom}</MslTableDataCell>
            <MslTableDataCell>{stats.assists}</MslTableDataCell>
            <MslTableDataCell>{stats.yellow_cards}</MslTableDataCell>
            <MslTableDataCell>{stats.red_cards}</MslTableDataCell>
          </tr>
        ))}
      </>
    </MslTable>
  )
}

export default MslTeamSeasonStats
