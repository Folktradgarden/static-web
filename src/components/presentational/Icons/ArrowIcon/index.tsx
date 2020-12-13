import React, { FC } from "react"
import { PathColor, Path, SVG, SVGSize } from "../styled"

type ArrowIconProps = {
  color?: PathColor
  size?: SVGSize
}

const ArrowIcon: FC<ArrowIconProps> = ({
  color = "primary",
  size = "normal",
}) => {
  return (
    <SVG size={size} viewBox="0 0 256 256">
      <Path
        color={color}
        d="M225.813 48.907L128 146.72 30.187 48.907 0 79.093 128 207.093 256 79.093z"
      />
    </SVG>
  )
}

export default ArrowIcon
