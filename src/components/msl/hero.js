import { Link } from "gatsby"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import MslHero1 from "images/hero/1.jpg"

const MslHero = () => {
  return (
    <div className="relative bg-gray-100 dark:bg-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-gray-100 dark:bg-gray-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-100 dark:text-gray-800 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="hidden lg:block relative pt-6 px-4 sm:px-6 lg:px-8"></div>

          <div className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-gray-600 dark:text-gray-300 xl:inline">
                  Morning Soccer League
                </span>
                {/*<span className="block xl:inline">Mission</span>*/}
              </h1>

              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/stats"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Check Stats
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={MslHero1}
          alt=""
        />
        {/*<StaticImage*/}
        {/*  className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"*/}
        {/*  layout="fluid"*/}
        {/*  src="../../images/hero/1.jpg"*/}
        {/*  alt="T-Rex"*/}
        {/*/>*/}
      </div>
    </div>
  )
}

export default MslHero
