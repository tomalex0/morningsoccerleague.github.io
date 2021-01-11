import { Link } from "gatsby"
import React from "react"

const MslScheduleGameStats = ({ team }) => {
  return (
    <div className="divide-y flex-grow">
      <h2 className="text-lg font-bold">Fouls</h2>
      <div>{team.fouls}</div>
      <h2 className="text-lg font-bold">Goals</h2>
      <ul>
        {team.goals.map(item => {
          return (
            <li>
              {item.player.name} - {item.minute} - {item.owngoal ? "OG" : ""}
            </li>
          )
        })}
      </ul>
      <ul>
        <h2 className="text-lg font-bold">Cautions</h2>
        {team.cautions &&
          team.cautions.map(item => {
            return (
              <li>
                {item.player.name} - {item.minute} - {item.owngoal ? "OG" : ""}
              </li>
            )
          })}
      </ul>
      <ul>
        <h2 className="text-lg font-bold">Mom</h2>
        {team.mom &&
          team.mom.map(item => {
            return <li>{item.player.name}</li>
          })}
      </ul>
    </div>
  )
}

export default MslScheduleGameStats
