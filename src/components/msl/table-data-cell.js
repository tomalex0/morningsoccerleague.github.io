import { Link } from "gatsby"
import React from "react"

const MslTableDataCell = ({ children }) => {
  return (
    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-900">
      {children}
    </td>
  )
}

export default MslTableDataCell
