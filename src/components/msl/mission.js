import React from "react"

const MslLazyFrame = React.lazy(() => import("components/msl/lazy-frame"))

const MslMission = ({ player }) => {
  const isSSR = typeof window === "undefined"
  return (
    <div className="pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-dark-700 dark:text-dark-300 sm:text-4xl">
            Mission
          </h2>
        </div>
        <div className="flex flex-col justify-center my-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-light_alt-800 to-light-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />
            <div className="relative px-4 py-5 bg-dark_alt shadow-lg sm:rounded-3xl sm:p-8 dark:bg-dark-600">
              <div className="max-w-md mx-auto">
                <div className="divide-y divide-dark-200">
                  <div className="py-4 text-base leading-6 space-y-4 text-dark-700 dark:text-dark-100 sm:text-lg sm:leading-7">
                    <p>
                      Morning Soccer League is a get together of friends
                      dedicated to the positive development through their
                      participation in a safe, healthy, and affordable soccer
                      program that is fun and rewarding for all.
                    </p>
                    <ul className="list-disc space-y-2">
                      <li className="flex items-start">
                        <span className="h-6 flex items-center sm:h-7">
                          <svg
                            className="flex-shrink-0 h-5 w-5 text-light_alt-700 dark:text-dark-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <p className="ml-2">
                          Game on weekdays @ 6.20am, you are welcome!
                        </p>
                      </li>
                      <li className="flex items-start">
                        <span className="h-6 flex items-center sm:h-7">
                          <svg
                            className="flex-shrink-0 h-5 w-5 text-light_alt-700 dark:text-dark-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <p className="ml-2">Follow us on..</p>
                      </li>
                    </ul>
                    <div className="h-32">
                      {!isSSR && (
                        <React.Suspense fallback={<div>&nbsp;</div>}>
                          <MslLazyFrame
                            title="MSL Facebook"
                            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmorningsoccerleague%2F&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=108821693720"
                          />
                        </React.Suspense>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MslMission
