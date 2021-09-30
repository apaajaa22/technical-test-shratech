import React from "react"

export default function UpdateNewsSection() {
  return (
    <div className="hidden  bg-blue-900 xl:px-96 md:px-36 py-10 md:flex flex-col rounded mb-10">
      <h2 className="text-3xl text-center font-semibold text-white">
        Get your update news
      </h2>
      <div className="bg-white flex flex-row justify-between mt-10">
        <input
          className="p-3 focus:outline-none"
          type="text"
          placeholder="Enter Your Email"
        />
        <button className="bg-blue-900 text-white text-lg px-10 py-2 m-2">
          Send
        </button>
      </div>
    </div>
  )
}
