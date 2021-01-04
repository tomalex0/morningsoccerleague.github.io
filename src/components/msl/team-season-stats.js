import { Link } from "gatsby"
import React from "react"
import MslTableDataCell from "components/msl/table-data-cell"
import MslTableHeaderCell from "components/msl/table-header-cell"
const MslTeamSeasonStats = ({ seasons }) => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
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
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MslTeamSeasonStats
