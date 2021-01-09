import { Link } from "gatsby"
import React from "react"
import MslLogo from "images/msl-logo-14.svg"
import MslTeamStatsItem from "components/msl/team-stats-item"
const cssName = "mt-4 grid grid-cols-2 md:grid-cols-2 gap-4"
const MslTeamListItem = ({ team }) => {
  return (
    <Link to={team.teamPath}>
      <div className="px-3 bg-gray-200  dark:bg-gray-800  rounded-xl shadow-md space-y-2 py-3 flex items-center space-y-0 rounded-b-none">
        <img
          className="block  h-14 rounded-full mx-0 flex-shrink-0"
          src={team.image.publicURL}
          alt={team.teamName}
        />
        <div className="text-center ml-2 space-y-2 text-left">
          <div className="space-y-0.5">
            <div className="text-sm md:text-md text-black dark:text-white font-semibold">
              {team.teamName} &rarr;
            </div>
          </div>
        </div>
      </div>
      <div className=" px-4 pb-4 bg-white dark:bg-gray-600 rounded-xl shadow-md overflow-hidden md:max-w-2xl rounded-t-none">
        <MslTeamStatsItem
          stats={team.teamStats.allseasonStats}
          cssName={cssName}
        />
      </div>
    </Link>
  )
}

export default MslTeamListItem
