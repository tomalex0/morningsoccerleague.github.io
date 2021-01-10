import React from "react"
import { Link } from "gatsby"

import Layout from "components/layout"
import SEO from "components/seo"

// import MslRulesIndex from "components/msl/rules/index"
const MslLazyFrame = React.lazy(() => import("components/msl/lazy-frame"))

const IndexPage = ({ path }) => {
  const isSSR = typeof window === "undefined"
  return (
    <Layout>
      <SEO title="Register" path={path} />
      <div className=" mx-auto px-5 mt-10">
        <h1 className="text-2xl font-bold leading-7 text-gray-600 dark:text-gray-300  sm:text-3xl sm:truncate mb-4">
          Register
        </h1>
        <div>
          {!isSSR && (
            <React.Suspense fallback={<div>&nbsp;</div>}>
              <MslLazyFrame
                src="https://docs.google.com/forms/d/e/1FAIpQLScU7tT25geKChwExgov8qDkwVlkPs1i_D7Otv9OGalAcKoPRA/viewform?embedded=true"
                height="450"
                className="rounded-md shadow-md bg-gray-100 dark:bg-gray-800 py-10"
              />
            </React.Suspense>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
