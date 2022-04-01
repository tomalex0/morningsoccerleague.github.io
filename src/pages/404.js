import React from "react"
// import { remarkForm, liveRemarkForm, RemarkForm } from "gatsby-tinacms-remark"
// import { Wysiwyg } from "@tinacms/fields"
// import { TinaField } from "tinacms"
import { graphql } from "gatsby"

import Layout from "components/layout"
import SEO from "components/seo"

const NotFoundPage = ({ path }) => {
  return (
    <Layout>
      <SEO title="404" path={path} />
      <div className="flex h-screen justify-center items-center ">
        <div className="text-center">
          <p className="text-9xl text-dark-700 dark:text-dark-200 ">
            404
          </p>
        </div>
      </div>
    </Layout>
  )
}


export default NotFoundPage
