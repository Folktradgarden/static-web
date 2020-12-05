import React, { FC, ReactNode } from "react"
import { PageWrapperRoot } from "./styled"

type PageWrapperProps = {
  children?: ReactNode
  padding?: string
}

const PageWrapper: FC<PageWrapperProps> = ({ children, padding = "" }) => {
  return <PageWrapperRoot padding={padding}>{children}</PageWrapperRoot>
}

export default PageWrapper
