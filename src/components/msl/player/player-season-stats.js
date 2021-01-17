import { Link } from "gatsby"
import React from "react"
import MslTeamItem from "components/msl/team/team-item"
import MslTableDataCell from "components/msl/table/table-data-cell"
import MslTableHeaderCell from "components/msl/table/table-header-cell"
import MslTable from "components/msl/table/table"
const MslPlayerSeasonStats = ({ seasons }) => {
  return (
    <MslTable>
      <>
        <tr>
          <MslTableHeaderCell>Season</MslTableHeaderCell>
          <MslTableHeaderCell>Team</MslTableHeaderCell>
          <MslTableHeaderCell>#Goals</MslTableHeaderCell>
          <MslTableHeaderCell>Is FO</MslTableHeaderCell>
          <MslTableHeaderCell>Is Mos</MslTableHeaderCell>
          <MslTableHeaderCell>#Mom</MslTableHeaderCell>
          <MslTableHeaderCell>#Assists</MslTableHeaderCell>
          <MslTableHeaderCell>#Saves</MslTableHeaderCell>
          <MslTableHeaderCell>#Referee</MslTableHeaderCell>
          <MslTableHeaderCell>#Yellow Cards</MslTableHeaderCell>
          <MslTableHeaderCell>#Red Cards</MslTableHeaderCell>
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
            <MslTableDataCell>
              <MslTeamItem team={stats.team} />
            </MslTableDataCell>
            <MslTableDataCell>{stats.goals}</MslTableDataCell>
            <MslTableDataCell>{stats.isOwner ? "Yes" : "No"}</MslTableDataCell>
            <MslTableDataCell>{stats.isMos ? "Yes" : "No"}</MslTableDataCell>
            <MslTableDataCell>{stats.mom}</MslTableDataCell>
            <MslTableDataCell>{stats.assists}</MslTableDataCell>
            <MslTableDataCell>{stats.saves}</MslTableDataCell>
            <MslTableDataCell>{stats.referees}</MslTableDataCell>
            <MslTableDataCell>{stats.yellow_cards}</MslTableDataCell>
            <MslTableDataCell>{stats.red_cards}</MslTableDataCell>
          </tr>
        ))}
      </>
    </MslTable>
  )
}

export default MslPlayerSeasonStats
