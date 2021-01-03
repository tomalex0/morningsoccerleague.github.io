import { Link } from "gatsby"
import React from "react"
import MslLogo from "images/msl-logo-14.svg"

const MslPlayerItem = ({
  player,
  fontSize = "text-sm",
  imageWidth = "w-10",
  imageHeight = "h-10",
  showImage = false,
}) => {
  return (
    <div className="flex items-center">
      {showImage && (
        <div className={`flex-shrink-0 mr-2 ${imageWidth} ${imageHeight}`}>
          <img
            className={`${imageWidth} ${imageHeight} rounded-full`}
            src={MslLogo}
            alt=""
          />
        </div>
      )}
      <div>
        <div className={`${fontSize} font-medium text-gray-900`}>
          <Link to={player.playerPath}>{player.name}</Link>
        </div>
      </div>
    </div>
  )
}

export default MslPlayerItem
