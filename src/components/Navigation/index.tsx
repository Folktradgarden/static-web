import React, { FC, useState } from "react"
import ToggleButton from "./ToggleButton"

const Navigation: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <ToggleButton isActive={isOpen} toggle={() => setIsOpen(!isOpen)} />
    </>
  )
}

export default Navigation
