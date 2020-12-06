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
}

const Drawer: FC<DrawerProps> = ({ isOpen, children }) => {
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
          delay: 0.5,
        },
        backgroundColor: {
          delay: 0.1,
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
          duration: 0.5,
        }}
      />
      <Container
        initial={false}
        animate={controls}
        variants={containerVariants}
        transition={{
          duration: 0.5,
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
