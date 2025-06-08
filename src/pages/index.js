import React from "react"

import Layout from "components/layout"
// import Image from "components/image"
// import SEO from "components/seo"; // Removed
import { useSeoData } from "../hooks/useSeoData"
import MslHero from "components/msl/hero"
import MslAllStats from "components/msl/stats/all-stats"
import MslMission from "components/msl/mission"

const IndexPage = ({ path }) => (
  <Layout>
    <MslHero />
    <MslMission />
    <MslAllStats />
    {/* <SEO title="Home" path={path} /> */} {/* Removed */}
    {/*<div className="my-12 mx-auto w-60 bg-dark-50">*/}
    {/*  <Image />*/}
    {/*</div>*/}
  </Layout>
)

export default IndexPage

export const Head = ({ location }) => {
  const seoData = useSeoData({
    title: "Home",
    pathname: location.pathname,
    // description, image, lang, meta can be added if needed for this page
  })

  return (
    <>
      {seoData.htmlAttributes.lang && (
        <html lang={seoData.htmlAttributes.lang} />
      )}
      {seoData.title && (
        <title id="title">
          {seoData.defaultSiteTitle
            ? seoData.titleTemplate.replace("%s", seoData.title)
            : seoData.title}
        </title>
      )}
      {seoData.meta.map((tag, index) => (
        <meta
          key={index}
          name={tag.name}
          property={tag.property}
          content={tag.content}
        />
      ))}
      {seoData.links.map((link, index) => (
        <link key={index} rel={link.rel} href={link.href} id={link.id} />
      ))}
    </>
  )
}
