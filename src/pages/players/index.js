import React, { useState } from "react"
import { Link, graphql } from "gatsby"

import Layout from "components/layout"
import SEO from "components/seo"
import MslPlayerStatsItem from "components/msl/player-stats-item"
import MslPlayerItem from "components/msl/player-item"

import {
  MslPlayersJsonFragment,
  MslTeamsJsonFragment,
  MslSeasonsJsonFragment,
  MslPlayerStatsFragment,
} from "data/fragments"

const PlayersIndex = ({ data, path }) => {
  const { players } = data

  const [playerList, setPlayerList] = useState(players.nodes)
  const [searchQuery, setSearchQuery] = useState("")

  function handleInputChange(event) {
    const query = event.target.value
    setSearchQuery(query)
    const filteredData = players.nodes.filter(player => {
      // destructure data from post frontmatter
      const { name } = player
      return (
        // standardize data with .toLowerCase()
        // return true if the description, title or tags
        // contains the query string
        name.toLowerCase().includes(query.toLowerCase())
      )
    })
    setPlayerList(filteredData)
  }

  return (
    <Layout>
      <SEO title="Players" path={path} />
      <div className="mt-5 px-5 divide-y divide-gray-300">
        <div className="mb-3 text-center">
          <input
            type="text"
            className="w-full md:w-5/12 p-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 rounded-md"
            aria-label="Search"
            placeholder="Type to filter players..."
            onChange={handleInputChange}
          />
          <div className="mt-2 text-gray-600 dark:text-gray-300 text-left">
            {playerList.length} Results
          </div>
        </div>

        {playerList.length > 0 &&
          playerList.map(player => (
            <div className="mb-7 pt-5">
              <MslPlayerItem
                player={player}
                fontSize="text-md md:text-lg"
                playerNameCss="font-medium text-gray-600 dark:text-gray-300"
                imageWidth="w-14"
                imageHeight="h-14"
                showImage={true}
              />
              <div>
                <MslPlayerStatsItem
                  stats={player?.playerStats?.allseasonStats}
                />
              </div>
            </div>
          ))}
        {playerList.length <= 0 && (
          <div className="text-center p-4 text-white text-xl">
            Player Not Found
          </div>
        )}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    players: allMslPlayersJson(
      sort: { fields: name, order: ASC } # filter: { player_id: { in: [1, 45, 54, 2] } }
    ) {
      nodes {
        ...MslPlayersJsonFragment
        playerStats {
          ...MslPlayerStatsFragment
        }
        seasons {
          ...MslSeasonsJsonFragment
        }
      }
    }
  }
`

export default PlayersIndex
