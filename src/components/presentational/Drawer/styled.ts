import { motion } from "framer-motion"
import styled from "styled-components"

export const DrawerBackground = styled(motion.div)`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const Container = styled(motion.div)`
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  width: 256px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.surface};
`
