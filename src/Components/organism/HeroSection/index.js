import React from "react"
import {Link} from "react-router-dom"
import {Hero} from "../../../assets"

export default function HeroSection() {
  return (
    <section className="flex flex-row justify-between items-center mt-20">
      <div>
        <div className="mb-10 text-4xl font-semibold">
          <h2>New career</h2>
          <h2>New journey for you</h2>
        </div>
        <div>
          <p className="mb-10 text-xl font-semibold">
            The world needs dreamers and the world needs doers.
            <br /> But above all, the world needs a dreamer to do it.
          </p>
          <Link
            to="/list-career"
            className="bg-blue-500 text-white font-semibold p-3 rounded"
          >
            Get Started
          </Link>
        </div>
      </div>
      <img
        src={Hero}
        className="hidden md:block"
        width="40%"
        alt="hero images"
      />
    </section>
  )
}
