import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Layout from "./layout"
import MslLogo from "images/msl-logo.svg"
import MslThemeSwitch from "components/msl/theme-switch"

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
    name: "Players",
    href: "/players",
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
]

const Header = () => {
  const [menuOpenState, setMenuOpenState] = useState(false)

  const toggleMenuState = () => setMenuOpenState(value => !value)

  return (
    <header>
      <nav className="bg-light-800 dark:bg-dark-800 fixed z-30">
        <div className="w-screen mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-light-50 dark:text-dark-300  hover:text-light-50 dark:hover:text-dark-300  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-dark_alt"
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
              <div className="flex-shrink-0 flex items-center absolute top-0 p-2 bg-dark-800 rounded-b-md">
                <Link to="/">
                  <img
                    className="w-10"
                    src={MslLogo}
                    alt="Morning Soccer League"
                  />
                </Link>
              </div>
              <div className="hidden sm:block sm:ml-14 md:ml-16 lg:ml-24">
                <div className="flex space-x-4">
                  {NavList.map(item => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="px-2 py-2 font-medium text-light-50 dark:text-dark-300 hover:text-yellow-400 dark:hover:text-red-400"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex-1 flex items-center justify-end sm:justify-end">
                <MslThemeSwitch />
              </div>
            </div>
          </div>
        </div>
        {/*
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  */}
        <div className={`${menuOpenState ? "block" : "hidden"} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Current: "bg-dark-900 text-dark_alt", Default: "text-dark-300 hover:bg-dark-700 hover:text-dark_alt" */}
            {NavList.map(item => (
              <Link
                key={item.name}
                to={item.href}
                className="text-light-50 dark:text-dark-300 hover:text-light-400 dark:hover:text-yellow-400 block px-3 py-2 text-base font-medium"
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
