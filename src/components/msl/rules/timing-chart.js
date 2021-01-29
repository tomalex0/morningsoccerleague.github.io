import React from "react"

const MslTimingChart = () => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>Game #</th>
          <th>Description</th>
          <th>Kick off</th>
          <th>1st Half Minutes</th>
          <th>Half Time</th>
          <th>2nd Half Minutes</th>
          <th>Max Total Stoppage Time (including both halfs)</th>
          <th>Total Time</th>
          <th>Game End</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowSpan="5">Game 1 and Game 2</td>
          <td>Original Time</td>
          <td>6:20</td>
          <td>0:25</td>
          <td>0:05</td>
          <td>0:25</td>
          <td>0:06</td>
          <td>1:01</td>
          <td>7:21</td>
        </tr>
        <tr>
          <td>Whole Game</td>
          <td>6:25</td>
          <td>0:25</td>
          <td>0:05</td>
          <td>0:25</td>
          <td>0:06</td>
          <td>1:01</td>
          <td>7:26</td>
        </tr>
        <tr>
          <td>Shortened</td>
          <td>6:30</td>
          <td>0:23</td>
          <td>0:03</td>
          <td>0:23</td>
          <td>0:06</td>
          <td>0:55</td>
          <td>7:25</td>
        </tr>
        <tr>
          <td>Shortened</td>
          <td>6:35</td>
          <td>0:21</td>
          <td>0:03</td>
          <td>0:23</td>
          <td>0:06</td>
          <td>0:50</td>
          <td>7:25</td>
        </tr>
        <tr>
          <td>No Game</td>
          <td>>7:50</td>
          <td colSpan="6" className="text-center">
            Forfeit by Team having less than 5 players OR Postponed in case of
            any unavailability
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default MslTimingChart
