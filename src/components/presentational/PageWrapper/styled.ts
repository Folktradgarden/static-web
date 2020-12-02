import styled from "styled-components"
import { globalWidthBreakpoints } from "../../../styling/GlobalStyle"

type RootProps = {
  padding: string
}

export const PageWrapperRoot = styled.div<RootProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: ${({ padding }) => padding || "100px 1rem 1rem 1rem"};
  height: 100%;
  min-height: 800px;

  @media only screen and (min-width: ${globalWidthBreakpoints.lg}) {
    flex-direction: row;
  }
`
