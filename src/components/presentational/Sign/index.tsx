import React, { FC, ReactNode } from "react"
import ReactPlayer from "react-player"
import { Divider, Paragraph, SignFoot, SignRoot, SignSurface } from "./styled"

type SignProps = {
  videoUrl?: string
  title?: ReactNode
  hint?: ReactNode
  children?: ReactNode
  divider?: boolean
}

const Sign: FC<SignProps> = ({
  title,
  hint,
  children,
  videoUrl,
  divider = false,
}) => {
  return (
    <SignRoot>
      <SignSurface>
        {title}
        {!videoUrl && children && <Paragraph>{children}</Paragraph>}
        {videoUrl && (
          <ReactPlayer
            style={{ flex: "1" }}
            width="100%"
            height="auto"
            url={videoUrl}
          />
        )}
        {divider && <Divider />}
        {hint}
      </SignSurface>
      <SignFoot />
    </SignRoot>
  )
}

export default Sign
