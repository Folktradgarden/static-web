import React, { FC, ReactNode, useEffect } from "react"
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
    if (typeof window !== undefined) {
      calculateViewportHeight()
    }
  }, [])

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
