import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import MslFixtureItem from "components/msl/schedule/fixture-item"
import { formatDateString } from "graphql/lib/utility"

const MslFixtureGroup = ({
  item,
  fixtureGroupArr,
  index,
  fixtureGroup,
  openState,
}) => {
  const [isOpen, setIsOpen] = useState(openState.val)
  const toggleAccordionState = () => setIsOpen(value => !value)
  const dateval = formatDateString(`${item}`)

  useEffect(() => {
    // Update the document title using the browser API
    setIsOpen(openState.val)
  }, [openState])

  return (
    <li key={`fixture_${item}`} id={`fixture_${item}`}>
      <article>
        <div className="grid md:grid-cols-7 xl:grid-cols-7 items-start relative p-3 pl-1 sm:p-5  sm:pl-1 xl:p-6 xl:pl-1 overflow-hidden">
          <button
            className="w-max p-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
            onClick={toggleAccordionState}
          >
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
                    d="M 6 -6 V -38"
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
            className={`col-span-7 ml-7 mt-2 ${isOpen ? "block" : "hidden"}`}
          >
            {fixtureGroup[item].map((fixture, index) => {
              return (
                <MslFixtureItem
                  fixture={fixture}
                  index={index + 1}
                  id={`schedule_${fixture?.schedule_id}`}
                  key={`schedule_${fixture?.schedule_id}`}
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
