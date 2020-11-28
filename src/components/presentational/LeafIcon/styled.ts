import styled from "styled-components"

type IconPathProps = {
  animate: boolean
}

export const IconPath = styled.path<IconPathProps>`
  fill: ${({ theme }) => theme.colors.primary};

  animation: ${({ animate }) =>
    animate ? "color-fill-frames 30s linear infinite" : "none"};
`
