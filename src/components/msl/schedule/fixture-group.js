import { Link } from "gatsby"
import React, { useState } from "react"
import MslFixtureItem from "components/msl/schedule/fixture-item"
import { formatDateString } from "graphql/lib/utility"

const MslFixtureGroup = ({ item, fixtureGroupArr, index, fixtureGroup }) => {
  const [isOpen, setIsOpen] = useState(true)
  const toggleAccordionState = () => setIsOpen(value => !value)
  const dateval = formatDateString(`${item}`)
  return (
    <li key={item}>
      <article>
        <div className="grid md:grid-cols-7 xl:grid-cols-7 items-start relative rounded-xl p-3 sm:p-5 xl:p-6 overflow-hidden">
          <button className="w-max" onClick={toggleAccordionState}>
            <time
              dateTime={item}
              className="md:col-start-1 md:col-span-2 row-start-1 md:row-end-3 flex items-center font-medium mb-1 md:mb-0"
            >
              <svg
                viewBox="0 0 12 12"
                className="w-3 h-3 mr-6 overflow-visible text-indigo-700 dark:text-indigo-400"
              >
                <circle cx={6} cy={6} r={6} fill="currentColor" />
                <circle
                  cx={6}
                  cy={6}
                  r={11}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                />
                {index > 0 && (
                  <path
                    d="M 6 -6 V -30"
                    fill="none"
                    stroke-width="2"
                    stroke="currentColor"
                    className="text-gray-400 dark:text-gray-400"
                  ></path>
                )}
                {fixtureGroupArr.length > index + 1 && (
                  <path
                    d="M 6 18 V 1800"
                    fill="none"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="text-gray-400 dark:text-gray-400"
                  />
                )}
              </svg>
              <div className="text-gray-800 dark:text-gray-300">{dateval}</div>
            </time>
          </button>
          <div
            className={`col-span-7 ml-5 mt-2 ${isOpen ? "block" : "hidden"}`}
          >
            {fixtureGroup[item].map((fixture, index) => {
              return (
                <MslFixtureItem
                  fixture={fixture}
                  index={index + 1}
                  key={fixture.schedule_id}
                />
              )
            })}
          </div>
        </div>
      </article>
    </li>
  )
}

export default MslFixtureGroup
