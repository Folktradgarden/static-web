import { Variants } from "framer-motion"
import React, { FC } from "react"
import { Overlay } from "./styled"

type NavHintOverlayProps = {
  isActive: boolean
}

const NavHintOverlay: FC<NavHintOverlayProps> = ({ isActive = true }) => {
  const variants: Variants = {
    visible: {
      opacity: 1,
      display: "block",
      transition: {
        opacity: {
          delay: 2,
          duration: 0.5,
        },
        display: {
          delay: 2,
          duration: 0,
        },
      },
    },
    invisible: {
      opacity: 0,
      display: "none",
      transition: {
        opacity: {
          duration: 0.5,
        },
        display: {
          delay: 0.5,
          duration: 0,
        },
      },
    },
  }

  console.log(isActive)

  return (
    <Overlay
      initial={isActive ? "invisible" : false}
      animate={isActive ? "visible" : "invisible"}
      variants={variants}
    ></Overlay>
  )
}

export default NavHintOverlay
