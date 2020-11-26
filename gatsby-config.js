const SITE_URL = process.env.SITE_URL || "http://localhost:8000"
const PATH_PREFIX = process.env.PATH_PREFIX
const siteConfig = require("./src/data/config")

module.exports = {
  pathPrefix: `/${PATH_PREFIX}`,
  siteMetadata: {
    ...siteConfig,
    siteUrl: SITE_URL,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteConfig.title,
        short_name: siteConfig.short_name,
        lang: `en`,
        start_url: `/`,
        background_color: `#A4281D`,
        theme_color: `#A4281D`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
