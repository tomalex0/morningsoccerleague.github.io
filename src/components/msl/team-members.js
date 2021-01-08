import { Link } from "gatsby"
import React from "react"
import MslTeamItem from "components/msl/team-item"

const MslTeamMembers = response => {
  const { team, players } = response.data

  return (
    <div className="bg-white dark:bg-gray-300 shadow overflow-hidden rounded-lg">
      <div className="px-4 py-5 sm:px-6 dark:bg-gray-400">
        <h3 className="text-lg leading-6 font-medium text-gray-900  flex items-center">
          <MslTeamItem team={team} />{" "}
          <span className="text-md ml-2">({players.length}) </span>
        </h3>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-400">
        <ul
          className="divide-y divide-gray-200 dark:divide-gray-400"
          aria-disabled="true"
        >
          {players.map(player => (
            <li key={player.player_id}>
              <Link to={player.playerPath} className="block hover:bg-gray-50">
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-indigo-600 dark:text-gray-900 truncate">
                      {player.name}
                    </div>
                    <div className="m-2 flex-shrink-0 flex">
                      {player.isOwner == 1 && (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          FO
                        </span>
                      )}
                      {player.isMos == 1 && (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                          MOS
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MslTeamMembers
