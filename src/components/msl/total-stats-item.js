import { Link } from "gatsby"
import React from "react"
const icon = (
  <svg
    className="flex-shrink-0 h-6 w-6 text-indigo-600 dark:text-indigo-400"
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
const MslTotalStatsItem = ({ title, value, children = icon }) => {
  return (
    <div className="flex py-2 px-2 bg-white  dark:bg-gray-800  rounded-xl shadow-md items-center ">
      <div>{children}</div>
      <div className="ml-2 md:ml-4">
        <p className="text-base font-medium text-gray-900 dark:text-gray-300">
          {title}
        </p>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{value}</p>
      </div>
    </div>
  )
}

export default MslTotalStatsItem
