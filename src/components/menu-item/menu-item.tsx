import React from "react"

import { Link } from "gatsby"

import styles from "./menu-item.module.sass"

interface MenuItemProps {
  to: string
  title: string
}

const MenuItem: React.FC<MenuItemProps> = ({to, title}) => {
  return (
    <Link className={styles.link} to={to}>{title}</Link>
  )
}

export default MenuItem