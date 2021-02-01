import React from "react"

const MslScheduleTeamInfo = ({ team_type = "away" }) => {
  return (
    <div className="grid grid-cols-6 gap-6">
      <div className="col-span-6 sm:col-span-2">
        <label
          htmlFor={`game_team_${team_type}`}
          className="block text-sm font-medium text-gray-700"
        >
          Teams
        </label>
        <select
          id={`game_team_${team_type}`}
          name={`game_team_${team_type}`}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option>Team 1</option>
          <option>Team 2</option>
          <option>Team 3</option>
        </select>
      </div>
      <div className="col-span-6 sm:col-span-2">
        <label
          htmlFor={`game_players_${team_type}`}
          className="block text-sm font-medium text-gray-700"
        >
          Players
        </label>
        <select
          id={`game_players_${team_type}`}
          name={`game_players_${team_type}`}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option>Player 1</option>
          <option>Player 2</option>
          <option>Player 3</option>
        </select>
      </div>
      <div className="col-span-6 sm:col-span-2">
        <label
          htmlFor={`game_fouls_${team_type}`}
          className="block text-sm font-medium text-gray-700"
        >
          Fouls
        </label>
        <input
          type="number"
          name={`game_fouls_${team_type}`}
          id={`game_fouls_${team_type}`}
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className="col-span-6">
        <h2>Goals</h2>
      </div>
      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor={`game_goal_scorer_${team_type}`}
          className="block text-sm font-medium text-gray-700"
        >
          Players
        </label>
        <select
          id={`game_goal_scorer_${team_type}`}
          name={`game_goal_scorer_${team_type}`}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option>Player 1</option>
          <option>Player 2</option>
          <option>Player 3</option>
        </select>
      </div>
      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor={`game_goal_scorer_min_${team_type}`}
          className="block text-sm font-medium text-gray-700"
        >
          Minute
        </label>
        <input
          type="number"
          name={`game_goal_scorer_min_${team_type}`}
          id={`game_goal_scorer_min_${team_type}`}
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className="col-span-6 text-right">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Goal
        </button>
      </div>
      <div className="col-span-6">
        <h2>Keeper</h2>
      </div>
      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor={`game_keeper_${team_type}`}
          className="block text-sm font-medium text-gray-700"
        >
          Players
        </label>
        <select
          id={`game_keeper_${team_type}`}
          name={`game_keeper_${team_type}`}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option>Player 1</option>
          <option>Player 2</option>
          <option>Player 3</option>
        </select>
      </div>
      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor={`game_saves_${team_type}`}
          className="block text-sm font-medium text-gray-700"
        >
          Saves
        </label>
        <input
          type="number"
          name={`game_saves_${team_type}`}
          id={`game_saves_${team_type}`}
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className="col-span-6 text-right">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Keeper
        </button>
      </div>
      <div className="col-span-6">
        <h2>Cautions</h2>
      </div>
      <div className="col-span-6 sm:col-span-2">
        <label
          htmlFor={`game_caution_type_${team_type}`}
          className="block text-sm font-medium text-gray-700"
        >
          Caution
        </label>
        <select
          id={`game_caution_type_${team_type}`}
          name={`game_caution_type_${team_type}`}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option>Yellow</option>
          <option>Red</option>
        </select>
      </div>
      <div className="col-span-6 sm:col-span-2">
        <label
          htmlFor={`game_caution_player_${team_type}`}
          className="block text-sm font-medium text-gray-700"
        >
          Players
        </label>
        <select
          id={`game_caution_player_${team_type}`}
          name={`game_caution_player_${team_type}`}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option>Player 1</option>
          <option>Player 2</option>
          <option>Player 3</option>
        </select>
      </div>
      <div className="col-span-6 sm:col-span-2">
        <label
          htmlFor={`game_caution_min_${team_type}`}
          className="block text-sm font-medium text-gray-700"
        >
          Minute
        </label>
        <input
          type="number"
          name={`game_caution_min_${team_type}`}
          id={`game_caution_min_${team_type}`}
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className="col-span-6 text-right">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Caution
        </button>
      </div>
    </div>
  )
}

export default MslScheduleTeamInfo
