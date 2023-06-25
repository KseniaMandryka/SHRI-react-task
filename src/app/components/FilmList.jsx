"use client"
import main from "../styles/main.module.css"
import dynamic from "next/dynamic"

const DynamicLazyLoadingFilmCard = dynamic(() => 
  import("../components/FilmCard").then(
    (mod) => mod.FilmCard
  )
)


export function FilmList({ filteredFilms }) {

  return (
    <div className={main.listFilm}>
      {filteredFilms.map(film => <DynamicLazyLoadingFilmCard film={film} key={film.id}/>)}
    </div>
  )
}