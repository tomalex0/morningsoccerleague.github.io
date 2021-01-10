import { Link } from "gatsby"
import React from "react"

const MslLazyFrame = ({
  src,
  width = "100%",
  height = "100%",
  className = "",
}) => {
  return (
    <iframe
      src={src}
      width={width}
      height={height}
      className={`object-cover w-full ${className}`}
      scrolling="no"
      frameBorder={0}
      allowTransparency="true"
    />
  )
}

export default MslLazyFrame
