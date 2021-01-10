import { Link } from "gatsby"
import React from "react"

const MslFormatLogistics = () => {
  return (
    <ol className="list-decimal list-inside ">
      <li>Games are 7v7 a side</li>
      <li>Games are 25 minute halves with a 5 minute half-time break</li>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Time</th>
            <th className="px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">6:00 AM</td>
            <td className="px-4 py-2">
              Game 1 and 2 Captain/Representative & Referee Reporting
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">6:10 AM</td>
            <td className="px-4 py-2">
              Game 1 and Game 2 Team details to Referee
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">6:15 AM</td>
            <td className="px-4 py-2">Goal posts ready</td>
          </tr>
          <tr>
            <td className="px-4 py-2">6:20 AM</td>
            <td className="px-4 py-2">
              Game 1 and 2 Kick off At least 5 players in a team , If not Other
              Franchisee Owner can enforce forfeit If FO doesn’t enforce the
              forfeit, team can wait until 6:35 to start the game with less
              minutes
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">7:15 AM</td>
            <td className="px-4 py-2">
              Game 3 Captain/Representative & Referee Reporting
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">7:25 AM</td>
            <td className="px-4 py-2">Game 3 Team details to Referee</td>
          </tr>
          <tr>
            <td className="px-4 py-2">7:35 AM</td>
            <td className="px-4 py-2">
              Game 3 Kick off At least 5 players in a team , If not Other
              Franchisee Owner can enforce forfeit If FO doesn’t enforce the
              forfeit, team can wait until 7:50 to start the game with less
              minutes
            </td>
          </tr>
        </tbody>
      </table>
      <li>Long weekends will not have any games scheduled</li>
      <li>We are planning to use foldable posts (last year one)</li>
      <li>
        Franchisee Owner need to assign a captain for the team who is
        responsible for the team on the ground. Franchisee owner can be the
        Captain himself or he can designate any player from the team. The
        captain can be changed for each game though
      </li>
    </ol>
  )
}

export default MslFormatLogistics
