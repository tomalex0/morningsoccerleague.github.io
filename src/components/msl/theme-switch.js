import { Link } from "gatsby"
import React, { useState, useContext } from "react"
import { ThemeContext } from "context/theme-context"

const MslThemeSwitch = props => {
  const [toggleActive, setToggleActive] = useState(false)
  const { theme, setTheme } = useContext(ThemeContext)
  const toggleState = () => setToggleActive(value => !value)

  const handleThemeToggle = () => {
    if (theme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  return (
    <div>
      <label htmlFor="toggle" className="cursor-pointer block p-2">
        <button
          type="button"
          className="text-light-50 dark:text-dark-300 pointer-events-none group rounded-md border border-transparent focus:bg-dark-100 focus:outline-none dark:focus:bg-black dark:focus:border-dark-800  block"
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
            className="w-6"
          >
            <g className="ease-in-out opacity-0 dark:opacity-100">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </g>
            <g className="dark:opacity-0">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </g>
          </svg>
          {/*<svg*/}
          {/*  xmlns="http://www.w3.org/2000/svg"*/}
          {/*  fill="none"*/}
          {/*  viewBox="0 0 24 24"*/}
          {/*  stroke="currentColor"*/}
          {/*  className="text-dark-900 w-6 inline dark:opacity-0 transition duration-500 ease-in-out"*/}
          {/*>*/}
          {/*  <g>*/}
          {/*  <path*/}
          {/*    strokeLinecap="round"*/}
          {/*    strokeLinejoin="round"*/}
          {/*    strokeWidth={2}*/}
          {/*    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"*/}
          {/*  />*/}
          {/*  </g>*/}
          {/*</svg>*/}
        </button>
      </label>
      <input
        type="checkbox"
        id="toggle"
        checked={theme === "dark" ? false : true}
        onChange={handleThemeToggle}
        className=" pointer-events-none hidden"
      />
    </div>
  )
  // return (
  //   <div
  //     className={`w-14 h-8 flex items-center bg-dark-300 rounded-full p-1 duration-300 ease-in-out ${
  //       toggleActive ? "bg-green-400" : ""
  //     }`}
  //     onClick={toggleState}
  //   >
  //     <div
  //       className={`bg-dark_alt w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
  //         toggleActive ? "translate-x-6" : ""
  //       }`}
  //     ></div>
  //   </div>
  // )
}

export default MslThemeSwitch
