import React, { FC } from "react"
import { PathColor, Path, SVG } from "../styled"

type PaperPlaneIconProps = {
  color?: PathColor
}

const PaperPlaneIcon: FC<PaperPlaneIconProps> = ({ color = "primary" }) => {
  return (
    <SVG size="normal" viewBox="0 0 265.44 265.44">
      <Path
        color={color}
        d="M252.639 97.175L20.543 5.064C5.754-.81-3.019 6.924.957 22.333l57.752 223.975c3.976 15.409 17.84 20.614 30.975 11.634l60.145-41.157 45.77 38.791c12.135 10.296 21.979 5.738 21.979-10.176v-83.109l40.222-35.43c11.939-10.524 9.633-23.812-5.161-29.686zm-94.444 92.078L32.118 40.663l158.5 118.876-32.423 29.714z"
      />
    </SVG>
  )
}

export default PaperPlaneIcon
