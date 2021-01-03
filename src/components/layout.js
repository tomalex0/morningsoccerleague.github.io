/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import MslContact from "components/msl/contact"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main className="flex-grow mt-16 bg-gray-50 dark:bg-gray-700">
          {children}
        </main>
        <footer>
          <MslContact />
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
