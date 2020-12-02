import React, { FC, useState } from "react"
import Drawer from "../presentational/Drawer"
import BinocularsIcon from "../presentational/Icons/BinocularsIcon"
import BookIcon from "../presentational/Icons/BookIcon"
import HouseIcon from "../presentational/Icons/HouseIcon"
import PaperPlaneIcon from "../presentational/Icons/PaperPlaneIcon"
import ShovelIcon from "../presentational/Icons/ShovelIcon"
import LeafButton from "../presentational/LeafButton"
import NavigationLink from "../presentational/NavigationLink"

const Navigation: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <Drawer isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
        <NavigationLink to="/" icon={<HouseIcon />}>
          Hem
        </NavigationLink>
        <NavigationLink to="/vår-berättelse" icon={<BookIcon />}>
          Vår berättelse
        </NavigationLink>
        <NavigationLink to="/projekt" icon={<ShovelIcon />}>
          Projekt
        </NavigationLink>
        <NavigationLink to="/hitta-oss" icon={<BinocularsIcon />}>
          Hitta oss
        </NavigationLink>
        <NavigationLink to="/kontakt" icon={<PaperPlaneIcon />}>
          Kontakt
        </NavigationLink>
      </Drawer>
      <LeafButton isActive={isOpen} toggle={() => setIsOpen(!isOpen)} />
    </>
  )
}

export default Navigation
