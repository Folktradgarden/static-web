import React, { FC } from "react"
import { IconPath } from "./styled"

type LeafIconProps = {
  animate?: boolean
}

const LeafIcon: FC<LeafIconProps> = ({ animate = false }) => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 469.333 469.333">
      <IconPath
        animate={animate}
        fill="#498000"
        d="M468.527 6.592A10.668 10.668 0 00458.671 0C44.804 0 .004 171.563.004 245.333c0 95.701 72.875 160 181.333 160 136.981 0 165.675-130.347 181.077-200.384A361.214 361.214 0 01466.201 18.197a10.667 10.667 0 002.326-11.605z"
      />
      <IconPath
        animate={animate}
        fill="#498000"
        d="M10.671 469.333c-5.891 0-10.667-4.776-10.667-10.667 0-63.424 109.973-266.923 283.349-350.933 5.302-2.568 11.682-.353 14.251 4.949 2.568 5.302.353 11.682-4.949 14.251C117.572 211.776 21.337 408.811 21.337 458.667c0 5.891-4.775 10.666-10.666 10.666z"
      />
    </svg>
  )
}

export default LeafIcon
