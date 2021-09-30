import React from "react"
import ItemFooter from "./ItemFooter"

export default function Footer() {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 my-20 md:gap-2 gap-2">
      <ItemFooter
        title="Service"
        desc1="Graphic Designer"
        desc2="Web Development"
        desc3="Engineering"
        desc4="Marketing"
      />
      <ItemFooter
        title="Resource"
        desc1="Virtual Assistance"
        desc2="Accountants"
        desc3="Bookkeepers"
        desc4="Free trial"
      />
      <ItemFooter
        title="Company"
        desc1="Partnerships"
        desc2="Terms of use"
        desc3="Privacy"
        desc4="Sitemap"
      />
      <ItemFooter
        title="Get in touch"
        desc1="company@email.com"
        desc2="Contact: +22 1455872"
      />
    </div>
  )
}
