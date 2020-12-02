import { PageProps } from "gatsby"
import React, { FC } from "react"
import Layout from "../components/Layout"
import FTLogo from "../components/presentational/FTLogo"
import LeafIcon from "../components/presentational/LeafIcon"
import PageWrapper from "../components/presentational/PageWrapper"
import Sign from "../components/Sign"
import {
  Hint,
  IconContainer,
  LogoContainer,
  SignContainer,
  Title,
} from "./styled"

const Home: FC<PageProps> = () => {
  const renderTitle = () => <Title animate={false}>En ideell förening.</Title>

  const renderHint = () => (
    <Hint animate={false}>
      Klicka på{" "}
      <IconContainer>
        <LeafIcon />
      </IconContainer>{" "}
      om du vill veta mer!
    </Hint>
  )

  const videoUrl = "https://www.youtube.com/watch?v=1uBw08fHllU"

  const titleContent = `Begagnade spadar och verktyg. Återvunnet byggmaterial. Att arbeta hårt
  tillsammans, i en inkluderande social gemenskap. Olle Elfvin och Jakob
  Hedvall drömmer om att göra Folkträdgården till både livsstil och
  inkomstkälla!`

  return (
    <Layout>
      <PageWrapper>
        <LogoContainer>
          <FTLogo animate />
        </LogoContainer>
        <SignContainer>
          <Sign divider hint={renderHint()}>
            {titleContent}
          </Sign>
        </SignContainer>
      </PageWrapper>
    </Layout>
  )
}

export default Home
