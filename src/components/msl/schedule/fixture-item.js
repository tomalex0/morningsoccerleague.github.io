import { Link } from "gatsby"
import React, { useState } from "react"
import MslGoalInfo from "components/msl/schedule/goal-info"
import MslScheduleGameStats from "components/msl/schedule/game-stats"
import MslTeamItem from "components/msl/team/team-item"
import MslPlayerItem from "components/msl/player/player-item"

const MslFixtureItem = ({ fixture }) => {
  const [isOpen, setIsOpen] = useState(false)

  const home = fixture?.home
  const away = fixture?.away
  return (
    <div className="text-dark-900 bg-light-50 dark:bg-dark-300 rounded-md shadow-inner overflow-hidden my-4 p-2">
      <div className="flex items-center flex-row -m-2 p-2">
        <div className="flex-shrink w-6 text-center text-sm font-semibold bg-green-100 text-green-800 rounded-full shadow-lg">
          {fixture.pos}
        </div>
        <div className="flex-shrink w-20 text-center text-sm font-semibold bg-green-100 text-green-800 rounded-full shadow-lg ml-2">
          {fixture.scheduled_time}
        </div>
        <div className="flex-grow text-right">
          <button
            aria-label="Toggle"
            className="bg-light-800 dark:bg-dark-800 text-lg p-1 shadow-md rounded-md"
            onClick={() => setIsOpen(prevState => !prevState)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`w-6 h-6 overflow-visible text-light-50 dark:text-light-50`}
            >
              <path
                fill-rule="evenodd"
                className={`${isOpen ? "hidden" : "block"}`}
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                className={`${isOpen ? "block" : "hidden"}`}
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex space-x-0 relative hidden sm:flex">
        {/*<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800 absolute -left-3 -top-3"></span>*/}
        <MslGoalInfo game={fixture?.home} pos="home" view={1} />
        <div className="flex-shrink flex-shrink-0 w-2 font-bold flex items-center justify-center">
          -
        </div>
        <MslGoalInfo game={fixture?.away} pos="away" view={2} />
      </div>
      {/*<div className="justify-center items-center text-center">*/}
      {/*  <button>Collapse</button>*/}
      {/*</div>*/}
      <div>
        <div className="flex flex-col sm:flex-row space-x-0 relative">
          <div className="flex-grow flex-1 flex-shrink-0 text-sm md:text-base">
            <div className="flex-grow flex px-4 block sm:hidden mt-4 items-center">
              <MslTeamItem team={fixture?.home?.team} />
              <div className=" flex-grow text-base ml-5 text-right font-bold">
                {fixture?.home?.goals?.length}
              </div>
            </div>
            <div className={`${isOpen ? "block" : "hidden"}`}>
              <MslScheduleGameStats
                team={home}
                pos="home"
                fixture={fixture}
                key={`home_${fixture.schedule_id}`}
                id={`home_${fixture.schedule_id}`}
              />
            </div>
          </div>
          <div className="flex-grow flex-1 flex-shrink-0 text-sm md:text-base">
            <div className="flex-grow flex px-4 block sm:hidden mt-4 items-center ">
              <MslTeamItem team={fixture?.away?.team} />
              <div className="flex-grow text-base ml-5 text-right font-bold">
                {fixture?.away?.goals?.length}
              </div>
            </div>
            <div className={`${isOpen ? "block" : "hidden"}`}>
              <MslScheduleGameStats
                team={away}
                pos="away"
                fixture={fixture}
                key={`away_${fixture.schedule_id}`}
                id={`away_${fixture.schedule_id}`}
              />
            </div>
          </div>
        </div>
        <div className={`${isOpen ? "block" : "hidden"}`}>
          <h2 className="text-lg font-bold px-3 my-2 text-dark-800">
            Referees
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 px-3">
            {fixture.referees &&
              fixture.referees.map((item, index) => {
                return (
                  <div
                    className="text-sm rounded-md shadow-md p-2 bg-dark_alt dark:bg-dark-100 text-dark-100"
                    id={`${fixture.schedule_id}_ref_${index}`}
                    key={`${fixture.schedule_id}_ref_${index}`}
                  >
                    <MslPlayerItem
                      player={item?.player}
                      playerNameCss="font-medium text-dark-800 dark:text-dark-800"
                    />
                    <div className="mt-2"></div>
                    <MslTeamItem
                      team={item?.team}
                      cssName="font-medium text-dark-800 dark:text-dark-800"
                    />
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MslFixtureItem
