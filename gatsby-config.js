const SITE_URL = process.env.SITE_URL || "http://localhost:8000"
const PATH_PREFIX = process.env.PATH_PREFIX
  ? `/${process.env.PATH_PREFIX}`
  : `/`
const siteConfig = require("./src/data/config/index")
process.env.ENABLE_GATSBY_REFRESH_ENDPOINT = true
module.exports = {
  pathPrefix: PATH_PREFIX,
  siteMetadata: {
    ...siteConfig,
    siteUrl: SITE_URL,
    pathPrefix: PATH_PREFIX,
  },
  flags: {
    LAZY_IMAGES: true,
    FAST_DEV: true,
    DEV_SSR: true,
    QUERY_ON_DEMAND: true,
    FAST_REFRESH: true,
    PRESERVE_WEBPACK_CACHE: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `msl`,
        path: `./src/data/msl/`,
        // ignore: [`./**/msl-test/***`]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `test`,
        path: `./src/data/test/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `post`,
        path: `./src/data/post/`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: false,
        analyzerMode: "static",
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        sitemapSize: 5000,
      },
    },
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
