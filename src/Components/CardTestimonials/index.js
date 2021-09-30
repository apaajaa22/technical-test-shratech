import React from "react"
import StarComponent from "../StarComponent"

export default function CardTestimonials({desc, name, job}) {
  return (
    <div
      className="flex flex-col shadow-2xl space-y-5 p-6 rounded"
      data-aos="flip-left"
    >
      <StarComponent />
      <p className="flex-1 flex">{desc}</p>
      <div>
        <h6 className="font-bold">{name}</h6>
        <p className="text-gray-500">{job}</p>
      </div>
    </div>
  )
}
