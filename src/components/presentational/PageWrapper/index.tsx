import React, { FC, ReactNode } from "react"
import { PageWrapperRoot } from "./styled"

type PageWrapperProps = {
  children?: ReactNode
  justify?: boolean
  align?: boolean
  row?: boolean
  padding?: string
}

const PageWrapper: FC<PageWrapperProps> = ({
  children,
  justify = false,
  align = false,
  row = false,
  padding = "",
}) => {
  return (
    <PageWrapperRoot
      justify={justify}
      align={align}
      row={row}
      padding={padding}
    >
      {children}
    </PageWrapperRoot>
  )
}

export default PageWrapper
