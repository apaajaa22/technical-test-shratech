import React from "react"

export default function CardInfo({title, subtite}) {
  return (
    <div className="bg-blue-400 py-5 px-10 rounded-l shadow-xl">
      <h4 className="text-center font-bold text-2xl text-white mb-2">
        {title}
      </h4>
      <p className="text-center  text-white">{subtite}</p>
    </div>
  )
}
