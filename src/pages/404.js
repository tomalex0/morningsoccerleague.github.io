import React from "react"
// import { remarkForm, liveRemarkForm, RemarkForm } from "gatsby-tinacms-remark"
// import { Wysiwyg } from "@tinacms/fields"
// import { TinaField } from "tinacms"
import { graphql } from "gatsby"

import Layout from "components/layout"
// import SEO from "components/seo"; // Removed
import { useSeoData } from "../hooks/useSeoData"

const NotFoundPage = ({ path }) => {
  return (
    <Layout>
      {/* <SEO title="404" path={path} /> */} {/* Removed */}
      <div className="flex h-screen justify-center items-center ">
        <div className="text-center">
          <p className="text-9xl text-dark-700 dark:text-dark-200 ">404</p>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const Head = ({ location }) => {
  const seoData = useSeoData({
    title: "404: Not Found",
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
