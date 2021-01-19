const SITE_URL = process.env.SITE_URL || "http://localhost:8000"
const PATH_PREFIX = process.env.PATH_PREFIX
  ? `/${process.env.PATH_PREFIX}`
  : `/`

const BASE_PATH = !PATH_PREFIX.endsWith("/") ? `${PATH_PREFIX}/` : PATH_PREFIX
const siteConfig = require("./src/data/config/index")
const GA_ID = "UA-122366850-2"
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
    PARALLEL_SOURCING: true,
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
      resolve: "gatsby-plugin-sitemap",
      options: {
        sitemapSize: 5000,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: GA_ID,
        // Defers execution of google analytics script after page load
        defer: true,
        // this option places the tracking script into the head of the DOM
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteConfig.title,
        short_name: siteConfig.short_name,
        lang: `en`,
        start_url: `${BASE_PATH}?utm_source=homescreen`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/images/msl-logo-pwa.svg`, // This path is relative to the root of the site.
        icon_options: {
          purpose: `any maskable`,
        },
        shortcuts: [
          {
            name: "View Seasons",
            short_name: "Seasons",
            description: "View all Seasons and Stats",
            url: `${BASE_PATH}seasons?utm_source=homescreen`,
          },
          {
            name: "View Teams",
            short_name: "Teams",
            description: "View all Teams and Stats",
            url: `${BASE_PATH}teams?utm_source=homescreen`,
          },
          {
            name: "View Players",
            short_name: "Players",
            description: "View all Players and Stats",
            url: `${BASE_PATH}players?utm_source=homescreen`,
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
