import React, { FC, ReactNode, useEffect } from "react"
import useViewport from "../../../hooks/useViewport"
import GlobalStyle from "../../../styling/GlobalStyle"
import ThemeWrapper from "../../../styling/ThemeWrapper"
import { calculateViewportHeight } from "../../../utils/style-utils"
import Navigation from "../Navigation"
import SEO from "../SEO"

type LayoutProps = {
  path: string
  children?: ReactNode
}

const Layout: FC<LayoutProps> = ({ children, path }) => {
  useEffect(() => {
    calculateViewportHeight()
  }, [])

  return (
    <>
      <ThemeWrapper>
        <SEO path={path} />
        <GlobalStyle />
        <Navigation currentPath={path} />
        {children}
      </ThemeWrapper>
    </>
  )
}

export default Layout
