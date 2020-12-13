import { motion } from "framer-motion"
import styled from "styled-components"
import {
  getCustomViewportHeight,
  globalWidthBreakpoints,
} from "../../../styling/GlobalStyle"

export const DrawerBackground = styled(motion.div)`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
`

export const Container = styled(motion.div)`
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  width: 0;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.surface};
`

export const LinkContainer = styled.div`
  width: 100%;
  margin-top: 4rem;

  @media only screen and (min-width: ${globalWidthBreakpoints.sm}) {
    margin-top: 5rem;
  }
`

export const IconContainer = styled.div`
  position: absolute;
  padding: 0 0 16px 16px;
  display: flex;
  justify-content: space-between;
  left: 0;
  bottom: 0;
  height: 48px;
  width: 106px;
`

export const Anchor = styled.a`
  cursor: pointer;
`
