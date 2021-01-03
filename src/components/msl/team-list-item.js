import { Link } from "gatsby"
import React from "react"
import MslLogo from "images/msl-logo-14.svg"

const MslTeamListItem = ({ team }) => {
  return (
    <div className="py-8 px-2 bg-white  dark:bg-gray-800  rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 ">
      <img
        className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0"
        src={MslLogo}
        alt={team.teamName}
      />
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <Link
            to={team.teamPath}
            className="text-sm md:text-md text-black dark:text-white font-semibold"
          >
            {team.teamName}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MslTeamListItem
