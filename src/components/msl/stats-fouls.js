import { Link } from "gatsby"
import React from "react"
import MslTeamItem from "components/msl/team-item"
import MslTableDataCell from "components/msl/table-data-cell"
import MslTableHeaderCell from "components/msl/table-header-cell"
const MslStatsFouls = ({ fouls }) => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <MslTableHeaderCell>Teams</MslTableHeaderCell>
                  <MslTableHeaderCell>#Fouls</MslTableHeaderCell>
                  <MslTableHeaderCell>#Matches</MslTableHeaderCell>
                  <MslTableHeaderCell>AVG</MslTableHeaderCell>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MslStatsFouls
