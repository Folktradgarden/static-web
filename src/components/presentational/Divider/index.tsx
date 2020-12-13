import styled from "styled-components"

export const Divider = styled.div`
  height: 0;
  width: 100%;
  border-top: solid
    ${({ theme }) => `${theme.border.width} ${theme.colors.accent}`};
  margin: 1rem 0;
`
