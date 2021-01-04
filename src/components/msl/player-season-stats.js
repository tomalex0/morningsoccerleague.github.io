import { Link } from "gatsby"
import React from "react"
import MslTeamItem from "components/msl/team-item"
import MslTableDataCell from "components/msl/table-data-cell"
import MslTableHeaderCell from "components/msl/table-header-cell"
const MslPlayerSeasonStats = ({ seasons }) => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <MslTableHeaderCell>Season</MslTableHeaderCell>
                  <MslTableHeaderCell>Team</MslTableHeaderCell>
                  <MslTableHeaderCell>#Goals</MslTableHeaderCell>
                  <MslTableHeaderCell>Is FO</MslTableHeaderCell>
                  <MslTableHeaderCell>Is Mos</MslTableHeaderCell>
                  <MslTableHeaderCell>#Mom</MslTableHeaderCell>
                  <MslTableHeaderCell>#Assists</MslTableHeaderCell>
                  <MslTableHeaderCell>#Saves</MslTableHeaderCell>
                  <MslTableHeaderCell>#Yellow Cards</MslTableHeaderCell>
                  <MslTableHeaderCell>#Red Cards</MslTableHeaderCell>
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
                    <MslTableDataCell>
                      <MslTeamItem team={stats.team} />
                    </MslTableDataCell>
                    <MslTableDataCell>{stats.goals}</MslTableDataCell>
                    <MslTableDataCell>
                      {stats.isOwner ? "Yes" : "No"}
                    </MslTableDataCell>
                    <MslTableDataCell>
                      {stats.isMos ? "Yes" : "No"}
                    </MslTableDataCell>
                    <MslTableDataCell>{stats.mom}</MslTableDataCell>
                    <MslTableDataCell>{stats.assists}</MslTableDataCell>
                    <MslTableDataCell>{stats.saves}</MslTableDataCell>
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

export default MslPlayerSeasonStats
