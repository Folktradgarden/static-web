import styled from "styled-components"

export const SignRoot = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 3rem 1rem 0 1rem;
  box-sizing: border-box;
`

export const SignSurface = styled.div`
  position: absolute;
  z-index: 1;
  top: 15%;
  background-color: ${({ theme }) => theme.colors.surface};
  transform: skew(1deg, -1deg);
  padding: 1rem;
  border: solid 2px ${({ theme }) => theme.colors.secondary};
`

export const SignFoot = styled.div`
  position: absolute;
  z-index: 0;
  top: 10%;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%) skew(-1deg, 1deg);
  width: 15%;
  background-color: ${({ theme }) => theme.colors.secondaryDark};
`
type HeaderProps = {
  animate: boolean
}

export const Header = styled.h2<HeaderProps>`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;

  animation: ${({ animate }) =>
    animate ? "color-text-frames 30s linear infinite" : "none"};
`

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.onSurface};
  margin-right: 2rem;
`
