import { Link } from "gatsby"
import React, { FC } from "react"
import {
  IconContainer,
  NavigationLinkRoot,
  StyledGatsbyLink,
  Text,
  TextContainer,
} from "./styled"

type NavigationLinkProps = {
  children: string
  to: string
  icon?: JSX.Element
}

const NavigationLink: FC<NavigationLinkProps> = ({ children, to, icon }) => {
  return (
    <StyledGatsbyLink to={to}>
      <NavigationLinkRoot>
        <IconContainer>{icon}</IconContainer>
        <TextContainer>
          <Text>{children}</Text>
        </TextContainer>
      </NavigationLinkRoot>
    </StyledGatsbyLink>
  )
}

export default NavigationLink
