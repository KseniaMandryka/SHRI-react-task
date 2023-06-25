"use client"
import { useSelector } from "react-redux";
import Link from "next/link"
import header from "../styles/header.module.css"

export function Header() {
  const count = useSelector(state => Object.values(state.counter).reduce((acc, t) => acc + t, 0))

  return (
    <header className={header.header}>
      <Link href="/" className={header.serviceName}>Билетопоиск</Link>
      <div className={header.order}>
        <div className={count === 0 ? header.orderCountHide : header.orderCount}>{count}</div>
        <Link href="/pages/order" className={header.orderLink}></Link>
      </div>
    </header>
  )
}