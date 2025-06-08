import React from "react"

import Layout from "components/layout"
// import SEO from "components/seo"; // Removed
import { useSeoData } from "../../../hooks/useSeoData" // Adjusted path

const ManageSeason = ({ path }) => (
  <Layout>
    {/* <SEO title="404: Not found" path={path} /> */}{" "}
    {/* Removed, and title was incorrect */}
    <div className="flex h-screen justify-center items-center ">
      <div className="text-center">
        <p className="text-9xl text-dark-700 dark:text-dark-200 ">
          Manage Season
        </p>
      </div>
    </div>
  </Layout>
)

export default ManageSeason

export const Head = ({ location }) => {
  const seoData = useSeoData({
    title: "Manage Season", // Corrected title
    pathname: location.pathname,
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
