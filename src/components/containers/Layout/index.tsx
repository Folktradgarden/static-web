import React, { FC, ReactNode, useEffect } from "react"
import { CookiesProvider } from "react-cookie"
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
        <CookiesProvider>
          <SEO path={path} />
          <GlobalStyle />
          <Navigation currentPath={path} />
          {children}
        </CookiesProvider>
      </ThemeWrapper>
    </>
  )
}

export default Layout
