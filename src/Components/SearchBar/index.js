import React from "react"

export default function SearchBar({onChange, value}) {
  return (
    <div className="flex flex-row space-x-4 mb-10">
      <input
        type="text"
        placeholder="Find your job.."
        className="border-2 border-blue-300 w-full px-4 focus:outline-none rounded"
        onChange={onChange}
        value={value}
      />
      <button className="p-4 bg-blue-400 text-white font-bold rounded">
        Search
      </button>
    </div>
  )
}
