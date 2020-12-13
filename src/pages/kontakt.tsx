import { graphql, PageProps, useStaticQuery } from "gatsby"
import React, { FC } from "react"
import styled from "styled-components"
import ContactForm from "../components/containers/ContactForm"
import Layout from "../components/containers/Layout"
import { Divider } from "../components/presentational/Divider"
import PageWrapper from "../components/presentational/PageWrapper"
import { globalWidthBreakpoints } from "../styling/GlobalStyle"

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

const Kontakt: FC<PageProps> = ({ location }) => {
  const queryResponse = useStaticQuery(query)

  const {
    title,
    paragraph,
    labelSubject,
    labelMessage,
    buttonSend,
  } = queryResponse.allContentfulKontakt.edges[0].node

  return (
    <Layout path={location.pathname}>
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
              subjectRequiredError="Du måste ange ett ämne."
              messageLabel={labelMessage}
              messageRequiredError="Du måste ange ett meddelande."
              messageMaxLimitError="Ett meddelande får max innehålla 256 tecken."
              spamError="Är du verkligen en robot?"
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

  @media only screen and (min-width: ${globalWidthBreakpoints.lg}) {
    max-width: 900px;
  }
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

const FormContainer = styled.div``
