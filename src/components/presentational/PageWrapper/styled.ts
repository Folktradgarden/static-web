import styled from "styled-components"

type RootProps = {
  justify: boolean
  align: boolean
  row: boolean
}

export const PageWrapperRoot = styled.div<RootProps>`
  display: flex;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  justify-content: ${({ justify }) => justify && "center"};
  align-items: ${({ align }) => align && "center"};
  box-sizing: border-box;
  padding: 5rem 1rem 1rem 1rem;
  height: 100%;
`
