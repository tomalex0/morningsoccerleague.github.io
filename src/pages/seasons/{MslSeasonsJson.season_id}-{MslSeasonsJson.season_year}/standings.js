import React from "react"
import { Link } from "gatsby"

import Layout from "components/layout"
import Image from "components/image"
import SEO from "components/seo"

const StandingsIndexPage = props => {
  const path = props.path
  const pageContext = props.pageContext

  return (
    <Layout>
      <SEO
        title={`Standings ${pageContext.season_id}-${pageContext.season_year}`}
        path={path}
      />
      <h1>
        Hi Standings {pageContext.season_id}-{pageContext.season_year}
      </h1>
    </Layout>
  )
}

export default StandingsIndexPage
