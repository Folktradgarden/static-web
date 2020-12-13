import React, { FC } from "react"
import { Path, PathColor, SVG, SVGSize } from "../styled"

type VideoIconProps = {
  color?: PathColor
  size?: SVGSize
}

const VideoIcon: FC<VideoIconProps> = ({
  color = "primary",
  size = "normal",
}) => {
  return (
    <SVG size={size} viewBox="0 -87 432 432">
      <Path
        color={color}
        d="M278.906 0H30C13.437.02.02 13.438 0 30v197.422c.02 16.562 13.438 29.98 30 30h248.906c16.559-.02 29.98-13.438 30-30V30c-.02-16.563-13.441-29.98-30-30zm0 0M328.906 169.8L432 226.087V31.98L328.906 88.266zm0 0"
      />
    </SVG>
  )
}

export default VideoIcon
