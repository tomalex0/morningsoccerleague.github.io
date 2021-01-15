import { Link } from "gatsby"
import React from "react"

const MslTableHeaderCell = ({ children, cssName }) => {
  return (
    <th
      scope="col"
      className={`px-2 py-2 text-left text-xs font-medium text-light-50 dark:text-dark-200 uppercase tracking-wider ${cssName}`}
    >
      {children}
    </th>
  )
}

export default MslTableHeaderCell
