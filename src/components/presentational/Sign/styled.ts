import styled from "styled-components"

export const SignRoot = styled.div`
  position: relative;
  height: 100%;
  width: 95%;
  padding: 3rem 0;
  box-sizing: border-box;
`

export const SignSurface = styled.div`
  position: absolute;
  z-index: 1;
  top: 10%;
  background-color: ${({ theme }) => theme.colors.surface};
  transform: skew(1deg, -1deg);
  padding: 1rem;
  border: solid
    ${({ theme }) => `${theme.border.width} ${theme.colors.secondary}`};
`

export const SignFoot = styled.div`
  position: absolute;
  z-index: 0;
  top: 5%;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%) skew(-1deg, 1deg);
  width: 15%;
  background-color: ${({ theme }) => theme.colors.secondaryDark};
`
type HeaderProps = {
  animate: boolean
}

export const Header = styled.h2<HeaderProps>`
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;

  animation: ${({ animate }) =>
    animate ? "color-text-frames 30s linear" : "none"};
`

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.onSurface};
  font-size: 1.2rem;
`

export const Divider = styled.div`
  width: 100%;
  height: 0;
  border-top: solid 1px ${({ theme }) => theme.colors.secondary};
  margin: 0.5rem 0 0.7rem 0;
`
type HintProps = {
  animate: boolean
}

export const Hint = styled.h4<HintProps>`
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  animation: ${({ animate }) =>
    animate ? "color-text-frames 30s linear" : "none"};
  padding: 0 30% 0 0;
`
