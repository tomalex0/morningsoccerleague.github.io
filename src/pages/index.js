import React from "react"
import { Link } from "gatsby"

import Layout from "components/layout"
import Image from "components/image"
import SEO from "components/seo"
import MslHero from "components/msl/hero"
import MslAllStats from "components/msl/all-stats"

const IndexPage = ({ path }) => (
  <Layout>
    <MslHero />
    <MslAllStats />
    <SEO title="Home" path={path} />
    <div className="mx-auto w-60">
      <Image />
    </div>
  </Layout>
)

export default IndexPage
