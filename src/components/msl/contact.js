import { Link } from "gatsby"
import React from "react"

const MslContact = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          <span className="block ">Interested to play?</span>
        </h2>
        <div className="mt-8 lex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="mailto:morningsoccerleague@gmail.com"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-light-800 bg-white hover:bg-light-50 dark:text-dark-800 dark:hover:bg-dark-50"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MslContact
