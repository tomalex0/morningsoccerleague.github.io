import React from "react"
import { graphql } from "gatsby"

import Layout from "components/layout"
// import SEO from "components/seo"; // Removed
import { useSeoData } from "../../../hooks/useSeoData" // Adjusted path
import MslTeamListItem from "components/msl/team/team-list-item"
import {
  MslPlayersJsonFragment,
  MslTeamsJsonFragment,
  MslSeasonsJsonFragment,
  MslTeamStatsFragment,
} from "data/fragments"

const TeamsIndex = ({ data, path }) => {
  const { teams } = data
  return (
    <Layout>
      {/* <SEO title="Teams" path={path} /> */} {/* Removed */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-10 px-5">
        {teams.nodes.map(team => (
          <MslTeamListItem team={team} key={team.team_id} />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    teams: allMslTeamsJson(sort: { teamName: ASC }) {
      nodes {
        ...MslTeamsJsonFragment
        teamStats {
          ...MslTeamStatsFragment
        }
      }
    }
  }
`

export default TeamsIndex

export const Head = ({ location }) => {
  const seoData = useSeoData({
    title: "Teams",
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
