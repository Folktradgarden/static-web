import { PageProps } from "gatsby"
import React, { FC } from "react"
import Layout from "../components/Layout"
import FTLogo from "../components/presentational/FTLogo"
import PageWrapper from "../components/presentational/PageWrapper"
import Sign from "../components/presentational/Sign"

const Home: FC<PageProps> = () => {
  return (
    <Layout>
      <PageWrapper align>
        <FTLogo animate />
        <Sign />
      </PageWrapper>
    </Layout>
  )
}

export default Home
