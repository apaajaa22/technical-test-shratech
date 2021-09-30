import React from "react"
import Footer from "../../Components/Footer"
import Navbar from "../../Components/Navbar"
import CareerContent from "../../Components/organism/CareerContent"

export default function ListCareer() {
  return (
    <div className="container md:mx-auto md:px-32 px-5">
      <Navbar />
      <CareerContent />
      <Footer />
    </div>
  )
}
