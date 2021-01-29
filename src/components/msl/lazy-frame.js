import React from "react"

const MslLazyFrame = ({
  src,
  width = "100%",
  height = "100%",
  className = "",
  scrolling = "no",
  title,
}) => {
  return (
    <iframe
      src={src}
      width={width}
      height={height}
      className={`object-cover w-full ${className}`}
      scrolling={scrolling}
      frameBorder={0}
      allowTransparency="true"
      title={title}
    />
  )
}

export default MslLazyFrame
