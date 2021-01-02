import React from "react"
import { Link } from "gatsby"

import Layout from "components/layout"
import SEO from "components/seo"

const IndexPage = ({ path }) => (
  <Layout>
    <SEO title="Rules" path={path} />
    <h1>Hi Rules</h1>
  </Layout>
)

export default IndexPage
