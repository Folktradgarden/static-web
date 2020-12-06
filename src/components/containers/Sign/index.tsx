import React, { FC, ReactNode } from "react"
import ReactPlayer from "react-player"
import {
  Divider,
  Paragraph,
  ParagraphContainer,
  SignFoot,
  SignRoot,
  SignSurface,
} from "./styled"

type SignProps = {
  title?: ReactNode
  hint?: ReactNode
  children?: ReactNode
  divider?: boolean
}

const Sign: FC<SignProps> = ({ title, hint, children, divider = false }) => {
  return (
    <SignRoot>
      <SignSurface>
        {title}
        {children && (
          <ParagraphContainer>
            <Paragraph>{children}</Paragraph>
          </ParagraphContainer>
        )}
        {divider && <Divider />}
        {hint}
      </SignSurface>
      <SignFoot />
    </SignRoot>
  )
}

export default Sign
