"use client"
import Image from "next/image"
import feedbackStyle from "../styles/feedback.module.css"
import profile_pic from "../../../public/profile_pic.svg"

export function Feedback({ feedback }) {

  return (
    <div class={feedbackStyle.feedbackContainer}>
      <Image className={feedbackStyle.feedbackImg}
        src={profile_pic}
        alt="Profile pic"
        width={100}
        height={120}
      />
      <div class={feedbackStyle.feedback}>
        <div class={feedbackStyle.header}>
          <div class={feedbackStyle.user}>{feedback.name}</div>
          <div class={feedbackStyle.grade}>Оценка: <b>{feedback.rating}</b></div>
        </div>
        <div class={feedbackStyle.feedbackText}>{feedback.text}</div>
      </div>
    </div>
  )
}