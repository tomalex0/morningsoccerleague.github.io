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
          <div className="relative w-full md:w-3/6 mx-auto">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              />
            </svg>

            <input
              type="text"
              className="focus:border-light-indigo-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10  shadow-md"
              aria-label="Search"
              placeholder="Type to filter players..."
              onChange={handleInputChange}
            />
          </div>
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
