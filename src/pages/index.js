import React from "react"
import { Link } from "gatsby"

import Layout from "components/layout"
import Image from "components/image"
import SEO from "components/seo"
import MslHero from "components/msl/hero"

const IndexPage = ({ path }) => (
  <Layout>
    <MslHero />
    <SEO title="Home" path={path} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site v16.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
