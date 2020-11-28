import { motion } from "framer-motion"
import styled from "styled-components"

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
`
