import { Link } from "gatsby"
import React from "react"
import MslTeamItem from "components/msl/team/team-item"
import MslPlayerItem from "components/msl/player/player-item"
import MslTableDataCell from "components/msl/table/table-data-cell"
import MslTableHeaderCell from "components/msl/table/table-header-cell"
import MslTable from "components/msl/table/table"

const MslStatsPlayers = ({ data, playerColTitle }) => {
  return (
    <MslTable>
      <>
        <tr>
          <MslTableHeaderCell cssName="w-10">#</MslTableHeaderCell>
          <MslTableHeaderCell cssName="w-20">
            {playerColTitle}
          </MslTableHeaderCell>
          <MslTableHeaderCell cssName="w-20">Team</MslTableHeaderCell>
          <MslTableHeaderCell cssName="w-10">#</MslTableHeaderCell>
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
