"use client"
import { useState } from "react"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import qa from "../../styles/qa.module.css"

const questions = ["Что такое Билетопоиск?", 
  "Какой компании принадлежит Билетопоиск?", 
  "Как купить билет на Билетопоиск?", 
  "Как оставить отзыв на Билетопоиск?"
]
const answers = ["Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.", 
  "Ответ", 
  "Ответ", 
  "Ответ"
]

export default function Qa () {

  return (
    <>
      <Header />
      <div className={qa.content}>
        <div className={qa.qaHeader}>
          Вопросы-ответы
        </div>
        <div className={qa.qaList}>
          {questions.map((question, index) => {
            return (
              <Question key={index} question={question}>
                  {answers[index]}
              </Question>
            )
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}


function Question({ question, children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className={qa.qaItem}>
        <div className={qa.question}>
          {question}
        </div>
          <button className={isOpen ? qa.iconTran : qa.icon} onClick={() => setIsOpen(!isOpen)}></button>
      </div>
      {isOpen && (
        <div className={qa.answer}>
          <div className={qa.textAnswer}>
            {children}
          </div>
        </div>
      )}
    </>
  )
}