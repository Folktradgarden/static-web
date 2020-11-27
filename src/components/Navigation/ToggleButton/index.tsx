import { Variants } from "framer-motion"
import React, { FC } from "react"
import LeafIcon from "../../presentational/LeafIcon"
import { ToggleButtonRoot } from "./styled"

type ToggleButtonProps = {
  isActive: boolean
  toggle: () => void
}

const ToggleButton: FC<ToggleButtonProps> = ({ isActive, toggle }) => {
  const variants: Variants = {
    active: {
      transform: "scale(-1, 1) rotate(225deg)",
    },
    inActive: {
      transform: "scale(-1, 1) rotate(45deg)",
    },
  }

  return (
    <ToggleButtonRoot
      initial={false}
      variants={variants}
      transition={{
        type: "spring",
        stiffness: 100,
        bounce: 0.5,
        duration: 1,
      }}
      animate={isActive ? "active" : "inActive"}
      onClick={() => toggle()}
    >
      <LeafIcon />
    </ToggleButtonRoot>
  )
}

export default ToggleButton
