import React from "react"
import { graphql } from "gatsby"

import Layout from "components/layout"
// import SEO from "components/seo"; // Removed
import { useSeoData } from "../../../hooks/useSeoData" // Adjusted path
import MslPlayerStatsItem from "components/msl/player/player-stats-item"
import MslPlayerSeasonStats from "components/msl/player/player-season-stats"

import {
  MslPlayersJsonFragment,
  MslTeamsJsonFragment,
  MslSeasonsJsonFragment,
  MslPlayerStatsFragment,
} from "data/fragments"

function Player({ data, path }) {
  const { player } = data
  const seasonStats = player?.playerStats?.seasonStats
  const allSeasonStats = player?.playerStats?.allseasonStats
  return (
    <Layout>
      {/* <SEO title={player.name} path={path} /> */} {/* Removed */}
      <div className="lg:flex lg:items-center lg:justify-between px-5 mt-5">
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl font-bold leading-7 text-dark-600 dark:text-dark-300  sm:text-3xl sm:truncate">
            {player.name}
          </h1>
          <MslPlayerStatsItem stats={allSeasonStats} />
        </div>
      </div>
      <div className="mx-5 mt-5 pb-5 overflow-hidden">
        <div className="py-5">
          <h2 className="text-lg leading-6 font-medium text-dark-900 dark:text-dark-300">
            Seasons
          </h2>
        </div>
        <MslPlayerSeasonStats seasons={seasonStats} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    player: mslPlayersJson(id: { eq: $id }) {
      ...MslPlayersJsonFragment
      playerStats {
        ...MslPlayerStatsFragment
      }
    }
  }
`

export default Player

export const Head = ({ data, location }) => {
  const playerName = data?.player?.name || "Player Details"
  const seoData = useSeoData({
    title: playerName,
    description: `Stats and details for player ${playerName}`,
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
