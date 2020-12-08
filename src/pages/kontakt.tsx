import { graphql, PageProps, useStaticQuery } from "gatsby"
import React, { FC } from "react"
import styled from "styled-components"
import ContactForm from "../components/containers/ContactForm"
import Layout from "../components/containers/Layout"
import PageWrapper from "../components/presentational/PageWrapper"

const query = graphql`
  query {
    allContentfulKontakt(limit: 1) {
      edges {
        node {
          labelMessage
          labelSubject
          paragraph {
            paragraph
          }
          buttonSend
          title
        }
      }
    }
  }
`

const Kontakt: FC<PageProps> = ({ path }) => {
  const queryResponse = useStaticQuery(query)

  const {
    title,
    paragraph,
    labelSubject,
    labelMessage,
    buttonSend,
  } = queryResponse.allContentfulKontakt.edges[0].node

  return (
    <Layout path={path}>
      <PageWrapper>
        <PageContainer>
          <TextContainer>
            <Title>{title}</Title>
            <Paragraph>{paragraph.paragraph}</Paragraph>
          </TextContainer>
          <Divider />
          <FormContainer>
            <ContactForm
              subjectLabel={labelSubject}
              messageLabel={labelMessage}
              buttonText={buttonSend}
            />
          </FormContainer>
        </PageContainer>
      </PageWrapper>
    </Layout>
  )
}

export default Kontakt

const PageContainer = styled.div`
  margin-top: 3.5rem;
  padding: 0 1rem;
`

const TextContainer = styled.div``
const Title = styled.h3`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.secondaryDark};
  text-transform: uppercase;
`
const Paragraph = styled.p`
  margin-top: 0.6rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.secondaryDark};
`
const Divider = styled.div`
  height: 0;
  width: 100%;
  border-top: solid
    ${({ theme }) => `${theme.border.width} ${theme.colors.accent}`};
  margin: 1rem 0;
`

const FormContainer = styled.div``
