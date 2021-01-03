import { Link } from "gatsby"
import React from "react"

const MslTotalStatsItem = ({ title, value, children }) => {
  return (
    <div className="mt-2 flex">
      <div>{children}</div>
      <div className="ml-4">
        <p className="text-base font-medium text-gray-900 dark:text-gray-300">
          {title}
        </p>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{value}</p>
      </div>
    </div>
  )
}

export default MslTotalStatsItem
