import { PageProps } from "gatsby"
import React, { FC } from "react"
import Layout from "../../components/Layout"
import Map from "../../components/Map"
import PageWrapper from "../../components/presentational/PageWrapper"
import { AddressContainer, MapContainer, Street, ZipCity } from "./styled"

const HittaOss: FC<PageProps> = () => {
  return (
    <Layout>
      <PageWrapper padding="3.4rem 0 0 0">
        <AddressContainer>
          <Street>Kunskapslänken</Street>
          <ZipCity>585 98 Linköping</ZipCity>
        </AddressContainer>
        <MapContainer>
          <Map />
        </MapContainer>
      </PageWrapper>
    </Layout>
  )
}

export default HittaOss
