import { useAnimation, Variants } from "framer-motion"
import React, { FC, ReactNode, useEffect } from "react"
import { facebookUrl, instagramUrl } from "../../../constants"
import useViewport from "../../../hooks/useViewport"
import FacebookIcon from "../Icons/FacebookIcon"
import InstagramIcon from "../Icons/InstagramIcon"
import {
  Anchor,
  Container,
  DrawerBackground,
  IconContainer,
  LinkContainer,
} from "./styled"

type DrawerProps = {
  children?: ReactNode
  isOpen: boolean
  toggle: () => void
  animationDuration: number
  close: () => void
}

const Drawer: FC<DrawerProps> = ({
  isOpen,
  children,
  animationDuration,
  close,
}) => {
  const controls = useAnimation()

  const viewportSize = useViewport()
  const [viewportWidth] = viewportSize

  useEffect(() => {
    if (isOpen) {
      controls.start("open")
    } else {
      controls.start("closed")
    }
  }, [viewportWidth, isOpen])

  const backgroundVariants: Variants = {
    open: {
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      display: "block",
    },
    closed: {
      backgroundColor: "rgba(0, 0, 0, 0)",
      display: "none",
      transition: {
        display: {
          delay: animationDuration,
        },
        backgroundColor: {
          delay: animationDuration / 5,
        },
      },
    },
  }

  const containerVariants: Variants = {
    open: {
      width: viewportWidth < 576 ? "300px" : "576px",
    },
    closed: {
      width: "0px",
    },
  }

  return (
    <>
      <DrawerBackground
        initial={false}
        animate={controls}
        variants={backgroundVariants}
        transition={{
          type: "tween",
          duration: animationDuration,
        }}
        onClick={() => close()}
      />
      <Container
        initial={false}
        animate={controls}
        variants={containerVariants}
        transition={{
          duration: animationDuration,
          ease: "easeInOut",
        }}
      >
        <LinkContainer>{children}</LinkContainer>
        <IconContainer>
          <Anchor href={facebookUrl}>
            <FacebookIcon />
          </Anchor>
          <Anchor href={instagramUrl}>
            <InstagramIcon />
          </Anchor>
        </IconContainer>
      </Container>
    </>
  )
}

export default Drawer
