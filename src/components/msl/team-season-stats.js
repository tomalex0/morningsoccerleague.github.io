import { Link } from "gatsby"
import React from "react"
import MslTableDataCell from "components/msl/table-data-cell"
import MslTableHeaderCell from "components/msl/table-header-cell"
import MslTable from "components/msl/table"

const MslTeamSeasonStats = ({ seasons }) => {
  return (
    <MslTable>
      <>
        <tr>
          <MslTableHeaderCell>Season</MslTableHeaderCell>
          <MslTableHeaderCell>#Games</MslTableHeaderCell>
          <MslTableHeaderCell>#Goals</MslTableHeaderCell>
          <MslTableHeaderCell>#Assists</MslTableHeaderCell>
          <MslTableHeaderCell>#Mos</MslTableHeaderCell>
          <MslTableHeaderCell>#Mom</MslTableHeaderCell>
          <MslTableHeaderCell>#Players</MslTableHeaderCell>
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
            <MslTableDataCell>{stats.goals}</MslTableDataCell>
            <MslTableDataCell>{stats.assists}</MslTableDataCell>
            <MslTableDataCell>{stats.mos}</MslTableDataCell>
            <MslTableDataCell>{stats.mom}</MslTableDataCell>
            <MslTableDataCell>{stats.players}</MslTableDataCell>
            <MslTableDataCell>{stats.yellow_cards}</MslTableDataCell>
            <MslTableDataCell>{stats.red_cards}</MslTableDataCell>
          </tr>
        ))}
      </>
    </MslTable>
  )
}

export default MslTeamSeasonStats
