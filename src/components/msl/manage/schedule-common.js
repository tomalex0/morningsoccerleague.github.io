import React from "react"

const MslScheduleCommon = () => {
  return (
    <div className="grid grid-cols-6 gap-6">
      <div className="col-span-6 sm:col-span-2">
        <label
          htmlFor="season"
          className="block text-sm font-medium text-gray-700"
        >
          Season
        </label>
        <select
          id="season"
          name="season"
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option>Season 1</option>
          <option>Season 2</option>
        </select>
      </div>
      <div className="col-span-6 sm:col-span-2">
        <label
          htmlFor="scheduled_date"
          className="block text-sm font-medium text-gray-700"
        >
          Scheduled Date
        </label>
        <input
          type="datetime-local"
          name="scheduled_date"
          id="scheduled_date"
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className="col-span-6 sm:col-span-2">
        <label
          htmlFor="scheduled_time"
          className="block text-sm font-medium text-gray-700"
        >
          Scheduled Time
        </label>
        <input
          type="time"
          name="scheduled_time"
          id="scheduled_time"
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="ref_teams"
          className="block text-sm font-medium text-gray-700"
        >
          Teams
        </label>
        <select
          id="ref_teams"
          name="ref_team"
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option>Team 1</option>
          <option>Team 2</option>
          <option>Team 3</option>
        </select>
      </div>

      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="ref_players"
          className="block text-sm font-medium text-gray-700"
        >
          Players
        </label>
        <select
          id="ref_players"
          name="ref_players"
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option>Player 1</option>
          <option>Player 2</option>
          <option>Player 3</option>
        </select>
      </div>
      <div className="col-span-6 text-right">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Referee
        </button>
      </div>
    </div>
  )
}

export default MslScheduleCommon
