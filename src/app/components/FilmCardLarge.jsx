"use client"
import Image from "next/image"
import { BuyTicket } from "./BuyTicket"
import { genreInRu } from "./FilmCard"
import filmPage from "../styles/filmPage.module.css"

export function FilmCardLarge ({ film }) {

  return (
    <div className={filmPage.filmInformation}>
      <Image
        src={film.posterUrl}
        alt="Films poster"
        width={400}
        height={500}
        priority={true}
        style={{ width: '400px', height: '500px' }}
      />
      <div className={filmPage.filmInformationContainer}>
        <div className={filmPage.filmDescription}>
          <div className={filmPage.filmHeader}>
            <div className={filmPage.filmTitle}>{film.title}</div>
            <BuyTicket id={film.id}/>
          </div>
          <div className={filmPage.filmContainer}>
            <div className={filmPage.filmInfoItem}>
              <div className={filmPage.desc}>Жанр:</div> {genreInRu[film.genre]}
            </div>
            <div className={filmPage.filmInfoItem}>
            <div className={filmPage.desc}>Год выпуска:</div> {film.releaseYear}
            </div>
            <div className={filmPage.filmInfoItem}>
            <div className={filmPage.desc}>Рейтинг:</div> {film.rating}
            </div>
            <div className={filmPage.filmInfoItem}>
            <div className={filmPage.desc}>Режиссер:</div> {film.director}
            </div>
          </div>
        </div>
        <div className={filmPage.description}>
          <div className={filmPage.descriptionHeader}>Описание</div>
          <div className={filmPage.textDescription}>
            {film.description}
          </div>
        </div>
      </div>
    </div>
  )
}