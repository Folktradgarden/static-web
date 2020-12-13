import React, { FC, ReactNode, useEffect } from "react"
import useViewport from "../../../hooks/useViewport"
import GlobalStyle from "../../../styling/GlobalStyle"
import ThemeWrapper from "../../../styling/ThemeWrapper"
import Navigation from "../Navigation"
import SEO from "../SEO"

type LayoutProps = {
  path: string
  children?: ReactNode
}

const Layout: FC<LayoutProps> = ({ children, path }) => {
  return (
    <>
      <ThemeWrapper>
        <SEO path={path} />
        <GlobalStyle />
        <Navigation />
        {children}
      </ThemeWrapper>
    </>
  )
}

export default Layout
