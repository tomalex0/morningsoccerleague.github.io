import { Link } from "gatsby"
import React from "react"
import MslTeamImg from "components/msl/team/team-image"

const MslGoalInfo = ({ game, pos, view = 1 }) => {
  const teamPath = game?.team?.teamPath
  const teamName = game?.team?.teamName
  const teamLogo = game?.team?.image?.publicURL
  const teamGoals = game?.goals?.length
  const LogoEl = () => (
    <div className="flex-none w-10 md:w-16 flex items-center justify-center">
      {/*<img src={teamLogo} className="w-8 md:w-12 mr-1 rounded-full" />*/}
      <MslTeamImg team={game?.team} className="w-8 md:w-12 mr-1 rounded-full" />
    </div>
  )
  const GoalEl = () => (
    <div className="flex-shrink flex-shrink-0 w-6 md:w-8 font-bold flex items-center justify-center">
      {teamGoals}
    </div>
  )
  const TeamLink = () => <Link to={teamPath}>{teamName}</Link>
  const wrapperCls =
    "rounded-l-md flex-grow space-x-1  flex-shrink-0 w-16 text-sm md:text-base flex items-center justify-center"

  return (
    <>
      {view == 1 && (
        <>
          <div className={wrapperCls}>
            <div
              className={`flex-grow h-16 rounded-md font-bold flex items-center justify-end pl-2`}
            >
              <TeamLink />
            </div>
            <LogoEl />
          </div>
          <GoalEl />
        </>
      )}
      {view == 2 && (
        <>
          <GoalEl />
          <div className={wrapperCls}>
            <LogoEl />
            <div
              className={`flex-grow h-16 rounded-md font-bold flex items-center justify-start pr-2`}
            >
              <TeamLink />
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default MslGoalInfo
