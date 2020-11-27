import React, { FC, ReactNode } from "react"
import { ThemeProvider } from "styled-components"
import LightTheme from "../Themes/LightTheme"

type ThemeWrapperProps = {
  children: ReactNode
}

const ThemeWrapper: FC<ThemeWrapperProps> = ({ children }) => {
  return <ThemeProvider theme={LightTheme}>{children}</ThemeProvider>
}

export default ThemeWrapper
