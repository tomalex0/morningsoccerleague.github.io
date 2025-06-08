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
      {/* <SEO title="Register" path={path} /> */} {/* Removed */}
      <div className=" mx-auto px-5 mt-10">
        <h1 className="text-2xl font-bold leading-7  text-dark-600 dark:text-dark-300 sm:text-3xl sm:truncate mb-4">
          Register
        </h1>
        <div>
          {!isSSR && (
            <React.Suspense fallback={<div>&nbsp;</div>}>
              <MslLazyFrame
                title="Register"
                src="https://docs.google.com/forms/d/e/1FAIpQLScU7tT25geKChwExgov8qDkwVlkPs1i_D7Otv9OGalAcKoPRA/viewform?embedded=true"
                height="450"
                className="rounded-md shadow-md bg-dark_alt dark:bg-dark-800 py-10"
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
    title: "Register",
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
