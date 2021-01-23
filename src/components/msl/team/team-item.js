import { Link } from "gatsby"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import MslTeamImg from "components/msl/team/team-image"

const MslTeamItem = ({ team, cssName = "text-dark-900" }) => {
  return (
    <div className="flex items-center">
      <div className="flex-shrink-0 h-10 w-10">
        {/*<img*/}
        {/*  className="h-10 w-10 rounded-full"*/}
        {/*  src={team.image.publicURL}*/}
        {/*  alt={team.teamName}*/}
        {/*/>*/}
        <MslTeamImg team={team} className="h-10 w-10 rounded-full" />
      </div>
      <div className="ml-1">
        <div className={`text-sm font-medium ${cssName}`}>
          <Link to={team.teamPath}>{team.teamName} &rarr;</Link>
        </div>
      </div>
    </div>
  )
}

export default MslTeamItem
