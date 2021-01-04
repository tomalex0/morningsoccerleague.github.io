import { Link } from "gatsby"
import React from "react"
import MslTeamItem from "components/msl/team-item"
import MslTableDataCell from "components/msl/table-data-cell"
import MslTableHeaderCell from "components/msl/table-header-cell"
const MslStandings = ({ standings }) => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 ">
              <thead className="bg-gray-50">
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
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MslStandings
