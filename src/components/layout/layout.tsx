import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header"
import { FacebookIcon, InstagramIcon } from "../../components/vectors"
import { motion } from "framer-motion"

import styles from "./layout.module.sass"
import colors from "../../global-styles/colors.scss"

const Layout: React.FC = ({ children }) => {
  const data: any = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>
          <div className={styles.root}>
            <div className={styles.topVp}>
              <div>{/*This is a placeholder*/}</div>
              <div className={styles.rootContainer}>
                {children}
              </div>
              <div className={styles.rightPadding}>
                <div className={styles.iconRow}>
                  <motion.div
                    className={styles.iconContainer}
                    whileHover={{ scale: 1.05 }}
                  >
                    <a href="https://www.facebook.com/foreningenidealen/">
                      <FacebookIcon
                        fillColor={colors.secondaryColor}
                        width="100%"
                        height="100%"
                      />
                    </a>
                  </motion.div>
                  <motion.div
                    className={styles.iconContainer}
                    whileHover={{ scale: 1.05 }}
                  >
                    <a href="https://www.instagram.com/folktradgarden/">
                      <InstagramIcon
                        fillColor={colors.secondaryColor}
                        width="100%"
                        height="100%"
                      />
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
