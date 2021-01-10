import { Link } from "gatsby"
import React from "react"
import MslFormatLogistics from "components/msl/rules/format-logistics"
import MslTimingChart from "components/msl/rules/timing-chart"
import MslRules from "components/msl/rules/rules"
import Layout from "components/layout"

const MslRulesIndex = () => {
  return (
    <>
      <div className="max-w-md mx-auto">
        <div className="flex overflow-auto py-0.5 -my-0.5 pl-0.5 mx-0 sm:-mx-6 md:-mx-8 xl:-ml-4 xl:mr-0">
          <ul className="whitespace-nowrap mx-auto xl:mx-0 px-4 sm:px-6 md:px-8 xl:px-0 flex space-x-2 sm:space-x-6">
            <li className="relative">
              <button
                type="button"
                className="block w-full relative z-10 px-2 py-1 leading-6 text-sm md:text-base font-semibold focus:outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-white focus-visible:ring-gray-300 hover:text-gray-900 rounded-full text-gray-400"
              >
                Format & Logistics
              </button>
            </li>
            <li className="relative">
              <div className="absolute inset-0 bg-gray-100 rounded-full" />
              <button
                type="button"
                className="block w-full relative z-10 px-2 py-1 leading-6 text-sm md:text-base font-semibold focus:outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-white focus-visible:ring-gray-300 hover:text-gray-900 rounded-full text-gray-900"
              >
                Timing Chart
              </button>
            </li>
            <li className="relative">
              <button
                type="button"
                className="block w-full relative z-10 px-2 py-1 leading-6 text-sm md:text-base font-semibold focus:outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-white focus-visible:ring-gray-300 hover:text-gray-900 rounded-full text-gray-400"
              >
                Rules
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative col-start-2 col-end-3 lg:col-end-3 row-start-2 row-end-3 lg:row-start-3 lg:row-end-4 self-center pr-8 sm:px-6 md:px-8 pt-6 md:pt-8 lg:px-0 lg:pt-0">
        <div className="flex flex-wrap pl-4 pb-6 sm:pl-0 lg:pb-0 lg:mr-6 text-sm font-black text-purple-300">
          <div className="w-full grid grid-cols-1 gap-4 block">
            <h1 className="mt-6">MslFormatLogistics</h1>
            <MslFormatLogistics />
          </div>
          <div className="w-full grid grid-cols-1 gap-4 block">
            <h1 className="mt-6">MslTimingChart</h1>
            <MslTimingChart />
          </div>
          <div className="w-full grid grid-cols-1 gap-4 block">
            <h1 className="mt-6">MslRules</h1>
            <MslRules />
          </div>
        </div>
      </div>
    </>
  )
}

export default MslRulesIndex
