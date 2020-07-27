import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from "gatsby"
import { FacebookIcon, InstagramIcon } from "../components/vectors"
import { motion } from 'framer-motion'

import Svart from '../assets/svart.svg'

import * as styles from './index.module.sass'
import * as colors from '../global-styles/colors.scss'

const IndexPage = () => {

  const headerHref = "https://www.lansforsakringar.se/ostgota/privat/om-oss/hallbarhet--forskning/ostgotapriset2020/"

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ostgotapriset.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2560) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const title =
    <h1 className={styles.header}>
      Vinnare av
      <span>
        <a href={headerHref}> Östgötapriset </a>
      </span>
        2020!
    </h1>

  const image =
    <Img className={styles.image} fluid={data.placeholderImage.childImageSharp.fluid} />

  const paragraph =
    <p className={styles.contentParagraph}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, a fuga eligendi eveniet maxime expedita eum. Enim omnis dolor id fugiat, perspiciatis ducimus nobis natus quos debitis autem laboriosam adipisci tempore, reprehenderit suscipit quidem odit vitae accusantium eos cumque. Quisquam, quos consequatur? Incidunt officia illo quasi inventore corporis non aut nobis eveniet quis mollitia dicta illum iste repellat, fugiat quam vero vel tempore molestiae? Cumque iste voluptas pariatur exercitationem eveniet quisquam dolor qui omnis odio corporis, tempora quam ex, soluta sapiente nam ad, ipsa laboriosam. Officiis maiores dignissimos saepe animi minima dolorem! Reiciendis sint numquam magni aliquid expedita hic amet.
    </p>

  return (
    <Layout>
      <SEO title="Hem" />
      <div className={styles.root}>
        <div className={styles.topVp}>
          <div></div>
          <div className={styles.rootContainer}>
            <div className={styles.leftContainer}>
              <div className={styles.imageContainer}>
                {image}
              </div>
              <div className={styles.headerContainer}>
                {title}
              </div>
              <div className={styles.dividerContainer}>
                <hr/>
              </div>
              <div className={styles.contentContainer}>
                {paragraph}
              </div>
            </div>
            <div className={styles.rightContainer}>
              <div className={styles.logoContainer}>
                <Svart className={styles.logo} />
              </div>
              <div className={styles.promptContainer}>
                <h2 className={styles.promptParagraph}>Läs mer om vår berättelse!</h2>
              </div>
            </div>
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
    </Layout>
  )
}

export default IndexPage
