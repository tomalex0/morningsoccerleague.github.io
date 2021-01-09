import { Link } from "gatsby"
import React from "react"

const MslFixtureItem = ({ fixture }) => {
  console.log(fixture)
  return (
    <div className="flex space-x-0 text-gray-900 bg-gray-50 dark:bg-gray-300 rounded-sm shadow-2xl shadow-inner mb-4 p-2">
      <div className="rounded-l-md flex-grow space-x-1  flex-shrink-0 w-16 text-sm md:text-base flex items-center justify-center">
        <div className="flex-grow h-16 rounded-md font-bold flex items-center justify-end pl-2">
          <Link to={fixture?.home?.team?.teamPath}>
            {fixture?.home?.team?.teamName}
          </Link>
        </div>
        <div className="flex-none w-10 md:w-16 text-2xl font-extrabold flex items-center justify-center">
          <img
            src={fixture?.home?.team?.image?.publicURL}
            className="w-8 md:w-12 mr-1 rounded-full"
          />
        </div>
      </div>
      <div className="flex-shrink flex-shrink-0 w-6 md:w-8 font-bold flex items-center justify-center">
        {fixture?.home?.goals?.length}
      </div>
      <div className="flex-shrink flex-shrink-0 w-2 font-bold flex items-center justify-center">
        -
      </div>
      <div className="flex-shrink flex-shrink-0 w-6 md:w-8 font-bold flex items-center justify-center">
        {fixture?.away?.goals?.length}
      </div>
      <div className="rounded-r-md flex-grow space-x-1 flex-shrink-0 w-16 text-sm md:text-base font-extrabold flex items-center justify-center">
        <div className="flex-none w-10 md:w-16 text-2xl font-extrabold flex items-center justify-center">
          <img
            src={fixture?.away?.team?.image?.publicURL}
            className="w-8 md:w-12 mr-1 rounded-full"
          />
        </div>
        <div className="flex-grow h-16 rounded-md font-bold flex items-center justify-start pr-2">
          <Link to={fixture?.away?.team?.teamPath}>
            {fixture?.away?.team?.teamName}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MslFixtureItem
