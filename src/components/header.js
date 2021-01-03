import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Layout from "./layout"
import MslLogo from "images/msl-logo.svg"

const NavList = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Seasons",
    href: "/seasons",
  },
  {
    name: "Teams",
    href: "/teams",
  },
  {
    name: "Schedule",
    href: "/schedule",
  },
  {
    name: "Register",
    href: "/register",
  },
  {
    name: "Rules",
    href: "/rules",
  },
  {
    name: "GMM",
    href: "/gmm",
  },
  {
    name: "Contacts",
    href: "/contacts",
  },
]

const Header = () => {
  const [menuOpenState, setMenuOpenState] = useState(false)

  const toggleMenuState = () => setMenuOpenState(value => !value)

  return (
    <header>
      <nav className="bg-gray-100 dark:bg-gray-800 fixed z-30">
        <div className="w-screen mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded="false"
                onClick={toggleMenuState}
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed. */}
                {/*
            Heroicon name: menu

            Menu open: "hidden", Menu closed: "block"
          */}
                <svg
                  className={`h-6 w-6 ${!menuOpenState ? "block" : "hidden"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* Icon when menu is open. */}
                {/*
            Heroicon name: x

            Menu open: "block", Menu closed: "hidden"
          */}
                <svg
                  className={`h-6 w-6 ${!menuOpenState ? "hidden" : "block"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center absolute top-0">
                <Link to="/">
                  <img
                    className="w-14"
                    src={MslLogo}
                    alt="Morning Soccer League"
                  />
                </Link>
              </div>
              <div className="hidden sm:block sm:ml-14 md:ml-16 lg:ml-24">
                <div className="flex space-x-4">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  {NavList.map(item => (
                    <Link
                      to={item.href}
                      className="px-2 py-2 font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-red-700"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  */}
        <div
          className={`bg-gray-50 dark:bg-gray-800 ${
            menuOpenState ? "block" : "hidden"
          } md:hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            {NavList.map(item => (
              <Link
                to={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-red-700 block px-3 py-2 text-base font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
