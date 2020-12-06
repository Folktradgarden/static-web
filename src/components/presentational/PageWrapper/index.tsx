import React, { FC, ReactNode } from "react"
import { PageWrapperRoot } from "./styled"

type PageWrapperProps = {
  children?: ReactNode
  padding?: string
  column?: boolean
}

const PageWrapper: FC<PageWrapperProps> = ({
  children,
  padding = "",
  column = false,
}) => {
  return (
    <PageWrapperRoot column={column} padding={padding}>
      {children}
    </PageWrapperRoot>
  )
}

export default PageWrapper
