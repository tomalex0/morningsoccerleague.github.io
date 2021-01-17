import { Link } from "gatsby"
import React from "react"
import MslLogo from "images/msl-logo-14.svg"
import { getInitials } from "graphql/lib/utility"

const MslPlayerItem = ({
  player,
  fontSize = "text-sm",
  imageWidth = "w-10",
  imageHeight = "h-10",
  playerNameCss = "font-medium text-dark-600 dark:text-dark-900",
  showImage = false,
}) => {
  const playerInitials = getInitials(player?.name)
  return (
    <div className="flex items-center">
      {showImage && (
        <div className={`flex-shrink-0 mr-2 ${imageWidth} ${imageHeight}`}>
          {/*<img*/}
          {/*  className={`${imageWidth} ${imageHeight} rounded-full`}*/}
          {/*  src={MslLogo}*/}
          {/*  alt=""*/}
          {/*/>*/}
          <div
            className={`${imageWidth} ${imageHeight} rounded-full flex items-center justify-center bg-light-800 dark:bg-dark-300 text-dark_alt dark:text-dark-900 uppercase`}
          >
            {playerInitials}
          </div>
        </div>
      )}
      <div>
        <div className={`${fontSize} ${playerNameCss}`}>
          {player && <Link to={player?.playerPath}>{player?.name} &rarr;</Link>}
        </div>
      </div>
    </div>
  )
}

export default MslPlayerItem
