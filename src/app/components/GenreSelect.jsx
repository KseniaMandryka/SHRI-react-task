"use client"
import { Select } from "./SelectOnPortal"
 
export function GenreSelect({ onChange }) {
  const uniqueGenres = [{id: "1", name: "Не выбрано"}, 
    {id: "fantasy", name: "Фэнтези"}, 
    {id: "horror", name: "Ужасы"}, 
    {id: "comedy", name: "Комедия"}, 
    {id: "action", name: "Боевик"}
  ]

  return (
    <Select 
      options={uniqueGenres}
      onClick={onChange}
      placeHolder="Выберите жанр"
    />
  )
}
