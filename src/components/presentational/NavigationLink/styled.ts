import { Link } from "gatsby"
import styled from "styled-components"
import { globalWidthBreakpoints } from "../../../styling/GlobalStyle"

export const StyledGatsbyLink = styled(Link)`
  text-decoration: none;
  padding: 0;
  margin: 0;
`

export const NavigationLinkRoot = styled.div`
  display: flex;
  padding: 0 10px;
  box-sizing: border-box;
  margin-bottom: 0.5rem;
  background-color: ${({ theme }) => theme.colors.background};

  @media only screen and (min-width: ${globalWidthBreakpoints.sm}) {
    margin-bottom: 0.7rem;
  }
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  min-width: 36px;
  height: 46px;
  padding: 10px 0;
  box-sizing: border-box;

  @media only screen and (min-width: ${globalWidthBreakpoints.sm}) {
    height: 64px;
  }
`

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  height: 46px;
  margin-left: 10px;
  padding-top: 7px;
  box-sizing: border-box;

  @media only screen and (min-width: ${globalWidthBreakpoints.sm}) {
    height: 64px;
    padding-top: 12px;
    margin-left: 20px;
  }
`

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
  font-size: 24px;
  text-transform: uppercase;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media only screen and (min-width: ${globalWidthBreakpoints.sm}) {
    font-size: 36px;
  }
`
