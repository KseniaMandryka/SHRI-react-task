"use client"
import React, { useMemo } from 'react';
import { useState } from "react"
import { FilmList } from "./components/FilmList"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Filtres } from "./components/Filtres"
import { useGetFilmsInCinemaQuery } from "./services/movieApi"
import main from "./styles/main.module.css"


export default function Home() {
  const [selectedCinemaId, setSelectedCinemaId] = useState(null)
  const [selectedGenre, setSelectedGenre] = useState(null)
  const [title, setSelectedTitle] = useState("")
  const {data = [], isLoading, error} = useGetFilmsInCinemaQuery(selectedCinemaId)

  const filteredFilmsByGenre = useMemo(() => {
    return selectedGenre === null ? data : data.filter(film => film.genre === selectedGenre)
  }, [selectedGenre, data])
  
  const filteredFilmsByTitle = useMemo(() => {
    return filteredFilmsByGenre.filter(film => film.title.toLowerCase().includes(title))
  }, [title, filteredFilmsByGenre]) 

  
  if(isLoading) {
    return <span>Loading...</span>
  }

  if(data === undefined || error) {
    return <span>NotFound</span>
  }

  return (
    <>
      <Header />
        <div className={main.content}>
          <Filtres 
            films={data} 
            cinemaId={selectedCinemaId} 
            title={title}
            onChangeGenre={setSelectedGenre} 
            onChangeCinemaId={setSelectedCinemaId}
            onChangeTitle={setSelectedTitle}
          />
         <FilmList filteredFilms={filteredFilmsByTitle} />
        </div>
      <Footer />
    </>
  )
}