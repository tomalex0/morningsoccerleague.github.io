import React from "react"

import Layout from "components/layout"
// import SEO from "components/seo"; // Removed
import { useSeoData } from "../hooks/useSeoData"

// import MslRulesIndex from "components/msl/rules/index"
const MslLazyFrame = React.lazy(() => import("components/msl/lazy-frame"))

const IndexPage = ({ path }) => {
  const isSSR = typeof window === "undefined"
  return (
    <Layout>
      {/* <SEO title="Rules" path={path} /> */} {/* Removed */}
      <div className=" mx-auto px-5 mt-10">
        <h1 className="text-2xl font-bold leading-7  text-dark-600 dark:text-dark-300  sm:text-3xl sm:truncate mb-4">
          Rules
        </h1>
        <div>
          {!isSSR && (
            <React.Suspense fallback={<div>&nbsp;</div>}>
              <MslLazyFrame
                title="Rules"
                src="https://docs.google.com/document/d/e/2PACX-1vR--CaAYvakxKnHSqDpYqcWV0Rc-2BvqWX6Jph9ieH1P-11BIMWOtxDETui5vawTNcqB1ir5xaS-GwU/pub?embedded=true"
                height="3550"
                scrolling="yes"
                className="rounded-md bg-dark_alt dark:bg-dark-800 shadow-md"
              />
            </React.Suspense>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = ({ location }) => {
  const seoData = useSeoData({
    title: "Rules",
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
