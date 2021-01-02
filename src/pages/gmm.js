import React from "react"
import { Link } from "gatsby"

import Layout from "components/layout"
import SEO from "components/seo"

const IndexPage = ({ path }) => (
  <Layout>
    <SEO title="Guaranteed Minimum Minutes" path={path} />
    <h1>Hi GMM</h1>
  </Layout>
)

export default IndexPage
