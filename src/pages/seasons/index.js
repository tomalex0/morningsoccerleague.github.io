import React from "react"
import { graphql } from "gatsby"

import Layout from "components/layout"
// import SEO from "components/seo"; // Removed
import { useSeoData } from "../../../hooks/useSeoData" // Adjusted path
import MslSeasonStatsItem from "components/msl/season/season-stats-item"

import { getSeasonStats } from "graphql/lib/helpers"

import {
  MslPlayersJsonFragment,
  MslTeamsJsonFragment,
  MslSeasonsJsonFragment,
  MslSeasonsJsonStatsFragment,
} from "data/fragments"

const SeasonsIndex = ({ data, path }) => {
  const { seasons } = data
  const seasonList = getSeasonStats(seasons.nodes)
  return (
    <Layout>
      {/* <SEO title="Seasons" path={path} /> */} {/* Removed */}
      <div>
        {seasonList.map(season => {
          return (
            <div className="mt-10" key={season.season_id}>
              <MslSeasonStatsItem season={season} />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    seasons: allMslSeasonsJson(sort: { season_id: ASC }) {
      nodes {
        ...MslSeasonsJsonStatsFragment
      }
    }
  }
`

export default SeasonsIndex

export const Head = ({ location }) => {
  const seoData = useSeoData({
    title: "Seasons",
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
