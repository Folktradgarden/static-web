import styled from "styled-components"
import { globalWidthBreakpoints } from "../styling/GlobalStyle"

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 35%;
  width: 100%;

  @media only screen and (min-width: ${globalWidthBreakpoints.lg}) {
    width: 50%;
    height: 50%;
  }
`

export const SignContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  width: 100%;

  @media only screen and (min-width: ${globalWidthBreakpoints.lg}) {
    height: 60%;
  }
`

type HeaderProps = {
  animate: boolean
}

export const Title = styled.h2<HeaderProps>`
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;

  animation: ${({ animate }) =>
    animate ? "color-text-frames 30s linear" : "none"};
`

type HintProps = {
  animate: boolean
}

export const Hint = styled.p<HintProps>`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
  animation: ${({ animate }) =>
    animate ? "color-text-frames 30s linear" : "none"};
  text-transform: uppercase;
  margin-top: 1rem;

  @media only screen and (min-width: ${globalWidthBreakpoints.md}) {
    font-size: 2rem;
  }
`

export const IconContainer = styled.div`
  display: inline-block;
  width: 1.2rem;
`
