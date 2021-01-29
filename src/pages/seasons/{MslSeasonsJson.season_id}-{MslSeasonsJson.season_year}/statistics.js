import React from "react"

import Layout from "components/layout"
import SEO from "components/seo"

const StatsIndexPage = props => {
  const path = props.path
  const pageContext = props.pageContext

  return (
    <Layout>
      <SEO
        title={`Statistics ${pageContext.season_id}-${pageContext.season_year}`}
        path={path}
      />
      <h1>
        Hi Statistics {pageContext.season_id}-{pageContext.season_year}
      </h1>
    </Layout>
  )
}

export default StatsIndexPage
