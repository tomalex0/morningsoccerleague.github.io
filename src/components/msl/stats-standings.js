import { Link } from "gatsby"
import React from "react"
import MslTeamItem from "components/msl/team-item"
import MslTableDataCell from "components/msl/table-data-cell"
import MslTableHeaderCell from "components/msl/table-header-cell"
import MslTable from "components/msl/table"
const MslStandings = ({ standings }) => {
  return (
    <MslTable>
      <>
        <tr>
          <MslTableHeaderCell>POS</MslTableHeaderCell>
          <MslTableHeaderCell>Teams</MslTableHeaderCell>
          <MslTableHeaderCell>P</MslTableHeaderCell>
          <MslTableHeaderCell>W</MslTableHeaderCell>
          <MslTableHeaderCell>D</MslTableHeaderCell>
          <MslTableHeaderCell>L</MslTableHeaderCell>
          <MslTableHeaderCell>GF</MslTableHeaderCell>
          <MslTableHeaderCell>GA</MslTableHeaderCell>
          <MslTableHeaderCell>GD</MslTableHeaderCell>
          <MslTableHeaderCell>PTS</MslTableHeaderCell>
        </tr>
      </>
      <>
        {standings.map((stats, index) => (
          <tr>
            <MslTableDataCell>
              <div className="text-sm text-gray-900">{index + 1}</div>
            </MslTableDataCell>
            <MslTableDataCell>
              <MslTeamItem team={stats.team} />
            </MslTableDataCell>
            <MslTableDataCell>{stats.played}</MslTableDataCell>
            <MslTableDataCell>{stats.won}</MslTableDataCell>
            <MslTableDataCell>{stats.draw}</MslTableDataCell>
            <MslTableDataCell>{stats.lost}</MslTableDataCell>
            <MslTableDataCell>{stats.goal_scored}</MslTableDataCell>
            <MslTableDataCell>{stats.goal_allowed}</MslTableDataCell>
            <MslTableDataCell>{stats.goal_diff}</MslTableDataCell>
            <MslTableDataCell>{stats.points}</MslTableDataCell>
          </tr>
        ))}
      </>
    </MslTable>
  )
}

export default MslStandings
