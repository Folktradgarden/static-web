import React, { FC } from "react"
import { Img } from "./styled"

type ImageProps = {
  src: string
  alt: string
}

const Image: FC<ImageProps> = ({ src, alt }) => {
  return <Img src={src} alt={alt} />
}

export default Image
