import { graphql, PageProps, useStaticQuery } from "gatsby"
import React, { FC } from "react"
import Layout from "../components/containers/Layout"
import FTLogo from "../components/presentational/FTLogo"
import PageWrapper from "../components/presentational/PageWrapper"
import Sign from "../components/containers/Sign"
import styled from "styled-components"
import {
  getCustomViewportHeight,
  globalWidthBreakpoints,
} from "../styling/GlobalStyle"
import ReactPlayer from "react-player"

const query = graphql`
  query {
    allContentfulHem(limit: 1) {
      edges {
        node {
          id
          paragraph {
            paragraph
          }
          hintFirst
          hintSecond
          videoUrl
          showTitle
          title
        }
      }
    }
  }
`

const Home: FC<PageProps> = ({ path }) => {
  const queryResponse = useStaticQuery(query)

  const {
    paragraph,
    hintFirst,
    hintSecond,
    videoUrl,
    showTitle,
    title,
  } = queryResponse.allContentfulHem.edges[0].node

  return (
    <Layout path={path}>
      <PageWrapper>
        <StartSection>
          <LogoContainer>
            <FTLogo animate />
          </LogoContainer>
          <SignContainer>
            <Sign
              divider
              title={(showTitle && title) || ""}
              hint={[hintFirst, hintSecond]}
            >
              {paragraph.paragraph}
            </Sign>
          </SignContainer>
        </StartSection>
        <VideoSection>
          <VideoContainer>
            <ReactPlayer width="auto" height="100%" url={videoUrl} />
          </VideoContainer>
        </VideoSection>
      </PageWrapper>
    </Layout>
  )
}

export default Home

const StartSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  min-height: max(800px, ${getCustomViewportHeight(100)});
  width: 100%;
  height: 100%;

  @media only screen and (min-width: ${globalWidthBreakpoints.lg}) {
    flex-direction: row;
    max-width: 1350px;
  }
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 35%;
  width: 100%;
  padding: 0 1rem 0 1rem;
  margin-top: 2.5rem;
  box-sizing: border-box;

  @media only screen and (min-width: ${globalWidthBreakpoints.lg}) {
    width: 50%;
    height: 60%;
  }
`

const SignContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  width: 100%;
  padding: 0 1rem 0 1rem;
  box-sizing: border-box;

  @media only screen and (min-width: ${globalWidthBreakpoints.lg}) {
    width: auto;
    height: 35vw;
    max-height: 520px;
    align-items: center;
  }
`

const VideoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  min-height: ${getCustomViewportHeight(100)};

  @media only screen and (min-width: ${globalWidthBreakpoints.lg}) {
    max-width: 1350px;
  }
`
const VideoContainer = styled.div`
  width: 90%;
  height: 50.6vw;
  margin: 2rem 0;
  box-sizing: border-box;

  @media only screen and (min-width: ${globalWidthBreakpoints.lg}) {
    max-height: 760px;
  }
`
