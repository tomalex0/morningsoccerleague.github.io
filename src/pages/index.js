import React from "react"
import { Link } from "gatsby"

import Layout from "components/layout"
import Image from "components/image"
import SEO from "components/seo"
import MslHero from "components/msl/hero"
import MslAllStats from "components/msl/all-stats"
import MslMission from "components/msl/mission"

const IndexPage = ({ path }) => (
  <Layout>
    <MslHero />
    <MslMission />
    <MslAllStats />
    <SEO title="Home" path={path} />
    {/*<div className="my-12 mx-auto w-60 bg-gray-50">*/}
    {/*  <Image />*/}
    {/*</div>*/}
  </Layout>
)

export default IndexPage
