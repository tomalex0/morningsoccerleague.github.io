import React from "react"
import { Link } from "gatsby"

import Layout from "components/layout"
import Image from "components/image"
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
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Layout>
  )
}

export default StatsIndexPage
