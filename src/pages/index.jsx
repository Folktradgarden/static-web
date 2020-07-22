import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from "gatsby"

import Svart from '../assets/svart.svg'

import * as styles from './index.module.sass'
import SMIcons from "../components/sm-icons"

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

  return (
    <Layout>
      <SEO title="Hem" />
      <SMIcons/>
      <div className={styles.root}>
        <div className={styles.rootContainer}>
          <div className={styles.leftRootContainer}>
            <div className={styles.headerContainer}>
              <h1 className={styles.header}>
                Vinnare av
                <a href={headerHref}> Östgötapriset </a>
                 2020!
              </h1>
            </div>
            <div></div>
            <div className={styles.imageContainer}>
              <Img className={styles.image} fluid={data.placeholderImage.childImageSharp.fluid} />
            </div>
            <div className={styles.contentContainer}>
              <p className={styles.contentParagraph}>
                Folkträdgården är en ideell förening vars ändamål är att skapa
                sammanhang som verkar för social och ekologisk hållbarhet.
            </p>
            </div>
            <div className={styles.promptContainer}>
              <h2 className={styles.promptParagraph}>Läs mer om vår berättelse!</h2>
              <svg></svg>
            </div>
          </div>
          <div className={styles.rightRootContainer}>
            <Svart className={styles.logo} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
