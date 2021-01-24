/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { ThemeContext } from "context/theme-context"

import Header from "./header"
import MslContact from "components/msl/contact"

import FbLogo from "images/social/facebook.svg"

const Layout = ({ children }) => {
  const { theme, setTheme } = useContext(ThemeContext)
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
      <div className={`flex flex-col h-screen justify-between ${theme}`}>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main className="flex-grow mt-16 bg-light-50 dark:bg-dark-700 pb-10">
          {children}
        </main>
        <footer className="bg-light-50 dark:bg-dark-800 text-light-800 dark:text-dark-300">
          <MslContact />
          <div className="pt-2">
            <div
              className="flex pb-5 px-3 m-auto pt-5
      border-t border-yellow-50 text-sm
      flex-col md:flex-row max-w-6xl"
            >
              <div className="mt-2">
                Copyright: © {new Date().getFullYear()} Morning Soccer League.
                All Rights Reserved.
              </div>
              <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                <a
                  href="https://www.facebook.com/morningsoccerleague/"
                  rel="noreferrer"
                  target="_blank"
                  className="w-8 mx-1"
                >
                  <img alt="Facebook" src={FbLogo} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
