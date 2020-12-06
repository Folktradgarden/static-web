import { graphql, useStaticQuery } from "gatsby"
import React, { FC, useState } from "react"
import Drawer from "../../presentational/Drawer"
import BinocularsIcon from "../../presentational/Icons/BinocularsIcon"
import BookIcon from "../../presentational/Icons/BookIcon"
import HouseIcon from "../../presentational/Icons/HouseIcon"
import PaperPlaneIcon from "../../presentational/Icons/PaperPlaneIcon"
import ShovelIcon from "../../presentational/Icons/ShovelIcon"
import LeafButton from "../../presentational/LeafButton"
import NavigationLink from "../../presentational/NavigationLink"

type LinkEdge = {
  node: {
    id: string
    name: string
    resource: string
  }
}

const query = graphql`
  query {
    allContentfulLankLista(sort: { fields: createdAt }) {
      edges {
        node {
          id
          name
          resource
          createdAt
        }
      }
    }
  }
`

const linkIcons = [
  <HouseIcon />,
  <BookIcon color="accent" />,
  <BinocularsIcon color="accent" />,
]

const Navigation: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const queryResponse = useStaticQuery(query)

  const linkEdges = queryResponse.allContentfulLankLista.edges

  return (
    <>
      <Drawer isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
        {linkEdges.map((edge: LinkEdge, index: number) => {
          const link = edge.node
          return (
            <NavigationLink
              key={link.id}
              to={link.resource}
              icon={linkIcons[index]}
            >
              {link.name}
            </NavigationLink>
          )
        })}
      </Drawer>
      <LeafButton isActive={isOpen} toggle={() => setIsOpen(!isOpen)} />
    </>
  )
}

export default Navigation
