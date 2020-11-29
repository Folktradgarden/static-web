import { Variants } from "framer-motion"
import React, { FC, ReactNode } from "react"
import { Container, DrawerBackground, LinkContainer } from "./styled"

type DrawerProps = {
  children?: ReactNode
  isOpen: boolean
  toggle: () => void
}

const Drawer: FC<DrawerProps> = ({ isOpen, toggle, children }) => {
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
      },
    },
  }

  const containerVariants: Variants = {
    open: {
      width: "70%",
    },
    closed: {
      width: "0",
    },
  }

  return (
    <>
      <DrawerBackground
        initial={true}
        animate={isOpen ? "open" : "closed"}
        variants={backgroundVariants}
        transition={{
          type: "tween",
          duration: 0.5,
        }}
      />
      <Container
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={containerVariants}
        transition={{
          type: "spring",
          duration: 1,
        }}
      >
        <LinkContainer>{children}</LinkContainer>
      </Container>
    </>
  )
}

export default Drawer
