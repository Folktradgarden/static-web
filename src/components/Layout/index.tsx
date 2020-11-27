import React, { FC, ReactNode } from "react"
import GlobalStyle from "../../styling/GlobalStyle"
import ThemeWrapper from "../../styling/ThemeWrapper"
import Navigation from "../Navigation"

type LayoutProps = {
  children?: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
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
