require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

let contentfulAccessToken
let contentfulPreviewHost

if (process.env.NODE_ENV === "development") {
  contentfulAccessToken = process.env.CONTENTFUL_PREVIEW_TOKEN
  contentfulPreviewHost = process.env.CONTENTFUL_PREVIEW_HOST
} else if (process.env.NODE_ENV === "production") {
  contentfulAccessToken = process.env.CONTENTFUL_DELIVERY_TOKEN
}

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-styled-components",
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
  ],
}
