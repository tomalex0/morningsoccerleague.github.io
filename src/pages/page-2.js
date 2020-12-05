import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ path }) => (
  <Layout>
    <SEO title="Page two" path={path} />
    <h1>Hi from the second page</h1>
  </Layout>
)

export default SecondPage
