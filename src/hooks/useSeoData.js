import { useStaticQuery, graphql } from "gatsby"
// For accessing location if not passed as prop directly to Head and then to this hook
// However, Gatsby Head API provides `location` to the `Head` export, so it's better to pass it down.
// import { useLocation } from "@reach/router";

import DefaultOpenGraphImage from "../images/og.jpg" // Adjusted path assuming this hook is in src/hooks

function isValidUrl(string) {
  try {
    new URL(string)
  } catch (_) {
    return false
  }
  return true
}

export function useSeoData({
  description,
  lang = "en",
  meta = [],
  title,
  image,
  pathname /* passed from Head's location prop */,
}) {
  const { site } = useStaticQuery(graphql`
    query SiteMetadataForSeo {
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
  `)

  const siteUrl = site.siteMetadata.siteUrl
  const pathPrefix = site.siteMetadata.pathPrefix || "" // Ensure pathPrefix is not null
  const metaDescription = description || site.siteMetadata.description
  const defaultSiteTitle = site.siteMetadata?.title
  const metaImage = image || DefaultOpenGraphImage

  let fullImage
  if (isValidUrl(metaImage)) {
    fullImage = metaImage
  } else {
    // Ensure leading slash for relative image paths if pathPrefix is empty or just "/"
    const imagePath = metaImage.startsWith("/") ? metaImage : `/${metaImage}`
    fullImage = `${siteUrl}${pathPrefix && pathPrefix !== "/" ? pathPrefix : ""}${imagePath}`
  }

  // Construct canonical URL carefully
  // pathname already includes the base path if pathPrefix is used by Gatsby links
  // If pathPrefix is not part of pathname already, it might need to be added.
  // For Gatsby Head API, `location.pathname` provided to `Head` should be the correct final path.
  const canonicalUrl = new URL(pathname, siteUrl).href

  const seoTags = [
    { name: `description`, content: metaDescription },
    { property: `og:title`, content: title },
    { property: `og:image`, content: fullImage },
    { property: `og:description`, content: metaDescription },
    { property: `og:type`, content: `website` },
    { property: "og:url", content: canonicalUrl },
    { name: `twitter:card`, content: `summary_large_image` },
    { name: `twitter:creator`, content: site.siteMetadata?.author || `` },
    { name: `twitter:title`, content: title },
    { name: `twitter:description`, content: metaDescription },
    { property: "twitter:image", content: fullImage },
  ].concat(meta) // Add any custom meta tags passed in

  // Deduplicate meta tags by name or property, preferring the last one
  const uniqueMetaTags = []
  const metaMap = new Map()
  seoTags.reverse().forEach(tag => {
    const key = tag.name || tag.property
    if (key && !metaMap.has(key)) {
      metaMap.set(key, true)
      uniqueMetaTags.unshift(tag)
    } else if (!key) {
      // Tags without name/property (like charset)
      uniqueMetaTags.unshift(tag)
    }
  })

  return {
    htmlAttributes: { lang },
    title: title, // The specific page title
    defaultSiteTitle: defaultSiteTitle, // The site title, for use in titleTemplate
    meta: uniqueMetaTags,
    links: [{ rel: "canonical", href: canonicalUrl, id: "canonical" }],
  }
}
