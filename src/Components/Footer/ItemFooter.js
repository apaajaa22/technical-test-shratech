import React from "react"

export default function ItemFooter({title, desc1, desc2, desc3, desc4}) {
  return (
    <div className="mt-10">
      <h3 className="text-blue-900 font-bold text-xl mb-5">{title}</h3>
      <ul className="space-y-2 font-semibold">
        <li>{desc1}</li>
        <li>{desc2}</li>
        <li>{desc3}</li>
        <li>{desc4}</li>
      </ul>
    </div>
  )
}
