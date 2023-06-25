"use client"
import { GenreSelect } from "./GenreSelect"
import { CinemaSelect } from "./CinemaSelect"
import main from "../styles/main.module.css"

export function Filtres({films, cinemaId, title, onChangeGenre, onChangeCinemaId, onChangeTitle}) {

  return (
    <section className={main.filter}>
      <div className={main.filterHeader}>Фильтр поиска</div>
      <div className={main.filters}>
        <div className={main.filterItem}>
          <label className={main.filterLabel}>Название</label>
          <input 
            value={title}
            onChange={(e) => onChangeTitle(e.target.value) }
            className={main.filterInput} 
            placeholder="Введите название"
          >
          </input>
        </div>
        <div className={main.filterItem}>
          <label className={main.filterLabel}>Жанр</label>
          <GenreSelect onChange={onChangeGenre}/>
        </div>
        <div className={main.filterItem}>
          <label className={main.filterLabel}>Кинотеатр</label>
          <CinemaSelect onChange={onChangeCinemaId}/>
        </div>
      </div>
    </section>
  )
}