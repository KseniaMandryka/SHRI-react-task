"use client"
import { useEffect, useState } from "react"
import { Select } from "./SelectOnPortal"

export function CinemaSelect({ onChange}) {
const [cinemas, setCinemas] = useState([])

useEffect(() => {
  fetch("http://localhost:3001/api/cinemas").then(respose => {
    return respose.json()
  }).then(response => {
    setCinemas(response)
  })
}, [])


return (
  <Select
  options={cinemas}
  onClick={onChange}
  placeHolder="Выберите кинотеатр"
  />
)
}