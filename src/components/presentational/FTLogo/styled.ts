import styled from "styled-components"

export const FTLogoRoot = styled.div`
  width: 90%;
`

type LeafPathProps = {
  animate: boolean
}

export const LeafPath = styled.path<LeafPathProps>`
  fill: ${({ theme }) => theme.colors.primary};

  animation: ${({ animate }) =>
    animate ? "color-fill-frames 30s linear infinite" : "none"};
`

export const FilledPath = styled.path`
  fill: ${({ theme }) => theme.colors.secondary};
`

export const StrokedPath = styled.path`
  stroke: ${({ theme }) => theme.colors.secondary};
  fill: ${({ theme }) => theme.colors.surface};
`
