"use client"
import Image from "next/image"
import feedbackStyle from "../styles/feedback.module.css"
import profile_pic from "../../../public/profile_pic.svg"

export function Feedback({ feedback }) {

  return (
    <div className={feedbackStyle.feedbackContainer}>
      <Image className={feedbackStyle.feedbackImg}
        src={profile_pic}
        alt="Profile pic"
        width={100}
        height={120}
        style={{ width: '100px', height: '120px' }}
      />
      <div className={feedbackStyle.feedback}>
        <div className={feedbackStyle.header}>
          <div className={feedbackStyle.user}>{feedback.name}</div>
          <div className={feedbackStyle.grade}>Оценка: <b>{feedback.rating}</b></div>
        </div>
        <div className={feedbackStyle.feedbackText}>{feedback.text}</div>
      </div>
    </div>
  )
}