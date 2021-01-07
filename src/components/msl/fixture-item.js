import { Link } from "gatsby"
import React from "react"

const MslFixtureItem = ({ fixture }) => {
  console.log(fixture)
  return (
    <div className="flex space-x-0 rounded-b-md text-gray dark:text-white">
      <div className="flex-grow space-x-1  flex-shrink-0 w-16 bg-purple-500  text-xs md:text-base font-extrabold flex items-center justify-center">
        <div className="flex-grow h-16 rounded-md  font-extrabold flex items-center justify-end pl-2">
          {fixture?.home?.team?.teamName}
        </div>
        <div className="flex-none w-8 md:w-16  text-lg font-extrabold flex items-center justify-center">
          <img
            src={fixture?.home?.team?.image?.publicURL}
            className="w-6 md:w-12 mr-1 "
          />
        </div>
      </div>
      <div className="flex-shrink flex-shrink-0 w-10 md:w-12 bg-amber-800  font-extrabold flex items-center justify-center">
        {fixture?.home?.goals?.length}
      </div>
      <div className="flex-shrink flex-shrink-0 w-3 bg-amber-600 font-extrabold flex items-center justify-center">
        -
      </div>
      <div className="flex-shrink flex-shrink-0 w-10 md:w-12 bg-amber-800 font-extrabold flex items-center justify-center">
        {fixture?.away?.goals?.length}
      </div>
      <div className="flex-grow space-x-1 flex-shrink-0 w-16 bg-purple-500  text-xs md:text-base font-extrabold flex items-center justify-center">
        <div className="flex-none w-8 md:w-16 h-16 text-lg font-extrabold flex items-center justify-center">
          <img
            src={fixture?.away?.team?.image?.publicURL}
            className="w-6 md:w-12 mr-1 "
          />
        </div>
        <div className="flex-grow h-16 rounded-md   font-extrabold flex items-center justify-start pr-2">
          {fixture?.away?.team?.teamName}
        </div>
      </div>
    </div>
  )
}

export default MslFixtureItem
