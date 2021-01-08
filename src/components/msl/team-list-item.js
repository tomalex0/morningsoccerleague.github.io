import { Link } from "gatsby"
import React from "react"
import MslLogo from "images/msl-logo-14.svg"
import MslTeamStatsItem from "components/msl/team-stats-item"
const cssName = "mt-4 grid grid-cols-2 md:grid-cols-2 gap-4"
const MslTeamListItem = ({ team }) => {
  return (
    <Link to={team.teamPath}>
      <div className="pt-5 pb-2 px-2 bg-gray-100  dark:bg-gray-800  rounded-xl shadow-md space-y-2 sm:py-3 sm:flex sm:items-center sm:space-y-0 rounded-b-none">
        <img
          className="block mx-auto h-14 rounded-full sm:mx-0 sm:flex-shrink-0"
          src={team.image.publicURL}
          alt={team.teamName}
        />
        <div className="text-center ml-2 space-y-2 sm:text-left">
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