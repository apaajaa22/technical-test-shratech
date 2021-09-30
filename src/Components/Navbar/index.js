import React from "react"
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <section className="flex flex-col">
      <div className="hidden md:flex flex-row justify-between py-10 items-center">
        <Link to="/">
          <p className="text-2xl text-black">MyCareer</p>
        </Link>
        <ul className="flex flex-row gap-10">
          <Link to="/">
            <li className="text-lg hover:text-blue-800 hover:underline font-semibold">
              Home
            </li>
          </Link>
          <Link to="/list-career">
            <li className="text-lg hover:text-blue-800 hover:underline font-semibold">
              List Career
            </li>
          </Link>
        </ul>
      </div>
      <div className="md:hidden flex flex-col py-2">
        <ul className="flex flex-row gap-10">
          <Link to="/">
            <li className="text-lg hover:text-blue-800 hover:underline font-semibold">
              Home
            </li>
          </Link>
          <Link to="/list-career">
            <li className="text-lg hover:text-blue-800 hover:underline font-semibold">
              List Career
            </li>
          </Link>
        </ul>
      </div>
    </section>
  )
}
