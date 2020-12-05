import styled from "styled-components"
import { globalWidthBreakpoints } from "../../../styling/GlobalStyle"

export const SignRoot = styled.div`
  position: relative;
  height: 100%;
  width: 95%;
  box-sizing: border-box;
`

export const SignSurface = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  top: 5%;
  right: 0;
  left: 0;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 1rem;
  border: solid
    ${({ theme }) => `${theme.border.width} ${theme.colors.secondary}`};

  @media only screen and (min-width: ${globalWidthBreakpoints.sm}) {
    top: 10%;
    min-height: 45%;
  }

  @media only screen and (min-width: ${globalWidthBreakpoints.md}) {
    top: 10%;
    left: 10%;
    right: 10%;
    min-height: 45%;
  }

  @media only screen and (min-width: ${globalWidthBreakpoints.lg}) {
    top: 15%;
    left: 5%;
    right: 5%;
    border-width: 4px;
  }
`

export const SignFoot = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%) skew(-2deg, 2deg);
  width: 15%;
  background-color: ${({ theme }) => theme.colors.secondary};

  @media only screen and (min-width: ${globalWidthBreakpoints.sm}) {
    top: 5%;
  }

  @media only screen and (min-width: ${globalWidthBreakpoints.lg}) {
    top: 10%;
    bottom: 0;
  }
`

export const ParagraphContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 0 1rem 0 0;
`

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.onSurface};
  font-size: 1.3rem;

  @media only screen and (min-width: ${globalWidthBreakpoints.sm}) {
    font-size: 2rem;
  }

  @media only screen and (min-width: ${globalWidthBreakpoints.lg}) {
    font-size: min(2vw, 2rem);
  }
`

export const Divider = styled.div`
  width: 100%;
  height: 0;
  border-top: solid
    ${({ theme }) => `${theme.border.width} ${theme.colors.secondary}`};
  margin: 0.5rem 0 0.7rem 0;
`
