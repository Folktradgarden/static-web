import React, { FC, useState } from "react"
import Drawer from "../presentational/Drawer"
import LeafButton from "../presentational/LeafButton"

const Navigation: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <Drawer isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      <LeafButton isActive={isOpen} toggle={() => setIsOpen(!isOpen)} />
    </>
  )
}

export default Navigation
