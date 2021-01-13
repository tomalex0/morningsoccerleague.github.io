import { Link } from "gatsby"
import React from "react"
import MslGoalInfo from "components/msl/schedule/goal-info"
import MslScheduleGameStats from "components/msl/schedule/game-stats"
import MslTeamItem from "components/msl/team-item"
import MslPlayerItem from "components/msl/player-item"

const MslFixtureItem = ({ fixture }) => {
  const home = fixture?.home
  const away = fixture?.away
  return (
    <div className="text-gray-900 bg-gray-50 dark:bg-gray-300 rounded-md shadow-inner overflow-hidden my-4 p-2">
      <div className="flex items-center flex-row -m-2 pt-2 px-2">
        <div className="flex-shrink w-6 text-center text-sm font-semibold bg-green-100 text-green-800 rounded-full shadow-lg">
          {fixture.pos}
        </div>
        <div className="flex-grow "></div>
        <div className="flex-shrink w-20 text-center text-sm font-semibold bg-green-100 text-green-800 rounded-full shadow-lg">
          {fixture.scheduled_time}
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

      <div className="flex flex-col sm:flex-row space-x-0 relative">
        <div className="flex-grow flex-1 space-x-1  flex-shrink-0 text-sm md:text-base">
          <div className="flex-grow flex px-4 block sm:hidden mt-4">
            <MslTeamItem team={fixture?.home?.team} />
            <div className="items-center flex text-lg ml-5">
              {fixture?.home?.goals?.length}
            </div>
          </div>
          <MslScheduleGameStats
            team={home}
            pos="home"
            fixture={fixture}
            key={`home_${fixture.schedule_id}`}
            id={`home_${fixture.schedule_id}`}
          />
        </div>
        <div className="flex-grow flex-1 space-x-1  flex-shrink-0 text-sm md:text-base">
          <div className="flex-grow flex px-4 block sm:hidden mt-4">
            <MslTeamItem team={fixture?.away?.team} />
            <div className="items-center flex text-lg ml-5">
              {fixture?.away?.goals?.length}
            </div>
          </div>
          <MslScheduleGameStats
            team={away}
            pos="away"
            fixture={fixture}
            key={`away_${fixture.schedule_id}`}
            id={`away_${fixture.schedule_id}`}
          />
        </div>
      </div>
      <div>
        <h2 className="text-lg font-bold px-3 my-2 text-gray-800">Referees</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 px-3">
          {fixture.referees &&
            fixture.referees.map((item, index) => {
              return (
                <div
                  className="text-sm rounded-md shadow-md p-2 bg-white dark:bg-gray-100 text-gray-100"
                  id={`${fixture.schedule_id}_ref_${index}`}
                  key={`${fixture.schedule_id}_ref_${index}`}
                >
                  <MslPlayerItem
                    player={item?.player}
                    playerNameCss="font-medium text-gray-800 dark:text-gray-800"
                  />
                  <div className="mt-2"></div>
                  <MslTeamItem
                    team={item?.team}
                    cssName="font-medium text-gray-800 dark:text-gray-800"
                  />
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default MslFixtureItem
