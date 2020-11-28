import React, { FC, ReactNode } from "react"
import { PageWrapperRoot } from "./styled"
import Footer from "components/Footer";

type PageWrapperProps = {
  children?: ReactNode
  justify?: boolean
  align?: boolean
  row?: boolean
}

const PageWrapper: FC<PageWrapperProps> = ({
  children,
  justify = false,
  align = false,
  row = false,
}) => {
  return (
    <>
      <PageWrapperRoot justify={justify} align={align} row={row}>
        {children}
      </PageWrapperRoot>
      <Footer></Footer>
    </>
  )
}

export default PageWrapper
