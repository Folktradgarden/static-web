import { motion } from "framer-motion"
import { Link } from "gatsby"
import styled from "styled-components"

export const StyledGatsbyLink = styled(Link)`
  text-decoration: none;
  padding: 0;
  margin: 0;
`

export const NavigationLinkRoot = styled.div`
  display: flex;
  padding-left: 10px;
  box-sizing: border-box;
  margin-bottom: 0.5rem;
  background-color: ${({ theme }) => theme.colors.background};
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  min-width: 36px;
  height: 46px;
  padding: 10px 0;
  box-sizing: border-box;
`

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  height: 46px;
  margin-left: 10px;
  padding-top: 7px;
  box-sizing: border-box;
`

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
  font-size: 24px;
  text-transform: uppercase;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const ArrowContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 46px;
  width: 46px;

  > svg {
    width: 18px;
    height: 18px;
  }
`

export const ChildrenContainer = styled(motion.div)`
  margin-left: 36px;
  overflow: hidden;
  box-sizing: border-box;
`

export const ChildLinkRoot = styled.div`
  display: flex;
  padding: 0 4px;
  box-sizing: border-box;
  margin-bottom: 0.5rem;
  background-color: ${({ theme }) => theme.colors.background};
`
export const ChildIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  min-width: 30px;
  height: 40px;
  padding: 4px 0;
  box-sizing: border-box;

  > svg {
    width: 18px;
    height: 18px;
  }
`

export const ChildTextContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  height: 40px;
  margin-left: 10px;
  padding-top: 7px;
  box-sizing: border-box;
`

export const ChildText = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;
  white-space: nowrap;
  text-overflow: ellipsis;
`
