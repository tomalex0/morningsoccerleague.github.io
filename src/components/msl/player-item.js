import { Link } from "gatsby"
import React from "react"
import MslLogo from "images/msl-logo-14.svg"

const MslPlayerItem = ({ player }) => {
  return (
    <div className="flex items-center">
      <div className="flex-shrink-0 h-10 w-10">
        <img className="h-10 w-10 rounded-full" src={MslLogo} alt="" />
      </div>
      <div className="ml-4">
        <div className="text-sm font-medium text-gray-900">
          <Link to={player.playerPath}>{player.name}</Link>
        </div>
      </div>
    </div>
  )
}

export default MslPlayerItem
