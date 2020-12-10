import React, { FC } from "react"
import { Helmet } from "react-helmet"
import appleTouchIcon from "../../../../static/favicons/apple-touch-icon.png"
import favicon from "../../../../static/favicons/favicon.ico"
import faviconSmall from "../../../../static/favicons/favicon-16x16.png"
import faviconLarge from "../../../../static/favicons/favicon-32x32.png"

type SEOProps = {
  path: string
}

const getTitle = (path: string): string => {
  let title = "Folkträdgården | "

  switch (path) {
    case "/":
      title += "Hem"
      break
    case "/hitta-oss/":
      title += "Hitta Oss"
      break
    case "/kontakt/":
      title += "Kontakt"
      break
    default:
      title += ""
  }

  return title
}

const SEO: FC<SEOProps> = ({ path }) => {
  return (
    <Helmet>
      <title>{getTitle(path)}</title>
      <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      <link rel="icon" href={faviconSmall} sizes="16x16" type="image/png" />
      <link rel="icon" href={faviconLarge} sizes="32x32" type="image/png" />

      <link
        rel="apple-touch-icon-precomposed"
        href={appleTouchIcon}
        type="image/png"
        sizes="180x180"
      />
    </Helmet>
  )
}

export default SEO
