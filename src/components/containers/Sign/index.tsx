import React, { FC, ReactNode } from "react"
import LeafIcon from "../../presentational/LeafIcon"
import {
  Divider,
  Hint,
  IconContainer,
  Paragraph,
  ParagraphContainer,
  SignFoot,
  SignRoot,
  SignSurface,
  Title,
} from "./styled"

type SignProps = {
  title?: string
  hint: string[]
  children?: ReactNode
  divider?: boolean
}

const Sign: FC<SignProps> = ({ title, hint, children, divider = false }) => {
  return (
    <SignRoot>
      <SignSurface>
        {title && <Title animate={false}>{title}</Title>}
        {children && (
          <ParagraphContainer>
            <Paragraph>{children}</Paragraph>
          </ParagraphContainer>
        )}
        {divider && <Divider />}
        <Hint animate={false}>
          {`${hint[0]} `}
          <IconContainer>
            <LeafIcon />
          </IconContainer>{" "}
          {` ${hint[1]}`}
        </Hint>
      </SignSurface>
      <SignFoot />
    </SignRoot>
  )
}

export default Sign
