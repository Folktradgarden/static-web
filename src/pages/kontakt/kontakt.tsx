import { PageProps } from "gatsby"
import React, { FC } from "react"
import Layout from "../../components/Layout"
import PageWrapper from "../../components/presentational/PageWrapper"

const Kontakt: FC<PageProps> = () => {
  return (
    <Layout>
      <PageWrapper>
        <h1>Kontakt</h1>
      </PageWrapper>
    </Layout>
  )
}

export default Kontakt
