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
          <VideoTextContainer>
            <VideoTitle>Lorem Ipsum</VideoTitle>
            <VideoParagraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab illo
              aperiam, commodi magnam asperiores maiores voluptate at suscipit
              fugiat totam. Ducimus aliquam rem quo a error, esse dolorum
              laboriosam quis!
            </VideoParagraph>
          </VideoTextContainer>
          <VideoDivider />
          <VideoAspectWrapper>
            <VideoContainer>
              <ReactPlayer width="100%" height="100%" url={videoUrl} />
            </VideoContainer>
          </VideoAspectWrapper>
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
  min-height: max(800px, 100vh);
  width: 100%;
  height: 100vh;

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
  background-color: ${({ theme }) => theme.colors.surface};
  width: 100%;
  min-height: 100vh;

  @media only screen and (min-width: ${globalWidthBreakpoints.lg}) {
    flex-direction: row;
  }
`
const VideoTextContainer = styled.div`
  width: 90%;

  @media only screen and (min-width: ${globalWidthBreakpoints.lg}) {
    width: 30%;
    margin-right: 5rem;
    margin-left: 10%;
  }
`

const VideoTitle = styled.h3`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.accent};
  text-transform: uppercase;

  @media only screen and (min-width: ${globalWidthBreakpoints.lg}) {
    font-size: min(3.6vw, 54.5px);
  }
`

const VideoParagraph = styled.p`
  margin-top: 0.6rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.secondaryDark};

  @media only screen and (min-width: ${globalWidthBreakpoints.lg}) {
    font-size: min(2vw, 30.3px);
  }
`

const VideoDivider = styled.div`
  height: 0;
  width: 90%;
  border-top: solid
    ${({ theme }) => `${theme.border.width} ${theme.colors.primary}`};
  margin: 1rem 0;

  @media only screen and (min-width: ${globalWidthBreakpoints.lg}) {
    display: none;
  }
`
const VideoAspectWrapper = styled.div`
  width: 90%;
  box-sizing: border-box;

  @media only screen and (min-width: ${globalWidthBreakpoints.lg}) {
    flex: 1;
    border: solid ${({ theme }) => `min(0.3vw, 8px) ${theme.colors.secondary}`};
    margin-right: 10%;
    padding: 1%;
    background-color: ${({ theme }) => theme.colors.background};
  }
`

const VideoContainer = styled.div`
  width: 100%;
  padding: 28.125% 0;
  position: relative;
  box-sizing: content-box;

  > div {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`
