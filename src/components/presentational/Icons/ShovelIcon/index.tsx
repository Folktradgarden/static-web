import React, { FC } from "react"
import { PathColor, Path, SVG } from "../styled"

type ShovelIconProps = {
  color?: PathColor
}

const ShovelIcon: FC<ShovelIconProps> = ({ color = "primary" }) => {
  return (
    <SVG
      size="normal"
      viewBox="0 0 512 512"
      style={{ transform: "rotate(90deg)" }}
    >
      <Path
        color={color}
        d="M506.359 19.792a16.57 16.57 0 00-14.151-14.151C454.149.375 338.185-11.573 295.662 30.951l-73.777 73.777c-6.473 6.473-6.473 16.967 0 23.44l57.534 57.534 50.695-50.695c12.945-12.946 33.934-12.946 46.88 0s12.945 33.934 0 46.88l-50.695 50.695 57.533 57.534c6.473 6.473 16.967 6.473 23.44 0l73.777-73.776c42.524-42.526 30.577-158.489 25.31-196.548z"
      />
      <Path
        color={color}
        d="M9.709 455.411c-12.946 12.945-12.946 33.934 0 46.88 12.945 12.946 33.934 12.946 46.88 0l269.71-269.71-46.88-46.88z"
      />
    </SVG>
  )
}

export default ShovelIcon
