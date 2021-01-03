import { Link } from "gatsby"
import React from "react"

const MslPlayerItem = ({ player }) => {
  return (
    <div className="flex items-center">
      {/*<div className="flex-shrink-0 h-10 w-10">*/}
      {/*  <img*/}
      {/*    className="h-10 w-10 rounded-full"*/}
      {/*    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"*/}
      {/*    alt=""*/}
      {/*  />*/}
      {/*</div>*/}
      <div className="ml-4">
        <div className="text-sm font-medium text-gray-900">
          <Link to={player.playerPath}>{player.name}</Link>
        </div>
      </div>
    </div>
  )
}

export default MslPlayerItem
