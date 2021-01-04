import { Link } from "gatsby"
import React from "react"

const MslTableHeaderCell = ({ children }) => {
  return (
    <th
      scope="col"
      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
    >
      {children}
    </th>
  )
}

export default MslTableHeaderCell
