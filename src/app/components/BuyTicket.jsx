"use client"
import { useSelector, useDispatch } from "react-redux";
import { counterSlice } from "../redux/counterSlice"
import main from "../styles/main.module.css"

export function BuyTicket({ id }) {
  const count = useSelector(state => state.counter[id] ?? 0)
  const dispatch = useDispatch()

  function handleMinusTicket() {
    dispatch(counterSlice.actions.decrement(id))
  }

  function handlePlusTicket() {
    dispatch(counterSlice.actions.increment(id))
  }

  return (
    <div className={main.selectTicket}>
      <button 
        className={main.lessTicket} 
        onClick={handleMinusTicket}
        disabled={count === 0}
      />

      <div className={main.countTicket}>{count}</div>
      
      <button 
        className={main.moreTicket} 
        onClick={handlePlusTicket}
        disabled={count === 30}
      />
    </div>
  )
}