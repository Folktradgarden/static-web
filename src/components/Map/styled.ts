import styled from "styled-components"

export const MapRoot = styled.div`
  height: 100%;
  border-top: ${({ theme }) =>
    `solid ${theme.border.width} ${theme.colors.secondary}`};
  box-sizing: border-box;
`
