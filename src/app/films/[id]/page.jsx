"use client"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Feedback } from "../../components/Feedback"
import { FilmCardLarge } from "../../components/FilmCardLarge"
import { useGetFilmQuery, useGetFeedbackQuery } from "../../services/movieApi"
import filmPage from "../../styles/filmPage.module.css"


export default function FilmPage(params) {
  const id = params.params.id
  const {data: film, isLoading: isLoadingFilm, error: errorFilm} = useGetFilmQuery(id)
  const {data: feedbacks, isLoading, error} = useGetFeedbackQuery(id)

  if(isLoadingFilm || isLoading) {
    return <span>Loading...</span>
  }

  if(!feedbacks || !film || error) {
    return <span>NotFound</span>
  }
  
  return (
    <>
      <Header />
      <div className={filmPage.content}>
        <FilmCardLarge film={film} />
        {feedbacks.map(feedback => {
          return (
            <Feedback key={feedback.id} feedback={feedback} />
          ) 
        })}
      </div>
      <Footer />
    </>
  )
}