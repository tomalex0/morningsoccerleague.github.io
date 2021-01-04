import { Link } from "gatsby"
import React from "react"

const MslAllStatsItem = ({ title, value, children }) => {
  return (
    <div className="flex">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-700 dark:bg-gray-800 text-white dark:text-indigo-400 shadow-md">
          {children}
        </div>
      </div>
      <div className="ml-4">
        <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-300">
          {title}
        </dt>
        <dd className="mt-2 text-base text-gray-600 dark:text-gray-400">
          {value}
        </dd>
      </div>
    </div>
  )
}

export default MslAllStatsItem
