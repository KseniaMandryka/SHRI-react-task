import { useState, useRef, useCallback } from "react";
import { useDispatch } from "react-redux";
import { counterSlice } from "../redux/counterSlice"
import { createPortal } from "react-dom";
import modal from "../styles/modalPortal.module.css";

export function Portal({ id }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const rootRef = useRef(null);
  const dispatch = useDispatch()

  const handleClose = useCallback(() => {
    setIsModalOpen(prev => !prev)
  }, [])

  const handleDeleteFilm = useCallback((e) => {
    dispatch(counterSlice.actions.deleteFilm(e.target.value))
    setIsModalOpen(prev => !prev)
  }, [])

  return (
    <div>
      {isModalOpen && createPortal((
      
      <div className={modal.wrap} ref={rootRef} data-testid="wrap">
        <div className={modal.content} >
          <div className={modal.attention}>
            <div className={modal.info}>
              <div className={modal.header}>Удаление билета</div>
              <button className={modal.close} onClick={handleClose}></button>
            </div>
            <div className={modal.text}>Вы уверены, что хотите удалить билет?</div>
          </div>
          <div className={modal.answer}>
            <button className={modal.buttonYes} value={id} onClick={handleDeleteFilm}></button>
            <button className={modal.buttonNo} onClick={handleClose}></button>
          </div>
        </div>
      </div>
      ), document.body)}
      <button className={modal.buttonDelete} onClick={() => setIsModalOpen((isOpen) => !isOpen)}></button>
    </div>
  )
}