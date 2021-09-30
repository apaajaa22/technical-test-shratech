import React, {useState} from "react"
import CardCareer from "../../CardCareer"
import SearchBar from "../../SearchBar"
import DataCareer from "../../../Data/datacareer.json"

export default function CareerContent() {
  const [search, setSearch] = useState("")

  const dataSearch =
    search === ""
      ? DataCareer
      : DataCareer.filter((res) => {
          const lowerText = search.toLowerCase()
          return (
            `${res.name}`.toLowerCase().includes(lowerText) ||
            `${res.role}`.toLowerCase().includes(lowerText) ||
            `${res.location}`.toLowerCase().includes(lowerText)
          )
        })

  return (
    <div>
      <SearchBar onChange={(e) => setSearch(e.target.value)} value={search} />
      <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
        {dataSearch.map((res) => {
          return (
            <CardCareer
              location={res.location}
              role={res.role}
              company={res.name}
              onClick={() =>
                window.alert(
                  `Selamat anda telah melamar ke perusahaan ${res.name} sebagai ${res.role}`
                )
              }
            />
          )
        })}
      </div>
    </div>
  )
}
