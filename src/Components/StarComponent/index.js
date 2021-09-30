import React from "react"
import {Star} from "../../assets"

export default function StarComponent() {
  return (
    <div className="flex flex-row gap-2">
      <img className="w-4 h-4" src={Star} alt="icon" />
      <img className="w-4 h-4" src={Star} alt="icon" />
      <img className="w-4 h-4" src={Star} alt="icon" />
      <img className="w-4 h-4" src={Star} alt="icon" />
      <img className="w-4 h-4" src={Star} alt="icon" />
    </div>
  )
}
