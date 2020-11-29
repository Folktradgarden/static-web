import { PageProps } from "gatsby"
import React, { FC } from "react"
import Layout from "../components/Layout"
import PageWrapper from "../components/presentational/PageWrapper"

const HittaOss: FC<PageProps> = () => {
  return (
    <Layout>
      <PageWrapper>
        <h1>Hitta oss</h1>
      </PageWrapper>
    </Layout>
  )
}

export default HittaOss
