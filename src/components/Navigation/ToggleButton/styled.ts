import { motion } from "framer-motion"
import styled from "styled-components"

export const ToggleButtonRoot = styled(motion.div)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 1rem;
  right: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  transform: scale(-1, 1) rotate(45deg);
`
