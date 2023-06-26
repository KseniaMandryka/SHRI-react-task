"use client"
import Image from "next/image"
import Link from "next/link"
import { BuyTicket } from "./BuyTicket"
import main from "../styles/main.module.css"

export const genreInRu = {
  fantasy: "Фэнтези",
  horror: "Ужасы",
  action: "Боевик",
  comedy: "Комедия",
}

export function FilmCard({ film }) {

  return (
    <div className={main.filmItem}>
      <Image 
        src={film.posterUrl}
        alt="Films poster1"
        width={100}
        height={120}
        priority={true}
      />
      <div className={main.filmInfo}>
        <div className={main.filmInfoContainer}>
          <Link className={main.filmName} href={`/films/${film.id}`}>{film.title}</Link>
          <div className={main.filmGenre}>{genreInRu[film.genre]}</div>
        </div>
        <BuyTicket id={film.id}/>
    </div>
  </div>
  )
}