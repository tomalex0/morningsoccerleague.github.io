import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Image = () => {
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

  return <GatsbyImage image={imageData} />
}

export default Image
