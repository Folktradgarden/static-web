import React from "react"
import { Link, PageProps } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage: React.FC<PageProps> = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Välkommen till Folkträdgården</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Sida 2</Link> <br />
  </Layout>
)

export default IndexPage
