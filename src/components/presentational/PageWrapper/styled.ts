import styled from "styled-components"
import { globalWidthBreakpoints } from "../../../styling/GlobalStyle"

type RootProps = {
  padding: string
  column: boolean
}

export const PageWrapperRoot = styled.div<RootProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  min-height: 800px;
  width: 100%;
  height: 100%;

  @media only screen and (min-width: ${globalWidthBreakpoints.lg}) {
    flex-direction: ${({ column }) => (column ? "column" : "row")};
    max-width: 1350px;
  }
`
