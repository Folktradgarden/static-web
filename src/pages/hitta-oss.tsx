import { graphql, PageProps, useStaticQuery } from "gatsby"
import React, { FC } from "react"
import Layout from "../components/containers/Layout"
import Map from "../components/presentational/Map"
import PageWrapper from "../components/presentational/PageWrapper"
import styled from "styled-components"
import { globalWidthBreakpoints } from "../styling/GlobalStyle"

const query = graphql`
  query MyQuery {
    allContentfulHittaOss {
      edges {
        node {
          street
          zipCode
          city
        }
      }
    }
  }
`

const HittaOss: FC<PageProps> = ({ path }) => {
  const queryResponse = useStaticQuery(query)

  const {
    street,
    zipCode,
    city,
  } = queryResponse.allContentfulHittaOss.edges[0].node

  return (
    <Layout path={path}>
      <PageWrapper column={true}>
        <AddressContainer>
          <Street>{street}</Street>
          <ZipCity>{`${zipCode} ${city}`}</ZipCity>
        </AddressContainer>
        <MapContainer>
          <Map />
        </MapContainer>
      </PageWrapper>
    </Layout>
  )
}

export default HittaOss

export const HittaOssRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  min-height: 800px;
  width: 100%;
  height: 100%;

  @media only screen and (min-width: ${globalWidthBreakpoints.lg}) {
    flex-direction: column;
    max-width: 1350px;
  }
`

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.2rem 0;
  margin-bottom: 1rem;
  box-sizing: border-box;
  margin-top: 3.5rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.onSurface};

  @media only screen and (min-width: ${globalWidthBreakpoints.lg}) {
    padding: 2.2rem 0;
    margin-top: 5rem;
  }
`

export const Street = styled.h3`
  font-size: 2rem;
  text-transform: uppercase;

  @media only screen and (min-width: ${globalWidthBreakpoints.lg}) {
    font-size: 3rem;
  }
`

export const ZipCity = styled.h3`
  font-size: 1.4rem;
  text-transform: uppercase;

  @media only screen and (min-width: ${globalWidthBreakpoints.lg}) {
    font-size: 2.4rem;
  }
`

export const MapContainer = styled.div`
  flex: 1;
  width: 100%;
  box-sizing: border-box;

  @media only screen and (min-width: ${globalWidthBreakpoints.lg}) {
    max-width: 1200px;
    margin-bottom: 5rem;
  }
`
