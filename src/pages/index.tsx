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
import ArrowIcon from "../components/presentational/Icons/ArrowIcon"
import Image from "../components/presentational/Image"

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
          priceImage {
            id
            file {
              url
            }
          }
        }
      }
    }
  }
`

const Home: FC<PageProps> = ({ location }) => {
  const queryResponse = useStaticQuery(query)
  const {
    paragraph,
    hintFirst,
    hintSecond,
    videoUrl,
    showTitle,
    title,
    priceImage,
  } = queryResponse.allContentfulHem.edges[0].node

  return (
    <Layout path={location.pathname}>
      <PageWrapper>
        <StartSection id="start">
          <LogoContainer>
            <FTLogo animate />
          </LogoContainer>
          <SignContainer>
            <Sign divider title={title || ""} hint={[hintFirst, hintSecond]}>
              {paragraph.paragraph}
            </Sign>
          </SignContainer>
          <BottomTextContainer>
            <BottomText></BottomText>
            <ArrowIcon />
          </BottomTextContainer>
        </StartSection>
        <VideoSection id="om-oss">
          <VideoTextContainer>
            <VideoTitle>Lorem Ipsum llsadas ssssss</VideoTitle>
            <VideoParagraph>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab illo
              aperiam, commodi magnam asperiores maiores voluptate at suscipit
              fugiat totam. Ducimus aliquam rem quo a error, esse dolorum
              laboriosam quis! Lorems
            </VideoParagraph>
          </VideoTextContainer>
          <VideoDivider />
          <VideoAspectWrapper>
            <VideoContainer>
              <ReactPlayer width="100%" height="100%" url={videoUrl} />
            </VideoContainer>
          </VideoAspectWrapper>
        </VideoSection>
        <PriceSection id="östgötapriset">
          <PriceImageContainer>
            <Image src={priceImage.file.url} alt="Östgötapriset" />
          </PriceImageContainer>
          <PriceDivider />
          <PriceTextContainer>
            <PriceTitle>Vinnare av Östgötapriset 2020!</PriceTitle>
            <PriceQuote>
              "Årets förstapristagare av Östgötapriset har lyckats förena så
              mycket gott i ett och samma initiativ. Med utgångspunkt i
              hållbarhet har de skapat en oas där människor med olika bakgrunder
              samlas för att umgås, lära sig nytt och njuta av naturens
              fantastiska tillgångar. FOLKTRÄDGÅRDEN har lyckats omfamna
              hållbarhetens alla perspektiv, i en nytänkande och framgångsrik
              verksamhet med hjärta för människa och miljö. En strålande
              förebild för oss alla."
            </PriceQuote>
            <PriceQuoteSource>Länsförsäkringar Östgöta</PriceQuoteSource>
          </PriceTextContainer>
        </PriceSection>
      </PageWrapper>
    </Layout>
  )
}

export default Home

const StartSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  min-height: max(800px, ${getCustomViewportHeight(100)});
  width: 100%;

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
`

const BottomTextContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 1%;
  width: 100%;
  text-align: center;

  @media only screen and (min-width: ${globalWidthBreakpoints.sm}) {
    > svg {
      height: 36px;
      width: 36px;
    }
  }
`
const BottomText = styled.p`
  color: ${({ theme }) => theme.colors.secondaryDark};
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-transform: uppercase;

  @media only screen and (min-width: ${globalWidthBreakpoints.sm}) {
    font-size: 1.6rem;
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
  min-height: ${getCustomViewportHeight(100)};

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
    font-size: min(3.2vw, 54.5px);
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

  border: solid
    ${({ theme }) => `${theme.border.width} ${theme.colors.secondary}`};

  > div {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  @media only screen and (min-width: ${globalWidthBreakpoints.lg}) {
    border: none;
  }
`

const PriceSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  min-height: ${getCustomViewportHeight(100)};

  @media only screen and (min-width: ${globalWidthBreakpoints.lg}) {
    flex-direction: row;
  }
`

const PriceImageContainer = styled.div`
  width: 90%;
  border: solid
    ${({ theme }) => `${theme.border.width} ${theme.colors.secondary}`};
  box-sizing: border-box;

  @media only screen and (min-width: ${globalWidthBreakpoints.lg}) {
    flex: 1;
    border: solid ${({ theme }) => `min(0.3vw, 8px) ${theme.colors.secondary}`};
    margin-left: 10%;
    padding: 1%;
    background-color: ${({ theme }) => theme.colors.surface};
  }
`

const PriceDivider = styled.div`
  height: 0;
  width: 90%;
  border-top: solid
    ${({ theme }) => `${theme.border.width} ${theme.colors.accent}`};
  margin: 1rem 0;

  @media only screen and (min-width: ${globalWidthBreakpoints.lg}) {
    display: none;
  }
`

const PriceTextContainer = styled.div`
  width: 90%;

  @media only screen and (min-width: ${globalWidthBreakpoints.lg}) {
    width: 30%;
    margin-left: 5rem;
    margin-right: 10%;
  }
`

const PriceTitle = styled.h3`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  text-align: center;

  @media only screen and (min-width: ${globalWidthBreakpoints.lg}) {
    font-size: min(3.2vw, 54.5px);
  }
`

const PriceQuote = styled.p`
  margin-top: 0.6rem;
  font-size: 1.2rem;
  font-style: italic;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondaryDark};

  @media only screen and (min-width: ${globalWidthBreakpoints.lg}) {
    font-size: min(2vw, 30.3px);
    margin-top: 1rem;
  }
`

const PriceQuoteSource = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.accent};
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 1.2rem;
  text-align: center;

  @media only screen and (min-width: ${globalWidthBreakpoints.lg}) {
    font-size: min(2.2vw, 36px);
    margin-top: 1.6rem;
  }
`
