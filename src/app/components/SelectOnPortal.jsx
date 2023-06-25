"use client"
import { useState, useEffect, useRef, useCallback } from "react"
import { createPortal } from "react-dom"
import main from "../styles/main.module.css"
import modal from "../styles/modalPortalSelect.module.css"

export function Select({ options, onClick, placeHolder}) {
  const [isOpen, setIsOpen] = useState(false)
  const rootRef = useRef(null)
  const [sel, setSel] = useState("")
  
  useEffect(() => {

    return () => {
      window.addEventListener("click", (e) => {
        const { target } = e
        if(target instanceof Node && !rootRef.current?.contains(target)) {
          setIsOpen(false)
        }
      })
    }
  }, [isOpen])

  const handleOptionsClick = useCallback(() => {
    setIsOpen(false)
  }, [])

  const handlePlaceHolderClick = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  const top = rootRef?.current?.offsetTop + 150
  const left = rootRef?.current?.offsetLeft + 32

  return (
    <div id="ancestor">
    
      <div ref={rootRef} className={main.filterInput} onClick={handlePlaceHolderClick}>
        <div className={isOpen ? modal.textOpen : modal.text} style={ {color: sel ? " #1B1F23" : "#999FA6"} }>
          {sel || placeHolder}
        </div>
      </div>
      {isOpen && createPortal((
        <div className={modal.wrap}
        style={ {top: top, left: left } }
        >
          <ul className={modal.content}>
          {options.map(option => (
            <Option
            option={option}
            onClick={handleOptionsClick}
            onChange={onClick}
            onChangeSelected={setSel}
            sel={sel}
            />
          ) )}
        </ul>
        </div>
      ), document.getElementById("ancestor"))
      }
    </div>
  )
  
}


function Option({ option, onClick, onChange, onChangeSelected, sel }) {

  const handleClick = useCallback(() => {
    if(option.name === sel || option.name === "Не выбрано") {
      onChange(null)
      onChangeSelected(null)
      onClick(null)
    } else {
      onChange(option.id)
      onChangeSelected(option.name)
    }
  }, [])

  return (
    <li className={modal.item} value={option.id} onClick={handleClick}>
      {option.name}
    </li>
  )
}
