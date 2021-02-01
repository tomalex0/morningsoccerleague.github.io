import React from "react"

import Layout from "components/layout"
import SEO from "components/seo"

const ManageSeason = ({ path }) => (
  <Layout>
    <SEO title="404: Not found" path={path} />
    <div className="flex h-screen justify-center items-center ">
      <div className="text-center">
        <p className="text-9xl text-dark-700 dark:text-dark-200 ">
          Manage Season
        </p>
      </div>
    </div>
  </Layout>
)

export default ManageSeason
