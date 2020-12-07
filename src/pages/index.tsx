import { graphql, PageProps, useStaticQuery } from "gatsby"
import React, { FC } from "react"
import Layout from "../components/containers/Layout"
import FTLogo from "../components/presentational/FTLogo"
import LeafIcon from "../components/presentational/LeafIcon"
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
          paragraph
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

  const renderTitle = () => <Title animate={false}>{title}</Title>

  const renderHint = () => (
    <Hint animate={false}>
      {`${hintFirst} `}
      <IconContainer>
        <LeafIcon />
      </IconContainer>{" "}
      {` ${hintSecond}`}
    </Hint>
  )

  console.log(videoUrl)

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
              title={showTitle && renderTitle()}
              hint={renderHint()}
            >
              {paragraph}
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

type HeaderProps = {
  animate: boolean
}

const Title = styled.h2<HeaderProps>`
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;

  animation: ${({ animate }) =>
    animate ? "color-text-frames 30s linear" : "none"};
`

type HintProps = {
  animate: boolean
}

const Hint = styled.p<HintProps>`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
  animation: ${({ animate }) =>
    animate ? "color-text-frames 30s linear" : "none"};
  text-transform: uppercase;

  @media only screen and (min-width: ${globalWidthBreakpoints.sm}) {
    font-size: 2.2rem;
  }

  @media only screen and (min-width: ${globalWidthBreakpoints.lg}) {
    font-size: min(2vw, 2.25rem);
  }
`
const IconContainer = styled.div`
  display: inline-block;
  width: 1.2rem;

  @media only screen and (min-width: ${globalWidthBreakpoints.sm}) {
    width: 2rem;
  }

  @media only screen and (min-width: ${globalWidthBreakpoints.lg}) {
    width: min(1.8vw, 2rem);
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
