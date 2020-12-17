import { graphql, useStaticQuery } from "gatsby"
import React, { FC, useState } from "react"
import { useCookies } from "react-cookie"
import { navigationCookie } from "../../../constants"
import Drawer from "../../presentational/Drawer"
import BinocularsIcon from "../../presentational/Icons/BinocularsIcon"
import BookIcon from "../../presentational/Icons/BookIcon"
import FlowerIcon from "../../presentational/Icons/FlowerIcon"
import HouseIcon from "../../presentational/Icons/HouseIcon"
import PaperPlaneIcon from "../../presentational/Icons/PaperPlaneIcon"
import VideoIcon from "../../presentational/Icons/VideoIcon"
import LeafButton from "../../presentational/LeafButton"
import NavigationLink, { SubPath } from "../../presentational/NavigationLink"
import NavHintOverlay from "../NavHintOverlay"

type LinkMeta = {
  name: string
  resource: string
  icon: (isActive: boolean) => JSX.Element
  subPaths?: SubPath[] | undefined
  defaultIsOpen: boolean
  fragment?: string
}

const links: LinkMeta[] = [
  {
    name: "Hem",
    resource: "/",
    fragment: "#start",
    icon: (isActive: boolean) => (
      <HouseIcon color={isActive ? "primary" : "accent"} />
    ),
    subPaths: [
      {
        to: "/#om-oss",
        text: "Om oss",
        icon: <VideoIcon />,
      },
      {
        to: "/#östgötapriset",
        text: "Östgötapriset",
        icon: <FlowerIcon />,
      },
    ],
    defaultIsOpen: true,
  },
  {
    name: "Hitta Oss",
    resource: "/hitta-oss",
    icon: (isActive: boolean) => (
      <BinocularsIcon color={isActive ? "primary" : "accent"} />
    ),
    defaultIsOpen: false,
  },
  {
    name: "Kontakt",
    resource: "/kontakt",
    icon: (isActive: boolean) => (
      <PaperPlaneIcon color={isActive ? "primary" : "accent"} />
    ),
    defaultIsOpen: false,
  },
]

type NavigationProps = {
  currentPath: string
}

const Navigation: FC<NavigationProps> = ({ currentPath }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [animationDuration] = useState<number>(0.5)
  const [cookies, setCookie] = useCookies([navigationCookie])
  const haveNavigated = cookies[navigationCookie] !== undefined

  const navToggle = () => {
    if (!haveNavigated) {
      setCookie(navigationCookie, 1, { sameSite: true })
    }
    setIsOpen(!isOpen)
  }

  return (
    <>
      <NavHintOverlay isActive={!haveNavigated} />
      <Drawer
        close={() => setIsOpen(false)}
        animationDuration={animationDuration}
        isOpen={isOpen}
        toggle={() => setIsOpen(!isOpen)}
      >
        {links.map((link: LinkMeta, index: number) => {
          return (
            <NavigationLink
              key={link.resource}
              to={link.resource + (link.fragment || "")}
              icon={link.icon(currentPath === link.resource)}
              text={link.name}
              subPaths={link.subPaths}
              defaultIsOpen={currentPath === link.resource}
              animationDelay={animationDuration}
              parentIsOpen={isOpen}
              closeParent={() => setIsOpen(false)}
              isActive={currentPath === link.resource}
            />
          )
        })}
      </Drawer>
      <LeafButton isActive={isOpen} toggle={() => navToggle()} />
    </>
  )
}

export default Navigation
