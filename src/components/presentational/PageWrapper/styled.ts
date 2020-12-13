import styled from "styled-components"
import { globalWidthBreakpoints } from "../../../styling/GlobalStyle"

type RootProps = {
  padding: string
  column: boolean
}

export const PageWrapperRoot = styled.div<RootProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
`
