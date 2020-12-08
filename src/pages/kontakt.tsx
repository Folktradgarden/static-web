import { PageProps } from "gatsby"
import React, { FC } from "react"
import Layout from "../components/containers/Layout"
import PageWrapper from "../components/presentational/PageWrapper"

const Kontakt: FC<PageProps> = ({ path }) => {
  const onClick = async (
    e: React.MouseEvent<HTMLHeadingElement, MouseEvent>
  ) => {
    e.preventDefault()
    const res = await fetch("/.netlify/functions/sendGrid", {
      method: "GET",
    })

    const json = await res.json()

    console.log(json)
  }

  return (
    <Layout path={path}>
      <PageWrapper>
        <h1 onClick={onClick}>Kontakt</h1>
      </PageWrapper>
    </Layout>
  )
}

export default Kontakt
