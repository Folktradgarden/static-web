import { Link } from "gatsby"
import React, { useState } from "react"
import { motion } from 'framer-motion'

import * as styles from './header.module.sass'
import * as colors from '../../global-styles/colors.scss'
import NavButton from "../nav-button"

type HeaderProps = {
  siteTitle: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {

  const [isOpen, setIsOpen] = useState(false)

  const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 }
  }

  return (
    <>
      <NavButton isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} vectorColor={colors.backgroundColor}/>
      <motion.header className={styles.header} initial={false} variants={variants} animate={isOpen ? "open" : "closed"}>
      </motion.header>
    </>


  )

}

export default Header
