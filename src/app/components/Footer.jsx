"use client"
import Link from "next/link"
import footer from "../styles/footer.module.css"

export function Footer() {

  return (
    <footer className={footer.footer}>
        <Link href="/pages/qa" className={footer.content}>Вопросы-ответы</Link>
        <Link href="/pages/aboutUs" className={footer.content}>О нас</Link>
    </footer>
  )
}
