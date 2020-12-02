import { PageProps } from "gatsby"
import React, { FC } from "react"
import Layout from "../components/Layout"
import FTLogo from "../components/presentational/FTLogo"
import PageWrapper from "../components/presentational/PageWrapper"
import Sign from "../components/presentational/Sign"

const Home: FC<PageProps> = () => {
  return (
    <Layout>
      <PageWrapper align padding="3rem 1rem 1rem 1rem">
        <FTLogo animate />
        <Sign
          title="En ideell förening."
          hint="Klicka på lövet om du vill veta mer!"
        >
          Begagnade spadar och verktyg. Återvunnet byggmaterial. Att arbeta hårt
          tillsammans, i en inkluderande social gemenskap. Olle Elfvin och Jakob
          Hedvall drömmer om att göra Folkträdgården till både livsstil och
          inkomstkälla!
        </Sign>
      </PageWrapper>
    </Layout>
  )
}

export default Home
