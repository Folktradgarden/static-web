import { Variants } from "framer-motion"
import React, { FC, Fragment, useState } from "react"
import ArrowIcon from "../Icons/ArrowIcon"
import {
  ArrowContainer,
  ChildIconContainer,
  ChildLinkRoot,
  ChildrenContainer,
  ChildText,
  ChildTextContainer,
  IconContainer,
  NavigationLinkRoot,
  StyledGatsbyLink,
  Text,
  TextContainer,
} from "./styled"

export type SubPath = {
  to: string
  text: string
  icon?: JSX.Element
}

type NavigationLinkProps = {
  text: string
  to: string
  icon?: JSX.Element
  subPaths?: SubPath[] | undefined
  defaultIsOpen?: boolean
  animationDelay: number
  parentIsOpen: boolean
  closeParent?: () => void
  isActive: boolean
}

const NavigationLink: FC<NavigationLinkProps> = ({
  text,
  to,
  icon,
  subPaths = [],
  defaultIsOpen = false,
  animationDelay,
  parentIsOpen,
  closeParent = () => null,
  isActive,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultIsOpen)
  const [dropdownDuration] = useState<number>(0.3)

  const childrenVariants = {
    isDown: {
      height: "auto",
      transition: {
        duration: dropdownDuration,
      },
    },
    isUp: {
      height: 0,
      transition: {
        duration: dropdownDuration,
      },
    },
  }

  const arrowContainerVariants: Variants = {
    visible: {
      opacity: 1,
      transition: {
        opacity: {
          delay: animationDelay,
        },
      },
    },
    invisible: {
      opacity: 0,
    },
    up: {
      transform: "rotate(180deg)",
      transition: {
        duration: dropdownDuration,
      },
    },
    down: {
      transform: "rotate(0deg)",
      transition: {
        duration: dropdownDuration,
      },
    },
  }

  const onClickArrow = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsOpen(!isOpen)
  }

  return (
    <Fragment>
      <StyledGatsbyLink to={to} onClick={() => closeParent()}>
        <NavigationLinkRoot>
          <IconContainer>{icon}</IconContainer>
          <TextContainer>
            <Text>{text}</Text>
          </TextContainer>
          {subPaths.length ? (
            <ArrowContainer
              onClick={onClickArrow}
              variants={arrowContainerVariants}
              animate={[
                isOpen ? "up" : "down",
                parentIsOpen ? "visible" : "invisible",
              ]}
            >
              <ArrowIcon />
            </ArrowContainer>
          ) : null}
        </NavigationLinkRoot>
      </StyledGatsbyLink>
      <ChildrenContainer
        initial={false}
        animate={isOpen ? "isDown" : "isUp"}
        variants={childrenVariants}
      >
        {subPaths.map(path => {
          return (
            <StyledGatsbyLink to={path.to} onClick={() => closeParent()}>
              <ChildLinkRoot>
                <ChildIconContainer>{path.icon}</ChildIconContainer>
                <ChildTextContainer>
                  <ChildText>{path.text}</ChildText>
                </ChildTextContainer>
              </ChildLinkRoot>
            </StyledGatsbyLink>
          )
        })}
      </ChildrenContainer>
    </Fragment>
  )
}

export default NavigationLink
