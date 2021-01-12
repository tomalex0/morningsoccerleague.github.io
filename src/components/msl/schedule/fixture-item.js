import { Link } from "gatsby"
import React from "react"
import MslGoalInfo from "components/msl/schedule/goal-info"
import MslScheduleGameStats from "components/msl/schedule/game-stats"
const MslFixtureItem = ({ fixture }) => {
  const home = fixture?.home
  const away = fixture?.away
  return (
    <div className="text-gray-900 bg-gray-50 dark:bg-gray-300 rounded-sm shadow-2xl shadow-inner my-4 p-2">
      <div>
        {fixture.pos} - {fixture.scheduled_time}
      </div>
      <div className="flex space-x-0 relative">
        {/*<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800 absolute -left-3 -top-3"></span>*/}
        <MslGoalInfo game={fixture?.home} pos="home" />
        <div className="flex-shrink flex-shrink-0 w-2 font-bold flex items-center justify-center">
          -
        </div>
        <MslGoalInfo game={fixture?.away} pos="away" />
      </div>
      {/*<div className="justify-center items-center text-center">*/}
      {/*  <button>Collapse</button>*/}
      {/*</div>*/}
      <ul>
        <h2 className="text-lg font-bold">Referees</h2>
        {fixture.referees &&
          fixture.referees.map((item, index) => {
            return (
              <li
                id={`${fixture.schedule_id}_ref_${index}`}
                key={`${fixture.schedule_id}_ref_${index}`}
              >
                {item?.player?.name} - {item?.team?.teamName}
              </li>
            )
          })}
      </ul>
      <div className="flex space-x-0 relative">
        <div className="flex-grow space-x-1  flex-shrink-0 text-sm md:text-base flex">
          <MslScheduleGameStats
            team={home}
            fixture={fixture}
            key={`home_${fixture.schedule_id}`}
            id={`home_${fixture.schedule_id}`}
          />
        </div>
        <div className="flex-grow space-x-1  flex-shrink-0 text-sm md:text-base flex">
          <MslScheduleGameStats
            team={away}
            fixture={fixture}
            key={`away_${fixture.schedule_id}`}
            id={`away_${fixture.schedule_id}`}
          />
        </div>
      </div>
    </div>
  )
}

export default MslFixtureItem
