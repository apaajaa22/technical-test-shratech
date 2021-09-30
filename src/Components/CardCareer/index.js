import React from "react"
import {BiBuildings} from "react-icons/bi"

export default function CardCareer({onClick, company, role, location}) {
  return (
    <div className="shadow-lg rounded py-2 px-4 flex lg:flex-row flex-col items-center">
      <BiBuildings size={40} className="mr-4" />
      <div className="flex flex-col flex-1">
        <p className="font-semibold text-xl">{company}</p>
        <p>{role}</p>
        <p>{location}</p>
      </div>
      <div>
        <button
          onClick={onClick}
          className="bg-blue-400 p-2 text-white rounded font-semibold"
        >
          Apply
        </button>
      </div>
    </div>
  )
}
