import { Link } from "gatsby"
import React from "react"
import MslTableHeaderCell from "components/msl/table-header-cell"
import MslTableDataCell from "components/msl/table-data-cell"

const MslTable = props => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 dark:border-gray-400 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-400">
              <thead className="bg-gray-50 dark:bg-gray-800">
                {props.children[0]}
              </thead>
              <tbody className="bg-white dark:bg-gray-300 divide-y divide-gray-200 dark:divide-gray-400">
                {props.children[1]}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MslTable
