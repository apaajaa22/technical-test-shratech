import React from "react"
import {Blibli, Carousell, Shopee, Tokopedia} from "../../../assets"

export default function ClientsSection() {
  return (
    <div className="mt-36">
      <h2 className="text-4xl font-semibold text-center">Our Happy Clients</h2>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-10 mt-20">
        <img
          src={Tokopedia}
          className="w-full h-44 bg-cover bg-center rounded object-cover"
          alt="img"
        />
        <img
          src={Carousell}
          className="w-full h-44 bg-cover bg-center rounded object-cover"
          alt="img"
        />
        <img
          src={Shopee}
          className="w-full h-44 bg-cover bg-center rounded object-cover"
          alt="img"
        />
        <img
          src={Blibli}
          className="w-full h-44 bg-cover bg-center rounded object-cover"
          alt="img"
        />
        <img
          src={Carousell}
          className="w-full h-44 bg-cover bg-center rounded object-cover"
          alt="img"
        />
        <img
          src={Tokopedia}
          className="w-full h-44 bg-cover bg-center rounded object-cover"
          alt="img"
        />
        <img
          src={Blibli}
          className="w-full h-44 bg-cover bg-center rounded object-cover"
          alt="img"
        />
        <img
          src={Shopee}
          className="w-full h-44 bg-cover bg-center rounded object-cover"
          alt="img"
        />
      </div>
    </div>
  )
}
