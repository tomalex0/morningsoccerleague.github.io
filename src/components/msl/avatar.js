import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

const MslAvatar = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          gatsbyImageData(maxWidth: 300, layout: FLUID, placeholder: TRACED_SVG)
        }
      }
    }
  `)
  const imageData = getImage(data.placeholderImage)
  if (!imageData) {
    return <div>Picture not found</div>
  }

  return <GatsbyImage image={imageData} alt={"Astronaut"} />
}

export default MslAvatar
