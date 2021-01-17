import { Link } from "gatsby"
import React from "react"

const MslTableDataCell = ({ children }) => {
  return (
    <td
      className={`px-2 py-2 whitespace-nowrap text-sm text-dark-500 dark:text-dark-900 break-words`}
    >
      {children}
    </td>
  )
}

export default MslTableDataCell
