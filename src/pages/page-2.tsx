import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage: React.FC = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Sida 2</h1>
    <p>Ännu en sida.</p>
    <Link to="/">Tillbaka</Link>
  </Layout>
)

export default SecondPage
