import React, { FC, ReactNode } from "react"
import {
  Divider,
  Header,
  Hint,
  Paragraph,
  SignFoot,
  SignRoot,
  SignSurface,
} from "./styled"

type SignProps = {
  title?: string
  hint?: string
  animateTitle?: boolean
  children: ReactNode
}

const Sign: FC<SignProps> = ({
  title = "A title",
  hint,
  animateTitle = false,
  children,
}) => {
  return (
    <SignRoot>
      <SignSurface>
        <Header animate={animateTitle}>{title}</Header>
        <Paragraph>{children}</Paragraph>
        <Divider />
        <Hint animate>{hint}</Hint>
      </SignSurface>
      <SignFoot />
    </SignRoot>
  )
}

export default Sign
