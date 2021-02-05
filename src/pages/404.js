import React from "react"
import { remarkForm, liveRemarkForm, RemarkForm } from "gatsby-tinacms-remark"
import { Wysiwyg } from "@tinacms/fields"
import { TinaField } from "tinacms"
import { graphql } from "gatsby"

import Layout from "components/layout"
import SEO from "components/seo"

const NotFoundPage = ({ path, data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} path={path} />
      <div className="flex h-screen justify-center items-center ">
        <div className="text-center">
          <p className="text-9xl text-dark-700 dark:text-dark-200 ">
            {frontmatter.description}
          </p>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { slug: { eq: "404" } }) {
      html
      ...TinaRemark
      frontmatter {
        description
        slug
        title
      }
    }
  }
`
const PageForm = {
  fields: [
    {
      label: "Title",
      name: "frontmatter.title",
      description: "Enter the title of the page here",
      component: "text",
    },
    {
      label: "Description",
      name: "frontmatter.description",
      description: "Enter the page description",
      component: "textarea",
    },
  ],
}

export default remarkForm(NotFoundPage, PageForm)
