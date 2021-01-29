import React from "react"
// import { getImage } from "gatsby-plugin-image"

const MslTeamImg = ({ team, className }) => {
  // const img = team?.imagedata
  const publicImgUrl = team?.image?.publicURL
  // <img className={className} src={publicImgUrl} alt={team.teamName} />
  // const imageData = getImage(img)
  return (
    <div
      className={`${className} bg-dark_alt overflow-hidden ring-1 ring-light-800 dark:ring-dark-900`}
    >
      <img src={publicImgUrl} alt={team.teamName} />
    </div>
  )
}

export default MslTeamImg
