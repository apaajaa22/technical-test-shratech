import React from "react"
import CardTestimonials from "../../CardTestimonials"

export default function TestimoniSection() {
  return (
    <div className="my-28">
      <h2 className="text-4xl font-semibold text-center mb-5">Testimonials</h2>
      <p className="text-md text-center mb-12 text-lg">
        Community development is often linked with community work or community{" "}
        <br /> planning, and may involve stakeholders, foundations{" "}
      </p>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        <CardTestimonials
          desc="Our members are so impressed. It's intuitive. it's clean. it's distraction free. if you're building a community"
          name="Sabo Masties"
          job="Founder Rolex"
        />
        <CardTestimonials
          desc="I could not be more thrillied that i ended up deciding on circle to become the home of the lightbulb moment community"
          name="John Marko"
          job="Founder Migeiko"
        />
        <CardTestimonials
          desc="I searched far and wide and researched all the other options before making my decisions"
          name="Mansur"
          job="Founder Besnik"
        />
      </div>
    </div>
  )
}
