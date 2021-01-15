import { Link } from "gatsby"
import React from "react"
import MslPlayerItem from "components/msl/player-item"
import MslGoalInfo from "components/msl/schedule/goal-info"
import { predicate } from "graphql/lib/utility"

const MslScheduleGameStats = ({ team, fixture, id, pos }) => {
  const goalsSorted = team?.goals.sort(
    predicate({
      name: "minute",
      reverse: false,
    })
  )
  return (
    <div className="divide-y flex-grow">
      <div className="bg-white dark:bg-dark-100 shadow overflow-hidden rounded-md m-3">
        <div className="border-t border-gray-200">
          <dl>
            <div className="px-2 py-2 grid grid-cols-3 gap-2 px-2">
              <dt className="text-sm font-medium text-gray-500">Fouls</dt>
              <dd className="text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {team.fouls}
              </dd>
            </div>
          </dl>
        </div>
        {goalsSorted?.length > 0 && (
          <div className="border-t border-gray-200">
            <dl>
              <div className="px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-2">
                <dt className="text-sm font-medium text-gray-500">Goals</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                    {goalsSorted.map((item, index) => {
                      return (
                        <li
                          className="pl-2 pr-2 py-2 flex items-center justify-between text-sm"
                          id={`goal_${index}_${id}_${item?.player?.player_id}`}
                          key={`goal_${index}_${id}_${item?.player?.player_id}`}
                        >
                          <div className="w-0 flex-1 flex items-center">
                            <MslPlayerItem player={item?.player} />
                          </div>
                          <div className="flex-shrink-0">
                            {item.owngoal && (
                              <span className="bg-red-100 text-red-800 text-xs rounded-full p-1 mr-2">
                                OG
                              </span>
                            )}
                            {item.minute}
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        )}
        {team?.cautions?.length > 0 && (
          <div className="border-t border-gray-200">
            <dl>
              <div className="px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-2">
                <dt className="text-sm font-medium text-gray-500">Cautions</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                    {team.cautions.map((item, index) => {
                      return (
                        <li
                          className="pl-3 pr-2 py-2 flex items-center justify-between text-sm"
                          id={`caution_${index}_${id}_${item?.player?.player_id}`}
                          key={`caution_${index}_${id}_${item?.player?.player_id}`}
                        >
                          <div className="w-0 flex-1 flex items-center">
                            <MslPlayerItem player={item?.player} />
                          </div>
                          <div className="flex-shrink-0">{item.minute}</div>
                        </li>
                      )
                    })}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        )}
        {team?.mom && (
          <div className="border-t border-gray-200">
            <dl>
              <div className="px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-2">
                <dt className="text-sm font-medium text-gray-500">Mom</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                    {team.mom.map((item, index) => {
                      return (
                        <li
                          className="pl-3 pr-2 py-2 flex items-center justify-between text-sm"
                          id={`mom_${id}_${index}_${item?.player?.player_id}`}
                          key={`mom_${id}_${index}_${item?.player?.player_id}`}
                        >
                          <MslPlayerItem player={item?.player} />
                        </li>
                      )
                    })}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        )}
      </div>
    </div>
  )
}

export default MslScheduleGameStats
