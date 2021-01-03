import { Link } from "gatsby"
import React from "react"

const MslSeasonStatsItem = ({ season }) => {
  return (
    <div className="lg:flex lg:items-center lg:justify-between px-5">
      <div className="flex-1 min-w-0">
        <h1 className="text-2xl font-bold leading-7 text-gray-600 dark:text-gray-300  sm:text-3xl sm:truncate">
          <Link to={season.seasonPath}>
            Season {season.season_id} ({season.season_year})
          </Link>
        </h1>
        <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <svg
              className="flex-shrink-0 h-6 w-6 text-indigo-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <div className="ml-4">
              <p className="text-base font-medium text-gray-900">Total Games</p>
              <p className="mt-1 text-sm text-gray-500">
                {season.seasonStats.games}
              </p>
            </div>
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <svg
              className="flex-shrink-0 h-6 w-6 text-indigo-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <div className="ml-4">
              <p className="text-base font-medium text-gray-900">Total Teams</p>
              <p className="mt-1 text-sm text-gray-500">
                {season.seasonStats.teams}
              </p>
            </div>
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <svg
              className="flex-shrink-0 h-6 w-6 text-indigo-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <div className="ml-4">
              <p className="text-base font-medium text-gray-900">
                Total Players
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {season.seasonStats.players}
              </p>
            </div>
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <svg
              className="flex-shrink-0 h-6 w-6 text-indigo-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <div className="ml-4">
              <p className="text-base font-medium text-gray-900">Total Goals</p>
              <p className="mt-1 text-sm text-gray-500">
                {season.seasonStats.goals}
              </p>
            </div>
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <svg
              className="flex-shrink-0 h-6 w-6 text-indigo-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <div className="ml-4">
              <p className="text-base font-medium text-gray-900">Total Fouls</p>
              <p className="mt-1 text-sm text-gray-500">
                {season.seasonStats.fouls}
              </p>
            </div>
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <svg
              className="flex-shrink-0 h-6 w-6 text-indigo-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <div className="ml-4">
              <p className="text-base font-medium text-gray-900">Own Goals</p>
              <p className="mt-1 text-sm text-gray-500">
                {season.seasonStats.owngoals}
              </p>
            </div>
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <svg
              className="flex-shrink-0 h-6 w-6 text-indigo-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <div className="ml-4">
              <p className="text-base font-medium text-gray-900">
                Total Assists
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {season.seasonStats.assists}
              </p>
            </div>
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <svg
              className="flex-shrink-0 h-6 w-6 text-indigo-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <div className="ml-4">
              <p className="text-base font-medium text-gray-900">Total Goals</p>
              <p className="mt-1 text-sm text-gray-500">
                {season.seasonStats.unique_players_goals}
              </p>
            </div>
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <svg
              className="flex-shrink-0 h-6 w-6 text-indigo-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <div className="ml-4">
              <p className="text-base font-medium text-gray-900">
                Total Yellow Cards
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {season.seasonStats.yellow_cards}
              </p>
            </div>
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <svg
              className="flex-shrink-0 h-6 w-6 text-indigo-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <div className="ml-4">
              <p className="text-base font-medium text-gray-900">
                Total Red Cards
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {season.seasonStats.red_cards}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MslSeasonStatsItem
