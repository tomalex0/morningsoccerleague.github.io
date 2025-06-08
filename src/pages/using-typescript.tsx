// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "components/layout"
// import SEO from "components/seo"; // Removed
import { useSeoData } from "../hooks/useSeoData" // Adjusted path

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    {/* <SEO title="Using TypeScript" path={path} /> */} {/* Removed */}
    <h1>Gatsby supports TypeScript by default!</h1>
    <p>
      This means that you can create and write <em>.ts/.tsx</em> files for your
      pages, components etc. Please note that the <em>gatsby-*.js</em> files
      (like gatsby-node.js) currently don&apos;t support TypeScript yet.
    </p>
    <p>
      For type checking you&apos;ll want to install <em>typescript</em> via npm
      and run <em>tsc --init</em> to create a <em>.tsconfig</em> file.
    </p>
    <p>
      You&apos;re currently on the page "{path}" which was built on{" "}
      {data.site.buildTime}.
    </p>
    <p>
      To learn more, head over to our{" "}
      <a href="https://www.gatsbyjs.com/docs/typescript/">
        documentation about TypeScript
      </a>
      .
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default UsingTypescript

export const Head = ({ location }: { location: { pathname: string } }) => {
  const seoData = useSeoData({
    title: "Using TypeScript",
    pathname: location.pathname,
  })

  return (
    <>
      {seoData.htmlAttributes.lang && (
        <html lang={seoData.htmlAttributes.lang} />
      )}
      {seoData.title && (
        <title id="title">
          {seoData.defaultSiteTitle
            ? seoData.titleTemplate.replace("%s", seoData.title)
            : seoData.title}
        </title>
      )}
      {seoData.meta.map((tag, index) => (
        <meta
          key={index}
          name={tag.name}
          property={tag.property}
          content={tag.content}
        />
      ))}
      {seoData.links.map((link, index) => (
        <link key={index} rel={link.rel} href={link.href} id={link.id} />
      ))}
    </>
  )
}

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
