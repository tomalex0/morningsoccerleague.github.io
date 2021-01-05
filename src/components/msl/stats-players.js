import { Link } from "gatsby"
import React from "react"
import MslTeamItem from "components/msl/team-item"
import MslPlayerItem from "components/msl/player-item"
import MslTableDataCell from "components/msl/table-data-cell"
import MslTableHeaderCell from "components/msl/table-header-cell"
import MslTable from "components/msl/table"

const MslStatsPlayers = ({ data, playerColTitle }) => {
  return (
    <MslTable>
      <>
        <tr>
          <MslTableHeaderCell>#</MslTableHeaderCell>
          <MslTableHeaderCell>{playerColTitle}</MslTableHeaderCell>
          <MslTableHeaderCell>Team</MslTableHeaderCell>
          <MslTableHeaderCell>#</MslTableHeaderCell>
        </tr>
      </>
      <>
        {data.map((stats, index) => (
          <tr>
            <MslTableDataCell>{index + 1}</MslTableDataCell>
            <MslTableDataCell>
              <MslPlayerItem player={stats} />
            </MslTableDataCell>
            <MslTableDataCell>
              {stats.team && <MslTeamItem team={stats.team} />}
            </MslTableDataCell>
            <MslTableDataCell>{stats.count}</MslTableDataCell>
          </tr>
        ))}
      </>
    </MslTable>
  )
}

export default MslStatsPlayers
