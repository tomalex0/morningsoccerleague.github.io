import { Link } from "gatsby"
import React from "react"
import MslTeamStatsItem from "components/msl/team/team-stats-item"
import MslTeamImg from "components/msl/team/team-image"

const cssName = "mt-4 grid grid-cols-2 md:grid-cols-2 gap-4"
const MslTeamListItem = ({ team }) => {
  return (
    <div>
      <div className="px-3 h-20 bg-light-800  dark:bg-dark-800  rounded-xl shadow-md space-y-2 py-3 space-y-0 rounded-b-none">
        <Link to={team.teamPath} className="flex items-center">
          <MslTeamImg
            team={team}
            className="block h-14 w-14 rounded-full mx-0 flex-shrink-0"
          />
          <div className="text-center ml-2 space-y-2 text-left">
            <div className="space-y-0.5">
              <div className="text-sm md:text-md text-light-50 dark:text-light-50 font-semibold">
                {team.teamName} &rarr;
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className=" px-4 pb-4 bg-dark_alt dark:bg-dark-400 rounded-xl shadow-md overflow-hidden md:max-w-2xl rounded-t-none">
        <MslTeamStatsItem
          stats={team.teamStats.allseasonStats}
          cssName={cssName}
        />
      </div>
    </div>
  )
}

export default MslTeamListItem
