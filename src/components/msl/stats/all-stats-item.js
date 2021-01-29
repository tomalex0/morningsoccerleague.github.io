import React from "react"
const icon = (
  <svg
    className="h-6 w-6"
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
)
const MslAllStatsItem = ({ title, value, children = icon }) => {
  return (
    <div className="flex">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-light-800 dark:bg-dark-800 text-light-50 dark:text-light-50 shadow-md">
          {children}
        </div>
      </div>
      <dl className="ml-4">
        <dt className="text-lg leading-6 font-medium text-dark-900 dark:text-dark-300">
          {title}
        </dt>
        <dd className="mt-2 text-base text-dark-600 dark:text-dark-400">
          {value}
        </dd>
      </dl>
    </div>
  )
}

export default MslAllStatsItem
