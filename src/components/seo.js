/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import DefaultOpenGraphImage from "../../src/images/og.jpg"

import { join } from "path"

function isValidUrl(string) {
  try {
    // eslint-disable-next-line no-new
    new URL(string)
  } catch (_) {
    return false
  }

  return true
}

function SEO({ description, lang, meta, title, image, path }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            pathPrefix
          }
        }
      }
    `
  )

  const siteUrl = site.siteMetadata.siteUrl
  const pathPrefix = site.siteMetadata.pathPrefix
  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const metaImage = image || DefaultOpenGraphImage
  const fullImage = isValidUrl(metaImage) ? metaImage : `${siteUrl}${metaImage}`
  const pathJoined = join(pathPrefix, path || "/")
  const canonicalUrl = new URL(pathJoined, siteUrl).href

  console.log(pathJoined, "pathJoined")
  console.log(canonicalUrl, "canonicalUrl")
  console.log(site.siteMetadata.siteUrl, pathPrefix, path)

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:image`,
          content: fullImage,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: "og:url",
          content: canonicalUrl,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: "twitter:image",
          content: fullImage,
        },
      ].concat(meta)}
    >
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
