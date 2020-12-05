import styled from "styled-components"
import { globalWidthBreakpoints } from "../../../styling/GlobalStyle"

export type PathColor = "primary" | "accent" | "secondary"

type PathProps = {
  color: PathColor
}

type SVGSize = "normal" | "large"

type SVGProps = {
  size: SVGSize
}

export const SVG = styled.svg<SVGProps>`
  height: ${({ size }) => (size === "normal" ? "24px" : "48px")};
  width: ${({ size }) => (size === "normal" ? "24px" : "48px")};

  @media only screen and (min-width: ${globalWidthBreakpoints.sm}) {
    height: ${({ size }) => (size === "normal" ? "36px" : "64px")};
    width: ${({ size }) => (size === "normal" ? "36px" : "64px")};
  }
`

export const Path = styled.path<PathProps>`
  fill: ${({ theme, color }) => theme.colors[color]};
`
