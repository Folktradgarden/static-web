import React, { FC, ReactNode, useEffect, useRef } from "react"
import useViewport from "../../../hooks/useViewport"
import GlobalStyle from "../../../styling/GlobalStyle"
import ThemeWrapper from "../../../styling/ThemeWrapper"
import { calculateViewportHeight } from "../../../utils/style-utils"
import Navigation from "../Navigation"

type LayoutProps = {
  children?: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const viewportSize = useViewport()

  useEffect(() => {
    if (typeof window !== undefined) {
      calculateViewportHeight()
    }
  }, [])

  return (
    <>
      <ThemeWrapper>
        <GlobalStyle />
        <Navigation />
        {children}
      </ThemeWrapper>
    </>
  )
}

export default Layout
