import styled from "styled-components"
import { globalWidthBreakpoints } from "../../../styling/GlobalStyle"

export type PathColor =
  | "primary"
  | "onPrimary"
  | "accent"
  | "secondary"
  | "surface"

type PathProps = {
  color: PathColor
}

export type SVGSize = "normal" | "medium" | "large"

const SVGSizeMap = {
  normal: "24px",
  medium: "36px",
  large: "48px",
}

type SVGProps = {
  size: SVGSize
}

export const SVG = styled.svg<SVGProps>`
  height: ${({ size }) => SVGSizeMap[size]};
  width: ${({ size }) => SVGSizeMap[size]};
`

export const Path = styled.path<PathProps>`
  fill: ${({ theme, color }) => theme.colors[color]};
`
