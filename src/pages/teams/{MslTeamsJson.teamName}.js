import React from "react"
import { graphql } from "gatsby"

import Layout from "components/layout"
// import SEO from "components/seo"; // Removed
import { useSeoData } from "../../../hooks/useSeoData" // Adjusted path
import MslTeamSeasonStats from "components/msl/team/team-season-stats"
import MslTeamStatsItem from "components/msl/team/team-stats-item"
import MslTeamImg from "components/msl/team/team-image"

import {
  MslTeamsJsonFragment,
  MslSeasonsJsonStatsFragment,
  MslTeamStatsFragment,
} from "data/fragments"

function Team({ path, data }) {
  const { team } = data
  const seasonStats = team?.teamStats?.seasonStats
  const allSeasonStats = team?.teamStats?.allseasonStats

  return (
    <Layout>
      {/* <SEO title={team.teamName} path={path} /> */} {/* Removed */}
      <div className="lg:flex lg:items-center lg:justify-between px-5 mt-10">
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl flex items-center font-bold leading-7 text-dark-600 dark:text-dark-300  sm:text-3xl sm:truncate p-2">
            <MslTeamImg
              team={team}
              className="block h-16 w-16 rounded-full sm:mx-0 sm:flex-shrink-0"
            />
            <span className="pl-2">{team.teamName}</span>
          </h1>
          <MslTeamStatsItem stats={allSeasonStats} />
        </div>
      </div>
      <div className="mx-5 mt-5 pb-5 overflow-hidden">
        <div className="py-5">
          <h2 className="text-lg leading-6 font-medium text-dark-900 dark:text-dark-300">
            Seasons
          </h2>
        </div>
        <MslTeamSeasonStats seasons={seasonStats} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    team: mslTeamsJson(id: { eq: $id }) {
      ...MslTeamsJsonFragment
      teamStats {
        ...MslTeamStatsFragment
      }
      seasons {
        ...MslSeasonsJsonStatsFragment
      }
    }
  }
`

export default Team

export const Head = ({ data, location }) => {
  const teamName = data?.team?.teamName || "Team Details"
  const seoData = useSeoData({
    title: teamName,
    description: `Stats and details for team ${teamName}`,
    pathname: location.pathname,
    // You might want to add a team-specific image here if available in data.team
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
