import React from "react"
import CardInfo from "../../CardInfo"

export default function InfoSection() {
  const data = [
    {id: 1, title: "Job", subtitle: "2,356+"},
    {id: 2, title: "Talent", subtitle: "200+"},
    {id: 3, title: "Partners", subtitle: "1000+"},
    {id: 4, title: "Happy Customers", subtitle: "90%"},
  ]
  return (
    <div
      className="mt-32 grid md:grid-cols-4 grid-cols-2 justify-between gap-4"
      data-aos="fade-up"
    >
      {data.map((res) => {
        return (
          <CardInfo key={res.id} title={res.subtitle} subtite={res.title} />
        )
      })}
    </div>
  )
}
