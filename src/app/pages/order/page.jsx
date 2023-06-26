"use client"
import { useSelector } from "react-redux"
import Image from "next/image"
import { useGetFilmsQuery } from "../../services/movieApi"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { BuyTicket } from "../../components/BuyTicket"
import { Portal } from "../../modal/Portal"
import { genreInRu } from "../../components/FilmCard"
import order from "../../styles/order.module.css"


export default function Order() {
  const count = useSelector(state => Object.values(state.counter).reduce((acc, t) => acc + t, 0))
  const filmsId = useSelector(state => Object.keys(state.counter))
  const countFilms = useSelector(state => state.counter)
  const { data, isLoading, error } = useGetFilmsQuery()

  if(isLoading) {
    return <span>Loading...</span>
  }

  if(!data || error) {
    return <span>NotFound</span>
  } 

  const films = data.filter(film => filmsId.includes(film.id))

  return(
    <>
      <Header />
      <div className={order.content}>

        {films.map(film => {
          return (
            <div key={film.id} className={countFilms[film.id] === 0 ? order.filmCardHide : order.filmCard}>
              <Image 
                src={film.posterUrl}
                alt="Films poster"
                width={100}
                height={120}
              />
              <div className={order.filmInfoContainer}>
                <div className={order.forInfo}>
                  <div className={order.filmTitle}>
                    {film.title}
                  </div>
                  <div className={order.film}>
                    {genreInRu[film.genre]}
                  </div>
                </div>
                <BuyTicket id={film.id} />
                <Portal id={film.id}/>
                
              </div>
            </div>
          ) 
        })}
      </div>
        <div className={order.ticketInfo}>
          <div>
            Итого билетов:
          </div>
          <div>
            {count}
          </div>
        </div>
      <Footer />
    </>
  )
}