import AOS from "aos"
import React, {useEffect} from "react"
import Navbar from "../../Components/Navbar"
import ClientsSection from "../../Components/organism/ClientsSection"
import HeroSection from "../../Components/organism/HeroSection"
import InfoSection from "../../Components/organism/InfoSection"
import "aos/dist/aos.css"
import TestimoniSection from "../../Components/organism/TestimoniSection"
import UpdateNewsSection from "../../Components/organism/UpdateNewsSection"
import Footer from "../../Components/Footer"

export default function Home() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className="container md:mx-auto md:px-32 px-5">
      <Navbar />
      <HeroSection />
      <InfoSection />
      <ClientsSection />
      <TestimoniSection />
      <UpdateNewsSection />
      <Footer />
    </div>
  )
}
