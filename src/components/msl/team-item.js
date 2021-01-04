import { Link } from "gatsby"
import React from "react"

const MslTeamItem = ({ team }) => {
  return (
    <div className="flex items-center">
      <div className="flex-shrink-0 h-10 w-10">
        <img
          className="h-10 w-10 rounded-full"
          src={team.image.publicURL}
          alt={team.teamName}
        />
      </div>
      <div className="ml-1">
        <div className="text-sm font-medium text-gray-900">
          <Link to={team.teamPath}>{team.teamName}</Link>
        </div>
      </div>
    </div>
  )
}

export default MslTeamItem
