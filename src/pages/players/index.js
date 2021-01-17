import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"

import Layout from "components/layout"
import SEO from "components/seo"
import MslPlayerStatsItem from "components/msl/player/player-stats-item"
import MslPlayerItem from "components/msl/player/player-item"

import { predicate } from "graphql/lib/utility"

import {
  MslPlayersJsonFragment,
  MslTeamsJsonFragment,
  MslSeasonsJsonFragment,
  MslPlayerStatsFragment,
} from "data/fragments"

const sort_by = (field, reverse, primer) => {
  const key = primer
    ? function (x) {
        return primer(x[field])
      }
    : function (x) {
        return x[field]
      }

  reverse = !reverse ? 1 : -1

  return function (a, b) {
    return (a = key(a)), (b = key(b)), reverse * ((a > b) - (b > a))
  }
}

const PlayersIndex = ({ data, path }) => {
  const { players } = data
  const playersFormatted = players.nodes.map(item => ({
    ...item,
    ...item?.playerStats?.allseasonStats,
  }))
  const [playerList, setPlayerList] = useState(playersFormatted)
  const [searchQuery, setSearchQuery] = useState("")
  const [sortState, setSortState] = useState("name")
  const [orderState, setOrderState] = useState(0)

  function handleInputChange(event) {
    const query = event.target.value
    setSearchQuery(query)
  }

  function handleSortChange(event) {
    const sortKey = event.target.value
    setSortState(sortKey)
  }

  function handleOrderChange(event) {
    const sortOrder = event.target.value
    setOrderState(sortOrder)
  }
  useEffect(() => {
    function searchFilter(query, sortKey, sortOrder) {
      var filteredData = [...playersFormatted].filter(player => {
        // destructure data from post frontmatter
        const { name } = player
        return (
          // standardize data with .toLowerCase()
          // return true if the description, title or tags
          // contains the query string
          name.toLowerCase().includes(query.toLowerCase())
        )
      })

      filteredData = filteredData.slice().sort(
        predicate({
          name: `${sortKey}`,
          reverse: Boolean(parseInt(sortOrder)),
        })
      )

      setPlayerList(filteredData)
    }

    searchFilter(searchQuery, sortState, orderState)
  }, [searchQuery, sortState, orderState])

  return (
    <Layout>
      <SEO title="Players" path={path} />
      <div className="mt-5 px-5 divide-y divide-dark-300">
        <div className="mb-3 text-center">
          <form className="flex w-full max-w-lg mx-auto space-l-0 space-x-2 relative">
            <div className="flex-1 ">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-dark-400"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                />
              </svg>
              <input
                type="text"
                className="appearance-none focus:ring-2 focus:ring-light-800 dark:focus:ring-dark-800  focus:outline-none w-full text-sm text-black placeholder-dark-500 border border-dark-200 rounded-md py-2 pl-8 shadow-md bg-dark_alt"
                aria-label="Search"
                placeholder="Type to filter players..."
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
            <select
              id="sortby"
              name="sortby"
              autoComplete="sortby"
              onChange={e => setSortState(e.target.value)}
              className="flex-shrink-0 py-2 px-2 rounded-md shadow-md w-24 focus:ring-2 focus:ring-light-800 dark:focus:ring-dark-800 focus:outline-none text-sm text-black placeholder-dark-500 border border-dark-200 bg-dark_alt"
            >
              <option value="name">Sort By</option>
              <option value="name">Name</option>
              <option value="goals">Goals</option>
              <option value="assists">Assists</option>
              <option value="mos">Mos</option>
              <option value="yellow_cards">Yellow Cards</option>
              <option value="red_cards">Red Cards</option>
              <option value="mom">Mom</option>
              <option value="saves">Saves</option>
              <option value="referees">Referee</option>
            </select>

            <select
              id="orderby"
              name="orderby"
              autoComplete="orderby"
              onChange={e => setOrderState(e.target.value)}
              className="flex-shrink-0 py-2 px-2 rounded-md shadow-md w-18 focus:ring-2 focus:ring-light-800 dark:focus:ring-dark-800 focus:outline-none text-sm text-black placeholder-dark-500 border border-dark-200 bg-dark_alt"
            >
              <option value="0">ASC</option>
              <option value="1">DESC</option>
            </select>
          </form>
          <div className="mt-2 text-dark-600 dark:text-dark-300 text-left">
            {playerList.length} Results
          </div>
        </div>
        <div>
          {playerList.length > 0 &&
            playerList.map(player => (
              <div className="mb-7 pt-5" key={player.player_id}>
                <MslPlayerItem
                  player={player}
                  fontSize="text-md md:text-lg"
                  playerNameCss="font-medium text-dark-600 dark:text-dark-300"
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
        </div>
        <div>
          {playerList.length <= 0 && (
            <div className="text-center p-4 text-dark_alt text-xl">
              Player Not Found
            </div>
          )}
        </div>
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
