import { Variants } from "framer-motion"
import React, { FC } from "react"
import LeafIcon from "../LeafIcon"
import { LeafButtonRoot } from "./styled"

type LeafButtonProps = {
  isActive: boolean
  toggle: () => void
}

const LeafButton: FC<LeafButtonProps> = ({ isActive, toggle }) => {
  const variants: Variants = {
    active: {
      transform: "scale(-1, 1) rotate(225deg)",
    },
    inActive: {
      transform: "scale(-1, 1) rotate(45deg)",
    },
  }

  return (
    <LeafButtonRoot
      initial={false}
      variants={variants}
      transition={{
        type: "spring",
        stiffness: 100,
        bounce: 0.5,
        duration: 0.5,
      }}
      animate={isActive ? "active" : "inActive"}
      onClick={() => toggle()}
    >
      <LeafIcon />
    </LeafButtonRoot>
  )
}

export default LeafButton
