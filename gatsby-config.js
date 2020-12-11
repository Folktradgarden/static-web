require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const isDev = process.env.NODE_ENV === "development"

let contentfulAccessToken
let contentfulPreviewHost

if (isDev) {
  contentfulAccessToken = process.env.CONTENTFUL_PREVIEW_TOKEN
  contentfulPreviewHost = process.env.CONTENTFUL_PREVIEW_HOST
} else {
  contentfulAccessToken = process.env.CONTENTFUL_DELIVERY_TOKEN
}

let plugins = [
  {
    resolve: "gatsby-plugin-google-gtag",
    options: {
      trackingIds: [process.env.GOOGLE_ANALYTICS_TRACKING_ID],
    },
  },
  "gatsby-plugin-styled-components",
  "gatsby-plugin-react-helmet",
  "gatsby-plugin-preload-fonts",
  {
    resolve: "gatsby-plugin-react-leaflet",
    options: {
      linkStyles: true,
    },
  },
  {
    resolve: "gatsby-source-contentful",
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: contentfulAccessToken,
      host: contentfulPreviewHost,
    },
  },
  {
    resolve: "gatsby-plugin-env-variables",
    options: {
      allowList: ["MAPBOX_TOKEN", "MAPBOX_STYLE_ID"],
    },
  },
]

module.exports = {
  plugins: plugins,
}
