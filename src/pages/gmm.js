import React from "react"

import Layout from "components/layout"
import SEO from "components/seo"

// import MslRulesIndex from "components/msl/rules/index"
const MslLazyFrame = React.lazy(() => import("components/msl/lazy-frame"))

const IndexPage = ({ path }) => {
  const isSSR = typeof window === "undefined"
  return (
    <Layout>
      <SEO title="GMM" path={path} />
      <div className=" mx-auto px-5 mt-10">
        <h1 className="text-2xl font-bold leading-7 text-dark-600 dark:text-dark-300  sm:text-3xl sm:truncate mb-4">
          GMM
        </h1>
        <div>
          {!isSSR && (
            <React.Suspense fallback={<div>&nbsp;</div>}>
              <MslLazyFrame
                title="GMM"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSkhnl-a0mDjmAVegjluGNV4C0LnRsxNzvMV3hIlz9JIeiQyg6qrog6ZBIln0TamI7Uao0A5J2RYjCW/pubhtml?gid=629921127&single=true&widget=true&headers=false"
                height="1800"
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
