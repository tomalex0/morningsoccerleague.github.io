import { Link } from "gatsby"
import React, { useState } from "react"

const MslThemeSwitch = props => {
  const [toggleActive, setToggleActive] = useState(false)
  const toggleState = () => setToggleActive(value => !value)
  return (
    <div>
      <label htmlFor="toggle" className="cursor-pointer">
        <button
          type="button"
          className="pointer-events-none group rounded-md border border-transparent focus:bg-gray-100 focus:outline-none dark:focus:bg-black dark:focus:border-gray-800 text-gray-400"
        >
          <span className="sr-only">
            <span className="dark:hidden">Switch to dark theme</span>
            <span className="hidden dark:inline">Switch to light theme</span>
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="dark:text-yellow-400 w-6 hidden dark:inline"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="text-gray-900 w-6 inline dark:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </button>
      </label>
      <input
        type="checkbox"
        id="toggle"
        className=" pointer-events-none hidden"
      />
    </div>
  )
  // return (
  //   <div
  //     className={`w-14 h-8 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out ${
  //       toggleActive ? "bg-green-400" : ""
  //     }`}
  //     onClick={toggleState}
  //   >
  //     <div
  //       className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
  //         toggleActive ? "translate-x-6" : ""
  //       }`}
  //     ></div>
  //   </div>
  // )
}

export default MslThemeSwitch
