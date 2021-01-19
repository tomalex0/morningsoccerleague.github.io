import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

const MslTeamImg = ({ team, className }) => {
  const img = team?.imagedata
  const publicImgUrl = team?.image?.publicURL
  // <img className={className} src={publicImgUrl} alt={team.teamName} />
  const imageData = getImage(img)
  return (
    <GatsbyImage image={imageData} alt={team.teamName} className={className} />
  )
}

export default MslTeamImg
