import { motion } from "framer-motion"
import styled from "styled-components"

export const Overlay = styled(motion.div)`
  display: none;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  opacity: 0;
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.dark}E5 0%,
    ${({ theme }) => theme.colors.dark}4C 85%,
    ${({ theme }) => theme.colors.dark}00 98%
  );
`
