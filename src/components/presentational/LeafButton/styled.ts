import { motion } from "framer-motion"
import styled from "styled-components"
import { globalWidthBreakpoints } from "../../../styling/GlobalStyle"

export const LeafButtonRoot = styled(motion.div)`
  position: absolute;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0.5rem;
  right: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  transform: scale(-1, 1) rotate(45deg);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  @media only screen and (min-width: ${globalWidthBreakpoints.sm}) {
    width: 3.5rem;
    height: 3.5rem;
  }
`
