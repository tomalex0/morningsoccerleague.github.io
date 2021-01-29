import React from "react"
import MslTeamItem from "components/msl/team/team-item"
import MslTableDataCell from "components/msl/table/table-data-cell"
import MslTableHeaderCell from "components/msl/table/table-header-cell"
import MslTable from "components/msl/table/table"
const MslStatsFouls = ({ fouls }) => {
  return (
    <MslTable>
      <>
        <tr>
          <MslTableHeaderCell>Teams</MslTableHeaderCell>
          <MslTableHeaderCell>#Fouls</MslTableHeaderCell>
          <MslTableHeaderCell>#Matches</MslTableHeaderCell>
          <MslTableHeaderCell>AVG</MslTableHeaderCell>
        </tr>
      </>
      <>
        {fouls.map((stats, index) => (
          <tr>
            <MslTableDataCell>
              <MslTeamItem team={stats.team} />
            </MslTableDataCell>
            <MslTableDataCell>{stats.fouls}</MslTableDataCell>
            <MslTableDataCell>{stats.matches}</MslTableDataCell>
            <MslTableDataCell>{stats.foulAvg}</MslTableDataCell>
          </tr>
        ))}
      </>
    </MslTable>
  )
}

export default MslStatsFouls
